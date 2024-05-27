import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";


export function StrapiImage({
  src,
  alt,
  height,
  width,
  className,
  priority,
  objectFit,
  sizes
  
}) {
  //if (!src) return null;
  const imageUrl = getStrapiMedia(src);

  const imageFallback = "/t-shirts.jpg";
  const altFallback = "Trøjer i forskellige farver som hænger på et stativ" 
    const fitValue = objectFit || "cover";
  return (
    <div style={{position:'relative', width:width, height:height}}>
        <Image
        style={{objectFit:fitValue}}
        priority={priority || false}
        src={imageUrl || imageFallback}
        alt={alt || altFallback}
        fill
        className={className}
        sizes={sizes}
        />
    </div>
  );
}