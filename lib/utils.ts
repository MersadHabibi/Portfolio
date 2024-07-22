import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function rand(a: number, b: number): number {
  return (
    (a +
      ((b - a + 1) * crypto.getRandomValues(new Uint32Array(1))[0]) / 2 ** 32) |
    0
  );
}
