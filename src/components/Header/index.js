import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
    console.log(Cookies.remove('jwt_token'))
  }
  return (
    <nav className="nav-container">
      <div className="item-container">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1704821765/Group_8005_vgjmvh.jpg"
            alt="website logo"
            className="image"
          />
        </Link>
      </div>
      <button onClick={onClickLogout} type="button" className="logout-button">
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
