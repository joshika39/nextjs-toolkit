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