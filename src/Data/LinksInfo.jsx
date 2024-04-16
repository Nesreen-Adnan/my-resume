import {
  FaEnvelopeOpenText,
  FaCodepen,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

let i = 0,
  delay = .4,
  linksInfo = [
  {
    id: i++,
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/Nesreen-Adnan",
    delay: `${delay*i}s`,
  },
  {
    id: i++,
    name: "code pen",
    icon: <FaCodepen />,
    link: "https://codepen.io/nesreen-ad",
    delay: `${delay*i}s`,
  },
  {
    id: i++,
    name: "email",
    icon: <FaEnvelopeOpenText />,
    link: "mailto:nesreenad742@gmail.com?subject=Contact",
    delay: `${delay*i}s`,
  },
  {
    id: i++,
    name: "linked in",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/nesrain-mashaabi-130805248",
    delay: `${delay*i}s`,
  },
];

export default linksInfo;
