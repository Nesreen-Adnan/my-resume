import { useEffect, useState, useRef } from "react";
import { FaCaretRight } from "react-icons/fa6";
import { toCapitalize } from "../../App";
import "./SkillsItem.css";
export default function SkillsItem({data}) {
    let [skill, setSkill] = useState(),
        item = useRef();
    useEffect(() => {
        if (typeof data != "string") {
          setSkill(toCapitalize(data.name));
          if (data.text == "upper") {
            item.current.classList.add("text-uppercase");
          }
          if (data.uncomplited) {
            let span = document.createElement("span");
            span.textContent = " (in progress)";
            item.current.appendChild(span);
          }
        } else 
          setSkill(toCapitalize(data));
      }, [])
    return (
      <li ref={item}>
        <FaCaretRight />
        {skill}
      </li>
    )
  }
  