import { CSSProperties } from "react"
import { BACKGROUND, TEXT, BORDER } from "../constants/colors"

export const div: CSSProperties = {
  background: BACKGROUND,
  borderRadius: 10,
  color: TEXT,
  marginBottom: 10,
  border: `1px solid ${BORDER}`,
}
