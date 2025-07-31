import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to the Home Page!</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/clifford.webp"
      />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
