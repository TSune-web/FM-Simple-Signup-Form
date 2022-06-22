# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![FM-Signup_form](./solutions/FM-Sign_up_form_desktop.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

```css - Adjacent sibling combinator "+"
form.submitted .form__field--input:invalid + .form__field--error {
  display: block;
  float: right;
  font-style: italic;
  font-size: 0.75rem;
  color: var(--red);
  transform: translateY(-0.5rem);
}
```

```js
function isFormFieldNotValid(formField) {
  return !formField.checkValidity();
}
```

### Continued development

1. Rendering images

- At the start of this project, I struggled with how images should be rendered like, "Is it better from HTML using img tags" or "Is it better via css background-image". I'll continue to learn more about image rendering and to have control over manipulating background styling.

2. Validation

- I couldn't figure out the logic of validating form fields. I'll try to see different approaches and gain a better understanding of the core logic of validation using JavaScript.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/) - This helped me understand css selectors better. I also learned some JavaScript methods on the DOM elements.
