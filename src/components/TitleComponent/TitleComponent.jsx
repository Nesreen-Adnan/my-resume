import "./TitleComponent.css";
export default function TitleComponent(props) {
  return (
    <h2 className="title text-capitalize position-relative">
      <div className="typewriter" data-start='false'></div>
      {props.children}
    </h2>
  )
}
