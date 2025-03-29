import NextLink from "next/link";
import React, { createElement as h } from "react";
import { styled } from "../../../styled-system/jsx";
import { link } from "../../../styled-system/recipes";
import type { HTMLStyledProps } from "../../../styled-system/types";

const BaseLink = React.forwardRef<
	HTMLLinkElement,
	React.LinkHTMLAttributes<HTMLLinkElement> & {
		children?: React.ReactNode;
	}
>(({ ...props }, ref) => {
	return h(NextLink, { ref, ...props }, props.children);
});
BaseLink.displayName = "Link";

export const Link = styled(BaseLink, link);
export type LinkProps = HTMLStyledProps<typeof Link>;
export default Link;
