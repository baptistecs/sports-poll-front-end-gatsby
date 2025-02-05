import React from "react"
import * as Style from "../styles/vote-button"
import VoteHandlerType from "../types/vote-handler"
import VOTE from "../constants/vote"

type Props = {
  id: number
  value: VOTE
  voteHandler: VoteHandlerType
  label?: string
}

export default ({ id, value, voteHandler, label = undefined }: Props) => (
  <button
    style={Style.button}
    onClick={() => {
      voteHandler(id, value)
    }}
  >
    {label || value}
  </button>
)
