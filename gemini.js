require("dotenv").config();
const { generateText } = require("ai"); 
const { google } = require("@ai-sdk/google");
let env = process.env;
// console.log(env.GOOGLE_GENERATIVE_AI_API_KEY);

const Consulting = async (prompt) => {
    const { text } = await generateText({
        model: google("models/gemini-1.5-pro-latest"),
        prompt: `${prompt}`,
        apiKey:env.GOOGLE_GENERATIVE_AI_API_KEY
    });
    // console.log(text);
    return text;
}

module.exports = {
    Consulting
};