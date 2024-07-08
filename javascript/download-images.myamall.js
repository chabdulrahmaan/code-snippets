function extractUrlFromBackgroundImage(style) {
  const urlMatch = style.match(/url\(["']?([^"')]+)["']?\)/);
  return urlMatch ? urlMatch[1] : null;
}

function getFileNameFromUrl(url) {
  const urlParts = url.split('/');
  return urlParts[urlParts.length - 1].split('?')[0]; // Remove query parameters if any
}

function downloadImage(url, fileName) {
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function downloadAllImages(container) { 
  const images = container.querySelectorAll('.tp-bgimg');

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const backgroundImage = img.style.backgroundImage;
    const url = extractUrlFromBackgroundImage(backgroundImage);

    if (url) {
      const fileName = getFileNameFromUrl(url);
      downloadImage(url, fileName);
    }
  }
}

downloadAllImages(
  document.querySelector("#revslider-549 > ul")
);
