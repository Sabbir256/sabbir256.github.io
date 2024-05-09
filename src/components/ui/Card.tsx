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
    <div
      className="mb-12 lg:mb-6 group hover:cursor-pointer w-full hover:bg-blue-300/10 lg:py-4 lg:px-6 rounded flex flex-col lg:flex-row items-start gap-2 lg:gap-4 transition-colors"
      onClick={() => window.open(url, "_blank")}
    >
      <div className="leading-wider text-xs font-semibold lg:whitespace-nowrap lg:mt-1 text-gray-600">
        {duration ?? ""}
      </div>
      <div className="flex flex-col">
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${title} at ${org} (opens ins a new tab)`}
        >
          <span className="font-medium text-base leading-tight text-black group-hover:text-blue-600 relative inline-block">
            {title} · {org}
            <IconArrowUpRight className="size-4 -right-5 bottom-0 absolute group-hover:-right-6 group-hover:bottom-1 transition-all" />
          </span>
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
