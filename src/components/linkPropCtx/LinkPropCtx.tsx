import React from "react";
import Link, { LinkProps } from "next/link";

interface LinkPropCtxInterface extends LinkProps {
    href: string;
    content: string;
    target?: string;
    className?: string;
}

export default function LinkPropCtx({href, content, ...rest}: LinkPropCtxInterface) {
  return (
    <Link href={href} {...rest}> <span>{content}</span> </Link>
  );
}
