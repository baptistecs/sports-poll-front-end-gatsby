import Styled from "@emotion/styled"
import { BACKGROUND_EVEN } from "../constants/colors"

type LiProps = {
  even?: boolean
  last?: boolean
  noPaddingLeft?: boolean
  noPaddingRight?: boolean
}

export default Styled.li<LiProps>`
  margin: 0;
  ${props => (props.even ? "" : `background-color: ${BACKGROUND_EVEN};`)}
  ${props => (props.last ? "border-radius: 0 0 10px 10px;" : "")}
  padding: ${props =>
    props.noPaddingLeft
      ? "0 10px 0 0"
      : props.noPaddingRight
      ? "0 0 0 10px"
      : "0 5px"};
`
