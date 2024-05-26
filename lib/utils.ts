import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import React from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Checks if the current environment is development
 *
 * @param env - The environment to check. Usually `process.env.ENV`
 */
export function isDevelopment(env?: string) {
  if (!env) {
    return true;
  }

  return env === "development";
}

/**
 * Returns the component if the environment is development
 *
 * @param node - The component to return
 * @param env - The environment to check. Usually `process.env.ENV`
 * @param returnIfProduction - If true, returns the component if the environment is production
 */
export const getComponent = (node: React.ReactNode, env?: string, returnIfProduction: boolean = false): React.ReactNode | null  =>{
  if (isDevelopment(env)) {
    return returnIfProduction ? null : node;
  }

  return returnIfProduction ? node : null;
}

/**
 * Logs the given arguments if the environment is development
 *
 * @param env - The environment to check. Usually `process.env.ENV`
 * @param args - The arguments to log
 */
export const log = (env?: string, ...args: any[]) => {
  if (isDevelopment(env)) {
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