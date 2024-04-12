import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import { ThemeProvider } from "styled-components"
import { Main } from "./styles"
import { defaultTheme } from "../../styles"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Main>{children}</Main>
    </ThemeProvider>
  )
}

export default Layout
