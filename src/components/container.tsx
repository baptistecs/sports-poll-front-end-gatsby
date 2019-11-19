import Styled from "@emotion/styled"
import * as MQ from "../constants/media-queries"

export default Styled.div`
  margin: 0 auto 0;
  max-width: 1024px;
  text-align: center;
  width: 100%;
  ${MQ.MOBILE_PORTRAIT} {
    padding: 10px 0;
  }
  ${MQ.MOBILE_LANDSCAPE} {
    padding: 10px 0;
  }
  ${MQ.TABLET_PORTRAIT} {
    padding: 80px 0 0;
  }
  ${MQ.DESKTOP} {
    padding: 80px 0 0;
  }
`
