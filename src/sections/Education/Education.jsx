import "./Education.css"
import { FaBookOpenReader, FaBriefcase } from "react-icons/fa6";
import {SectionComponent, SkillsItem, SwingComponent} from "../../components/index"
import {SkillsInfo} from "../../Data/index"
export default function Education() {
    let i = 0,
        skillsItems = SkillsInfo.map(skill => {
            return <SkillsItem key={i++} data={skill} />
        })
    return (
        <SectionComponent name="edu" hasDefSwing="false">
            <SwingComponent>
                <div className="university flex-s-c gap-4 mb-3 mb-mdlg-0">
                    <div className="icon rounded-circle flex">
                        <FaBookOpenReader />
                    </div>
                    <div className="text text-capitalize">
                        <h3 className="mb-3">education</h3>
                        <p className="my-2 c-main">bachelor<br />
                        <span className="d-flex my-2">taif university / 2027</span>
                        <span className="d-flex my-2 text-normal">I am a computer scince student in the second level.</span>
                        </p>
                    </div>
                </div>
            </SwingComponent>
            <SwingComponent delay=".5s">
                <div className="skills flex-s-c gap-4 mt-3 mt-lg-0">
                    <div className="icon rounded-circle flex">                    
                        <FaBriefcase />
                    </div>
                    <div className="text">
                        <h3 className="mb-3 text-capitalize">I use</h3>
                        <ul className="skills-list list-unstyled c-main">
                            {skillsItems}
                        </ul>					
                    </div>
                </div>
            </SwingComponent>
        </SectionComponent>
    )
}
