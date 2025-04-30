const imageList = [
  'takoyaki-1-remove.png',
  'takoyaki-1.png',
  'takoyaki-ai1.png',
  'takoyaki-human.png',
];

const gallery = document.getElementById('gallery');

imageList.forEach(file => {
  const img = document.createElement('img');
  img.src = `images/${file}`;
  img.alt = file;
  gallery.appendChild(img);
});
