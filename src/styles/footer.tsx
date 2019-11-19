import { CSSProperties } from "react"
import { BACKGROUND, TEXT, BORDER } from "../constants/colors"

const footer: CSSProperties = {
  marginTop: 25,
  textAlign: "center",
  background: BACKGROUND,
  borderRadius: 5,
  color: TEXT,
  border: `1px solid ${BORDER}`,
}

export default footer
