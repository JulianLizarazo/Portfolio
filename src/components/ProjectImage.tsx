"use client";
import { useWindowSize } from "@/hooks/useWindowSize";
import Image from "next/image";
import { useEffect, useState } from "react";

type ProjectImageProps = {
  imageUrl: any;
  className: string;
  alt: string;
};

const ProjectImage = ({ imageUrl, className, alt }: ProjectImageProps) => {
  const [imageSrc, setImageSrc] = useState("");
  const { width } = useWindowSize();
  const importImage = async (image: string) => {
    let imageData;
    if (width > 1023) {
      imageData = await import(`../assets/${image}Desktop.png`);
    } else {
      imageData = await import(`../assets/${image}Mobile.png`);
    }
    setImageSrc(imageData?.default);
  };

  useEffect(() => {
    importImage(imageUrl);
  }, [imageSrc]);

  return (
    <>
      {imageSrc && (
        <Image src={imageSrc} className={className} alt={alt} priority={true} />
      )}
    </>
  );
};

export default ProjectImage;
