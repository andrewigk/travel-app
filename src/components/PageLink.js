const PageLink = ({ href, text, pageClass }) => {
  return (
    <li>
      <a href={href} className={pageClass}>
        {text}
      </a>
    </li>
  )
}
export default PageLink
