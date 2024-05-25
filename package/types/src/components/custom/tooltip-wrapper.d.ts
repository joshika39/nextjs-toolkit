import React from "react";
type TooltipProps = {
    children: React.ReactNode;
    content: string;
    className?: string;
    asChild?: boolean;
};
export default function TooltipWrapper({ children, content, className, asChild }: TooltipProps): React.JSX.Element;
export {};
