"use strict";
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());





const dialogflow = require('dialogflow');
const uuid = require('uuid');
const projectId = 'boredgames-eonagp';
/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runSample(projectId) {
  // A unique identifier for the given session
  const sessionId = uuid.v4();

  // Create a new session
  const sessionClient = new dialogflow.SessionsClient();
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: 'hello',
        // The language used by the client (en-US)
        languageCode: 'en-US',
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log(`  No intent matched.`);
  }
}
app.get("/", (req, res) => {
  console.log('request sent to server');

  // runSample(projectId).then((res) => {
  //   console.log('response from dialogflow', res);
  // })
  res.json('hi from server.js');

});
app.get("/trial", (req, res) => {
  console.log('Trial Successful');
  res.json('Got it');
});

app.listen(port, (req, res) => {
  console.log(`Server is running: ${port}`);
});
