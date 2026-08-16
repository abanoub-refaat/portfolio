import Link from "next/link";

interface Prop {
  title: string;
  link: string;
  isPrimary: boolean;
  download?: boolean;
}

export const LinkButton = ({ title, link, isPrimary, download }: Prop) => {
  const variantClasses = isPrimary
    ? "bg-[#20b98a] text-white hover:bg-[#1a9973]"
    : "bg-transparent border border-[#20b98a] text-[#20b98a] hover:bg-[#20b98a]/10";

  return (
    <Link
      title={title}
      href={link}
      download={download}
      className={`px-5 py-2.5 justify-center items-center rounded-lg font-medium transition-colors duration-150  w-47 ${variantClasses}`}
    >
      {title}
    </Link>
  );
};
