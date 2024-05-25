import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const buttonVariants: (props?: ({
    variant?: "link" | "secondary" | "destructive" | "default" | "outline" | "ghost" | "rLink" | null | undefined;
    align?: "center" | "default" | "end" | "start" | null | undefined;
    paddingV?: "lg" | "sm" | "default" | "none" | null | undefined;
    paddingH?: "lg" | "sm" | "default" | "none" | null | undefined;
    size?: "lg" | "sm" | "default" | "none" | "auto" | "icon" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
