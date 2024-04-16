import "./InfoBox.css"
import {SwingComponent} from "../index";
export default function InfoBox({icon, header, detail, delay}) {
  return (
    <SwingComponent delay={delay}>
      <div className="box flex flex-column">
          <div className="icon flex mb-3">
              <i className="fas fa-address-card">
                {icon}
              </i>
          </div>
          <h3>{header}</h3>
          <span>{detail}</span>
      </div>
    </SwingComponent>
  )
}
