import Title from "@/components/ui/Title";

function Blogs() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 mg:mb-24 lg:scroll-mt-24 lg:mb-28"
    >
      <h2 className="font-medium mb-6 lg:hidden tracking-wider">WRITING</h2>

      <BlogCard
        title="How Notion Sped Up 20 Times In The Browser"
        url="https://www.linkedin.com/pulse/how-notion-sped-up-20-times-browser-sabbir-ahmed-acpac"
        year={2024}
        imgSrc="./images/notion-blog-banner.webp"
        imgAlt="notion-blog"
      />
    </section>
  );
}

type CardProps = {
  title: string;
  url: string;
  year: number;
  imgSrc: string;
  imgAlt: string;
};

function BlogCard({ title, url, year, imgSrc, imgAlt }: CardProps) {
  return (
    <div className="group grid gap-3 pb-1 md:gap-4 grid-cols-8 z-10 relative cursor-pointer mb-10">
      <span className="hidden lg:block absolute group-hover:bg-blue-300/10 -inset-y-4 -inset-x-6 rounded z-0"></span>
      <div className="col-span-6 order-2 sm:flex sm:flex-col sm:justify-center">
        <div className="text-sm font-semibold text-gray-500">{year}</div>
        <h3 className="leading-tight text-black font-medium mb-2">
          <Title title={title} url={url} />
        </h3>
      </div>
      <div className="aspect-video w-full overflow-hidden order-1 col-span-2 group-hover:border-gray-700/30 transition sm:translate-y-1 mt-1 sm:mt-0">
        <img
          src={imgSrc}
          alt={imgAlt ?? "IMG NOT FOUND"}
          loading="lazy"
          className="object-cover h-full w-full rounded border-2 border-gray-700/20"
        />
      </div>
    </div>
  );
}

export default Blogs;
