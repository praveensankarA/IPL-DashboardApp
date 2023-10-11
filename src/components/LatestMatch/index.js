// Write your code here
import './index.css'

const LatestMatch = props => {
  const {lastMatchDetails, teamBanner} = props

  return (
    <div className="team-card-main-container">
      <p className="last-match-text">Latest Matches</p>

      <div className="last-match-container">
        <div className="opponent-team-details-container">
          <p>{lastMatchDetails.competingTeam}</p>
          <p>{lastMatchDetails.date}</p>
          <p>{lastMatchDetails.venue}</p>
          <p>{lastMatchDetails.result}</p>
        </div>
        <div className="opponent-team-img-container">
          <img
            src={lastMatchDetails.competingTeamLogo}
            className="opponent-tem-logo"
            alt={`latest match ${lastMatchDetails.competingTeam}`}
          />
        </div>
        <hr className="line" />
        <div className="opponent-team-more-details-container">
          <p className="">First Innings</p>
          <p>{lastMatchDetails.firstInnings}</p>
          <p>Second Innings</p>
          <p>{lastMatchDetails.secondInnings}</p>
          <p>manOfTheMatch</p>
          <p>{lastMatchDetails.manOfTheMatch}</p>
          <p>Umpires</p>
          <p>{lastMatchDetails.umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
