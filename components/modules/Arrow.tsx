import Image from "next/image";

export default function Arrow({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src={"/svg/arrow.svg"}
      alt="arrow"
      width={100}
      height={100}
    />
  );
}
