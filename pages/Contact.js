import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
export default function Contact() {
    return <section>
    <div>
      <h3 className="text-3xl py-1 dark:text-white " id="contact">Contact Me!</h3>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        If you have enjoyed reading about and reviewing my work and you would like to contact me,
         then please reach out to me by email: <span className="block pt-6 text-teal-500 pb-10"><a href="mailto:mattraonyc@gmail.com"  target="_blank">mattraonyc@gmail.com</a></span>
      </p>
    </div>
    {/* <div className="lg:flex gap-10">
      <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
        <Image src={design} width={100} height={100} />
        <h3 className="text-lg font-medium pt-8 pb-2  ">
          Beautiful Designs
        </h3>
        <p className="py-2">
          Creating elegant designs suited for your needs following core
          design theory.
        </p>
        <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
        <p className="text-gray-800 py-1">Photoshop</p>
        <p className="text-gray-800 py-1">Illustrator</p>
        <p className="text-gray-800 py-1">Figma</p>
        <p className="text-gray-800 py-1">Indesign</p>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
        <Image src={code} width={100} height={100} />
        <h3 className="text-lg font-medium pt-8 pb-2 ">
          Code your dream project
        </h3>
        <p className="py-2">
          Do you have an idea for your next great website? Let's make it a
          reality.
        </p>
        <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
        <p className="text-gray-800 py-1">Photoshop</p>
        <p className="text-gray-800 py-1">Illustrator</p>
        <p className="text-gray-800 py-1">Figma</p>
        <p className="text-gray-800 py-1">Indesign</p>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
        <Image src={consulting} width={100} height={100} />
        <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
        <p className="py-2">
          Are you interested in feedback for your current project? I can
          give you tips and tricks to level it up.
        </p>
        <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
        <p className="text-gray-800 py-1">Photoshop</p>
        <p className="text-gray-800 py-1">Illustrator</p>
        <p className="text-gray-800 py-1">Figma</p>
        <p className="text-gray-800 py-1">Indesign</p>
      </div>
    </div> */}
  </section>
}