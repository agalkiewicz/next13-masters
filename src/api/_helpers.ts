import { type TypedDocumentString } from "@/gql/graphql";

export const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) throw new Error("Missing GRAPHQL_URL env variable");

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({ query, variables }),
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.GRAPHQL_API_KEY}`,
		},
	});

	type GraphqlResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlResponse = (await res.json()) as GraphqlResponse<TResult>;

	if (graphqlResponse.errors) {
		throw new Error("GraphQL error", { cause: graphqlResponse.errors });
	}

	return graphqlResponse.data;
};
