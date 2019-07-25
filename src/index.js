const { GraphQLServer } = require('graphql-yoga');

let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'fullstack tutorial for graphql'
}]

let idCount = links.length;

const resolvers = {
    Query: {
        info: () => `This is an API practice test`,
        feed: () => links,
    },
    Mutation: {
        post: (parents, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }
            links.push(link);
            return link;
        },
    }
}

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
});

server.start(() => {
    console.log(`Server is running on http:///localhost:4000`);
});

