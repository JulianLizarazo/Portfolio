import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const ContactButtons = () => {
  return (
    <div className="w-full h-[8rem] flex items-center justify-around">
      <a className="flex items-center gap-1 border border-solid rounded bg-light-blue border-light-brown text-light-white  dark:bg-dark-white dark:border-dark-gray dark:text-dark-black p-2">
        <AiFillGithub className="w-10 h-10" />
        <span>Github</span>
      </a>
      <a className="flex items-center gap-1 border border-solid rounded bg-light-blue border-light-brown text-light-white dark:bg-dark-white dark:border-dark-gray dark:text-dark-black p-2">
        <AiFillLinkedin className="w-10 h-10" />
        <span>Linkedin</span>
      </a>
    </div>
  );
};

export default ContactButtons;
