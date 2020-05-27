import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Repos = () => {
  const repos = useStaticQuery(graphql`
    query {
      githubData {
        data {
          user {
            repositories {
              edges {
                node {
                  description
                  id
                  isPrivate
                  name
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <table>
      <thead>
        <tr>
          <th>repo.id</th>
          <th>repo.name</th>
          <th>repo.isPrivate</th>
          <th>repo.url</th>
          <th>repo.description</th>
        </tr>
      </thead>
      <tbody>
        {repos.githubData.data.user.repositories.edges.map(({ node }) => (
          <tr key={node.id}>
            <td>{node.id}</td>
            <td>{node.name}</td>
            <td>{node.isPrivate ? "Privado" : "Público"}</td>
            <td>{node.url}</td>
            <td>{node.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Repos
