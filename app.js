const skylineDropdown = document.querySelector('#skyline-dropdown');
const skylineImageEl = document.querySelector('#skyline-image');
const sloganInputEl = document.querySelector('#slogan-input');
const sloganButton = document.querySelector('#slogan-button');
const sloganListEl = document.querySelector('.list');
const countEl = document.querySelector('.count'); 

let skylineCount = 0;
let sloganArray = [];

skylineDropdown.addEventListener('change', () => {
    //   - get the value from the dropdown element
    const id = skylineDropdown.value;

    //   - use that value to change the correct image tag's `.src` property
    skylineImageEl.src = `./assets/skyline-${id}.jpeg`; 
    // - the count of that dropdown will increment
    skylineCount++;
    //   - change the DOM to update the new count
    countEl.textContent = `You changed the skyline ${skylineCount} times`;

});

sloganButton.addEventListener('click', () => {
  // - get the slogan from the input.value
    const newSlogan = sloganInputEl.value;

  // - push the slogan to our array of slogans
    sloganArray.push(newSlogan);

    // 'display a list' pattern
  //   - clear out the old slogans from the DOM (immutable)
    sloganListEl.textContent = '';
  //   - loop through slogan array
    for (let slogan of sloganArray) {
        // create a p tag
        const p = document.createElement('p');

        p.classList.add('slogan');

        p.textContent = slogan;
        //   - append each slogan

        sloganListEl.append(p);
    }

    sloganInputEl.value = '';
});