import {InfoBoxiesData} from "../../Data/index"
import { SectionComponent, InfoBox } from "../../components/index"
import "./Info.css"

export default function Info() {
    let InfoBoxies = InfoBoxiesData.map(box => {
        return <InfoBox key={box.id} icon={box.icon} header={box.header} detail={box.detail} delay={box.delay} />
    })
    return (
        <SectionComponent name="info" theme="dark" hasDefSwing="false">
            <div className="boxies grid-3 text-center text-capitalize">
                {InfoBoxies}
            </div>
        </SectionComponent>
    )
}
