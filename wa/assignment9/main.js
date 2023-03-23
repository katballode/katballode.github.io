const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declare an array of image filenames */
const imageList = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Looping through images */
for(let i=0; i<imageList.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + imageList[i]);
  newImage.setAttribute('alt', 'Image ' + (i+1));
  thumbBar.appendChild(newImage);

  /* Adding a click event listener to each thumbnail image */
  newImage.addEventListener('click', function() {
    displayedImage.setAttribute('src', 'images/' + imageList[i]);
    displayedImage.setAttribute('alt', 'Image ' + (i+1));
  });
}

/* Writing a handler that runs the darken/lighten button */
btn.addEventListener('click', function() {
  const btnClass = btn.getAttribute('class');
  if(btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
