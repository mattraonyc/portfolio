import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Projects() {
    return <div className="py-10">
    <h3 className="text-3xl py-1 dark:text-white pt-24" id="projects">Projects</h3>
    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
      I offer from a wide range of services, including brand design,
      programming and teaching.
    </p>
    
    <div className="flex flex-col justify-center gap-10 py-10">

    <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
        <div className="basis-2/5 flex-1 ">
        <a href="/projectOne.js">
        <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web1}
        />
        </a>
        </div>
        <div className="w-[50%]">
            <h3 className="text-3xl py-1 dark:text-white " id="my-story">MattRao.com</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                A personal portfolio website build using React, Tailwind and Next.js.</p>
        </div>
    </div>

    <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
        <div className="basis-2/5 flex-1">
        <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web2}
        />
        </div>
        <div className="w-[50%]">
            <h3 className="text-3xl py-1 dark:text-white " id="my-story">MattRao.com</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                A personal portfolio website build using React, Tailwind and Next.js.</p>
        </div>
    </div>

    <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
        <div className="basis-2/5 flex-1">
        <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web2}
        />
        </div>
        <div className="w-[50%]">
            <h3 className="text-3xl py-1 dark:text-white " id="my-story">MattRao.com</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                A personal portfolio website build using React, Tailwind and Next.js.</p>
        </div>
    </div>

    <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
        <div className="basis-2/5 flex-1">
        <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web2}
        />
        </div>
        <div className="w-[50%]">
            <h3 className="text-3xl py-1 dark:text-white " id="my-story">MattRao.com</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                A personal portfolio website build using React, Tailwind and Next.js.</p>
        </div>
    </div>

    {/* <div className="basis-1/3 flex-1">
      <Image
        className="rounded-lg object-cover"
        width={"100%"}
        height={"100%"}
        layout="responsive"
        src={web3}
      />
    </div>

    <div className="basis-1/3 flex-1">
      <Image
        className="rounded-lg object-cover"
        width={"100%"}
        height={"100%"}
        layout="responsive"
        src={web4}
      />
    </div>

    <div className="basis-1/3 flex-1">
      <Image
        className="rounded-lg object-cover"
        width={"100%"}
        height={"100%"}
        layout="responsive"
        src={web5}
      />
    </div>

    <div className="basis-1/3 flex-1">
      <Image
        className="rounded-lg object-cover"
        width={"100%"}
        height={"100%"}
        layout="responsive"
        src={web6}
      />
    </div> */}

  </div>
  </div>
}