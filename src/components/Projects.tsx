import Title from "@/components/ui/Title";
import { IconRight } from "@/icons";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 mg:mb-24 lg:scroll-mt-24 lg:mb-28"
    >
      <h2 className="font-medium mb-6 lg:hidden tracking-wider">PROJECTS</h2>

      <ProjectCard
        title="A NoSQL Key/Value Store Like Redis"
        url="https://github.com/sabbir256/fastdb"
        body="An in-memory NoSQL key/value store like Redis, implemented using golang. Data is kept in memory, and input commands are stored on disk periodically using Append only File(AOF) technique. This way data can be restored in case of a system crash. Supports Redis commands."
        skills={["Golang", "RESP", "buffer", "Redis"]}
        imgSrc="./images/fastdb.jpeg"
        imgAlt="An in-memory NoSQL Database"
      />

      <ProjectCard
        title="Portfolio Website (v1)"
        url="https://sabbir256.github.io/"
        body="An old portfolio site built with jQuery, Parallax, Bootstrap and is hosted on GitHub Pages."
        skills={["jQuery", "Bootstrap", "HTML", "CSS", "JavaScript"]}
        imgSrc="./images/portfolio-site-v1.png"
        imgAlt="Portfolio Website (v1)"
      />

      <div>
        <Link
          to="/portfolio/archive"
          className="group leading-tight font-medium text-base relative transition-colors inline-block"
        >
          <span className="text-black relative">
            <h3>View Full Project Archive</h3>
            <span className="absolute w-0 h-[1px] bg-blue-600 left-0 bottom-0 group-hover:w-full transition-[width]"></span>
          </span>
          <IconRight className="size-6 -bottom-1 -right-6 absolute group-hover:-right-8 transition-[right] leading-3" />
        </Link>
      </div>
    </section>
  );
}

type CardProps = {
  title: string;
  url: string;
  body: string;
  skills?: string[];
  imgSrc: string;
  imgAlt: string;
};

function ProjectCard({ title, url, body, skills, imgSrc, imgAlt }: CardProps) {
  return (
    <div
      className="group grid sm:gap-8 pb-1 md:gap-4 sm:grid-cols-8 z-10 relative cursor-pointer mb-12"
      onClick={() => window.open(url, "_blank", "noreferrer noopener")}
    >
      <span className="hidden lg:block absolute group-hover:bg-blue-300/10 -inset-y-4 -inset-x-6 rounded z-0"></span>
      <div className="sm:col-span-6 sm:order-2 lg:flex lg:flex-col">
        <h3 className="leading-tight text-black">
          <Title title={title} url={url} />
        </h3>
        <span className="mt-2 text-sm">{body}</span>
        <div className="mt-2 flex flex-wrap">
          {skills &&
            skills.map((name, idx) => <Skill key={idx + name} name={name} />)}
        </div>
      </div>
      <img
        src={imgSrc}
        alt={imgAlt ?? "IMG NOT FOUND"}
        loading="lazy"
        width={200}
        height={48}
        className="rounded border-2 border-gray-700/20 sm:order-1 sm:col-span-2 group-hover:border-gray-700/30 transition sm:translate-y-1 mt-3 lg:mt-0"
      />
    </div>
  );
}

function Skill({ name }: { name: string }) {
  return (
    <span className="inline-block bg-blue-500/10 rounded-full px-3 py-1 text-xs text-blue-600 tracking-tight font-[500] mt-2 mr-2">
      {name}
    </span>
  );
}

export default Projects;
