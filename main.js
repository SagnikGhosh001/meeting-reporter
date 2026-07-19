import { callOllama } from "./src/call-ollama.js";
import { createHtmlPrompt, createSummaryPrompt } from "./src/prompts.js";

const transcript = `
aof-xspt-phw (2026-07-19 20:57 GMT+5:30) - Transcript
Attendees
Sagnik Ghosh, Santo K M, Yash Gairola
Transcript
Sagnik Ghosh: ing but later on we will make the summary into PDF format in a newspaper style and…
Yash Gairola: But later on something automatically Okay.
Sagnik Ghosh: those thing and for that chat GP will charge us some money we need premium version we need that thing but if we build it on our own we have something like customization and other stuff and I am planning to build a web book after meeting end automatically it will get the transcription and it will generate it so we don't need to manually copy past a transcript structure. So for the first MB, we'll only try to get the transure and manually do it. Yeah.
Santo K M: in Delhi. Yes. Yeah.
Yash Gairola: Nothing.
Santo K M: What is happening in Delhi? Yes. Going on the Tell man.
Yash Gairola: It's positive. you explain how are you planning to create a hook and where are you going to inject the hook? I'm not understanding that part.
Santo K M: Sorry.
Yash Gairola: I'm asking you…
Yash Gairola: how you going to make a hook and where are you going to inject it? is there some technology which you use for it?
Santo K M: technology in the sense we are just using chat GPT for the default AI available in meat for the transcription we'll use GPT for summarizing it…
Santo K M: then afterwards we'll just feed it to G gemini for creating a newspaper style design PDFs and
Yash Gairola: So why…
Santo K M: So why?
Yash Gairola: why are you doing this?
Santo K M: This helps us keep the connection between our staff people. So everyone knows what everyone is up to, what they are.
Yash Gairola: Cool.
Santo K M: So it helps with the interconnectivity between people.
Yash Gairola: 
Yash Gairola: Cool. So you want to make newspaper reports for each person Santa is on the train center is trying to maybe.
Santo K M: No, we are not going to send it personally. We are going to publish it publicly. Yeah.
Yash Gairola: That's nice. then it will be cool if it has some funny things and everything. It will be cool if will it have headlines like center is on run he's trying to build this this is catchy headlines.
Sagnik Ghosh: Yeah, any element but before that we need a good platform which can give us a accurate transcription because we tried earlier with zoom also and need also it's not giving us a accurate one. It giving some fake No,…
Yash Gairola: So the chargity give the tibility can do the job for matching the puzzles, It can predict what person is saying.
Sagnik Ghosh: it's not even close to what we are saying. It's not even close.
Yash Gairola: Okay, there must be some transcripttor tool.
Yash Gairola: Did you try that transcription to Okay,…
Sagnik Ghosh: Yes,…
Sagnik Ghosh: there are built-in transcription.
Santo K M: We are using that because we can't actually add transcription tools from external to the meat.
Yash Gairola: Now I will leave. I have script for
Santo K M: Okay, cool, man. See you.
Meeting ended after 00:05:02 👋
This editable transcript was computer generated and might contain errors. People can also change the text after it was created.

`;

console.log("creating summary prompt");
const summaryPrompt = createSummaryPrompt(transcript);
console.log("creating the article");
const article = await callOllama(summaryPrompt);
console.log(article);

console.log("creating html prompt");
const htmlPrompt = createHtmlPrompt(
    article,
    new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }),
);
console.log("creating the html");
const html = await callOllama(htmlPrompt);

Deno.writeTextFileSync(
    `./results/newspaper-${new Date().toISOString()}.html`,
    html,
);
