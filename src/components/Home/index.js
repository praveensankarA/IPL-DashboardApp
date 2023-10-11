// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {val: [], isSpinner: false}

  componentDidMount() {
    this.setState({isSpinner: true})
    this.getDetails()
  }

  getDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({isSpinner: false, val: formattedData})
  }

  render() {
    const {val, isSpinner} = this.state

    return (
      <div className="home-main-container">
        {isSpinner ? (
          <div className="spinner">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="main-head">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1>IPL Dashboard</h1>
            </div>

            <ul className="list-container">
              {val.map(each => (
                <TeamCard key={each.id} list={each} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
