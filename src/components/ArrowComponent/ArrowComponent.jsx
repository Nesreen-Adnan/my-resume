import "./ArrowComponent.css"
import { FaAngleUp } from "react-icons/fa6"
import {useEffect, useRef} from "react";
export default function ArrowComponent() {
  let arrow = useRef();
  useEffect(() => {
    window.onscroll = ()=> {
      if (window.innerHeight <= window.scrollY - 90) {
        arrow.current.classList.remove("opacity-0");
      } else {
        arrow.current.classList.add("opacity-0");
      }
      if (!arrow.current.classList.contains("opacity-0")) {
        arrow.current.onclick = (() => {
          window.scrollTo(0, 0)
        })
      }
    }
  }, [])
  return (
    <span ref={arrow} className="arrow opacity-0 b-main-d text-white flex transition position-fixed">
      <FaAngleUp />
    </span>
  )
}
