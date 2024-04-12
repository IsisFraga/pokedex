import * as React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/Layout"
import { HomeTitle } from "../../types/homepageStyles"
import { Link, graphql } from "gatsby"
import { PokeBlogProps } from "../../types/articles"
import { Article } from "../../styles/articlePageStyles"


export const query = graphql `
  query SiteTitleQuery {
    allMdx {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          slug
          title
        }
        excerpt
      }
    }
  }
`
const PokeBlogs: React.FC<PokeBlogProps> = ({data}) => {
  const { allMdx: { nodes }} =  data;
  return (
  <Layout>
    <HomeTitle>PokeBlogs</HomeTitle>
    {nodes.map(node => (
        <Article key={node.id}>
          <Link to={`${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </Article>
      ))}
  </Layout>
)}
export const Head = () => <Seo title="Poke Blogs" />

export default PokeBlogs
