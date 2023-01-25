const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Author {
        name: String!
        description: String
    }

    type Book {
        _id: ID!
        image: String
        link: String
        title: String!
    }
    `;

module.exports = typeDefs;