import React, { ReactNode } from "react"
import * as Style from "../styles/vote-li"

interface Props {
  children: ReactNode
  noPaddingLeft?: boolean
  noPaddingRight?: boolean
}

export default ({ children, noPaddingLeft, noPaddingRight }: Props) => (
  <li style={Style.li(noPaddingLeft, noPaddingRight)}>{children}</li>
)
