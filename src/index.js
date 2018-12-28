import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import App from './App';

const WALDO_PHOTOS_PIZZA_URL = 'http://core-graphql.dev.waldo.photos/pizza';
const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: WALDO_PHOTOS_PIZZA_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache,
});

const store = configureStore();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
);
