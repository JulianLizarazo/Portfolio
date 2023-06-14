import { useTranslations } from "next-intl";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  const t = useTranslations("contact");
  return (
    <section
      id="contact"
      className="w-full mt-16  pb-40 flex flex-col items-center"
    >
      <h2 className="text-2xl text-center font-bold lg:text-4xl">
        {t("title")}
      </h2>
      <a
        className="w-[60%] max-w-[300px] lg:w-[900px] lg:h-[100px] h-20  flex items-center justify-evenly mt-16 cursor-pointer border border-solid rounded bg-light-blue border-light-brown text-light-white  dark:bg-dark-white dark:border-dark-gray dark:text-dark-black p-2 lg:bg-light-white lg:border-light-blue lg:text-light-blue lg:dark:bg-dark-black lg:dark:border-dark-white lg:dark:text-dark-white
        lg:hover:bg-light-blue lg:hover:border-light-brown lg:hover:text-light-white lg:dark:hover:bg-dark-white lg:dark:hover:border-dark-gray lg:dark:hover:text-dark-black"
        href="https://www.linkedin.com/in/julian-pinilla-76a11427b/"
        target="_blank"
      >
        <AiFillLinkedin className="w-12 h-12 lg:w-16 lg:h-16" />
        <span className="text-lg lg:text-2xl">Linkedin</span>
      </a>
    </section>
  );
};

export default Contact;
