import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <p>This is the About Page of our demo Gatsby application.</p>
    </Layout>
  );
};

export const Head = () => <title>About Page</title>;

export default AboutPage;
