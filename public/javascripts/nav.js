console.log('connected')
let optionDivs = document.querySelector('.optionDIv')
let navATag = document.querySelectorAll('.navATag')
let fisrtUl = document.querySelector('#fisrtUl')
let studioOptionDiv = document.querySelector('.studioOptionDiv')
let profile = document.querySelector("#profile")
let profileData = document.querySelector(".profileData")

let checkOptionDIv = false;

optionDivs.addEventListener('mouseenter',function(){
    checkOptionDIv = true;
})

optionDivs.addEventListener('mouseleave', function(){
    checkOptionDIv = false;
})

// for profile mouse enter and mouse leave 

profile.addEventListener('mouseenter' , function(){
    profileData.style.display ="initial";
})
profile.addEventListener('mouseleave', function(){
    profileData.style.display ="none";
})

// profileData.addEventListener("mouseleave" , function(){
//     profileData.style.display = "none";
// })

// function navbar ke hover pe ane bale list ke title ka color change karne ka

function changeNavOptionTitleColor(clr){
    document.querySelectorAll('.optionTitle').forEach((opt)=>{
        opt.style.color= clr
    })
}

navATag.forEach(function(elem){
    elem.addEventListener('mouseenter', function(){
        if(elem.getAttribute('check') === 'navATag1'){
        optionDivs.innerHTML = `
        <ul class="optionUl">
            <a href="/allItem/Men/Topwear" class="optionTitle">Topwear</a>
            <a href="/list/Men/Tshirt" class="option">T-Shirts</a>
            <a href="/list/Men/Casual Shirts" class="option">Casual Shirts</a>
            <a href="/list/Men/Formal Shirts" class="option">Formal Shirts</a>
            <a href="/list/Men/Sweatshirts" class="option">Sweatshirts</a>
            <a href="/list/Men/Sweaters" class="option">Sweaters</a>
            <a href="/list/Men/Jackets" class="option">Jackets</a>
            <a href="/list/Men/Blazers" class="option">Blazers & Coats</a>
            <a href="/list/Men/Suits" class="option">Suits</a>
            <a href="/list/Men/Rain Jackets" class="option">Rain Jackets</a>
            <hr class="optionHr">
            <a href="/allItem/Men/Indian & Festive Wear" class="optionTitle">Indian & Festive Wear</a>
            <a href="/list/Men/Kurtas" class="option">Kurtas & Kurta Sets</a>
            <a href="/list/Men/Nehru Jackets" class="option">Nehru Jackets</a>
            <a href="/list/Men/Dhotis" class="option">Dhotis</a>
            
        </ul>
        <ul class="optionUl">
            <a href="/allItem/Men/Bottomwear" class="optionTitle">Bottomwear</a>
            <a href="/list/Men/Jeans" class="option">Jeans</a>
            <a href="/list/Men/Casual Trousers" class="option">Casual Trousers</a>
            <a href="/list/Men/Formal Trousers" class="option">Formal Trousers</a>
            <a href="/list/Men/Shorts" class="option">Shorts</a>
            <a href="/list/Men/Track Pants" class="option">Track Pants & Joggers</a>
            <hr class="optionHr">
            <a href="/allItem/Men/Innerwear & Sleepwear" class="optionTitle">Innerwear & Sleepwear</a>
            <a href="/list/Men/Briefs And Trunks" class="option">Briefs & Trunks</a>
            <a href="/list/Men/Boxers" class="option">Boxers</a>
            <a href="/list/Men/Vests" class="option">Vests</a>
            <a href="/list/Men/Loungewear" class="option">Sleepwear & Loungewear</a>
            <a href="/list/Men/Thermals" class="option">Thermals</a>
            <hr class="optionHr">
        </ul>
        <ul class="optionUl">
            <a href="/allItem/Men/Footwear" class="optionTitle">Footwear</a>
            <a href="/list/Men/Casual Shoes" class="option">Casual Shoes</a>
            <a href="/list/Men/Sport Shoes" class="option">Sports Shoes</a>
            <a href="/list/Men/Formal Shoes" class="option">Formal Shoes</a>
            <a href="/list/Men/Sneakers" class="option">Sneakers</a>
            <a href="/list/Men/Sandals & Floaters" class="option">Sandals & Floaters</a>
            <a href="/list/Men/Flip Flops" class="option">Flip Flops</a>
            <a href="/list/Men/Socks" class="option">Socks</a>
            <hr class="optionHr">
            <a href="/list/Men's Grooming/s" class="optionTitle">Personal Care & Grooming</a>
            <hr class="optionHr">
            <a href="/list/Men/Sunglasses" class="optionTitle">Sunglasses & Frames</a>
            <hr class="optionHr">
            <a href="/list/Men/Watches" class="optionTitle">Watches</a>
        </ul>
        <ul class="optionUl">
            <a href="/allItem/Men/Sports & Active Wear" class="optionTitle">Sports & Active Wear</a>
            <a href="/list/Men/Sport Shoes" class="option">Sports Shoes</a>
            <a href="/list/Men/Sports Sandals" class="option">Sports Sandals</a>
            <a href="/list/Men/Tshirts" class="option">Active T-Shirts</a>
            <a href="/list/Men/Track Pants" class="option">Track Pants & Shorts</a>
            <a href="/list/Men/Tracksuits" class="option">Tracksuits</a>
            <a href="/list/Men/Jackets" class="option">Jackets & Sweatshirts</a>
            <a href="/list/Men/Sports" class="option">Sports Accessories</a>
            <a href="/list/Men/Swimwear" class="option">Swimwear</a>
            <hr class="optionHr">
            <a href="/allItem/Men/Gadgets" class="optionTitle">Gadgets</a>
            <a href="/list/Men/Watches" class="option">Smart Wearables</a>
            <a href="/list/Gadgets/Gadget" class="option">Fitness Gadgets</a>
            <a href="/list/Gadgets/Headphones" class="option">Headphones</a>
            <a href="/list/Gadgets/Speakers" class="option">Speakers</a>
        </ul>
        <ul class="optionUl">
            <a href="/allItem/Men/Fashion Accessories" class="optionTitle">Fashion Accessories</a>
            <a href="/list/Accessories/Wallets" class="option">Wallets</a>
            <a href="/list/Accessories/Belts" class="option">Belts</a>
            <a href="/list/BEAUTY/Perfumes & BodyMists" class="option">Perfumes & Body Mists</a>
            <a href="/list/BEAUTY/Deodorants" class="option">Deodorants</a>
            <a href="/list/gift/Accessory Gift Sets" class="option">Accessory Gift Sets</a>
            <a href="/list/Men/Caps & Hats" class="option">Caps & Hats</a>
            <a href="/list/Men/Mufflers, Scarves & Gloves" class="option">Mufflers, Scarves & Gloves</a>
            <a href="/list/Men/Rings & Wristwear" class="option">Rings & Wristwear</a>
            <a href="/list/Men/Helmets" class="option">Helmets</a>
            <hr class="optionHr">
            <a href="/list/Storage/Bags" class="optionTitle">Bags & Backpacks</a>
            <hr class="optionHr">
            <a href="/list/Men/Luggages & Trolleys" class="optionTitle">Luggages & Trolleys</a>
        </ul>`
        optionDivs.style.display = 'flex'
        changeNavOptionTitleColor('#EE5F73')
        
    } else if(elem.getAttribute('check') === 'navATag2') {
        optionDivs.innerHTML = `<ul class="optionUl">
        <a href="/allItem/Women/Indian & Fusion Wear" class="optionTitle">Indian & Fusion Wear</a>
        <a href="/list/Women/Kurtis" class="option">Kurtas & Suits</a>
        <a href="/list/Women/Kurtis, Tunics & Tops" class="option">Kurtis, Tunics & Tops</a>
        <a href="/list/Women/Sarees" class="option">Sarees</a>
        <a href="/list/Women/Ethnic Wear" class="option">Ethnic Wear</a>
        <a href="/list/Women/Leggings, Salwars & Churidars" class="option">Leggings, Salwars & Churidars</a>
        <a href="/list/Women/Skirts & Palazzos" class="option">Skirts & Palazzos</a>
        <a href="/list/Women/Dress Materials" class="option">Dress Materials</a>
        <a href="/list/Women/Lehenga Cholis" class="option">Lehenga Cholis</a>
        <a href="/list/Women/Dupattas & Shawls" class="option">Dupattas & Shawls</a>
        <a href="/list/Women/Jackets" class="option">Jackets</a>
        <hr class="optionHr">
        <a href="/list/Accessories/Belts" class="optionTitle">Belts, Scarves & More</a>
        <a href="/list/Accessories/Watches" class="optionTitle">Watches & Wearables</a>
        
    </ul>
    <ul class="optionUl">
        <a href="/allItem/Women/Western Wear" class="optionTitle">Western Wear</a>
        <a href="/list/Women/Dresses" class="option">Dresses</a>
        <a href="/list/Women/Tops" class="option">Tops</a>
        <a href="/list/Women/Tshirts" class="option">Tshirts</a>
        <a href="/list/Women/Jeans" class="option">Jeans</a>
        <a href="/list/Women/Trousers & Capris" class="option">Trousers & Capris</a>
        <a href="/list/Women/Shorts & Skirts" class="option">Shorts & Skirts</a>
        <a href="/list/Women/Co-ords" class="option">Co-ords</a>
        <a href="/list/Women/Playsuits" class="option">Playsuits</a>
        <a href="/list/Women/Jumpsuits" class="option">Jumpsuits</a>
        <a href="/list/Women/Shrugs" class="option">Shrugs</a>
        <a href="/list/Women/Sweaters & Sweatshirts" class="option">Sweaters & Sweatshirts</a>
        <a href="/list/Women/Jackets & Coats" class="option">Jackets & Coats</a>
        <a href="/list/Women/Blazers & Waistcoats" class="option">Blazers & Waistcoats</a>
        <hr class="optionHr">
    </ul>
    <ul class="optionUl">
        <a href="/list/Women/Dresses" class="optionTitle">Maternity</a>
        <a href="/list/Accessories/Sunglasses" class="optionTitle">Sunglasses & Frames</a>
        <a href="/allItem/Women/Footwear" class="optionTitle">Footwear</a>
        <a href="/list/Women/Flats" class="option">Flats</a>
        <a href="/list/Women/Casual Shoes" class="option">Casual Shoes</a>
        <a href="/list/Women/Heels" class="option">Heels</a>
        <a href="/list/Women/Boots" class="option">Boots</a>
        <a href="/list/Women/Sports Shoes & Floaters" class="option">Sports Shoes & Floaters</a>
        <a href="/list/Women/Sports" class="optionTitle">Sports & Active Wear</a>
        <a href="/list/Women/Clothing" class="option">Clothing</a>
        <a href="/list/Women/Footwear" class="option">Footwear</a>
        <a href="/list/Women/Sports Accessories" class="option">Sports Accessories</a>
        <a href="/list/Women/Sports Equipment" class="option">Sports Equipment</a>
    </ul>
    <ul class="optionUl">
        <a href="/allItem/Women/Lingerie & Sleepwear" class="optionTitle">Lingerie & Sleepwear</a>
        <a href="/list/Women/Bra" class="option">Bra</a>
        <a href="/list/Women/Briefs" class="option">Briefs</a>
        <a href="/list/Women/Shapewear" class="option">Shapewear</a>
        <a href="/list/Women/Sleepwear & Loungewear" class="option">Sleepwear & Loungewear</a>
        <a href="/list/Women/Swimwear" class="option">Swimwear</a>
        <a href="/list/Women/Camisoles & Thermals" class="option">Camisoles & Thermals</a>
        <a href="/allItem/Beauty/Beauty & Personal Care" class="optionTitle">Beauty & Personal Care</a>
        <a href="/list/Women/Makeup" class="option">Makeup</a>
        <a href="/list/Women/Skincare" class="option">Skincare</a>
        <a href="/list/Women/Premium Beauty" class="option">Premium Beauty</a>
        <a href="/list/Women/Lipsticks" class="option">Lipsticks</a>
        <a href="/list/Women/Fragrances" class="option">Fragrances</a>
    </ul>
    <ul class="optionUl">
        <a href="/allItem/Gadgets/Gadgets" class="optionTitle">Gadgets</a>
        <a href="/list/Women/Smart Wearables" class="option">Smart Wearables</a>
        <a href="/list/Women/Fitness Gadgets" class="option">Fitness Gadgets</a>
        <a href="/list/Women/Headphones" class="option">Headphones</a>
        <a href="/list/Women/Speakers" class="option">Speakers</a>
        <a href="/list/Accessories/Jewellery" class="optionTitle">Jewellery</a>
        <a href="/list/Women/Fashion Jewellery" class="option">Fashion Jewellery</a>
        <a href="/list/Women/Fine Jewellery" class="option">Fine Jewellery</a>
        <a href="/list/Women/Earrings" class="option">Earrings</a>
        <a href="/list/Accessories/Backpacks" class="optionTitle">Backpacks</a>
        <a href="/list/Accessories/Wallets" class="optionTitle">Handbags, Bags & Wallets</a>
        <a href="/list/Luggages & Trolleys/Luggages & Trolleys" class="optionTitle">Luggages & Trolleys</a>
    </ul>`
        optionDivs.style.display = 'flex'
        changeNavOptionTitleColor('#FC56C1')
    } else if(elem.getAttribute('check') === 'navATag3') {
        optionDivs.innerHTML = `
        <ul class="optionUl">
            <a href="/allItem/Boy/Boys Clothing" class="optionTitle">Boys Clothing</a>
            <a href="/list/Boy/TShirts" class="option">T-Shirts</a>
            <a href="/list/Boy/Shirts" class="option">Shirts</a>
            <a href="/list/Boy/Shorts" class="option">Shorts</a>
            <a href="/list/Boy/Jeans" class="option">Jeans</a>
            <a href="/list/Boy/Trousers" class="option">Trousers</a>
            <a href="/list/Boy/Clothing Sets" class="option">Clothing Sets</a>
            <a href="/list/Boy/Ethnic Wear" class="option">Ethnic Wear</a>
            <a href="/list/Boy/Track Pants & Pyjamas" class="option">Track Pants & Pyjamas</a>
            <a href="/list/Boy/Jacket, Sweater & Sweatshirts" class="option">Jacket, Sweater & Sweatshirts</a>
            <a href="/list/Boy/Party Wear" class="option">Party Wear</a>
            <hr class="optionHr">
            <a href="/list/Boy/Innerwear & Thermals" class="option">Innerwear & Thermals</a>
            <a href="/list/Boy/Nightwear & Loungewear" class="option">Nightwear & Loungewear</a>
            <a href="/list/Boy/Value Packs" class="option">Value Packs</a>
            
        </ul>
        <ul class="optionUl">
            <a href="/allItem/Girl/Girls Clothing" class="optionTitle">Girls Clothing</a>
            <a href="/list/Girl/Dresses" class="option">Dresses</a>
            <a href="/list/Girl/Tops" class="option">Tops</a>
            <a href="/list/Girl/Tshirts" class="option">Tshirts</a>
            <a href="/list/Girl/Clothing Sets" class="option">Clothing Sets</a>
            <a href="/list/Girl/Lehenga choli" class="option">Lehenga choli</a>
            <a href="/list/Girl/Kurta Sets" class="option">Kurta Sets</a>
            <a href="/list/Girl/Party wear" class="option">Party wear</a>
            <a href="/list/Girl/Dungarees & Jumpsuits" class="option">Dungarees & Jumpsuits</a>
            <a href="/list/Girl/Skirts & shorts" class="option">Skirts & shorts</a>
            <a href="/list/Girl/Tights & Leggings" class="option">Tights & Leggings</a>
            <a href="/list/Girl/Jeans, Trousers & Capris" class="option">Jeans, Trousers & Capris</a>
            <a href="/list/Girl/Jacket, Sweater & Sweatshirts" class="option">Jacket, Sweater & Sweatshirts</a>
            <a href="/list/Girl/Innerwear & Thermals" class="option">Innerwear & Thermals</a>
            <hr class="optionHr">
            <a href="/list/Girl/Nightwear & Loungewear" class="option">Nightwear & Loungewear</a>
            <a href="/list/Girl/Value Packs" class="option">Value Packs</a>
        </ul>
        <ul class="optionUl">
            <a href="/allItem/kid/Footwear" class="optionTitle">Footwear</a>
            <a href="/list/kid/Casual Shoes" class="option">Casual Shoes</a>
            <a href="/list/kid/Flipflops" class="option">Flipflops</a>
            <a href="/list/kid/Sports Shoes" class="option">Sports Shoes</a>
            <a href="/list/kid/Flats" class="option">Flats</a>
            <a href="/list/kid/Sandals" class="option">Sandals</a>
            <a href="/list/kid/Heels" class="option">Heels</a>
            <a href="/list/kid/School Shoes" class="option">School Shoes</a>
            <a href="/list/kid/Socks" class="option">Socks</a>
            <a href=/allItem/kid/Toys & Games" class="optionTitle">Toys & Games</a>
            <a href="/list/kid/Learning & Development" class="option">Learning & Development</a>
            <a href="/list/kid/Activity Toys" class="option">Activity Toys</a>
            <a href="/list/kid/Soft Toys" class="option">Soft Toys</a>
            
        </ul>
        <ul class="optionUl">
            <a href="/allItem/kid/Infants" class="optionTitle">Infants</a>
            <a href="/list/kid/Bodysuits" class="option">Bodysuits</a>
            <a href="/list/kid/Rompers & Sleepsuits" class="option">Rompers & Sleepsuits</a>
            <a href="/list/kid/Clothing Sets" class="option">Clothing Sets</a>
            <a href="/list/kid/Tshirts & Tops" class="option">Tshirts & Tops</a>
            <a href="/list/kid/Dresses" class="option">Dresses</a>
            <a href="/list/kid/Bottom wear" class="option">Bottom wear</a>
            <a href="/list/kid/Winter Wear" class="option">Winter Wear</a>
            <a href="/list/kid/Innerwear & Sleepwear" class="option">Innerwear & Sleepwear</a>
            <a href="/list/kid/Infant Care" class="option">Infant Care</a>
            <a href="/list/kid/Home & Bath" class="optionTitle">Home & Bath</a>
            <a href="/list/kid/Personal Care" class="optionTitle">Personal Care</a>
        </ul>
        <ul class="optionUl">
            <a href="/allItem/kid/Kids Accessories" class="optionTitle">Kids Accessories</a>
            <a href="/list/kid/Bags & Backpacks" class="option">Bags & Backpacks</a>
            <a href="/list/kid/Watches" class="option">Watches</a>
            <a href="/list/kid/Jewellery & Hair accessory" class="option">Jewellery & Hair accessory</a>
            <a href="/list/kid/Sunglasses" class="option">Sunglasses</a>
            <a href="/list/kid/Masks & Protective Gears" class="option">Masks & Protective Gears</a>
            <a href="/list/kid/Caps & Hats" class="option">Caps & Hats</a>
            <a href="/allItem/kid/Brands" class="optionTitle">Brands</a>
            <a href="/list/kid/H&M" class="option">H&M</a>
            <a href="/list/kid/Max Kids" class="option">Max Kids</a>
            <a href="/list/kid/Pantaloons" class="option">Pantaloons</a>
            <a href="/list/kid/United Colors Of Benetton" class="option">United Colors Of Benetton Kids</a>
            <a href="/list/kid/YK" class="option">YK</a>
            <a href="/list/kid/U.S. Polo Assn. Kids" class="option">U.S. Polo Assn. Kids</a>
            <a href="/list/kid/Mothercare" class="option">Mothercare</a>
            <a href="/list/kid/HRX" class="option">HRX</a>
        </ul>
`
        optionDivs.style.display = 'flex'
        changeNavOptionTitleColor('#F36A10')
    } else if(elem.getAttribute('check') === 'navATag4') {
        optionDivs.innerHTML = `
        <ul class="optionUl">
            <a href="/allItem/HOME & LIVING/Bed Linen & Furnishing" class="optionTitle">Bed Linen & Furnishing</a>
            <a href="/list/HOME & LIVING/Bed Runners" class="option">Bed Runners</a>
            <a href="/list/HOME & LIVING/Mattress Protectors" class="option">Mattress Protectors</a>
            <a href="/list/HOME & LIVING/Bedsheets" class="option">Bedsheets</a>
            <a href="/list/HOME & LIVING/Bedding Sets" class="option">Bedding Sets</a>
            <a href="/list/HOME & LIVING/Blankets, Quilts & Dohars" class="option">Blankets, Quilts & Dohars</a>
            <a href="/list/HOME & LIVING/Pillows & Pillow Covers" class="option">Pillows & Pillow Covers</a>
            <a href="/list/HOME & LIVING/Bed Covers" class="option">Bed Covers</a>
            <a href="/list/HOME & LIVING/Diwan Sets" class="option">Diwan Sets</a>
            <a href="/list/HOME & LIVING/Chair Pads & Covers" class="option">Chair Pads & Covers</a>
            <a href="/list/HOME & LIVING/Sofa Covers" class="option">Sofa Covers</a>
            <hr class="optionHr">
            <a href="/allItem/HOME & LIVING/Flooring" class="optionTitle">Flooring</a>
            <a href="/list/HOME & LIVING/Floor Runners" class="option">Floor Runners</a>
            <a href="/list/HOME & LIVING/Carpets" class="option">Carpets</a>
            <a href="/list/HOME & LIVING/Floor Mats & Dhurries" class="option">Floor Mats & Dhurries</a>
            <a href="/list/HOME & LIVING/Door Mats" class="option">Door Mats</a>
            
        </ul>
        <ul class="optionUl">
            <a href="/allItem/HOME & LIVING/Bath" class="optionTitle">Bath</a>
            <a href="/list/HOME & LIVING/Bath Towels" class="option">Bath Towels</a>
            <a href="/list/HOME & LIVING/Hand & Face Towels" class="option">Hand & Face Towels</a>
            <a href="/list/HOME & LIVING/Beach Towels" class="option">Beach Towels</a>
            <a href="/list/HOME & LIVING/Towels Set" class="option">Towels Set</a>
            <a href="/list/HOME & LIVING/Bath Rugs" class="option">Bath Rugs</a>
            <a href="/list/HOME & LIVING/Bath Robes" class="option">Bath Robes</a>
            <a href="/list/HOME & LIVING/Bathroom Accessories" class="option">Bathroom Accessories</a>
            <a href="/list/HOME & LIVING/Shower Curtains" class="option">Shower Curtains</a>
            <a href="/allItem/HOME & LIVING/Lamps & Lighting" class="optionTitle">Lamps & Lighting</a>
            <a href="/list/HOME & LIVING/Floor Lamps" class="option">Floor Lamps</a>
            <a href="/list/HOME & LIVING/Ceiling Lamps" class="option">Ceiling Lamps</a>
            <a href="/list/HOME & LIVING/Table Lamps" class="option">Table Lamps</a>
            <a href="/list/HOME & LIVING/Wall Lamps" class="option">Wall Lamps</a>
            <a href="/list/HOME & LIVING/Outdoor Lamps" class="option">Outdoor Lamps</a>
            <a href="/list/HOME & LIVING/String Lights" class="option">String Lights</a>
           
        </ul>
        <ul class="optionUl">
            <a href="/allItem/HOME & LIVING/Home Décor" class="optionTitle">Home Décor</a>
            <a href="/list/HOME & LIVING/Plants & Planters" class="option">Plants & Planters</a>
            <a href="/list/HOME & LIVING/Aromas & Candles" class="option">Aromas & Candles</a>
            <a href="/list/HOME & LIVING/Clocks" class="option">Clocks</a>
            <a href="/list/HOME & LIVING/Mirrors" class="option">Mirrors</a>
            <a href="/list/HOME & LIVING/Wall Décor" class="option">Wall Décor</a>
            <a href="/list/HOME & LIVING/Festive Decor" class="option">Festive Decor</a>
            <a href="/list/HOME & LIVING/Pooja Essentials" class="option">Pooja Essentials</a>
            <a href="/list/HOME & LIVING/Wall Shelves" class="option">Wall Shelves</a>
            <a href="/list/HOME & LIVING/Fountains" class="option">Fountains</a>
            <a href="/list/HOME & LIVING/Showpieces & Vases" class="option">Showpieces & Vases</a>
            <a href="/list/HOME & LIVING/Ottoman" class="option">Ottoman</a>
            <a href="/list/HOME & LIVING/Cushions & Cushion Covers" class="optionTitle">Cushions & Cushion Covers</a>
            <a href="/list/HOME & LIVING/Curtains" class="optionTitle">Curtains</a>
        </ul>
        <ul class="optionUl">
            <a href="/list/HOME & LIVING/Home Gift Sets" class="optionTitle">Home Gift Sets</a>
            <a href="/allItem/HOME & LIVING/Kitchen & Table" class="optionTitle">Kitchen & Table</a>
            <a href="/list/HOME & LIVING/Table Runners" class="option">Table Runners</a>
            <a href="/list/HOME & LIVING/Dinnerware & Serveware" class="option">Dinnerware & Serveware</a>
            <a href="/list/HOME & LIVING/Cups and Mugs" class="option">Cups and Mugs</a>
            <a href="/list/HOME & LIVING/Bakeware & Cookware" class="option">Bakeware & Cookware</a>
            <a href="/list/HOME & LIVING/Kitchen Storage & Tools" class="option">Kitchen Storage & Tools</a>
            <a href="/list/HOME & LIVING/Bar & Drinkware" class="option">Bar & Drinkware</a>
            <a href="/list/HOME & LIVING/Table Covers & Furnishings" class="option">Table Covers & Furnishings</a>
            <a href="/list/HOME & LIVING/Storage" class="optionTitle">Storage</a>
            <a href="/list/HOME & LIVING/Bins" class="option">Bins</a>
            <a href="/list/HOME & LIVING/Hangers" class="optionTitle">Hangers</a>
            <a href="/list/HOME & LIVING/Organisers" class="optionTitle">Organisers</a>
            <a href="/list/HOME & LIVING/Hooks & Holders" class="optionTitle">Hooks & Holders</a>
            <a href="/list/HOME & LIVING/Laundry Bags" class="optionTitle">Laundry Bags</a>
        </ul>
        <ul class="optionUl">
            <a href="/allItem/HOME & LIVING/Brands" class="optionTitle">Brands</a>
            <a href="/list/HOME & LIVING/H&M" class="option">H&M</a>
            <a href="/list/HOME & LIVING/Marks & Spencer" class="option">Marks & Spencer</a>
            <a href="/list/HOME & LIVING/Home Centre" class="option">Home Centre</a>
            <a href="/list/HOME & LIVING/Spaces" class="option">Spaces</a>
            <a href="/list/HOME & LIVING/D'Decor" class="option">D'Decor</a>
            <a href="/list/HOME & LIVING/Story@Home" class="option">Story@Home</a>
            <a href="/list/HOME & LIVING/Pure Home & Living" class="optionTitle">Pure Home & Living</a>
            <a href="/list/HOME & LIVING/Swayam" class="option">Swayam</a>
            <a href="/list/HOME & LIVING/Raymond Home" class="option">Raymond Home</a>
            <a href="/list/HOME & LIVING/Maspar" class="option">Maspar</a>
            <a href="/list/HOME & LIVING/My Trident" class="option">My Trident</a>
            <a href="/list/HOME & LIVING/Cortina" class="option">Cortina</a>
            <a href="/list/HOME & LIVING/Random" class="option">Random</a>
            <a href="/list/HOME & LIVING/Ellementry" class="option">Ellementry</a>
            <a href="/list/HOME & LIVING/ROMEE" class="option">ROMEE</a>
            <a href="/list/HOME & LIVING/SEJ by Nisha Gupta" class="option">SEJ by Nisha Gupta</a>
        </ul>`
        optionDivs.style.display = 'flex'
        changeNavOptionTitleColor('#F2C210')
    } else if(elem.getAttribute('check') === 'navATag5') {
        optionDivs.innerHTML = `
        <ul class="optionUl">
            <a href="/allItem/BEAUTY/Makeup" class="optionTitle">Makeup</a>
            <a href="/list/BEAUTY/Lipstick" class="option">Lipstick</a>
            <a href="/list/BEAUTY/Lip Gloss" class="option">Lip Gloss</a>
            <a href="/list/BEAUTY/Lip Liner" class="option">Lip Liner</a>
            <a href="/list/BEAUTY/Mascara" class="option">Mascara</a>
            <a href="/list/BEAUTY/Eyeliner" class="option">Eyeliner</a>
            <a href="/list/BEAUTY/Kajal" class="option">Kajal</a>
            <a href="/list/BEAUTY/Eyeshadow" class="option">Eyeshadow</a>
            <a href="/list/BEAUTY/Foundation" class="option">Foundation</a>
            <a href="/list/BEAUTY/Primer" class="option">Primer</a>
            <a href="/list/BEAUTY/Concealer" class="option">Concealer</a>
            <hr class="optionHr">
            <a href="/list/BEAUTY/Compact" class="option">Compact</a>
            <a href="/list/BEAUTY/Nail Polish" class="option">Nail Polish</a>
            
        </ul>
        <ul class="optionUl">
            <a href="/allItem/BEAUTY/Skincare, Bath & Body" class="optionTitle">Skincare, Bath & Body</a>
            <a href="/list/BEAUTY/Face Moisturiser" class="option">Face Moisturiser</a>
            <a href="/list/BEAUTY/Cleanser" class="option">Cleanser</a>
            <a href="/list/BEAUTY/Masks & Peel" class="option">Masks & Peel</a>
            <a href="/list/BEAUTY/Sunscreen" class="option">Sunscreen</a>
            <a href="/list/BEAUTY/Serum" class="option">Serum</a>
            <a href="/list/BEAUTY/Face Wash" class="option">Face Wash</a>
            <a href="/list/BEAUTY/Eye Cream" class="option">Eye Cream</a>
            <a href="/list/BEAUTY/Lip Balm" class="option">Lip Balm</a>
            <a href="/list/BEAUTY/Body Lotion" class="optionTitle">Body Lotion</a>
            <a href="/list/BEAUTY/Body Wash" class="option">Body Wash</a>
            <a href="/list/BEAUTY/Body Scrub" class="option">Body Scrub</a>
            <a href="/list/BEAUTY/Hand Cream" class="option">Hand Cream</a>
            <a href="/list/BEAUTY/Baby Care" class="optionTitle">Baby Care</a>
            <a href="/list/BEAUTY/Masks" class="optionTitle">Masks</a>
           
        </ul>
        <ul class="optionUl">
            <a href="/allItem/BEAUTY/Haircare" class="optionTitle">Haircare</a>
            <a href="/list/BEAUTY/Shampoo" class="option">Shampoo</a>
            <a href="/list/BEAUTY/Conditioner" class="option">Conditioner</a>
            <a href="/list/BEAUTY/Hair Cream" class="option">Hair Cream</a>
            <a href="/list/BEAUTY/Hair Oil" class="option">Hair Oil</a>
            <a href="/list/BEAUTY/Hair Gel" class="option">Hair Gel</a>
            <a href="/list/BEAUTY/Hair Color" class="option">Hair Color</a>
            <a href="/list/BEAUTY/Hair Serum" class="option">Hair Serum</a>
            <a href="/list/BEAUTY/Hair Accessory" class="option">Hair Accessory</a>
            <a href="/allItem/BEAUTY/Fragrances" class="optionTitle">Fragrances</a>
            <a href="/list/BEAUTY/Perfume" class="option">Perfume</a>
            <a href="/list/BEAUTY/Deodorant" class="option">Deodorant</a>
            <a href="/list/BEAUTY/Body Mist" class="option">Body Mist</a>
        </ul>
        <ul class="optionUl">
            <a href="/allItem/BEAUTY/Appliances" class="optionTitle">Appliances</a>
            <a href="/list/BEAUTY/Hair Straightener" class="option">Hair Straightener</a>
            <a href="/list/BEAUTY/Hair Dryer" class="option">Hair Dryer</a>
            <a href="/list/BEAUTY/Epilator" class="option">Epilator</a>
            <a href="/allItem/BEAUTY/Men's Grooming" class="optionTitle">Men's Grooming</a>
            <a href="/list/BEAUTY/Trimmers" class="option">Trimmers</a>
            <a href="/list/BEAUTY/Beard Oil" class="option">Beard Oil</a>
            <a href="/list/BEAUTY/Hair Wax" class="option">Hair Wax</a>
            <a href="/list/BEAUTY/Beauty Gift" class="optionTitle">Beauty Gift</a>
            <a href="/list/BEAUTY/Makeup Kit" class="option">Makeup Kit</a>
            <a href="/list/BEAUTY/Premium Beauty" class="optionTitle">Premium Beauty</a>
            <a href="/list/BEAUTY/Wellness & Hygiene" class="optionTitle">Wellness & Hygiene</a>
        </ul>
        <ul class="optionUl">
            <a href="/allItem/BEAUTY/Top Brands" class="optionTitle">Top Brands</a>
            <a href="/list/BEAUTY/Lakme" class="option">Lakme</a>
            <a href="/list/BEAUTY/Maybelline" class="option">Maybelline</a>
            <a href="/list/BEAUTY/LOreal" class="option">LOreal</a>
            <a href="/list/BEAUTY/Philips" class="option">Philips</a>
            <a href="/list/BEAUTY/Bath & Body Works" class="option">Bath & Body Works</a>
            <a href="/list/BEAUTY/THE BODY SHOP" class="option">THE BODY SHOP</a>
            <a href="/list/BEAUTY/Biotique" class="option">Biotique</a>
            <a href="/list/BEAUTY/Mamaearth" class="option">Mamaearth</a>
            <a href="/list/BEAUTY/MCaffeine" class="option">MCaffeine</a>
            <a href="/list/BEAUTY/Nivea" class="option">Nivea</a>
            <a href="/list/BEAUTY/Lotus Herbals" class="option">Lotus Herbals</a>
            <a href="/list/BEAUTY/LOreal Professionnel" class="option">LOreal Professionnel</a>
            <a href="/list/BEAUTY/KAMA AYURVEDA" class="option">KAMA AYURVEDA</a>
            <a href="/list/BEAUTY/M.A.C" class="option">M.A.C</a>
            <a href="/list/BEAUTY/Forest Essentials" class="option">Forest Essentials</a>
        </ul>`
        optionDivs.style.display = 'flex'
        changeNavOptionTitleColor('#0DB7AF')
    } else if(elem.getAttribute('check') === 'navATag6') {
        optionDivs.innerHTML = ``
        optionDivs.style.display = 'none'
        studioOptionDiv.style.display = 'flex'
        changeNavOptionTitleColor('#F2C210');
    }
})

// profile

// profileSpan.forEach(function(e){
//     e.addEventListener('mouseenter', function(){
//         optionDivs.innnerHTML = `
//          Welcome
//         `
//         changeNavOptionTitleColor('#EE5F73')
//     })
// })

// profileSpan.addEventListener('mouseenter' , function(){
//      changeNavOptionTitleColor
// })

elem.addEventListener('mouseleave', function(){
    studioOptionDiv.style.display = 'none'
})

})
fisrtUl.addEventListener('mouseleave', function(){
    optionDivs.innerHTML = ''
    optionDivs.style.display = 'none'
})
