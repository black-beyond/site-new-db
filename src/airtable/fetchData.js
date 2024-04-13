import Airtable from 'airtable'

const base = new Airtable(
  { apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }
).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

function fetchData(path, callback) {
  base(path).select({
    view: 'Grid view'
  }).eachPage(records => {
    callback(records);
  });
}

export default fetchData;

/* NOTE */
//The API key and database ID live in the ".env" file in our root folder
//They're highly sensitive information and other things like Mailchimp, and our future Twitter/Paypal integration stuff will also live there
//It's fine to keep the .env file for development, but we will be taking the file out of the production build and we have to set up our own environment variables on our hosting platform.

//path: the name of the table we want to retrieve from the database. i.e. Schedule
//callback: the function we want to run with the records we receive.
//The function selects the table residing at the path given, 
//formatted as a JSON file with each row as an object in an array
//and then feeds it as a parameter to a function you should write
//in the component wheere you're using the fetchData function.
//see the function in use at App.js