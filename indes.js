const imageList = [
  'cat.png',
  'dog.jpg',
  'flower.png',
  // 必要なファイル名をここに追加
];

const gallery = document.getElementById('gallery');

imageList.forEach(file => {
  const img = document.createElement('img');
  img.src = `images/${file}`;
  img.alt = file;
  gallery.appendChild(img);
});
