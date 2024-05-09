import { IconGithub, IconInstagram, IconLinkedin, IconX } from "@/icons";

function Header() {
  return (
    <header className="lg:w-1/2 lg:sticky lg:top-0 lg:max-h-screen lg:py-24 lg:flex lg:flex-col lg:justify-between">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold font-poppins sm:text-5xl tracking-tight">
          Sabbir Ahmed
        </h1>
        <h2 className="mt-3 text-xl font-medium tracking-tight sm:text-xl">
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
        <IconGithub className="size-6" />
        <IconLinkedin className="size-6" />
        <IconInstagram className="size-6" />
        <IconX className="size-6" />
      </footer>
    </header>
  );
}

export default Header;
