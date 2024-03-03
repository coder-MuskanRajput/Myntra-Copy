// console.log('ha bhai connect hu')

const handleLike = (productId) =>{
  const settings = {
      "async": true,
      "url": `/likedProduct/productList/${productId}`,
      "method": "POST",
    };
    
    $.ajax(settings).done(function (response) {
      var heartIcon = document.getElementById("heart");
      if(response === "add product"){
        heartIcon.style.color = "red";

          console.log("Like" , response);
      }
      else{
          heartIcon.style.color = "black";
          console.log("Unlike" , response);
      }
    });
}

const handleAdd = (productId) =>{
  const settings = {
      "async": true,
      "url": `/addProduct/productList/${productId}`,
      "method": "POST",
    };
    
    $.ajax(settings).done(function (response) {
      
      if(response === "add product to bag"){
        
          console.log("Like" , response);
      }
      else{
      
          console.log("Unlike" , response);
      }
    });
}