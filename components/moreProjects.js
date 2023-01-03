import Link from "next/link";

const MoreProjects = ({
  projectOne,
  projectOneUrl,
  projectOneImg,
  projectTwo,
  projectTwoUrl,
  projectTwoImg,
}) => {
  return (
    <div className="flex items-center justify-between gap-10 mt-28 mb-12 flex-col">
      <div>
        <h3 className="text-3xl mb-5">More Projects</h3>
      </div>

      <div className="flex flex-col gap-8 mx-16 md:flex-row">
        <div>
          <Link href={projectOneUrl}>
            <div className="w-96 h-auto overflow-hidden md:h-auto lg:w-auto sm:w-96 sm:h-auto cursor-pointer hover:opacity-80">
              <img src={projectOneImg} />
            </div>
          </Link>
          <h2 className="text-center font-bold text-xl mt-3">{projectOne}</h2>
        </div>

        <div>
          <Link href={projectTwoUrl}>
            <div className="w-96 h-auto overflow-hidden md:h-auto lg:w-auto sm:w-96 sm:h-auto cursor-pointer hover:opacity-80">
              <img src={projectTwoImg} />
            </div>
          </Link>
          <h2 className="text-center font-bold text-xl mt-3">{projectTwo}</h2>
        </div>
      </div>
    </div>
  );
};

export default MoreProjects;
