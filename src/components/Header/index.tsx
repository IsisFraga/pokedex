import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { HeaderWrapper, LogoContainer } from "./styled"

const Header = ({ siteTitle }) => {
  const headerLogo = useStaticQuery(
    graphql`
      query HeaderLogo {
        allImageSharp(filter: { fluid: { src: {} }, gatsbyImageData: {} }) {
          edges {
            node {
              gatsbyImageData
            }
          }
        }
      }
    `
  )

  return (
    <HeaderWrapper>
      <Link to="/">{siteTitle}</Link>
      <LogoContainer>
        <Link to="/">
          <GatsbyImage
            image={headerLogo?.allImageSharp?.edges[0]?.node?.gatsbyImageData}
            alt="pokemon logo"
          />
        </Link>
      </LogoContainer>
      <Link to="/articles">Articles</Link>
    </HeaderWrapper>
  )
}

export default Header
