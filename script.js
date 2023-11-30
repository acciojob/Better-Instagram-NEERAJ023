//your code here
document.addEventListener('DOMContentLoaded', function () {
const images = document.querySelectorAll('.image');

  let draggedImage = null;

  images.forEach(image => {
    image.addEventListener('dragstart', handleDragStart);
    image.addEventListener('dragover', handleDragOver);
    image.addEventListener('drop', handleDrop);
  });

  function handleDragStart(event) {
    draggedImage = event.target;
     // necessary for Firefox
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    const target = event.target;

    // Ensure the drop target is a valid image element
    if (target.classList.contains("image")) {
      // Swap background images
      let temp = target.style.backgroundImage;
      target.style.backgroundImage = draggedImage.style.backgroundImage;
      draggedImage.style.backgroundImage = temp;
    }

    draggedImage = null;
  }
});