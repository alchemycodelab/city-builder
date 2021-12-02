## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this?** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)


```js
const parentThing = 7;

addButton.addEventListener('click', () => {
    const childThing = 2;

    console.log('A child says: ', parentThing);
    console.log('B child says: ', childThing);
});

// things defined inside a function are not accessible outside the function
console.log('C parent says: ', parentThing);
console.log('D parent says: ', childThing);
```

## HTML Setup
1) Three dropdowns
  - Why? We can tell which picture the user selected.
  - How? 
    - `dropdown.addEventListener('change', () => {})`
    - `dropdown.value` to get the selected image
2) Three images
  - Why? To display the select image
  - How? `myImg.src = './assets/${some-image}.jpeg'`
3) Input
  - Why? User can type in a slogan
  - How? 
    - `const slogan = myInput.value`
    - `myArray.push(slogan)`
4) Button
  - Why? Submit a slogan
  - How? `button.addEvenListener('click', () => {})`
5) Div for slogans
  - Why? A place to hold/inject slogans
  - Use the `display a list` pattern from earlier
6) Div for counts
  - Why? A place to hold how many times each dropdown was used


## Events
on change of any dropdown
  - the corresponding image will change
    - get the value from the dropdown element
    - use that value to change the correct image tag's `.src` property
  - the count of that dropdown will increment
    - skylineCount++
    - change the DOM to update the new count
on click of the button
  - get the slogan from the input.value
  - push the slogan to our array of slogans
  - update the DOM
    - clear out the old slogans from the DOM (immutable)
    - loop through slogan array
    - append each slogan

## Ideas for strech goals
- Add the option for the user to name the city and store the name in state. Display that name in big letters at the top. Additionally, when displaying slogans, every slogan should have the name of the city concatenated before it, like so: 'Portland: the city that works!', 'Portland: the big apple'.
- Make three arrays of objects of this kind of shape: `[ { display: "Future City", value: "1" },  { display: "Big City", value: "2" },  { display: "Small City", value: "3"  ]`. Now, instead of hard coding your dropdown options, generate them dynamically by looping over these arrays.
- Wrap the slogan input and button in a `form` tag and use a `'submit'` handler with the `new FormData()` constructor to get data from the input. (Hint: Look up `e.preventDefault()` and why it's useful in this case)
- Use a radio button (probably the most challenging form input) to change between 'night mode' and 'day mode'. When in night mode, only show images of night-time and vice-versa.
- Add a selectable background noise to your city (traffic, birds, coffeeshop, for example)
- In addition to keeping track of the number of times each dropdown was changed, keep track of (and display to the user) a "history" of those changes.

| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------| ----------: |
| Visit the deployed pages on GitHub pages, with link in the About section of the Github repo |    2 |

| Events . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Select from at least three dropdowns (i.e. waterfront, skyline, castle) positioned left to right) with at least three options each                |           2 |
| Three images displayed on the page. On choosing an option from the dropdown and see the change reflected in the UI with a new images (images are positioned left to right, https://pixabay.com/ is a good source for free images) |     2 |
| When submitting a slogan, add it to an array of slogans, clear the current DOM's list of slogans, and list all slogans a `p` tags in the DOM         |           4 |
| See displayed how many times each dropdown has been changed in the current session. Should report on all 3 dropdowns in the same div   |           4 |

| Functions                                                              |             |
| :----------------------------------------------------------------------------------- | ----------: |
| PURE with TDD: `createCountString(waterfrontCount, skylineCount, castleCount) : returns a string describing the current count of each piece of state supplied as an argument` | 2 |
| IMPURE: `displayStats()` | 2 |
| IMPURE: `displaySlogans() : clears DOM, loops through slogans, displays slogans on the page` | 2 |


