import "./Landing.css";
import {NavItem, SwingComponent} from "../../components/index";
import {SectionsInfo} from "../../Data/index";
function landing() {
  let navItems = SectionsInfo.map(section => {
      return <NavItem key={section.id} active={section.active?true:false} href={section.href} title={section.title} delay={section.delay} />
  });
  return (
    <div className="landing show overlay fw-bold text-center text-uppercase py-5">
      <div className="container position-relative h-100 flex flex-column gap-3">
        <nav className="navbar navbar-expand-lg navbar-dark w-100 position-absolute start-0 top-0">
          <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse py-3" id="navbarNav">
            <ul className="navbar-nav">
              {navItems}
            </ul>
          </div>
          </div>
        </nav>
        <span className="after"></span>
        <h1 className="position-relative"><div className="typewriter"></div>nesrain adnan mashaabi</h1>
        <SwingComponent hasTitle='true'>
          <p className="subtitle position-relative c-main">junior frontend developer</p>
        </SwingComponent>
      </div>
    </div>
  )
}

export default landing;