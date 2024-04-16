import "./Links.css"
import { SectionComponent, LinkBox } from "../../components"
import {LinksInfo} from "../../Data/index"
export default function Links() {
    let linksBoxies = LinksInfo.map(linkInfo => {
        return <LinkBox key={linkInfo.id} name={linkInfo.name} icon={linkInfo.icon} href={linkInfo.link} delay={linkInfo.delay} />
    })
    return (
        <SectionComponent name="links" title="links" hasDefSwing="false">
            <div className="content flex gap-5">
                {linksBoxies}
            </div>
        </SectionComponent>
    )
}
