export const downloadImage = (dataUrl, fileName) => {
  const downloadLink = document.createElement("a");
  downloadLink.href = dataUrl;
  downloadLink.download = fileName;
  downloadLink.click();
};
