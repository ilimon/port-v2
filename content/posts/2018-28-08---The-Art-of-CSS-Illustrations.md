---
title: The Art of CSS Illustrations
date: "2018-08-28T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/the-art-of-css-illustrations/"
category: "Discussion"
tags:
  - "Design"
  - "CSS"
  - "Web Development"
description: "If you follow me or have seen my work, you'll notice that CSS is a language..."
---

# Why Use CSS?
If you follow me or have seen my work, you'll notice that CSS is a language I love to use in almost every project/pen I do. This being because it is easily customizable and can easily be read by other developers to change to their liking. Yes there are Javascript libraries for making shapes and animations but why make it harder on yourself? You can check out my [Intro to CSS](https://codepen.io/cluzier/post/introduction-to-css) if you're interested in learning the basics before reading the rest of this article.

# It's Easier then it looks
Using CSS to make illustrations is easy if you think of it like this. Almost all images, designs, drawings are made up of simple shapes, lines and mixtures of colors, depending on the subject. CSS allows the developer to place different divs/elements on top of each other. You can do this using ```z-index``` . By using ```z-index``` you can move divs/elements to different layers of your page. You can read more about div position [here](https://www.w3schools.com/cssref/pr_pos_z-index.asp). A quick exercise you can try to see how easily you can make a image/object out of shapes is to think of something and draw it out on a piece of paper using simple shapes. You'll be surprised how much easier this makes the process and it shows you how many divs you will eventually need. Here is an example:

```CSS
.div {
position: relative;
z-index: 1;
height: 10px;
width: 10px;
background: red;
}
```

Here is a Pure CSS image using just 4 divs and 1 animation called a ```@keyframe``` which I will cover in another post. 

<iframe height="300" style="width: 100%; display: flex; align-content: center;" scrolling="no" title="Pure CSS Popsicle" src="//codepen.io/cluzier/embed/preview/djErEQ/?height=300&theme-id=33073&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/cluzier/pen/djErEQ/'>Pure CSS Popsicle</a> by Conner
  (<a href='https://codepen.io/cluzier'>@cluzier</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

# Using it to your advantage
Not many people know the power that CSS has to offer, and by learning how to style a website or create a illustration using Pure CSS it can set you ahead of the game when coding a website or showing off what you can do to a page to grab a viewer's attention.