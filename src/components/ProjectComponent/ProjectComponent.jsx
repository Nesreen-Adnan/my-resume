import { useEffect, useRef } from "react";
import "./ProjectComponent.css"

function ProjectComponent({name, imgSrc, hasGitPage, tools}) {
  let box = useRef(),
      link = hasGitPage? `https://nesreen-adnan.github.io/${name}/` : `https://${name}.netlify.app`,
      title = name.includes(2) ? name.slice(0, -12) : name;
  useEffect(() => box.onclick = () => open(link), [])
  return (
    <div ref={box} className="box position-relative">
      <div className="tools position-absolute flex gap-2 transition">
        {tools}
      </div>
      <img className="transition" src={imgSrc} alt={"screenshot for " + title} />
    </div> 
  )
}

export default ProjectComponent;
