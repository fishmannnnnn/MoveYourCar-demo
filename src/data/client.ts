import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    link: new HttpLink({
        fetch,
        uri: `https://myc.fractal-web.com/graphql`,
    }),
    cache: new InMemoryCache(),

    // Disable GraphQL cache
    defaultOptions: {
        query: {
            fetchPolicy: 'no-cache',
        },
    },
})
