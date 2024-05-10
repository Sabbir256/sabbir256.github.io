import Link from "./ui/Link";

function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 mg:mb-24 lg:scroll-mt-24 lg:mb-28"
    >
      <h2 className="font-medium mb-6 lg:hidden tracking-wider">PROJECTS</h2>
      <ProjectCard
        title="Portfolio Website (v1)"
        url="https://sabbir256.github.io/"
        body="An old portfolio site built with jQuery, Parallax, Bootstrap and is hosted on GitHub Pages."
        skills={["jQuery", "Bootstrap", "HTML", "CSS", "JavaScript"]}
      />
    </section>
  );
}

type CardProps = {
  title: string;
  url: string;
  body: string;
  skills?: string[];
};

function ProjectCard({ title, url, body, skills }: CardProps) {
  return (
    <div className="group grid sm:gap-8 pb-1 md:gap-4 sm:grid-cols-8 z-10 relative cursor-pointer">
      <span className="hidden lg:block absolute group-hover:bg-blue-300/10 -inset-y-4 -inset-x-6 rounded z-0"></span>
      <div className="sm:col-span-6 sm:order-2 lg:flex lg:flex-col">
        <h3 className="leading-tight text-black">
          <Link title={title} url={url} />
        </h3>
        <span className="mt-2 text-sm">{body}</span>
        <div className="mt-2 flex flex-wrap">
          {skills &&
            skills.map((name, idx) => <Skill key={idx + name} name={name} />)}
        </div>
      </div>
      <img
        src="./images/portfolio-site-v1.png"
        alt="portfolio v1"
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
