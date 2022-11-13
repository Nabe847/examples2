const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const courseService = require('./courseService');

const schema = buildSchema(`
  type Query {
    course(id: Int!): Course
    courses(topic: String): [Course]
  },
  type Mutation {
    updateCourseTopic(id: Int!, topic: String!): Course
  }
  type Course {
    id: Int
    title: String
    description: String
    topic: String
    url: String
  }
`);

const root = {
    course: courseService.getCourse,
    courses: courseService.getCourses,
    updateCourseTopic: courseService.updateCourseTopic,
};

module.exports = {
    graphqlApi: () =>
        graphqlHTTP({
            schema: schema,
            rootValue: root,
            graphiql: true,
        }),
};
