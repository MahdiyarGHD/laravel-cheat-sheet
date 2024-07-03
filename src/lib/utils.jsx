import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function isNullOrEmpty(str) {
  return !str || str.trim().length === 0;
}