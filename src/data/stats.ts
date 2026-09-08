// Company Verified Statistics
// Strictly from supplied company figures - NO invented data

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export const impactStats: StatItem[] = [
  {
    id: "institutions",
    value: "55+",
    label: "Partner Institutions",
    sublabel: "Schools & learning centers powered",
    iconName: "Building2",
  },
  {
    id: "students",
    value: "37,745+",
    label: "Students Trained",
    sublabel: "Hands-on STEM & tech makers",
    iconName: "Users",
  },
  {
    id: "satisfaction",
    value: "97.47%",
    label: "Satisfaction Rate",
    sublabel: "From institutional & student evaluations",
    iconName: "CheckCircle2",
  },
  {
    id: "retention",
    value: "99.99%",
    label: "Retention Rate",
    sublabel: "Consistent annual program continuity",
    iconName: "ShieldCheck",
  },
];
