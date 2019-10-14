const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();
const PORT = 4000;

mongoose.connect(
  'CONNECTION_STRING'
);

mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
