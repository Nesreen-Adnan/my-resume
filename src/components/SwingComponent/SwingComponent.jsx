import { useEffect, useRef } from "react"
import "./SwingComponent.css"
export default function SwingComponent(props) {
  let swingContent = useRef();
  useEffect(() => {
    if (props.delay) {
      swingContent.current.style.cssText=`animation-delay: calc(var(--basicDelay) + ${props.delay});`;
    }
  }, [])
  return (
    <div className={`swing ${props.hasTitle?'more-late':''}`}>
      <div ref={swingContent} className="swing-content">
        {props.children}
      </div>
    </div>
  )
}
