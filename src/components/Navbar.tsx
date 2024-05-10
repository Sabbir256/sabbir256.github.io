import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="hidden mt-16 lg:block">
      <ul className="lg:flex lg:flex-col text-xs font-semibold [&>*]:hover:cursor-pointer text-gray-600 max-w-fit">
        <li>
          <Link
            className={getLinkClass()}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={750}
          >
            <NavLink title="ABOUT" />
          </Link>
        </li>
        <li>
          <Link
            className={getLinkClass()}
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-200}
            duration={750}
          >
            <NavLink title="EXPERIENCE" />
          </Link>
        </li>
        <li>
          <Link
            className={getLinkClass()}
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={750}
          >
            <NavLink title="PROJECTS" />
          </Link>
        </li>
        <li>
          <Link
            className={getLinkClass()}
            activeClass="active"
            to="blog"
            spy={true}
            smooth={true}
            offset={-100}
            duration={750}
          >
            <NavLink title="BLOG" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function getLinkClass() {
  return "group py-2.5 flex items-center gap-3";
}

function NavLink({ title }: { title: string }) {
  return (
    <>
      <span className="w-8 h-[1px] bg-gray-600 block group-hover:w-16 transition-[width] group-hover:bg-blue-600 group-[.active]:bg-blue-600 group-[.active]:w-16"></span>
      <span className="group-hover:text-blue-600 group-[.active]:text-blue-600 tracking-wider">
        {title}
      </span>
    </>
  );
}

export default Navbar;
