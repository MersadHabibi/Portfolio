import Image from "next/image";

export default function Arrow({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src={"/images/arrow.png"}
      alt="arrow"
      width={100}
      height={100}
    />
  );
}
