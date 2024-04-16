import "./LinkBox.css"
import {useEffect, useRef} from "react"
import { toCapitalize } from "../../App";
import SwingComponent from "../SwingComponent/SwingComponent";

export default function LinkBox({name, icon, href, delay}) {
    let link = useRef(),
        title = useRef();
    useEffect(() => link.current.onclick = () => open(href), [])
    useEffect(() => { 
        title.current.textContent = toCapitalize(name);
    }, [])
  return (
    <SwingComponent hasTitle="true" delay={delay}>
        <div ref={link} className={`${name.split(' ').join('-')} box flex gap-3 transition`} title="github" data-link="https://github.com/Nesreen-Adnan">
            <div className="icon rounded-circle flex">
                {icon}
            </div>
            <p ref={title} className="text-normal"></p>
        </div>
    </SwingComponent>
  )
}
