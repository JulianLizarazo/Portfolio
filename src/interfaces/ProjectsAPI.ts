type Image = {
  alt: string;
};


type Technology = {
  name: string;
  icon: string;
};

export interface IProjectsAPI {
  name: string;
  images: Image;
  repo: string;
  website: string;
  technologies: Technology[];
}
