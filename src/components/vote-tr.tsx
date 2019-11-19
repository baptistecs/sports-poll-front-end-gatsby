import Styled from "@emotion/styled"
import { BACKGROUND_EVEN } from "../constants/colors"

type TrProps = {
  even?: boolean
  last?: boolean
}

export default Styled.tr<TrProps>`
  margin: 0;
  ${props => (props.even ? "" : `background-color: ${BACKGROUND_EVEN};`)}
  ${props => (props.last ? "border-radius: 0 0 10px 10px;" : "")}
`
