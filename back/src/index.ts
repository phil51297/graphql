import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';
 
const typeDefs = gql`
  type Doctor {
    name: String
    speciality: Speciality
  }
 
  enum Speciality {
    PSYCHOLOGIST
    OPHTALMOLOGIST
  }

   # ...
 type Query {
   doctors: [Doctor]
 }
 # ...
`;

const doctorsData = [
  {
    name: 'Samia Mekame',
    speciality: 'OPHTALMOLOGIST',
  },
  {
    name: 'Catherine Bedoy',
    speciality: 'PSYCHOLOGIST',
  },
];

const resolvers = {
 Query: {
   doctors: () => doctorsData,
 },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
 
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
 
console.log(`🚀  Server ready at: ${url}`);