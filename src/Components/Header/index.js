import { Link } from 'react-router-dom'
import './style.css'
function Header() {
  return (
    <div id="container-nav">
      <div>Salão NT</div>
      <ul>
        <li>
          <Link to={'/'}>Inicio</Link>
        </li>
        <li>
          <Link to={'/historico'}>Historico</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
