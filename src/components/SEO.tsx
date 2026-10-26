import React, { useEffect } from "react";

export interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path = "",
  image = "https://www.narasimhaskillsphere.com/Event.png",
  keywords,
}) => {
  useEffect(() => {
    const fullUrl = `https://www.narasimhaskillsphere.com${path.startsWith("/") ? path : `/${path}`}`;
    const defaultTitle = "Narasimha Skill Sphere | Learning-By-Doing | STEM, Robotics & AI Education";
    const fullTitle = title
      ? `${title} | Narasimha Skill Sphere`
      : defaultTitle;
    const metaDescription =
      description ||
      "Narasimha Skill Sphere empowers schools and young minds through hands-on learning in STEM, Atal Tinkering Labs (ATL), Robotics, Artificial Intelligence, IoT, and 3D printing.";

    // 1. Title
    document.title = fullTitle;

    // Helper to set or create meta tag
    const setMetaTag = (attribute: "name" | "property", key: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper to set or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // Standard Meta
    setMetaTag("name", "title", fullTitle);
    setMetaTag("name", "description", metaDescription);
    if (keywords) {
      setMetaTag("name", "keywords", keywords);
    }

    // Canonical URL
    setLinkTag("canonical", fullUrl);

    // Open Graph
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", metaDescription);
    setMetaTag("property", "og:url", fullUrl);
    setMetaTag("property", "og:image", image);

    // Twitter
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", metaDescription);
    setMetaTag("name", "twitter:url", fullUrl);
    setMetaTag("name", "twitter:image", image);
  }, [title, description, path, image, keywords]);

  return null;
};
