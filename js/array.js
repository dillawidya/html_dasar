var ArrayOfImages = ['../assets/images/alphard.png', 
                    '../assets/images/civic.png', 
                    '../assets/images/palisade.png',
                    '../assets/images/mercy.png',
                    '../assets/images/i8.png',
                    '../assets/images/cooper.png',
                    '../assets/images/mk5.png',
                    '../assets/images/aventador.png',];
ArrayOfImages.forEach(function(image) {
  var img = document.createElement('img');
  img.src = image;
  img.height = "300";
  img.width = "311";
  img.style = "padding: 10px";
  img.style = "border: 3px solid #ff0000";
  document.body.appendChild(img);
});


