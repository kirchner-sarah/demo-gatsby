import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

interface BlogPostProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
        author: string;
        tags: string[];
        description: string;
      };
    }
  },
  children?: React.ReactNode;
}

const BlogPost: React.FC<BlogPostProps> = ({data, children}) => {
  console.log('BlogPost props:', data);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <p><strong>Author:</strong> {data.mdx.frontmatter.author}</p>
      <p><strong>Tags:</strong> {data.mdx.frontmatter.tags.join(', ')}</p>
      <p>{data.mdx.frontmatter.description}</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        author
        tags
        description
      }
    }
  }
`

const Head = () => (<Seo title="Super Coler Blog Posts" />)

export default BlogPost
