import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
/**
 * merges class names with tailwind classes
 * @param classNamesInput - class names to be merged
 * @returns
 */
export function cn(...classNamesInput: ClassValue[]): string {
   return twMerge(clsx(classNamesInput));
}
