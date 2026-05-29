import Image from "next/image";
import type { CertificationIconId } from "@/app/data/portfolio";

const logos: Record<
  CertificationIconId,
  { src: string; alt: string; width: number; height: number; className: string }
> = {
  harvard: {
    src: "/icons/harvard-university.svg",
    alt: "Harvard University",
    width: 32,
    height: 37,
    className: "h-9 w-8",
  },
  google: {
    src: "/icons/google.svg",
    alt: "Google",
    width: 24,
    height: 24,
    className: "h-6 w-6",
  },
  ibm: {
    src: "/icons/ibm.svg",
    alt: "IBM",
    width: 48,
    height: 18,
    className: "h-5 w-10",
  },
  coursera: {
    src: "/icons/coursera.svg",
    alt: "Coursera",
    width: 24,
    height: 24,
    className: "h-6 w-6",
  },
};

export default function CertificationIcon({ id }: { id: CertificationIconId }) {
  const logo = logos[id];

  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      className={`object-contain ${logo.className}`}
      unoptimized
    />
  );
}
