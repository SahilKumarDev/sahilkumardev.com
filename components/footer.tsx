import Link from "next/link";

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 dark:text-white/60 tracking-wider text-nowrap">
        Made with ❤️ by Developer
        <span className="flex gap-x-2">
          <Link
            href={"https://sahilkumardev.netlify.app"}
            target="_blank"
            className="hover:no-underline dark:hover:text-white underline underline-offset-4"
          >
            Sahil Kumar Dev
          </Link>
          or
          <Link
            href={"https://buymeacoffee.com/sahilkumar.dev"}
            target="_blank"
            className="hover:no-underline dark:hover:text-white underline underline-offset-4"
          >
            buy me a coffee
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
