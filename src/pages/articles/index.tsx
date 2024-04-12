import * as React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/Layout"
import { HomeTitle } from "../../types/homepageStyles"


const PokeBlogs = () => (
  <Layout>
    <HomeTitle>PokeBlogs</HomeTitle>
  </Layout>
)

export const Head = () => <Seo title="Poke Blogs" />

export default PokeBlogs
