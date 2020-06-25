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

  /**
   * TODO(developer): UPDATE these variables before running the sample.
   */
  // projectId: ID of the GCP project where Dialogflow agent is deployed
  const projectId = 'boredgames-eonagp';
  // sessionId: String representing a random number or hashed user identifier
  const sessionId = '123456';
  // queries: A set of sequential queries to be send to Dialogflow agent for Intent Detection
  const queries = [
    'Reserve a meeting room in Toronto office, there will be 5 of us',
    'Next monday at 3pm for 1 hour, please', 'Tell the bot when the meeting is taking place',
    'B', 'Rooms are defined on the Dialogflow agent, default options are A, B, or C'
  ]
  // languageCode: Indicates the language Dialogflow agent should use to detect intents
  const languageCode = 'en';

  // Imports the Dialogflow library
  const dialogflow = require('@google-cloud/dialogflow');

  // Instantiates a session client
  const sessionClient = new dialogflow.SessionsClient();

  async function detectIntent(
    projectId,
    sessionId,
    query,
    contexts,
    languageCode
  ) {
    // The path to identify the agent that owns the created intent.
    const sessionPath = sessionClient.projectAgentSessionPath(
      projectId,
      sessionId
    );

    // The text query request.
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: query,
          languageCode: languageCode,
        },
      },
    };

    if (contexts && contexts.length > 0) {
      request.queryParams = {
        contexts: contexts,
      };
    }

    const responses = await sessionClient.detectIntent(request);
    return responses[0];
  }

  async function executeQueries(projectId, sessionId, queries, languageCode) {
    // Keeping the context across queries let's us simulate an ongoing conversation with the bot
    let context;
    let intentResponse;
    for (const query of queries) {
      try {
        console.log(`Sending Query: ${query}`);
        intentResponse = await detectIntent(
          projectId,
          sessionId,
          query,
          context,
          languageCode
        );
        console.log('Detected intent');
        console.log(
          `Fulfillment Text: ${intentResponse.queryResult.fulfillmentText}`
        );
        // Use the context from this response for next queries
        context = intentResponse.queryResult.outputContexts;
      } catch (error) {
        console.log(error);
      }
    }
  }
  executeQueries(projectId, sessionId, queries, languageCode);

  res.json('hi from server.js');

});

app.get('/https://www.giantbomb.com/api/games/?api_key=0e5c263be7a96b8df205c354017ca71730b176c5&format=json&field_list=name,image', (req, res) => {
  console.log('API present');
  res.json('Webhook notified');
})


app.get("/trial", (req, res) => {
  console.log('Trial Successful');
  res.json('Got it');
});

app.post("/trial", (req, res) => {
  console.log('Made it to server');
  res.json('Roger Roger');
});

app.listen(port, (req, res) => {
  console.log(`Server is running: ${port}`);
});
