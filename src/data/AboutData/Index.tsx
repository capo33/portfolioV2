import py from "./python.svg";
import dotNet from "./dotnet.svg";
import aws from "./aws.svg";
import unity from "./unity.svg";
import csharp from "./csharp.svg";
import Capo from "../../assets/images/hero.png";

export const AboutObj = {
  imgStart: true,
  topLine: "Snippet",
  firstHeadLine: "Who",
  secondHeadLine: " I am",
  description: [
    {
      id: 1,
      title:
        "A Software Developer with a passion for building beautiful and functional websites.",
    },

    {
      id: 3,
      title:
        "My coding journey started in 2020 when I decided to change my career path and become a developer, then I started learning web-development at Business Collage Helsinki.",
    },
    {
      id: 5,
      title:
        "During my programming journey, I learned technologies related to web development, such as JavaScript, React, TypeScript, NodeJS, etc.",
    },
    {
      id: 6,
      title:
        "I motivate myself by looking for new challenges and new ways to improve my skills and knowledge.",
    },
    {
      id: 6,
      title:
        "I now have experience working as part of a team and individually.",
    },
    {
      id: 7,
      title: `Currently I'm learning `,
      icon: <img src={aws} alt='aws' width='25' height='25' />,
      title1: " -",
      icon1: <img src={py} alt='python' width='25' height='25' />,
      title4: " -",
      icon4: <img src={dotNet} alt='dotNet' width='25' height='25' />,
    },
    {
      id: 8,
      title: "For fun I use",
      icon: <img src={csharp} alt='csharp' width='25' height='25' />,
      title1: "and",
      icon1: <img src={unity} alt='unity' width='25' height='25' />,
      title3: " to develop games.",
    },
  ],
  img: Capo,
};
