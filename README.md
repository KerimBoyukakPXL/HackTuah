# RED CROSS HIA HACKATHON CHALLENGE 

## About
Hello! 👋😁

We are team HACK TUAH

<img width="1197" alt="Scherm­afbeelding 2025-02-02 om 10 22 06" src="https://github.com/user-attachments/assets/a81957a5-7309-4c71-84e4-8db79d806f0a" />


This is our tool we made for "Het Rode Kruis Nederland" for the hackathon "Hack For Good, Den Haag" we attended. 🤩🇳🇱

The apps use is that you can ask a chatbot specific question instead of a confusing interface.
We trained the ai on the data from "Het Rode Kruis Nederland" and we trained it so well it doesnt hallucinate info about important things people in need might need.
This project was super fun to do as we learned a lot about AI and training models 📚


## Making the chatbot with RAG
We used RAG to make the chatbot hallucinate less. We gave it data in JSON to "ground" the model more. And after a couple of tries and giving the model even more relevant context we've found that the model gives correct information 99,999% of the time if we ask the questions that were given in the challenge. 

To give the model the best context we could find we used a webscraper for "Het Rode Kruis Nederland" website and the bot gives the sources as links so the user can click on it to make the UI/UX more human. 

The model we use is 
`llama2`

We chose this model because it is open source; We know about deepseek but we didnt need the advanced reasoning because we trained the ai with RAG.


## Hosting the chatbot on an AWS EC2

Because we are super fans of AWS we decided to host everything on an EC2 and not locally, at first we used our remaining school credits to fund the EC2 but after meeting our mentor at the Hackathon he gave us a nice machine to make the generating of the AI answers a lot faster!! (thank you so much) 🥺

## Frontend design

`figma link`

https://www.figma.com/design/eUC0rhcsmz3wJgoXQ1dz31/Untitled?node-id=0-1&p=f&t=2CD7lv41V9uIZdUB-0

We read through the deloitte powerpoint about the design and decided to stick to the original design but added a more modern touch to it 
Because the Hackathon was 48h the full implementation of the design was too time consuming and we decided to focus more on working code than a good design. If we had a full day more the app would look a lot more like the figma prototype 😸

## Powerpoint for our pitch

First time ever in our lives that we added a powerpoint to a github repository but in there you can find the powerpoint we used to pitch our project (if we got the chance 🥺)
