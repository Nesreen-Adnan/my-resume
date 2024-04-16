import "./About.css";
import { SectionComponent } from "../../components/index";
export default function about() {
  return (
    <SectionComponent name="about" title="about me">
      <p className="c-main mx-auto px-4">
        I'm Nesrain Mashaabi. I'm Yemeni, but I live in Taif. I made some templates for
        websites by transform designed PDFs from some designers to websites.
        Also, I participated in some challenges of frontend mentor. 
      </p>
    </SectionComponent>
  );
}
