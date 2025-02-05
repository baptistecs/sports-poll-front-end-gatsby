import React from "react"
import { render, cleanup, waitForElement } from "@testing-library/react"
import axios from "axios"
import SportsPoll from "../../components/sports-poll"

const sportsEvents = [
  {
    awayName: "Panthrakikos Komotini",
    createdAt: "2015-12-18T12:30:39.228Z",
    group: "Mocked Greek Cup",
    homeName: "Chania FC",
    id: 1002916450,
    name: "Chania FC - Panthrakikos Komotini",
    objectId: "1UaQjc7lIb",
    sport: "FOOTBALL",
    country: "ENGLAND",
    state: "STARTED",
  },
  {
    awayName: "PAOK Thessaloniki",
    createdAt: "2015-12-18T12:30:39.234Z",
    group: "Mocked Greek Cup",
    homeName: "Olympiakos Volos",
    id: 1002916451,
    name: "Olympiakos Volos - PAOK Thessaloniki",
    objectId: "UPJ240T2Qj",
    sport: "FOOTBALL",
    country: "FRANCE",
    state: "STARTED",
  },
  {
    awayName: "Ukraine U18",
    createdAt: "2015-12-18T12:30:39.244Z",
    group: "Mocked Under 18",
    homeName: "Israel U18",
    id: 1003022920,
    name: "Israel U18 - Ukraine U18",
    objectId: "fZZUhitsVt",
    sport: "FOOTBALL",
    country: "SWEDEN",
    state: "STARTED",
  },
  {
    awayName: "Stade Gabesien",
    createdAt: "2015-12-18T12:30:39.249Z",
    group: "Mocked Ligue 1",
    homeName: "CA Bizertin",
    id: 1003015194,
    name: "CA Bizertin - Stade Gabesien",
    objectId: "Bf52z7GIut",
    sport: "FOOTBALL",
    country: "SWEDEN",
    state: "STARTED",
  },
  {
    awayName: "AS de la Marsa",
    createdAt: "2015-12-18T12:30:39.255Z",
    group: "Mocked Ligue 1",
    homeName: "Club Africain",
    id: 1003015197,
    name: "Club Africain - AS de la Marsa",
    objectId: "sFjPkmljKv",
    sport: "FOOTBALL",
    country: "ENGLAND",
    state: "STARTED",
  },
  {
    awayName: "Kastamonuspor",
    createdAt: "2015-12-18T12:30:39.261Z",
    group: "Mocked T\u00fcrkyie Kupasi",
    homeName: "Kar\u015f\u0131yaka",
    id: 1003016331,
    name: "Kar\u015f\u0131yaka - Kastamonuspor",
    objectId: "cRqV2RTmsu",
    sport: "FOOTBALL",
    country: "FRANCE",
    state: "FINISHED",
  },
  {
    awayName: "Allen, Gareth",
    createdAt: "2015-12-18T12:30:39.266Z",
    group: "Mocked German Masters Qualifiers",
    homeName: "Ding Junhui",
    id: 1003018193,
    name: "Ding Junhui - Allen, Gareth",
    objectId: "nPuz011p0W",
    sport: "SNOOKER",
    country: "SWEDEN",
    state: "NOT_STARTED",
  },
  {
    awayName: "Lines, Peter",
    createdAt: "2015-12-18T12:30:39.272Z",
    group: "Mocked German Masters Qualifiers",
    homeName: "Trump, Judd",
    id: 1003018186,
    name: "Trump, Judd - Lines, Peter",
    objectId: "CSJn3kZhdx",
    sport: "SNOOKER",
    country: "ENGLAND",
    state: "NOT_STARTED",
  },
  {
    awayName: "SKIF-Krasnodar",
    createdAt: "2015-12-18T12:30:39.278Z",
    group: "Mocked Cup",
    homeName: "Dinamo Astrakhan",
    id: 1003027200,
    name: "Dinamo Astrakhan - SKIF-Krasnodar",
    objectId: "enCbqOuRLr",
    sport: "HANDBALL",
    country: "SWEDEN",
    state: "STARTED",
  },
  {
    awayName: "THK Tver",
    createdAt: "2015-12-18T12:30:39.283Z",
    group: "Mocked VHL",
    homeName: "Zauralie Kurgan",
    id: 1002988754,
    name: "Zauralie Kurgan - THK Tver",
    objectId: "7HWfuCIMlp",
    sport: "ICE_HOCKEY",
    country: "ENGLAND",
    state: "STARTED",
  },
  {
    awayName: "Doumbia, S/Reboul, F",
    createdAt: "2015-12-18T12:30:39.289Z",
    group: "Mocked Nigeria",
    homeName: "Harris, L G M/Maamoun, K M",
    id: 1003026313,
    name: "Harris, L G M/Maamoun, K M - Doumbia, S/Reboul, F",
    objectId: "JxrZyQKTrw",
    sport: "TENNIS",
    country: "FRANCE",
    state: "STARTED",
  },
  {
    awayName: "Halebian, Alexios",
    createdAt: "2015-12-18T12:30:39.294Z",
    group: "Mocked Dominican Republic",
    homeName: "Bangoura, Sekou",
    id: 1003026667,
    name: "Bangoura, Sekou - Halebian, Alexios",
    objectId: "tALMRNqAxD",
    sport: "TENNIS",
    country: "SWEDEN",
    state: "NOT_STARTED",
  },
  {
    awayName: "Roberts, Justin",
    createdAt: "2015-12-18T12:30:39.300Z",
    group: "Mocked Dominican Republic",
    homeName: "Pla Malfeito, Jaume",
    id: 1003026666,
    name: "Pla Malfeito, Jaume - Roberts, Justin",
    objectId: "KGA9nqYAJl",
    sport: "TENNIS",
    country: "ENGLAND",
    state: "FINISHED",
  },
  {
    awayName: "Mridha, J",
    createdAt: "2015-12-18T12:30:39.306Z",
    group: "Mocked Qatar",
    homeName: "Clayton, Scott",
    id: 1003026476,
    name: "Clayton, Scott - Mridha, J",
    objectId: "utc63de1Fl",
    sport: "TENNIS",
    country: "FRANCE",
    state: "STARTED",
  },
  {
    awayName: "Kania, P/Kerkhove, L",
    createdAt: "2015-12-18T12:30:39.311Z",
    group: "Mocked Ankara",
    homeName: "Buyukakcay, C/Krunic, A",
    id: 1003026234,
    name: "Buyukakcay, C/Krunic, A - Kania, P/Kerkhove, L",
    objectId: "mTVUIuYdbF",
    sport: "TENNIS",
    country: "SWEDEN",
    state: "NOT_STARTED",
  },
  {
    awayName: "Chernetsova, D/Perper, A",
    createdAt: "2015-12-18T12:30:39.317Z",
    group: "Mocked El Kantaoui",
    homeName: "Baskova, D/Podlinska, M",
    id: 1003026673,
    name: "Baskova, D/Podlinska, M - Chernetsova, D/Perper, A",
    objectId: "heL53W56d2",
    sport: "TENNIS",
    country: "FRANCE",
    state: "STARTED",
  },
  {
    awayName: "Njoze, M",
    createdAt: "2015-12-18T12:30:39.322Z",
    group: "Mocked El Kantaoui",
    homeName: "Stoilkovska, M",
    id: 1003026214,
    name: "Stoilkovska, M - Njoze, M",
    objectId: "gldlV9xhi2",
    sport: "TENNIS",
    country: "SWEDEN",
    state: "STARTED",
  },
  {
    awayName: "Haas, Barbara",
    createdAt: "2015-12-18T12:30:39.328Z",
    group: "Mocked Navi Mumbai",
    homeName: "Jia-Jing Lu",
    id: 1003026299,
    name: "Jia-Jing Lu - Haas, Barbara",
    objectId: "V6Qsm2Wlms",
    sport: "TENNIS",
    country: "ENGLAND",
    state: "FINISHED",
  },
]

