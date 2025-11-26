import { Link } from 'react-router-dom'
import "../css/style.css"
const NotFound = () => {
  return (
    <div className='not-found'>
        <h1>Error code 404😢</h1>
        <h2>Page not found!🤷‍♀️</h2>
        <Link to="/">Return to home👈</Link>
    </div>
  )
}

export default NotFound