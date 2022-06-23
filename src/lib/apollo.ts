import { ApolloClient,DefaultOptions, InMemoryCache } from "@apollo/client";

// export const client = new ApolloClient({
//     uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ouo2yf10d401xt9rqv512z/master',
//     cache: new InMemoryCache()
// })
const defaultOptions: DefaultOptions = {

    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  };
  
  export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ouo2yf10d401xt9rqv512z/master',
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
  });