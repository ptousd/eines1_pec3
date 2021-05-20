import Viewer from 'viewerjs';
const gallery = new Viewer(document.getElementById('images'), {
  title: [
    4,
    (image, imageData) => `${image.alt} (${imageData.naturalWidth} × ${imageData.naturalHeight})`,
  ],
});
