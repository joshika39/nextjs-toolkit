import React from "react";
type CardProps = {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
};
export declare const CardContainer: ({ children, className, containerClassName }: CardProps) => React.JSX.Element;
type CardBodyProps = {
    children: React.ReactNode;
    className?: string;
};
export declare const CardBody: ({ children, className }: CardBodyProps) => React.JSX.Element;
type CardImageProps = {
    as?: React.ElementType;
    children: React.ReactNode;
    className?: string;
    translateX?: number | string;
    translateY?: number | string;
    translateZ?: number | string;
    rotateX?: number | string;
    rotateY?: number | string;
    rotateZ?: number | string;
    [key: string]: any;
};
export declare const CardItem: (props: CardImageProps) => React.JSX.Element;
export declare const useMouseEnter: () => [boolean, React.Dispatch<React.SetStateAction<boolean>>];
export {};
