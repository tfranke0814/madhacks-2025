const config = require('../config/config');
const OpenAI = require('openai');

const client = new OpenAI();

model = config.OPENAI_TEXT_MODEL;

async function generateText(prompt) {
  const response = await client.responses.create({
    model: model,
    input: prompt
  });
  console.log(response);
}

module.exports = generateText;