import React from "react"
import renderer from "react-test-renderer"
import { cleanup, render } from "@testing-library/react"
import VoteButton from "../vote-button"
import VOTE from "../../constants/vote"

describe("VoteButton", () => {
  it("renders correctly with label", () => {
    const component = renderer.create(
      <VoteButton
        id={1234}
        value={VOTE.DRAW}
        voteHandler={jest.fn()}
        label="Draw"
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly without label", () => {
    const component = renderer.create(
      <VoteButton id={1234} value={VOTE.DRAW} voteHandler={jest.fn()} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup)

  it("call voteHandler on click", () => {
    const voteHandler = jest.fn()
    const { getByText } = render(
      <VoteButton
        id={1234}
        label="my button"
        value={VOTE.DRAW}
        voteHandler={voteHandler}
      />
    )
    const button = getByText(/my button/i)
    button.click()
    expect(voteHandler).toBeCalled()
  })
})
