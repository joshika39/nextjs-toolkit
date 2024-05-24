import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import React from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Checks if the current environment is development
 */
export function isDevelopment() {
  return process.env.ENV === "development";
}

export const getComponent = (node: React.ReactNode, returnIfProduction: boolean = false): React.ReactNode | null  =>{
  if (isDevelopment()) {
    return returnIfProduction ? null : node;
  }

  return returnIfProduction ? node : null;
}

export const log = (...args: any[]) => {
  if (isDevelopment()) {
    console.log(...args);
  }
}

/**
 * ASCII to Unicode (decode Base64 to original data)
 * @param {string} b64
 * @return {string}
 */
export function atou(b64: string): string {
  return decodeURIComponent(atob(b64));
}

/**
 * Unicode to ASCII (encode data to Base64)
 * @param {string} data
 * @return {string}
 */
export function utoa(data: string): string {
  return btoa(encodeURIComponent(data));
}
