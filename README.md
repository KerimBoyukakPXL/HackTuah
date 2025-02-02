# HackTuah

Hello! 

This is our open source project for a hackathon we attended.

The apps use is that you can ask a chatbot specific question instead of a confusing interface.
We trained the ai on the data from "Het Rode Kruis Nederland" and we trained it so well it doesnt hallucinate info about important things people in need might need.
This project was super fun to do as we learned a lot about AI and training models


## Making the chatbot with RAG
We used RAG to make the chatbot hallucinate less. We gave it data in JSON to "ground" the model more. And after a couple of tries and giving the model even more relevant context we've found that the model gives correct information 99,999% of the time if we ask the questions that were given in the challenge. 

To give the model the best context we could find we used a webscraper for "Het Rode Kruis Nederland" website and the bot gives the sources as links so the user can click on it to make the UI/UX more human.

The model we use is 
`llama2`

We chose this model because it is open source; We know about deepseek but we didnt need the advanced reasoning because we trained the ai with RAG.


## Hosting the chatbot on an AWS EC2



## API CALLS TO THE EC2

## Frontend design
