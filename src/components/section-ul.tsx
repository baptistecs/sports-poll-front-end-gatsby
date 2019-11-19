import React, { ReactNode } from "react"
import * as Style from "../styles/section-ul"

type Props = {
  children: ReactNode
}

export default ({ children }: Props) => <ul style={Style.ul}>{children}</ul>
