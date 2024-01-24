import './index.css'

const NotFound = () => (
  <>
    <div className="not-found-container">
      <div className="not-found-image-container">
        <img
          className="not-found-image"
          src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1704822108/Group_7504_cag8c5.jpg "
          alt="not found"
        />
      </div>
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-paragraph">
        We are Sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotFound
