import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";


// const API_URL = 'http://devf.laziness.rocks:8000';
// const API_URL = 'https://dev-f-netflix-api.herokuapp.com';
// const API_URL = 'http://8631c47f.ngrok.io';
const API_URL = 'http://localhost:8000';

const httpLink = createHttpLink({
    uri: `${API_URL}/graphql`
});

const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('instagramToken');
    return {
        headers: {
            ...headers,
            // mode: 'no-cors',
            Authorization: token ? `JWT ${token}` : ''
        }
    }
});

export default new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});
