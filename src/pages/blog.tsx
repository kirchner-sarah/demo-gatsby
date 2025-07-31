import * as React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout";
import Seo from "../components/seo";

export interface BlogPageProps {
  data: any;
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  return (
    <Layout pageTitle="Blog Page">
      <ul>
        {
          data.allFile.nodes.map((node: any) => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="Blog Page" />;

export default BlogPage;
