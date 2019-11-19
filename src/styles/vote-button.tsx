import { CSSProperties } from "react"
import { BACKGROUND, TEXT } from "../constants/colors"

export const button: CSSProperties = {
  display: "inline-block",
  cursor: "pointer",
  height: "100%",
  width: "100%",
  background: TEXT,
  color: BACKGROUND,
  border: `1px solid ${TEXT}`,
  borderRadius: 10,
  overflowY: "auto",
}
