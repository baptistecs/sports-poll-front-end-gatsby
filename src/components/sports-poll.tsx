import React, { Component } from "react"
import Axios, { AxiosResponse } from "axios"
import VoteButton from "./vote-button"
import Section from "./section"
import SectionTitle from "./section-title"
import VOTE from "../constants/vote"
import VoteUl from "./vote-ul"
import VoteLi from "./vote-li"
import SportEvent from "../types/sport-event"
import Votes from "../types/votes"
import Message from "./message"
import STATE from "../constants/sport-event-state"
import Button from "./button"

type Props = {}
type State = {
  loading: boolean
  error: string
  sportEvent?: SportEvent // event to vote for
  votes: Votes // WARNING: object properties are ordered by value
}

class SportsPoll extends Component<Props, State> {
  sportEvents: SportEvent[] = [] // not displayed = not in the state

  constructor(props = {}) {
    super(props)
    this.state = {
      loading: false,
      error: "",
      votes: {},
    }
    this.voteHandler = this.voteHandler.bind(this)
  }

  async componentDidMount() {
    await this.loadRandomSportEventsAndInitFirstVote()
  }

  render() {
    if (this.state.error) {
      console.error(this.state.error)
      return <Message>Sorry, an error occurred :(</Message>
    } else if (this.state.loading) {
      return <Message>Please hold, sports events incoming!</Message>
    } else if (!this.sportEvents.length) {
      return <Message>Sorry, no sport event have been found :(</Message>
    }

    const { votes, sportEvent } = this.state

    if (!sportEvent) {
      return <Message>Sorry, no sport event</Message>
    }

    let votesId = Object.keys(votes)
    let nbVote = votesId.length

    if (nbVote === this.sportEvents.length) {
      return (
        <>
          <Section>
            <SectionTitle>Vote results</SectionTitle>
            <ul style={{ listStyle: "none", margin: 0 }}>
              {votesId.map(voteId => (
                <li key={voteId} style={{ margin: 0 }}>
                  {voteId}: {votes[voteId]}
                </li>
              ))}
            </ul>
          </Section>
          <Message>Poll over, please refresh to start a new poll</Message>
        </>
      )
    } else {
      const { id, homeName, awayName, state } = sportEvent

      return (
        <div style={{ padding: "0 5px" }}>
          <Section>
            <SectionTitle>Vote</SectionTitle>
            {state === STATE.FINISHED ? (
              <div>
                Sorry "{homeName} VS {awayName}" is over{" "}
                <Button onClick={() => this.voteHandler(id, VOTE.OVER)}>
                  Next
                </Button>
              </div>
            ) : (
              <VoteUl>
                <VoteLi noPaddingLeft={true}>
                  <VoteButton
                    id={id}
                    value={VOTE.HOME}
                    label={homeName}
                    voteHandler={this.voteHandler}
                  />
                </VoteLi>
                <VoteLi>
                  <VoteButton
                    id={id}
                    value={VOTE.DRAW}
                    label="Draw"
                    voteHandler={this.voteHandler}
                  />
                </VoteLi>
                <VoteLi noPaddingRight={true}>
                  <VoteButton
                    id={id}
                    value={VOTE.AWAY}
                    label={awayName}
                    voteHandler={this.voteHandler}
                  />
                </VoteLi>
                <li key="-1" style={{ clear: "both", margin: 0 }} />
              </VoteUl>
            )}
            <div>Voted: {`${nbVote} / ${this.sportEvents.length}`}</div>
          </Section>
        </div>
      )
    }
  }

  /**
   * /!\ WARNING /!\ Votes ids are ordered by value not by creation order
   */
  voteHandler(id: number, value: VOTE) {
    let votes = this.state.votes
    votes[id] = value
    let votesId = Object.keys(votes)

    this.setState({ votes })

    // if there is a non finished event without vote it will be the next vote
    for (let i = 0; i < this.sportEvents.length; i++) {
      let sportEvent = this.sportEvents[i]
      if (
        // sportEvent.state !== STATE.FINISHED &&
        votesId.indexOf(sportEvent.id.toString()) === -1
      ) {
        this.setState({ sportEvent: this.sportEvents[i] })
        break
      }
    }
  }

  async loadRandomSportEventsAndInitFirstVote() {
    const { SPORT_EVENTS_URL } = process.env

    let response: AxiosResponse, sportsEvents: SportEvent[], sport: string

    this.setState({ loading: true })

    if (!SPORT_EVENTS_URL) {
      this.setState({ loading: false, error: "No URL to fetch data from" })
      return
    }

    try {
      response = await Axios.get(SPORT_EVENTS_URL)
    } catch (error) {
      this.setState({ loading: false, error })
      return
    }

    sportsEvents = response.data

    if (!sportsEvents || !sportsEvents.length) {
      this.setState({ loading: false, error: "wrong data fetched" })
      return
    }

    // we collect all types of sport
    let sports: string[] = []
    sportsEvents.forEach(sportEvent => {
      if (sportEvent.sport && sports.indexOf(sportEvent.sport) === -1) {
        sports.push(sportEvent.sport)
      }
    })

    if (!sports.length) {
      this.setState({ loading: false, error: "no sport found" })
      return
    }

    // we pick a type of sport
    let sportIndex = Math.floor(Math.random() * sports.length)
    sport = sports[sportIndex]

    // we collect all sport events
    let sportEvents: SportEvent[] = []
    sportsEvents.forEach(sportEvent => {
      if (sportEvent.sport === sport) {
        sportEvents.push(sportEvent)
      }
    })
    this.sportEvents = sportEvents

    this.setState({
      loading: false,
      sportEvent: this.sportEvents[0],
    })
  }
}

export default SportsPoll
