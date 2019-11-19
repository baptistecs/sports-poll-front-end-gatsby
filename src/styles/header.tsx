import { CSSProperties } from "react"
import { BACKGROUND, TEXT } from "../constants/colors"

export const header: CSSProperties = {
  background: BACKGROUND,
  borderRadius: "0 0 5px 5px",
}

export const h1: CSSProperties = {
  margin: "0 auto",
  maxWidth: 1024,
  fontSize: "22px",
  padding: "10px 0 10px 10px",
}

export const link: CSSProperties = {
  color: TEXT,
  textDecoration: "none",
}
