import React from "react";
type HeroHighlightProps = {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
};
export declare const HeroHighlight: ({ children, className, containerClassName }: HeroHighlightProps) => React.JSX.Element;
type HighlightProps = {
    children: React.ReactNode;
    className?: string;
};
export declare const Highlight: ({ children, className }: HighlightProps) => React.JSX.Element;
export {};
