import logo from '../images/logo.svg'
import { pageLinks } from '../data.js'
import { socialLinks } from '../data.js'
import SocialLink from './SocialLink.js'
import PageLink from './PageLink.js'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
              return (
                <PageLink
                  key={link.id}
                  {...link}
                  pageClass="nav-link"
                ></PageLink>
              )
            })}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((link) => {
              return (
                <SocialLink
                  key={link.id}
                  {...link}
                  itemClass="nav-icon"
                ></SocialLink>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Navbar
