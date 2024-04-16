import './App.css'
import {useEffect} from "react";
import {Landing, About, Info, Education, Portfolio, Links, Footer} from "./sections/index";
import { ArrowComponent } from './components';
export function toCapitalize(text) {
    let arr = text?.split(' '),
        arr2 = arr?.map(e => e[0].toUpperCase() + e.substr(1));
    return arr2?.join('');
}
function App() {
  useEffect(() => {
    let sections = [...document.querySelectorAll("#root > div")];
    sections?.forEach(section => {
      window.addEventListener("scroll", () => {
        if (window.scrollY >= section.offsetTop - 400) {
          section.classList.add("show");
        }
      })
    })
  })
  return (
    <>
      <ArrowComponent />
      <Landing />
      <About />
      <Info />
      <Education />
      <Portfolio />
      <Links />
      <Footer />
    </>
  )
}
export default App
