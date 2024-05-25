import React from "react";
export declare const bentoTransition = "group-hover/bento:translate-x-2 group-hover/bento:translate-y-1 transition duration-200";
type BentoCardProps = {
    className?: string;
    children?: React.ReactNode;
    hasShadow?: boolean;
};
export declare const BentoCard: ({ className, hasShadow, children }: BentoCardProps) => React.JSX.Element;
type BentoGridProps = {
    className?: string;
    children?: React.ReactNode;
    height?: string;
};
export declare const BentoGrid: ({ className, children, height }: BentoGridProps) => React.JSX.Element;
export declare const TwoColBentoGrid: ({ className, children, height }: BentoGridProps) => React.JSX.Element;
export declare const ThreeColBentoGrid: ({ className, children, height }: BentoGridProps) => React.JSX.Element;
type CardGridItemProps = {
    className?: string;
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    extra?: React.ReactNode;
    iconSize?: "sm" | "md" | "lg";
};
export declare const CardGridItem: ({ className, title, description, icon, extra, iconSize }: CardGridItemProps) => React.JSX.Element;
type BentoGridItemProps = {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    scrollable?: boolean;
};
export declare const HeaderGridItem: ({ className, title, description, header, icon }: BentoGridItemProps) => React.JSX.Element;
export declare const ReverseHeaderGridItem: ({ className, title, scrollable, description, header, icon }: BentoGridItemProps) => React.JSX.Element;
export {};
