/**
 * Narasimha Skill Sphere - Google Apps Script Webhook
 * 
 * Automatically captures submissions from the "INSTITUTIONAL ENGAGEMENT" popup
 * (and any other NSS web forms) and appends them to your Google Sheet.
 *
 * HOW TO DEPLOY:
 * 1. Open Google Sheets (or script.google.com).
 * 2. Paste this entire code into the Apps Script editor.
 * 3. (Optional) If running as a standalone script created from script.google.com,
 *    enter your Spreadsheet ID in SHEET_ID below. If opened via Extensions > Apps Script, leave it "".
 * 4. Click "Deploy" -> "New deployment".
 * 5. Select type: "Web app".
 * 6. Set Description: "NSS Form Webhook".
 * 7. Set "Execute as": "Me" (your email).
 * 8. Set "Who has access": "Anyone" (crucial for webhooks to submit).
 * 9. Click "Deploy", copy the Web App URL, and paste it into your .env as GOOGLE_SHEET_WEBAPP_URL=...
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 10 seconds for other operations to finish
  lock.tryLock(10000);

  try {
    // Leave empty if opened via Extensions > Apps Script.
    // Or put your Google Sheet ID here if running from script.google.com
    var SHEET_ID = "";

    var doc = SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName("Institutional Inquiries") || doc.getActiveSheet();

    // If sheet is empty, create styled header row
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Submission Time (IST)",
        "School / Institution Name",
        "Contact Person & Role",
        "Official Email",
        "Phone / WhatsApp",
        "City / State",
        "Primary Focus / Track",
        "Remarks / Requirements",
        "Form Type",
        "Origin Page URL"
      ];
      sheet.appendRow(headers);

      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#FF7711"); // NSS Orange
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    // Parse incoming JSON payload
    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    // Format IST Timestamp
    var timestamp = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");

    var newRow = [
      timestamp,
      data.schoolName || data.name || "N/A",
      data.contactPerson || "N/A",
      data.email || "N/A",
      data.phone || "N/A",
      data.city || "N/A",
      data.interest || data.interestedTrack || "N/A",
      data.message || data.notes || "",
      data.formType || "partner_inquiry",
      data.pageUrl || ""
    ];

    sheet.appendRow(newRow);

    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1, 1, newRow.length).setFontFamily("Arial").setFontSize(10);
    sheet.autoResizeColumns(1, newRow.length);

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success", row: lastRow })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

