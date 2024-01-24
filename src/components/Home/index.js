import {Link, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="instruction-container">
          <h1 className="heading">Instructions</h1>
          <ol>
            <li className="list-item">
              <span className="span-item">Total Questions: </span>10
            </li>
            <li className="list-item">
              <span className="span-item">Types of Questions: </span>MCQs
            </li>
            <li className="list-item">
              <span className="span-item">Duration: </span>10 Mins
            </li>
            <li className="list-item">
              <span className="span-item">Marking Scheme: </span>Every Correct
              response, get 1 mark
            </li>
            <li className="list-item">
              All the progress will be lost, if you reload during the assessment
            </li>
          </ol>
          <Link to="/assessment">
            <button type="button" className="start-button">
              Start Assessment
            </button>
          </Link>
        </div>
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1704821895/Group_ieby7e.jpg"
            alt="assessment"
            className="home-image"
          />
        </div>
      </div>
    </>
  )
}

export default Home
