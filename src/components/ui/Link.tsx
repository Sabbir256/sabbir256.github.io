import { IconArrowUpRight } from "@/icons";

type Props = {
  title: string;
  url: string;
};
function Link({ title, url }: Props) {
  return (
    <>
      <a
        href={url}
        className="group leading-tight font-medium text-base inline-block relative hover:text-blue-600 transition-colors"
        target="_blank"
      >
        <span>{title}</span>
        <IconArrowUpRight className="size-4 -right-5 bottom-0 absolute group-hover:-right-6 group-hover:bottom-1 transition-[right,bottom] duration-200 leading-3" />
      </a>
    </>
  );
}

export default Link;
