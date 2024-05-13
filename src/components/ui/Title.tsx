import { IconArrowUpRight } from "@/icons";

type Props = {
  title: string;
  url: string;
};
function Title({ title, url }: Props) {
  return (
    <>
      <a
        href={url}
        className="group leading-tight inline-block hover:text-blue-600 transition-colors"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="hidden lg:block absolute rounded -inset-y-4 -inset-x-6 z-20"></span>
        <div className="inline-flex items-end">
          <span className="group-hover:text-blue-600">{title}</span>
          <IconArrowUpRight className="ml-1 size-4 transition-[transform] group-hover:translate-x-1 duration-200 group-hover:-translate-y-1 group-hover:text-blue-600" />
        </div>
      </a>
    </>
  );
}

export default Title;
