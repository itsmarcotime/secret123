const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Menu {
        _id: ID
        menuText: String
        menuPrice: Int
    }

    type Query {
        menus: [Menu]
    }
`;

module.exports = typeDefs; 