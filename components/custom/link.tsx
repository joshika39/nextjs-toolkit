import NextLink from "next/link";
import React from "react";

type CustomLinkProps = {
  children: React.ReactNode;
  ariaLabel?: string;
  href: string;
  target?: string;
}

export default function Link({children, ...props}: CustomLinkProps) {
  const getLabel = () => {
    if (props.ariaLabel) {
      return props.ariaLabel
    }

    if (typeof children === "string") {
      return children
    }
    return "Link"
  }
  return (
    <>
      <NextLink {...props} aria-label={getLabel()}>
        {children}
      </NextLink>
    </>
  )
}