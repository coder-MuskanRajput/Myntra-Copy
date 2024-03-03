
let cards = document.querySelectorAll('.card')
let productImg = document.querySelectorAll('.productImg')
let clearAll = document.querySelector('.clearAll')


cards.forEach((card)=>{
    let hoverInterval;
    card.addEventListener('mouseenter',(imgs)=>{
        let productImgLength = productImg.length
        let imgshowingCount = 0;
        // console.log(imgs.target)
        hoverInterval = setInterval(() => {
        // productImg.forEach((img, img_I)=>{
        //         if(img_I === imgshowingCount){
        //             img.setAttribute('id','pdimg0')
        //         } else {
        //             img.setAttribute("id",`pdimgg${img_I}`)
        //         }
        //         if (imgshowingCount === productImgLength) {
        //             imgshowingCount = 0;
        //         } else {
        //             imgshowingCount++;
        //         }
        //     })
        console.log(imgs)
        }, 1500);
    })
    card.addEventListener('mouseleave',()=>{
        clearInterval(hoverInterval)
    })
})

let checkSizeOpen = 0
document.querySelector('.sizeOptions').addEventListener('click',()=>{
    if (checkSizeOpen === 0) {
        document.querySelector('.allSizeOptions').style.display = 'flex'
        checkSizeOpen = 1;
    } else {
        document.querySelector('.allSizeOptions').style.display = 'none'
        checkSizeOpen = 0;
    }
})

let allBrandcheck = [];
let allSizeCheck = [];
let countPrdct = 0;
let brandCheckBox = document.querySelectorAll('.brandCheckBox');
let sizeCheckBox = document.querySelectorAll('.sizeCheckBox');
brandCheckBox.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        if (elem.checked) {
            if (!allBrandcheck.includes(elem.value)) {
                allBrandcheck.push(elem.value)
            }
        } else if(!elem.checked) {
            if (allBrandcheck.includes(elem.value)) {
                allBrandcheck.forEach((removeBrand, rbIndex)=>{
                    if (elem.value === removeBrand) {
                        allBrandcheck.splice(rbIndex, 1);
                    }
                })
            } 
        }
        countPrdct = 0;
        allCheckedCardShow()
        document.querySelector('.itemCountSpan').textContent = ` - ${countPrdct} items`
    })
})

sizeCheckBox.forEach((elem2)=>{
    elem2.addEventListener('click',()=>{
        if (elem2.checked) {
            if (!allSizeCheck.includes(elem2.value)) {
                allSizeCheck.push(elem2.value)
            }
        } else if(!elem2.checked) {
            if (allSizeCheck.includes(elem2.value)) {
                allSizeCheck.forEach((removeBrand, rbIndex)=>{
                    if (elem2.value === removeBrand) {
                        allSizeCheck.splice(rbIndex, 1);
                    }
                })
            } 
        }
        countPrdct = 0;
        allCheckedCardShow()
       document.querySelector('.itemCountSpan').textContent = ` - ${countPrdct} items`
            
    })
})
function allCheckedCardShow(){
    
    if((allBrandcheck.length == 0) && (allSizeCheck.length == 0)){
        clearAll.style.display = 'none'
        cards.forEach((card)=>{
                card.style.display = 'initial'
                ++countPrdct;
                document.querySelector('.itemCountSpan').textContent = ` - ${countPrdct} items`;
        })
    } else if((allBrandcheck.length == 0) && (!allSizeCheck == 0)){
        clearAll.style.display = 'initial'
        cards.forEach((card)=>{
            cardShowBySize(card)
    })
    } else if(((!allBrandcheck.length == 0) && (allSizeCheck == 0))) {
        clearAll.style.display = 'initial'
        cards.forEach((card)=>{
        cardShowByBrand(card)
    })
    } else if((!allBrandcheck.length == 0) && (!allSizeCheck == 0)){
        clearAll.style.display = 'initial'
        cards.forEach((card)=>{
            if (allBrandcheck.includes(card.getAttribute('brand'))) {
                cardShowBySize(card);
            } else {
                card.style.display = 'none'
            }
    })
    }
}

function cardShowBySize(card){
    
        let checkTrue = false;
        let sizeAtr = card.getAttribute('size').split(',')
        sizeAtr.forEach((checkSize)=>{
            if (!checkTrue) {
                if (allSizeCheck.includes(checkSize)) {
                    checkTrue = true;
                }
            }
        })
        if(checkTrue){
            card.style.display = 'initial'
            ++countPrdct;
        } else {
            card.style.display = 'none'
        }
}
  
function cardShowByBrand(card){
    
        if (allBrandcheck.includes(card.getAttribute('brand'))) {
            card.style.display = 'initial';
            ++countPrdct;
        } else {
            card.style.display = 'none';
        }
}

clearAll.addEventListener('click',()=>{
    allBrandcheck = [];
    allSizeCheck = [];
    brandCheckBox.forEach((elem)=>{
        elem.checked = false;
    })
    sizeCheckBox.forEach((elem)=>{
        elem.checked = false;
    })
    allCheckedCardShow();
})

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