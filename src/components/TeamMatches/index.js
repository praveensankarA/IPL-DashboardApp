// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {team: '', recentMatches: [], lastMatchDetails: {}, isSpinner: false}

  componentDidMount() {
    this.setState({isSpinner: true})

    this.getPlayerDetails()
  }

  getPlayerDetails = async () => {
    const {match} = this.props
    const {params} = match
    this.setState({team: params.id})

    const response = await fetch(`https://apis.ccbp.in/ipl/${params.id}`)
    const data = await response.json()

    const lastMatch = await {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
      firstInnings: data.latest_match_details.first_innings,
    }

    const recentMatch = await data.recent_matches.map(each => ({
      result: each.result,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      matchStatus: each.match_status,
      id: each.id,
    }))

    this.setState({
      lastMatchDetails: lastMatch,
      isSpinner: false,
      recentMatches: recentMatch,
      teamBanner: data.team_banner_url,
    })
  }

  render() {
    const {
      team,
      isSpinner,
      lastMatchDetails,
      teamBanner,
      recentMatches,
    } = this.state

    console.log(recentMatches)
    return (
      <div className={`team-main-bg-container ${team}`}>
        {isSpinner ? (
          <div className="spinner-team-match">
            <Loader
              type="Oval"
              margin-bottom="30px"
              color="#ffffff"
              height={50}
              width={50}
            />
          </div>
        ) : (
          <>
            <img
              src={teamBanner}
              alt="team banner"
              className="team-banner-img"
            />
            <LatestMatch
              id={lastMatchDetails.id}
              lastMatchDetails={lastMatchDetails}
              teamBanner={teamBanner}
            />
            <ul className="match-card-container">
              {recentMatches.map(each => (
                <MatchCard key={each.id} item={each} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
