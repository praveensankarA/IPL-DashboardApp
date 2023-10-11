// Write your code here

import './index.css'

const MatchCard = props => {
  const {item} = props

  return (
    <li className="match-list-ele">
      <img
        src={item.competingTeamLogo}
        alt={`competing team ${item.competingTeam}`}
        className="match-card-logo"
      />
      <p>{item.competingTeam}</p>
      <p>{item.result}</p>
      <p className={item.matchStatus}>{item.matchStatus}</p>
    </li>
  )
}

export default MatchCard
