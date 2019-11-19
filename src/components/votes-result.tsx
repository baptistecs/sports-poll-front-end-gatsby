import React from "react"
import Section from "./section"
import SectionTitle from "./section-title"
import VOTE from "../constants/vote"
import SportEvent from "../types/sport-event"
import Votes from "../types/votes"
import VoteTr from "./vote-tr"
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome"
import {
  faBalanceScale,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faTimes,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons"

type Props = {
  sportEvents: SportEvent[]
  votes: Votes
}

const VotesResult = ({ sportEvents, votes }: Props) => {
  const nbSportEvent = sportEvents.length,
    nbVote = Object.keys(votes).length

  if (!nbSportEvent) {
    return null // waiting for sport events to be loaded
  }

  if (!nbVote) {
    return null // no vote yet
  }

  const votesMaxIndex = nbVote - 1,
    sportEventsMaxIndex = nbSportEvent - 1

  return (
    <Section>
      <SectionTitle>Votes</SectionTitle>
      <table
        style={{ borderCollapse: "collapse", marginBottom: 0 }}
        cellPadding="0"
        cellSpacing="0"
      >
        <tbody>
          {sportEvents.map((sportEvent, sportEventIndice) => {
            if (!votes[sportEvent.id]) {
              return null // no vote for this event yet
            }
            return (
              <VoteTr
                key={sportEventIndice}
                even={sportEventIndice % 2 ? true : false}
                last={
                  sportEventsMaxIndex === sportEventIndice ||
                  votesMaxIndex === sportEventIndice
                }
              >
                <td
                  style={{
                    textAlign: "right",
                    width: "45%",
                    borderBottomLeftRadius: 10,
                  }}
                >
                  {sportEvent.homeName}
                </td>
                <td style={{ textAlign: "center", padding: "0 10px" }}>
                  {votes[sportEvent.id] === VOTE.DRAW ? (
                    <FA icon={faBalanceScale} style={{ color: "#f90" }} />
                  ) : votes[sportEvent.id] === VOTE.HOME ? (
                    <FA icon={faAngleDoubleLeft} style={{ color: "#f90" }} />
                  ) : votes[sportEvent.id] === VOTE.AWAY ? (
                    <FA icon={faAngleDoubleRight} style={{ color: "#f90" }} />
                  ) : votes[sportEvent.id] === VOTE.OVER ? (
                    <FA icon={faTimes} style={{ color: "#f90" }} />
                  ) : (
                    <FA icon={faEllipsisH} style={{ color: "#f90" }} />
                  )}
                </td>
                <td style={{ textAlign: "left", borderBottomRightRadius: 10 }}>
                  {sportEvent.awayName}
                </td>
              </VoteTr>
            )
          })}
        </tbody>
      </table>
    </Section>
  )
}

export default VotesResult
