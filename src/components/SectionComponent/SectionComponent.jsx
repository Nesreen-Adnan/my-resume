import "./SectionComponent.css";
import {SeparatorComponent, TitleComponent, SwingComponent} from "../index.js";
export default function SectionComponent(props) {
  return (
    <div className={`${props.name} ${props.theme?props.theme:'light'} ${props.theme == "dark"? 'b-main-d text-white': 'c-main-d bg-white'} lazy-transition`} id={props.id?props.id:props.name}>
        {props.theme != "dark"? <SeparatorComponent /> : ''}
        <div className="container">
          {props.title? <TitleComponent>{props.title}</TitleComponent> : ''}
          {props.hasDefSwing == "false"? props.children :  
            <SwingComponent hasTitle={props.title?true:false}>
              {props.children}
            </SwingComponent>
          }
        </div>
    </div>
  )
}
