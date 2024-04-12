import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import { HomeTitle } from "../types/homepageStyles"



const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <HomeTitle>home</HomeTitle>
  </Layout>
)
export const Head = () => <Seo title="Home" />

export default IndexPage
