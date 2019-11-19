import { Link } from "gatsby"
import React from "react"
import * as Style from "../styles/header"
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"

type Props = { title: string }

export default ({ title }: Props) => (
  <header style={Style.header}>
    <h1 style={Style.h1}>
      <Link to="/" style={Style.link}>
        <FA icon={faHome} /> {title}
      </Link>
    </h1>
  </header>
)
