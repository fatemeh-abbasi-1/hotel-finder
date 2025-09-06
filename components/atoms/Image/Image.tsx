import NextImage from "next/image";

import { ImageProps } from "./type";

const Image = ({ src, alt = "",width,height }: ImageProps) => {
  return <NextImage alt={alt} src={src} className='rounded-3xl' width={width} height={height}/>;
};

export default Image;
