import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY", locale: "es")
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Facundo Giuliani</h1>
      <p>Stuff that I want to share</p>
      {posts.allMarkdownRemark.edges.map(({ node }) => (
        <Link
          to={node.fields.slug}
          style={{ textDecoration: "none", color: "#2f2f2f" }}
        >
          <article
            style={{
              border: "1px solid grey",
              borderRadius: "5px",
              margin: "24px",
              padding: "12px",
            }}
          >
            <h2>{node.frontmatter.title}</h2>
            <i>{node.frontmatter.date}</i>
            <p>{node.excerpt}</p>
          </article>
        </Link>
      ))}
    </Layout>
  )
}

export default BlogPage
