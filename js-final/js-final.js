const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const originalCanvas = document.createElement('canvas');
const originalCtx = originalCanvas.getContext('2d');

let img;

let exposureValue = 0;
let contrastValue = 0;

// function to upload image and resize if necessary
function uploadImage() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = function() {
    const file = this.files[0];
    const reader = new FileReader();
    reader.onload = function() {
      img = new Image();
      img.onload = function() {
        // check if image is larger than 1024x1024
        if (img.width > 1024 || img.height > 1024) {
          const ratio = Math.min(1024 / img.width, 1024 / img.height);
          canvas.width = img.width * ratio;
          canvas.height = img.height * ratio;
          originalCanvas.width = img.width * ratio;
          originalCanvas.height = img.height * ratio;
        } else {
          canvas.width = img.width;
          canvas.height = img.height;
          originalCanvas.width = img.width;
          originalCanvas.height = img.height;
        }
        originalCtx.drawImage(img, 0, 0, originalCanvas.width, originalCanvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

// function to apply black and white filter
function applyFilter() {
  const imageData = originalCtx.getImageData(0, 0, originalCanvas.width, originalCanvas.height);
  const data = imageData.data;
  
  // convert image to grayscale
  for (let i = 0; i < data.length; i += 4) {
    const red = data[i];
    const green = data[i + 1];
    const blue = data[i + 2];
    const alpha = data[i + 3];
    const gray = (red + green + blue) / 3;
    data[i] = gray;
    data[i + 1] = gray;
    data[i + 2] = gray;
  }
  
  // apply other filters
for (let i = 0; i < data.length; i += 4) {
    const red = data[i];
    const green = data[i + 1];
    const blue = data[i + 2];
    const alpha = data[i + 3];
    
    // apply exposure adjustment
    let r = red * (2 ** exposureValue);
    let g = green * (2 ** exposureValue);
    let b = blue * (2 ** exposureValue);
    
    // apply contrast adjustment
    r = ((r - 128) * (contrastValue + 1) * (contrastValue + 1)) + 128;
    g = ((g - 128) * (contrastValue + 1) * (contrastValue + 1)) + 128;
    b = ((b - 128) * (contrastValue + 1) * (contrastValue + 1)) + 128;
    
    data[i] = r;
    data[i + 1] = g;
    data[i + 2] = b;
    data[i + 3] = alpha;
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // show adjust controls
  document.getElementById('adjust-controls').style.display = 'flex';
}


// function to update canvas with exposure and contrast adjustments
function updateCanvas() {
    const imageData = originalCtx.getImageData(0, 0, originalCanvas.width, originalCanvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const red = data[i];
      const green = data[i + 1];
      const blue = data[i + 2];
      const alpha = data[i + 3];
      
      // apply exposure adjustment
      let r = red * (2 ** exposureValue);
      let g = green * (2 ** exposureValue);
      let b = blue * (2 ** exposureValue);
      
      // apply contrast adjustment
      r = ((r - 128) * (contrastValue + 1) ** 2) + 128;
      g = ((g - 128) * (contrastValue + 1) ** 2) + 128;
      b = ((b - 128) * (contrastValue + 1) ** 2) + 128;
  
      // make the image greyscale
      const gray = (r + g + b) / 3;
      r = gray;
      g = gray;
      b = gray;
      
      data[i] = r;
      data[i + 1] = g;
      data[i + 2] = b;
      data[i + 3] = alpha;
    }
    ctx.putImageData(imageData, 0, 0);
  }

  

// event listener for "Upload Image" button
document.getElementById('upload-btn').addEventListener('click', uploadImage);

// event listener for "Apply Filter" button
document.getElementById('filter-btn').addEventListener('click', applyFilter);

// event listener for exposure slider
document.getElementById('exposure-slider').addEventListener('input', function() {
  exposureValue = parseFloat(this.value);
  updateCanvas();
});

// event listener for contrast slider
document.getElementById('contrast-slider').addEventListener('input', function() {
  contrastValue = parseFloat(this.value);
  updateCanvas();
});

// event listener for "Save Image" button
document.getElementById('save-btn').addEventListener('click', function() {
  const link = document.createElement('a');
  link.download = 'ansel-edited-image.png';
  link.href = canvas.toDataURL();
  link.click();
});
