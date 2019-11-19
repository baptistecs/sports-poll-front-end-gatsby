import React, { ReactNode } from "react"
import * as Style from "../styles/section"

type Props = {
  children: ReactNode
}

export default ({ children }: Props) => <div style={Style.div}>{children}</div>