jest.mock("axios")

const mockedAxios = axios as jest.Mocked<typeof axios>
const resp = { data: sportsEvents }
mockedAxios.get.mockResolvedValue(resp)

test("axios mock should fetch sportsEvents", () => {
  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return SportsPoll.getData("whatever").then(data =>
    expect(data).toEqual(sportsEvents)
  )
})

describe("SportsPoll", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup)

  it("fetching data, display vote buttons & display votes section with 1 result after a click", async () => {
    process.env = Object.assign(process.env, { SPORT_EVENTS_URL: "whatever" })
    const { getByText } = render(<SportsPoll />)
    const drawVoteButton = await waitForElement(() => getByText(/Draw/i))
    // console.log(getByText(/Votes/i)) // throw an error during the tests because not found
    drawVoteButton.click()

    const votesSectionTitle = await waitForElement(() => getByText(/Votes/i))
    // expect(votesSectionTitle).toBeTruthy()

    let votesSection = votesSectionTitle.parentNode
    let nbVote = 0
    if (
      votesSection &&
      votesSection.childNodes[1].nodeName.toLowerCase() === "table"
    ) {
      let tbody = votesSection.childNodes[1].childNodes[0]
      tbody.childNodes.forEach(tableNode => {
        if (tableNode.nodeName.toLowerCase() === "tr") {
          nbVote++
        }
      })
    }

    expect(nbVote).toEqual(1)
  })
})
