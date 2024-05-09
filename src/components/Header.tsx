import { IconGithub, IconInstagram, IconLinkedin, IconX } from "@/icons";

function Header() {
  return (
    <header className="lg:w-1/2 lg:sticky lg:top-0 lg:max-h-screen lg:py-24 lg:flex lg:flex-col lg:justify-between">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold sm:text-5xl tracking-tighter">
          Sabbir Ahmed
        </h1>
        <h2 className="mt-3 text-xl font-medium sm:text-xl">
          Software Engineer
        </h2>
        <p className="mt-4 leading-normal">I build things for web</p>
      </div>

      <nav className="hidden lg:flex flex-col gap-1 [&>*]:tracking-wider text-sm font-[500]">
        <a href="#about">ABOUT</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#projects">PROJECTS</a>
        <a href="#blog">BLOG</a>
      </nav>

      <footer className="mt-8 flex gap-5 items-center">
        <a
          href="https://github.com/sabbir256"
          target="_blank"
          className="opacity-90 hover:opacity-100"
        >
          <IconGithub className="size-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/sabbir96/"
          target="_blank"
          className="opacity-90 hover:opacity-100"
        >
          <IconLinkedin className="size-6" />
        </a>
        <a
          href="https://www.instagram.com/isabbirahmed_/"
          target="_blank"
          className="opacity-90 hover:opacity-100"
        >
          <IconInstagram className="size-6" />
        </a>
        <a
          href="https://x.com/mesabbir_"
          target="_blank"
          className="opacity-90 hover:opacity-100"
        >
          <IconX className="size-6" />
        </a>
      </footer>
    </header>
  );
}

export default Header;
