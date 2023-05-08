import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const link = createHttpLink({
    uri: 'http://localhost:3001/graphql',
    credentials: 'include'
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});

export default client;