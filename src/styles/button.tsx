import { CSSProperties } from "react"
import { BACKGROUND, TEXT } from "../constants/colors"

const button: CSSProperties = {
  background: TEXT,
  color: BACKGROUND,
  cursor: "pointer",
  borderRadius: 10,
  lineHeight: "48px",
  padding: "0 15px",
  border: `1px solid ${BACKGROUND}`,
}

export default button
