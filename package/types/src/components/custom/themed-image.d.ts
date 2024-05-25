import React from "react";
type ThemedImageProps = {
    darkImage: React.ReactNode | any;
    lightImage: React.ReactNode | any;
    alt: string;
    className?: string;
    rest?: object;
    width?: number;
    height?: number;
};
export default function ThemedImage({ darkImage, lightImage, alt, rest, className, width, height }: ThemedImageProps): React.JSX.Element;
export {};
