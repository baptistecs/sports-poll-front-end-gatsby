import React from "react"
import SportEvent from "../types/sport-event"
import Section from "./section"
import SectionTitle from "./section-title"
import Ul from "./section-ul"
import Li from "./section-li"

type Props = {
  sportEvent: SportEvent
  displayState?: boolean
}

export default ({ sportEvent, displayState = true }: Props) => {
  const { state, country, sport, group } = sportEvent
  let eventInfos = [
    `Sport: ${sport.toLowerCase().replace("_", " ")}`,
    `Country: ${country.toLowerCase().replace("_", " ")}`,
    `Group: ${group}`,
  ]

  if (displayState) {
    eventInfos.push(`State: ${state.toLowerCase().replace("_", " ")}`)
  }

  return (
    <Section>
      <SectionTitle>Event</SectionTitle>
      <Ul>
        {eventInfos.map((info, infoIndex) => {
          return (
            <Li
              key={infoIndex}
              even={infoIndex % 2 ? true : false}
              last={eventInfos.length === infoIndex + 1}
            >
              {info}
            </Li>
          )
        })}
      </Ul>
    </Section>
  )
}
