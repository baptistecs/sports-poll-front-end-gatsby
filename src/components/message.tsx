import React, { ReactNode } from "react"
import * as Style from "../styles/message"

type Props = { children: ReactNode }

export default ({ children }: Props) => <p style={Style.p}>{children}</p>
