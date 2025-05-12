// 1. Change text content
document.getElementById('change-text-btn').addEventListener('click', () => {
  const message = document.getElementById('message');
  message.textContent = 'You clicked the button! Text changed successfully.';
});

// 2. Modify CSS style dynamically
document.getElementById('toggle-style-btn').addEventListener('click', () => {
  const title = document.getElementById('main-title');
  title.style.color = title.style.color === 'crimson' ? '#2c3e50' : 'crimson';
  title.style.fontSize = '2rem';
});

// 3. Add or remove an element
let boxExists = false;

document.getElementById('add-remove-btn').addEventListener('click', () => {
  const container = document.getElementById('box-container');
  
  if (!boxExists) {
    const newBox = document.createElement('div');
    newBox.id = 'dynamic-box';
    newBox.textContent = 'I am a new box!';
    newBox.style.padding = '15px';
    newBox.style.marginTop = '10px';
    newBox.style.backgroundColor = '#18bc9c';
    newBox.style.color = 'white';
    newBox.style.borderRadius = '5px';
    container.appendChild(newBox);
    boxExists = true;
  } else {
    const existingBox = document.getElementById('dynamic-box');
    if (existingBox) {
      container.removeChild(existingBox);
    }
    boxExists = false;
  }
});
