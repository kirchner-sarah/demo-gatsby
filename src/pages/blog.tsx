import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

export interface BlogPageProps {
  data: any;
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  return (
    <Layout pageTitle="Blog Page">
      {
        data.allMdx.nodes.map((node: any) => (
          <article key={node.id} className="blog-post">
            <h2>{node.frontmatter.title}</h2>
            <p><strong>Author:</strong> {node.frontmatter.author}</p>
            <p><strong>Date:</strong> {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          date(formatString: "DD.MM.YYYY")
          title
          author
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="Blog Page"/>;

export default BlogPage;
