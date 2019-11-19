import React, { ReactNode, MouseEvent } from "react"
import buttonStyle from "../styles/button"

type Props = {
  children: ReactNode
  onClick: (event: MouseEvent) => void
}

export default ({ children, onClick }: Props) => (
  <button style={buttonStyle} onClick={onClick}>
    {children}
  </button>
)
