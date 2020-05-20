# The RomCom Gents
## Contributors
-Ben McClung (GitHub: [AurumValian](https://github.com/AurumValian))

-Joe Varela (GitHub: [jobbotrock](https://github.com/jobbotrock))

-Casey Dallavalle (GitHub: [cbdallavalle](https://github.com/cbdallavalle))

## Overview

This was our first group project in Mod-1, which focused on implementing the skills we learned during our first two weeks as Turing students. 

+ Our project entailed building a functional web-based app using the principles we have learned about JavaScript, HTML, CSS, and DOM manipulation.

+ Team RomCom Gents included contributions from Turing students Ben McClung and Joe Varela and was supervised by our scrum lead Casey Dallavalle. 

## Planning 

+ We implemented best practices by conducting our initial Define the Relationship (DTR) interview, which consisted of laying out our learning goals for the project, timelines, systems and resources, and defining each partner’s strengths weaknesses.
Throughout the entirety of the project, we implemented agile practices by using Git and GitHub as our version control systems and Trello to manage our project tasks and milestones. 
During our planning phase, we pinpointed several different learning goals for each team member, and we successfully made progress towards those goals during each work session.

## Progression

5/13/20: We created our initial commit to our project and completed our Day One deliverables. 

5/14/20: Completed our Iteration-0 and Iteration-1 project milestones. For Iteration-0, we created an ‘onload’ event listener which enables users to generate a random cover image, title, and keyword tag-lines. For Iteration-1, we followed the same process as our previous iteration; however, this time we used a click event listener and paired it to our “Show New Random Cover” button.

![The Home Page showing a random cover](https://user-images.githubusercontent.com/62782385/82392845-191a7d80-9a02-11ea-8448-ac45451b9ae0.png)

5/15/20: As we started Iteration-2, Ben found a ‘,’ in the data.js file, which caused an empty array index, and we removed it. From there, we created several DOM variables and event triggers which culminated in display-changing functionality, thereby completing Iteration-2. One successful method for us was to create “on” and “off” debug functions that would show or hide all of the elements listed on the web page. Upon completion of this step, all of our buttons except one had functioning capabilities. 

5/16/20: At the start of Iteration-3, we took some time refactoring our main.js file in order to foster developer empathy. During this step, we learned how to capture user inputs, such as string and image data, and render them to the DOM. This was also where we encountered our biggest challenge: although we were able to create viewing functionality with our “Create New Cover” button, our user inputs were not being rendered to the DOM.

5/18/20: During this step, we reached out to our cohort colleague, Leigh Larson, and she was able to walk us through refactoring our code so that we could save our user’s inputs and display them on the main view of our website. With that, we put the final touches on Iteration-3. From there, we worked on refactoring and polishing our code presentation.

## Iterations

For future iterations, we would like to create functionality for the “Save Cover”  button. The button would save the cover and show it on the “View Saved Covers” display. It would only save a single copy of any cover. We also would like to implement deletion of saved covers, where if the user double-clicks on a cover in the “View Saved Covers” section, it will be deleted.
