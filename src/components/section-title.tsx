import React, { ReactNode } from "react"
import * as Style from "../styles/section-title"

type Props = {
  children: ReactNode
}

export default ({ children }: Props) => <h2 style={Style.h2}>{children}</h2>
