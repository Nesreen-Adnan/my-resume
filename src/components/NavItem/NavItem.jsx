import SwingComponent from "../SwingComponent/SwingComponent";
import "./NavItem.css"
function navItem({active, href, title, delay}) {
  return (
    <SwingComponent delay={delay}>
      <li className="nav-item">
        <a className={`nav-link ${active? "active" : ""}`} aria-current={active?"page":''} href={href}>{title}</a>
      </li>
    </SwingComponent>
  )
}
export default navItem;
