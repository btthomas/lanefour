/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "normalize.css"
import "../style/index.css"

const Layout = ({ children }) => (
  <>
    <header>
      <h1>Lane Four, LLC</h1>
    </header>
    <main>{children}</main>
    <footer>© {new Date().getFullYear()}, Lane Four, LLC</footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
