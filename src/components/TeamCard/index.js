// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {list} = props

  return (
    <li className="list-ele">
      <Link to={`/team-matches/${list.id}`} className="link">
        <img
          src={list.teamImageUrl}
          className="team-img-logo"
          alt={list.name}
        />
        <p className="team-card-name">{list.name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
