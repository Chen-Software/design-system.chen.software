"use client";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Box, Flex } from "../../../styled-system/jsx";
import type {
	DocConnectionQuery,
	DocQuery,
} from "../../../tina/__generated__/types";
import PostList from "../post-list";

interface ClientPageProps {
	query: string;
	variables: {
		relativePath: string;
	};
	data: DocQuery;
	postListData: DocConnectionQuery;
}

export default function Post(props: ClientPageProps) {
	// data passes though in production mode and data is updated to the sidebar data in edit-mode
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	});
	const content = data.doc.body;
	return (
		<Flex flexDirection="row" gap={4}>
			<Box minWidth={["128px", "196px", "256px", "320px", "384px"]}>
				<PostList data={props.postListData} sidebarMode={true} />
			</Box>
			<Box>
				<h1 data-tina-field={tinaField(data.doc, "title")}>{data.doc.title}</h1>
				<Box data-tina-field={tinaField(data.doc, "body")}>
					<TinaMarkdown content={content} />
				</Box>
			</Box>
		</Flex>
	);
}
