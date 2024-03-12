import "@/app/globals.css";

interface ListItemProps {
  text: string;
  url?: string;
}

const ListItem: React.FC<ListItemProps> = ({ text, url }) => {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </li>
  );
};

export default function Footer() {
  const contactDetails = [
    { text: "inunice.work@gmail.com", url: "mailto:inunice.work@gmail.com" },
    { text: "https://github.com/inunice", url: "https://github.com/inunice" },
    {
      text: "https://www.linkedin.com/in/inunice",
      url: "https://www.linkedin.com/in/inunice",
    },
  ];

  return (
    <div className="bg-bistre max-w-full h-screen flex flex-col items-center justify-center text-eggshell">
      <h1>have a story to tell?</h1>
      <p>
        Ready to turn your narrative into a digital masterpiece? Let me help you
        bring it to life.
      </p>
      <h2>Let's connect!</h2>
      <ul>
        {contactDetails.map((item, index) => (
          <ListItem key={index} text={item.text} url={item.url} />
        ))}
      </ul>
    </div>
  );
}
