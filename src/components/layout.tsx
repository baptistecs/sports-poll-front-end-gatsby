import React, { ReactNode } from "react"
import SEO from "./seo"
import Header from "./header"
import Container from "./container"
import Footer from "./footer"
import "../styles/layout.css"

type Props = {
  children: ReactNode
  title: string
}

export default ({ children, title }: Props) => (
  <>
    <SEO title={title} />
    <Header title={title} />
    <Container>
      <main>{children}</main>
      <Footer />
    </Container>
  </>
)
