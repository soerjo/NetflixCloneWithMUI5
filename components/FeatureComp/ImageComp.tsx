import React from "react";
import Image from "next/image";

const ImageComp = ({
  imageSrc = "/_image/tv.png",
}: {
  imageSrc: string | undefined;
}) => {
  return (
    <Image
      src={imageSrc}
      alt="tv"
      width={640}
      height={480}
      layout="responsive"
    />
  );
};

export default ImageComp;
