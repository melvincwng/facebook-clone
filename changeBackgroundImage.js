function changeBackgroundImage() {
  const backgroundImageElement = document.querySelector(".bigger-box");
  const randomNumberGenerated = Math.floor(Math.random() * 4);
  const arrayOfBackgroundImagePaths = [
    "./images/spring.gif",
    "./images/summer.gif",
    "./images/autumn.gif",
    "./images/winter.gif",
  ];

  backgroundImageElement.style.backgroundImage = `url(${arrayOfBackgroundImagePaths[randomNumberGenerated]})`;
}

changeBackgroundImage();
