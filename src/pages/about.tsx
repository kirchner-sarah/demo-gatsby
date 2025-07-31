import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <p>This is the About Page of our demo Gatsby application.</p>
    </Layout>
  );
};

export const Head = () => <Seo title="About Page" />;

export default AboutPage;
