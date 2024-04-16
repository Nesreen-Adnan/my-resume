import "./Portfolio.css"
import {useRef} from "react";
import {ProjectComponent, SectionComponent} from "../../components";
import {ProjectsInfo} from "../../Data/index";
export default function Portfolio() {
    const projects = useRef();
    let projectsBoxies = ProjectsInfo.map((project, index) => {
            if (index == 0) {
                return <div key={index} className="carousel-item active">
                            <ProjectComponent key={index} name={project.name} imgSrc={project.imgSrc} hasGitPage={project.hasGitPage} tools={project.tools} /> 
                        </div>
            } else {
                return <div key={index} className="carousel-item">
                            <ProjectComponent name={project.name} imgSrc={project.imgSrc} hasGitPage={project.hasGitPage} tools={project.tools} /> 
                       </div>
            }
        }),
        indicators = ProjectsInfo.map((project, index) => {
            if (index == 0) 
                return <button key={index} type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            else 
                return <button key={index} type="button" data-bs-target="#carousel" data-bs-slide-to={index} aria-label={`Slide ${index}`}></button>
        })
    return (
        <SectionComponent name="portfolio" theme="dark" title="portfolio">
            <div id="carousel" ref={projects} className="carousel slide" data-bs-ride="false">
                <div className="carousel-inner">
                    {projectsBoxies}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <div className="carousel-indicators">
                    {indicators}
                </div>
            </div>
        </SectionComponent>
    )
}
