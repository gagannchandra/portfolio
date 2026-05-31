import { 
  BiEnvelope, 
  BiCodeAlt, 
  BiCodeBlock, 
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoInstagram,
  BiLogoSteam,
  BiLinkExternal
} from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

export const socialLinks = [
  // ROW 1
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/gagannchandra",
    icon: BiLogoGithub,
    status: "social",
    row: 1,
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://linkedin.com/in/gagan-chandra",
    icon: BiLogoLinkedinSquare,
    status: "social",
    row: 1,
  },
  {
    id: 3,
    name: "Email",
    url: "mailto:gaganchandra02@gmail.com",
    icon: BiEnvelope,
    status: "social",
    row: 1,
  },
  {
    id: 4,
    name: "Daily.dev",
    url: "https://app.daily.dev/gagan027",
    icon: BiLinkExternal,
    status: "social",
    row: 1,
  },
  // ROW 2
  {
    id: 6,
    name: "LeetCode",
    url: "https://leetcode.com/u/Gagan027/",
    icon: SiLeetcode,
    status: "social",
    row: 2,
  },
  {
    id: 7,
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/CSAI_1520069",
    icon: BiCodeBlock,
    status: "social",
    row: 2,
  },
  {
    id: 8,
    name: "InterviewBit",
    url: "https://www.interviewbit.com/profile/gagan-chandra_117/",
    icon: BiCodeAlt,
    status: "social",
    row: 2,
  },
  // ROW 3
  {
    id: 9,
    name: "Instagram",
    url: "https://www.instagram.com/gagannchandra/",
    icon: BiLogoInstagram,
    status: "social",
    row: 3,
  },
  {
    id: 5,
    name: "X",
    url: "https://x.com/gagan027_",
    icon: FaSquareXTwitter,
    status: "social",
    row: 3,
  },
  {
    id: 10,
    name: "Steam",
    url: "https://steamcommunity.com/id/_gagxn/",
    icon: BiLogoSteam,
    status: "social",
    row: 3,
  },
];

