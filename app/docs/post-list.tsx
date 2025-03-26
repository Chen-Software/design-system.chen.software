import { Box } from "../../styled-system/jsx";
import Link from "../components/Link";

export default function PostList(props) {
	return (
		<>
			<h1>Documentation</h1>
			<Box>
				{props.data.docConnection.edges.map((post) => (
					<Box key={post.node.id}>
						<Link href={`/docs/${post.node._sys.filename}`}>
							{post.node.title}
						</Link>
					</Box>
				))}
			</Box>
		</>
	);
}
