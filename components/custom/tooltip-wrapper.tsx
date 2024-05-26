import React from "react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "../ui/tooltip";

type TooltipProps = {
  children: React.ReactNode
  content: string
  className?: string
  asChild?: boolean
}

export default function TooltipWrapper({children, content, className, asChild}: TooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
        <TooltipContent>
          <div className={className}><p>{content}</p></div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}