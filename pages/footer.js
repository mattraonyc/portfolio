import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiTwotoneMail,
    AiFillGithub,
  } from "react-icons/ai";

export default function Footer() {
    return <>
    <div>
    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <a href="mailto:mattraonyc@gmail.com"  target="_blank"><AiTwotoneMail /></a>
        <a href="https://github.com/mattraonyc"  target="_blank"><AiFillGithub /></a>
      <a href="https://linkedin.com/in/mattyrao/"  target="_blank"><AiFillLinkedin /></a>
    </div>
    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-center pb-20 pt-8">
    © 2023 Matt Rao
    </p>
    </div>
    </>
}