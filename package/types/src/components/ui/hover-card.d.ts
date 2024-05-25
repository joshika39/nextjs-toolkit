import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { type VariantProps } from "class-variance-authority";
declare const HoverCard: React.FC<HoverCardPrimitive.HoverCardProps>;
declare const HoverCardTrigger: React.ForwardRefExoticComponent<HoverCardPrimitive.HoverCardTriggerProps & React.RefAttributes<HTMLAnchorElement>>;
declare const hoverCardContentVariants: (props?: ({
    size?: "lg" | "sm" | "default" | "xl" | "xxl" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface HoverCardContentProps extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>, VariantProps<typeof hoverCardContentVariants> {
}
declare const HoverCardContent: React.ForwardRefExoticComponent<HoverCardContentProps & React.RefAttributes<HTMLDivElement>>;
export { HoverCard, HoverCardTrigger, HoverCardContent, hoverCardContentVariants };
