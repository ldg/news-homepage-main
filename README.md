# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Toggle the mobile menu (requires some JavaScript)

### Screenshot

![News Homepage Solution Screenshot](/assets/images/solution-screenshot.jpg)


### Links

- Solution URL: [News Homepage solution](https://ldg.github.io/news-homepage-main/)

## My process

My approach to this project was to first consider the markup I'd need to build out the website as outlined in design specifications. I knew I wanted to build it mobile-first, I chose to limit the breakpoints to generic sizes rather than try to support too many devices. In the previous projects I'd tried supporting too many devices and I found it got too complex for me to manage effectively. So with this project I decided to simplify things, and be successful within that scope. As an extra challenge for myself I included styles for tablets and wide-screen monitors as well as for phones and smaller desktop screens. 

On the tablet view I want outside the design specs and made some design decisions, making the blog-list items easier to navigate by simplifying their layout so they where more like cards. I did this because the challenge only specified desktop and mobile, so I thought since I'm adding this extra challenge to the project I'd give myself the flexibility to explore the layout a bit.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS

### What I learned

This project really helped me better understand the mobile-first work flow. In past projects I more naturally built from the desktop first and used media queries on smaller screens. Working through this project I could see the benifits of working mobile first. It's much more efficient, I found I spent less time struggling with getting layouts to work on different screen sizes because each layout builds upon the previous screensize's layout.

This was also my first experiance using Grid, in the past I've relied on Flex to manage layouts but I've found Grid to be quite wonderful so far.

I used SASS on this project, I found I needed to limit my use of partials rather than create a very structured series of nested .scss files. While I can see the benefit of nesting everything on larger website, I think for this project it was easier for me to keep track of styles with minimal partials.


### Continued development

In the short term I want to improve my understanding of vanilla Javascript, because I'd really like to explore React, and learn to work with static site generators. My primary experience is working with Wordpress, so I'd love to be able to move into using something like Gatsby with headless Wordpress. 

### Useful resources

- [The 100% correct way to do CSS breakpoints](https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862) - This article was very helpful in my understanding of setting media query breakpoints. I thought the approach outlined in the article made a lot of sense.

## Author

- Website - [Scott McIntire](https://ldgwebdesign.com)
- Frontend Mentor - [@ldg](https://www.frontendmentor.io/profile/ldg)

