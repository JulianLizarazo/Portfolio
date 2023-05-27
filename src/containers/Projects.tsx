import { useTranslations } from "next-intl";

type ProjectsProps = {
    title: string,
}

const Projects = ({ title }: ProjectsProps) => {
    const t = useTranslations("projects");
    return(
        <section>
            <h2>{title}</h2>
            <section>
                
            </section>
        </section>
    )
};

export default Projects;