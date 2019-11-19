import React from "react"
import footerStyle from "../styles/footer"

export default () => (
  <footer style={footerStyle}>
    © {new Date().getFullYear()}, Built with{" "}
    <a href="https://www.gatsbyjs.org" target="_blank">
      Gatsby
    </a>{" "}
    for{" "}
    <a href="https://glomo.se/" target="_blank">
      Glomo
    </a>{" "}
    by{" "}
    <a href="https://www.linkedin.com/in/clarey-sjostrand/" target="_blank">
      Baptiste
    </a>
    <br />
    Image from cocoparisienne @{" "}
    <a href="https://pixabay.com/" target="_blank">
      Pixabay.com
    </a>
  </footer>
)
