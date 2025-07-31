import * as React from "react";
import useSiteMetadata from "../hooks/use-site-metadata";

export interface SeoProps {
  title?: string;
}

const Seo: React.FC<SeoProps> = ({ title }) => {
  const site = useSiteMetadata();
  return (
    <title>
      {title ?? ""} | {site.title}
    </title>
  );
};

export default Seo;
