import { Text } from "./text";

export const Paragraph = (props) => (
	<Text as="p" {...props}>
		{props?.children}
	</Text>
);

export * from "./text";
