//Global configurations about Graphql Core functionality

import{ GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import path from "path";

export const server = new GraphQLServer({
    //estos type definitions estan en el schema.graphql
    typeDefs: path.join(__dirname, "graphql/schema.graphql"),
    resolvers
})

