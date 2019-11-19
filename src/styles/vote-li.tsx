import { CSSProperties } from "react"
import { BACKGROUND_EVEN } from "../constants/colors"

export const li = (isFirst = false, isLast = false): CSSProperties => {
  return {
    display: "inline-block",
    margin: 0,
    height: "100px",
    width: isFirst || isLast ? "40%" : "20%",
    float: "left",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: isFirst ? 0 : isLast ? 5 : 11,
    paddingRight: isLast ? 0 : isFirst ? 5 : 11,
    background: BACKGROUND_EVEN,
    lineHeight: isFirst || isLast ? "1.45em" : " 15px",
  }
}
