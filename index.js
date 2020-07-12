'use strict'

const { graphql, buildSchema } = require('graphql');

// Define schema
const schema = buildSchema(`
    type Query {
        hello: String,
        saludo: String
    }
`);

// Configurate the "resolvers"
const resolvers = {
    hello: () => 'Hola Mundo',
    saludo: () => 'Peter choro mota'
};

// Execute the query
graphql(schema, `{ hello, saludo }`, resolvers)
    .then(data => {
        console.log(data)
    })