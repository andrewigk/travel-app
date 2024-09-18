import { socialLinks } from '../data.js'
import { pageLinks } from '../data.js'
import SocialLink from './SocialLink.js'
import PageLink from './PageLink.js'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <footer className="section footer">
        <ul className="footer-links">
          {pageLinks.map((link) => {
            return (
              <PageLink
                key={link.id}
                {...link}
                pageClass="footer-link"
              ></PageLink>
            )
          })}
        </ul>
        <ul className="footer-icons">
          {socialLinks.map((link) => {
            return (
              <SocialLink
                key={link.id}
                {...link}
                itemClass="footer-icon"
              ></SocialLink>
            )
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{currentYear}</span> all rights reserved
        </p>
      </footer>
    </>
  )
}
export default Footer
