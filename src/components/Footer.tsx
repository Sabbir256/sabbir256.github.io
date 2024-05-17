function Footer() {
  return (
    <footer>
      <div className="text-sm text-zinc-500">
        Built with{" "}
        <a
          href="https://reactjs.org"
          className="font-medium text-zinc-800 transition-colors hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          React.js
        </a>
        ,{" "}
        <a
          href="https://www.typescriptlang.org"
          className="font-medium text-zinc-800 transition-colors hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript
        </a>
        , and{" "}
        <a
          href="https://tailwindcss.com"
          className="font-medium text-zinc-800 transition-colors hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
        . Website is hosted on GitHub{" "}
        <a
          href="https://pages.github.com/"
          className="font-medium text-zinc-800 transition-colors hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pages
        </a>
        . Design is inspired from the{" "}
        <a
          href="https://brittanychiang.com/"
          className="font-medium text-zinc-800 transition-colors hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brittany Chiang
        </a>
        . All text is set in the{" "}
        <a
          href="https://rsms.me/inter"
          className="font-medium text-zinc-800 transition-colors hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inter
        </a>{" "}
        typeface.
      </div>
    </footer>
  );
}

export default Footer;
