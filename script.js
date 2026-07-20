// Print a message in the dev panel's console panel
console.log("playhtml starter loaded");
let currentIndex = 0;



/*
 * PLAYHTML SETUP
 */



// Select the element

const blockNums = ['block1', 'block2', 'block3', 'block4', 'block5', 'block6', 'block7', 'block8', 'block9', 'block10', 'block11', 'block12', 'block13', 'block14', 'block15', 'block16', 'block17', 'block18', 'block19', 'block20', 'block21', 'block22', 'block23', 'block24', 'block25', 'block26', 'block27', 'block28', 'block29', 'block30', 'block31', 'block32', 'block33', 'block34', 'block35', 'block36', 'block37', 'block38', 'block39', 'block40'];


for (let i = 0; i < blockNums.length; i++) {
const currentBlock = document.getElementById(blockNums[i]);
// Define your cycling CSS classes

const states = ['b1-state1', 'b1-state2', 'b1-state3', 'b1-state4', 'b1-state5', 'b1-state6', 'b1-state7','b1-state8', 'b1-state9', 'b1-state10', 'b1-state11','b1-state12','b1-state13','b1-state14','b1-state15','b1-state16'];
// Apply the initial state manually
currentBlock.classList.add(states[currentIndex]);

// Listen for clicks to cycle through states
currentBlock.addEventListener('click', () => {
  // 1. Remove the current CSS state class
  currentBlock.classList.remove(states[currentIndex]);

  
  // 2. Increment the index, using remainder (%) to loop back to 0
  currentIndex = (currentIndex + 1) % states.length;
  
  // 3. Add the next CSS state class
  currentBlock.classList.add(states[currentIndex]);
  console.log(`Block ${i + 1} state changed to: ${states[currentIndex]}`);
});


}


// Select all radio buttons in the group
const radios = document.querySelectorAll('input[name="theme-js"]');

radios.forEach(radio => {
  // Listen for changes on each radio button
  radio.addEventListener('change', (event) => {
    // Update the CSS variable on the document root (:root)
    const selectedColor = event.target.value;
    const root = document.documentElement;
    console.log(`Selected color: ${selectedColor}`);

    if (selectedColor === 'blue') {
      root.style.setProperty('--block-color-1', '#1c7ea8');
      root.style.setProperty('--block-color-2', '#74b5da');
    } else if (selectedColor === 'green') {
      root.style.setProperty('--block-color-1', '#4e884b');
      root.style.setProperty('--block-color-2', '#94b17e');
    } else if (selectedColor === 'orange') {
      root.style.setProperty('--block-color-1', '#ec7750');
      root.style.setProperty('--block-color-2', '#f8a482');  
    }
  }
)}  )
