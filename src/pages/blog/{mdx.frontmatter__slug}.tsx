import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
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
        hero_image: {
          childImageSharp: {
            gatsbyImageData: any;
          };
        };
        hero_image_alt: string;
        hero_image_credit_text: string;
        hero_image_credit_link: string;
      };
    }
  },
  children?: React.ReactNode;
}

const BlogPost: React.FC<BlogPostProps> = ({data, children}) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <p><strong>Author:</strong> {data.mdx.frontmatter.author}</p>
      <p><strong>Tags:</strong> {data.mdx.frontmatter.tags.join(', ')}</p>
      <p>{data.mdx.frontmatter.description}</p>
      <GatsbyImage image={heroImage!} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link} target={'_blank'}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
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
        hero_image_alt
        hero_image_credit_text
        hero_image_credit_link
        hero_image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 800, height: 400)
          }
        }
      }
    }
  }
`

const Head = () => (<Seo title="Super Coler Blog Posts" />)

export default BlogPost
