import {
  IconGithub,
  IconInstagram,
  IconLeetcode,
  IconLinkedin,
  IconX,
} from "@/icons";

function Header() {
  return (
    <header className="lg:w-1/2 lg:sticky lg:top-0 lg:max-h-screen lg:py-24 lg:flex lg:flex-col lg:justify-between">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold sm:text-5xl tracking-tighter">
          <a href="/">Sabbir Ahmed</a>
        </h1>
        <h2 className="mt-3 text-xl font-medium sm:text-xl">
          Software Engineer
        </h2>
        <p className="mt-4 leading-normal max-w-xs">
          I build things for the web, engineer and develop robust systems for
          clients.
        </p>

        <nav className="hidden mt-16 lg:flex lg:flex-col [&>*]:tracking-wider text-xs font-medium">
          <a href="#about" className="py-2.5 hover:text-blue-600">
            ABOUT
          </a>
          <a href="#experience" className="py-2.5 hover:text-blue-600">
            EXPERIENCE
          </a>
          <a href="#projects" className="py-2.5 hover:text-blue-600">
            PROJECTS
          </a>
          <a href="#blog" className="py-2.5 hover:text-blue-600">
            BLOG
          </a>
        </nav>
      </div>

      <footer className="mt-8 flex gap-5 items-center">
        <a
          href="https://github.com/sabbir256"
          target="_blank"
          className="opacity-90 hover:opacity-100"
          aria-label="Github (opens in new tab)"
          rel="noreferrer noopener"
          title="GitHub"
        >
          <IconGithub className="size-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/sabbir96/"
          target="_blank"
          className="opacity-90 hover:opacity-100"
          aria-label="LinkedIn (opens in new tab)"
          rel="noreferrer noopener"
          title="LinkedIn"
        >
          <IconLinkedin className="size-6" />
        </a>
        <a
          href="https://leetcode.com/u/Sabbir256/"
          target="_blank"
          className="opacity-90 hover:opacity-100"
          aria-label="LeetCode (opens in new tab)"
          rel="noreferrer noopener"
          title="LeetCode"
        >
          <IconLeetcode className="size-6" />
        </a>
        <a
          href="https://www.instagram.com/isabbirahmed_/"
          target="_blank"
          className="opacity-90 hover:opacity-100"
          aria-label="Instagram (opens in new tab)"
          rel="noreferrer noopener"
          title="Instagram"
        >
          <IconInstagram className="size-6" />
        </a>
        <a
          href="https://x.com/mesabbir_"
          target="_blank"
          className="opacity-90 hover:opacity-100"
          aria-label="Twitter (now X, opens in new tab)"
          rel="noreferrer noopener"
          title="Twitter"
        >
          <IconX className="size-6" />
        </a>
      </footer>
    </header>
  );
}

export default Header;
