import React from 'react';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

export default function withQuery(WrappedComponent, QUERY, dataFields, componentPropsPassIn){
  return class extends React.Component {
    render() {
      return <Query query={QUERY}>
          {({ data, loading }) => {
            if (loading){
              return <div>Loading ...</div>;
            }
            const dataPassIn = dataFields.reduce((map, field) => {
              let nestedFields = field.split('.');
              let targetField = nestedFields[nestedFields.length - 1];
              let nestedValue = data;
              console.log(nestedFields);
              for(let nestedField of nestedFields){
                nestedValue = nestedValue[nestedField];
              }

              map[targetField] = nestedValue;
              return map;
            }, {});

            return (
              <WrappedComponent {...dataPassIn} {...componentPropsPassIn} />
            );
          }}
        </Query>;
    }
  };
}
