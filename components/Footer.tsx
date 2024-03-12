import "@/app/globals.css";
import Image from "next/image";
import ViewResume from "@/components/ViewResume";

interface ListItemProps {
  text: string;
  url?: string;
  svgPath: string;
}

const ListItem: React.FC<ListItemProps> = ({ text, url, svgPath }) => {
  return (
    <li className="flex">
      <Image src={svgPath} alt="" width={20} height={20} className=" mr-2" />
      <a href={url} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </li>
  );
};

export default function Footer() {
  const contactDetails = [
    {
      text: "inunice.work@gmail.com",
      url: "mailto:inunice.work@gmail.com",
      svgPath: "/icons/mail.svg",
    },
    {
      text: "https://github.com/inunice",
      url: "https://github.com/inunice",
      svgPath: "/icons/github.svg",
    },
    {
      text: "https://www.linkedin.com/in/inunice",
      url: "https://www.linkedin.com/in/inunice",
      svgPath: "../icons/linkedin.svg",
    },
  ];

  return (
    <div className="bg-bistre max-w-full px-[30px] py-[80px] flex flex-col items-center justify-center text-eggshell">
      <h1 className="mb-3 text-center">have a story to tell?</h1>
      <p className="max-w-[45vh] text-center mb-4">
        Ready to turn your narrative into a digital masterpiece? Let me help you
        bring it to life.
      </p>
      <ViewResume />
      <h2 className="mt-10">Let's connect!</h2>
      <ul className="flex gap-5 text-sm flex-wrap gap-y-1 justify-center underline underline-offset-4 decoration-reseda-green opacity-9">
        {contactDetails.map((item, index) => (
          <ListItem
            key={index}
            text={item.text}
            url={item.url}
            svgPath={item.svgPath}
          />
        ))}
      </ul>
    </div>
  );
}
