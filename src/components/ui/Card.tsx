import { IconArrowUpRight } from "@/icons";

type Props = {
  title: string;
  org: string;
  body: string;
  skills?: string[];
  duration?: string;
  promotions?: string[];
  url?: string;
};

function Card({ title, org, body, skills, duration, promotions, url }: Props) {
  return (
    <div className="grid sm:grid-cols-8 sm:gap-8 md:gap-4 mb-12 lg:mb-6 group hover:cursor-pointer relative z-10 pb-1">
      <span className="hidden lg:block absolute group-hover:bg-blue-300/10 -inset-y-4 -inset-x-6 rounded z-0"></span>
      <div className="sm:col-span-2 mb-2 md:mb-0 leading-wider text-xs font-semibold lg:whitespace-nowrap lg:mt-1 text-gray-600">
        {duration ?? ""}
      </div>
      <div className="sm:col-span-6 flex flex-col">
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${title} at ${org} (opens ins a new tab)`}
        >
          <span className="hidden lg:block absolute rounded -inset-y-4 -inset-x-6 z-20"></span>
          <h3 className="font-medium text-base leading-tight text-black group-hover:text-blue-600 relative inline-flex items-end">
            {title} · {org}
            <IconArrowUpRight className="ml-1 size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-[transform] duration-200" />
          </h3>
        </a>
        {promotions && getpromotions(promotions)}
        <span className="mt-2 text-sm">{body}</span>
        <div className="mt-2 flex flex-wrap">{skills && getSkills(skills)}</div>
      </div>
    </div>
  );
}

function getpromotions(promotions: string[]) {
  return (
    <div className="flex flex-col mt-[2px]">
      {promotions.map((promotion, idx) => (
        <span
          key={idx}
          className="text-base leading-5 text-gray-400 tracking-tight font-[500]"
        >
          {promotion}
        </span>
      ))}
    </div>
  );
}

function getSkills(skills: string[]) {
  return skills.map((skill, idx) => (
    <span
      key={idx}
      className="inline-block bg-blue-500/10 rounded-full px-3 py-1 text-xs text-blue-600 tracking-tight font-[500] mt-2 mr-2"
    >
      {skill}
    </span>
  ));
}

export default Card;
