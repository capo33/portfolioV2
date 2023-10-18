import React from "react";

import py from "./python.svg";
import dotNet from "./dotnet.svg";
import aws from "./aws.svg";
import unity from "./unity.svg";
import csharp from "./csharp.svg";
import { IAboutData } from "../../interfaces/AboutInterface";

const AboutData: IAboutData[] = [
  {
    id: 1,
    title:
      "👋 Hi, I’m a Frontend Developer with a passion for building beautiful and functional websites and applications.",
  },

  {
    id: 3,
    title: "💻 I studied web-development at Business Collage School.",
  },
  {
    id: 4,
    title:
      "👍 Since I started programming, I feel like I have found my passion and I'm always looking for new challenges. I have really enjoyed every moment of this journey.",
  },

  {
    id: 5,
    title:
      "😉 I use a creative approach to problem solving and I'm always looking for new ways to improve my skills and knowledge.",
  },
  {
    id: 6,
    title:
      "🏆 I have experience working as part of a team and individually. I have successfully met deadlines on every project I’ve worked on.",
  },
  {
    id: 7,
    title: `"🚀 Currently I'm learning `,
    icon: <img src={aws} alt="aws" width="25" height="25" />,
    title1: " -",
    icon1: <img src={py} alt="python" width="25" height="25" />,
    title4: " -",
    icon4: <img src={dotNet} alt="dotNet" width="25" height="25" />,
  },
  {
    id: 8,
    title: "👨‍👧‍👦 For fun I use ",
    icon: <img src={csharp} alt="csharp" width="25" height="25" />,
    title1: " and ",
    icon1:  <img src={unity} alt="unity" width="25" height="25" />,
    title3: " to develop games.",
  },
];

export { AboutData };
