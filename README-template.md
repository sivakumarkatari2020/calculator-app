# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)


## Overview

This is my solution to the "calculator app challenge" by Frontend Mentor and it takes a couple of hours to do it. And finally I did it and I wish to do more like this.

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference

I developed all these features in my project and you can experience it with my live-site URL down here.

### Screenshot

screenshot 1 - images/preview1.png
screenshot 2 - images/preview2.png

### Links

-- Working site URL(github repo) : https://github.com/sivakumarkatari2020/calculator-app
- Live Site URL: https://caculator-app.netlify.app/

**I deployed this project on Netlify for its simplicity.**

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JAVASCRIPT


### What I learned

While I building it I got stuck at switching themes.And it is not about two themes but it is for three themes with different color schemes,I confused and stop my work for days,then I got a idea about CSS variables. Hpw handy these are. I wrote all my CSS again with CSS variables and after refering internet I came to know that documentElement.style can access our CSS variables.I read an issue on STACKOVERFLOW about it and it helps me a lot.I used the 'setProperty' method to set the themes for different choices.


```css
:root{
    --primary : hsl(222,26%,31%);
    --secondary : hsl(223,31%,20%);
    --screen : hsl(224,36%,15%);

    --blue-key : hsl(225,21%,49%);
    --blue-key-sh : hsl(224,28%,35%);

    --tog-key : hsl(6,63%,50%);
    --tog-key-sh : hsl(6,70%,34%);

    --main-key : hsl(30,25%,89%);
    --main-key-sh : hsl(28,16%,65%);


    --text1 : #ffffff;
    --text2 : hsl(221,14%,31%);
    --text3 : #ffffff;
    --sp-text : #ffffff;
}
```
```js
 document.documentElement.style
    .setProperty('--primary', 'hsl(222,26%,31%)');
  document.documentElement.style
    .setProperty('--secondary', 'hsl(223,31%,20%)');
  document.documentElement.style
    .setProperty('--screen', 'hsl(224,36%,15%)');
```

I accessed variable values using documentElement.


### Useful resources

- (https://www.stackoverflow.com) - This platoform helped me a lot in querying some of the issues I faced and it always helped me. I really liked this pattern and will use it going forward.
- (https://developer.mozilla.org) - This is the best website where we found tons of tutorials and they provide indepth knowledge. I'd recommend it to anyone still learning this concept.


## Author

- Frontend Mentor - https://www.frontendmentor.io/profile/sivakumarkatari2020
- LinkedIn - https://www.linkedin.com/in/siva-kumar-katari-25519919a/
- Instagram - https://www.instagram.com/web_surfers_/
- Github - https://github.com/sivakumarkatari2020


## Acknowledgments

Finally I want to say thanks to my developer friends who helped me in making this. And thanks for your consideration!
