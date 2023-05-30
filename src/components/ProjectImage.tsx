import Image from "next/image";
import { useEffect, useState } from "react";

type ProjectImageProps = {
    imageUrl: any,
    className: string,
    alt: string
}

const ProjectImage = ({ imageUrl, className, alt }: ProjectImageProps) =>  {
    const [imageSrc, setImageSrc] = useState("");
    const importImage = async (image: string) => {
       
      const imageData = await import(`../assets/${image}.png`);
  
      setImageSrc(imageData.default);

    };
  
    useEffect(() => {
      importImage(imageUrl);
    }, []);
  
    return <Image src={imageSrc} className={className} alt={alt} priority={true} />;
}

export default ProjectImage;