require('dotenv').config();
const cors= require('cors');

const {GraphQLServer } = require("graphql-yoga")
const { prisma } = require("../prisma/src/generated/prisma.client")
const Query = require("./resolvers/Query")
const Mutation = require("./resolvers/mutation")
// const Project = require("./resolvers/Projects")

const opts= {
  port: process.env.PORT,
}

const resolvers = {
    Query,
    Mutation,
    // Project
}

const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers,
    opts,
    context: request => ({
        ...request,
        prisma
    })
})

server.start(() => console.log(`Server is on port: ${opts.port}`))