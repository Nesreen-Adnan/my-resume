import memoryGame from "../assets/images/projects/memory-game.png";
import firstProject from "../assets/images/projects/first_project.png";
import secondProject from "../assets/images/projects/second_project.png";
import rockPaperScissors from "../assets/images/projects/rock-paper-scissors.png";
import multiStepForm from "../assets/images/projects/rock-paper-scissors.png";
// import ageCalculator from "../assets/images/projects/age-calculator.png";
import interactiveComments from "../assets/images/projects/interactive-comments.png";
import calculator from "../assets/images/projects/calculator.png";
import { FaHtml5 , FaCss3Alt, FaJs, FaVuejs, FaReact, FaBootstrap} from "react-icons/fa6";
import { SiPug, SiSass } from "react-icons/si";
let i = 0,
    html = <FaHtml5 key={i++} />, 
    css = <FaCss3Alt key={i++} />,
    js = <FaJs key={i++} />,
    vue = <FaVuejs key={i++} />,
    react = <FaReact key={i++} />,
    bootstrap = <FaBootstrap key={i++} />,
    pug = <SiPug key={i++} />,
    sass = <SiSass key={i++} />,
    projectsInfo = [
        {name: "interactive-comments-challenge24", imgSrc: interactiveComments, tools: [html, sass, react]},
        {name: "rock-paper-scissors-challenge24", imgSrc: rockPaperScissors, tools: [html, css, react]},
        {name: "first_project", imgSrc: firstProject, hasGitPage: true, tools: [html, css, js, bootstrap]},
        {name: "second_project", imgSrc: secondProject, hasGitPage: true, tools: [html, css, js, bootstrap]},
        {name: "multi-step-form-challenge23", imgSrc: multiStepForm, tools: [pug, sass, vue]},
        {name: "calculator-challenge23", imgSrc: calculator, tools: [pug, sass, vue]},
        // {name: "ageCalculator-challenge23", imgSrc: ageCalculator, tools: [pug, sass, vue]},
        // {name: "memory-game-challenge23", imgSrc: memoryGame, tools: [pug, sass, vue]},
    ];

export default projectsInfo;