try {
var card = document.getElementById('card');

var mouseHover = false;
var mousePosition = { x: 0, y: 0 };
var cardSize = { width: 0, height: 0 };
var SCALE_X = 4;
var SCALE_Y = 8;

card.onblur = function() {
  mouseHover = false;
};

card.onfocus = function() {
  mouseHover = true;
};

card.onmousemove = function(e) {
  if (!mouseHover) return;
  var rect = card.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  mousePosition = { x, y };
  cardSize = {
    width: card.offsetWidth || 0,
    height: card.offsetHeight || 0,
  };
  card.style.transform = `perspective(1000px) rotateX(${
    (mousePosition.y / cardSize.height) * -(SCALE_Y * 2) + SCALE_Y
  }deg) rotateY(${
    (mousePosition.x / cardSize.width) * (SCALE_X * 2) - SCALE_X
  }deg) translateZ(10px)`;
};

card.onmouseout = function() {
  mouseHover = false;
  card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
};

card.onmouseover = function() {
  mouseHover = true;
};

}catch (error) {
  
}
const handleLike = (productId) =>{
  const settings = {
      "async": true,
      "url": `/likedProduct/productList/${productId}`,
      "method": "POST",
    };
    
    $.ajax(settings).done(function (response) {
        var heartIcon = document.getElementById(productId);
      if(response === "add product"){
        heartIcon.style.color = "red";

          console.log("Like" , response);
      }
      else{
          var heartIcon = document.getElementById(productId);
          heartIcon.style.color = "black";
          console.log("Unlike" , response);
      }
    });
}