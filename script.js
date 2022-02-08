//Descripted Pruducts
var link = document.createElement('link');
link.href = 'style.css';
link.rel = 'stylesheet';
link.type = 'text/css';

let cart = []
var products2 = [
    { id: 0, name: "Ürün 1", price: 10 , image:src = "resimler/cerrahi1.jpg", style:"width:50px"}, { id: 1, name: "Ürün 2", price: 20 , image:src = 'resimler/cerrahi2.jpg'}, { id: 2, name: "Ürün 3", price: 30 , image:src = "resimler/cerrahi3.jpg"} ,
    { id: 3, name: "Ürün 4", price: 40 , image:src = "resimler/cerrahi4.jpg" } , { id: 4, name: "Ürün 5", price: 50, image:src = "resimler/cerrahi5.jpg" } , { id: 5, name: "Ürün 6", price: 60, image:src = "resimler/cerrahi6.jpg" } 
]


let increaseCountButton;
let decreaseCountButton;
let addToCartButton;
let removeFromCartButton;

(function (){
    renderProductCards()

})()



function renderProductCards() {

// resmi objecte ekledik ama cart içerisinde yok.
    products2.forEach((product, index) => {
        document.getElementById("productCartsContainer").innerHTML += `
            <div class="ProductCards">
            <div id="${product.id}">
             <div class="productImageStyles">
             <img src = "${product.image}" style="width: 214px; height: 148px;"> 
               </div>
             </div>
            <div>  </div>
                <div class= "ProductCardsDetail">   
                    <p id="${product.id}"> ${product.name}<span> ${product.price} </span> TL <br>
                    </p> 
                 </div>
                <input type="button" name="${product.id}" value="Sepete Ekle +" class="AddtoCardButton">
                <input type="button" name="${product.id}" value="Sepetten Çıkar -"    class="removeFromCartButton" >
          </div> `
    })
    addToCartButton = document.getElementsByClassName("AddtoCardButton");
    removeFromCartButton = document.getElementsByClassName("removeFromCartButton");
}



function renderChart(){
    console.log("cart in render chart: " , cart)
    document.getElementById("listitem").innerHTML = ""
    cart.forEach((product, index) => {
        const selectedChartItem = getProductFromChart(product.id)
        document.getElementById("listitem").innerHTML += `
            <div class="ProductCardsBasket">
                <div class= "ProductCardsDetailBasket">   
                    <p style="border-color: aliceblue; border-style: groove; 
                    background-color: white;" id="${product.id}"> ${product.name}<span> ${product.price} </span> TL <br>
                    </p> 
                    <p style="border-color: aliceblue; border-style: groove;
                    background-color: white;"> Ürün Adeti : ${selectedChartItem.count}
                    <p style="border-color: aliceblue; border-style: groove; 
                    background-color: white;"> Toplam Tutar: ${selectedChartItem.count * selectedChartItem.price }
                 </div>
                <input type="button" name="${product.id}" value="Sepete Ekle +" class="decreaseCount">
                <input type="button" name="${product.id}" value="Sepetten Çıkar -"    class="increaseCount" >
          </div> `
    })
    

    console.log("getTotalPrice in renderChart : " , getTotalPrice())
    document.getElementById("cartSummary").innerHTML = `
    <p> Sepet Tutarı : 
        <span> ${getTotalPrice().toString()} </span> TL
        <br>
    </p>               
    `
    increaseCountButton = document.getElementsByClassName("decreaseCount");
    decreaseCountButton = document.getElementsByClassName("increaseCount");
    cartButtonsAddEventListener()
}

function azalt() {

    var sonuc = document.getElementById("sonuc");
    sonuc.value = Number(sonuc.value) - 1;

}

//SEPET

function mytoggle() {
    var x = document.getElementById("shoppingcard");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function addToCart(product) {
    console.log("add to chart func : ", product)
    cart.push(product)
    console.log("after push chart : ", cart)
    renderChart()
}

for (let i = 0; i < addToCartButton.length; i++) {
    addToCartButton[i].addEventListener("click", function (e) {
        console.log("add chart event : ", e)
        let selectedProduct;
        for(let i = 0;i < cart.length ; i++){
            if( cart[i].id == e.target.name){
                cart[i].count += 1
                renderChart()
                return
            }
        }
        for(let i = 0;i < products2.length ; i++){
            if( products2[i].id == e.target.name){
                selectedProduct = products2[i] ;
            }
        }
        selectedProduct && addToCart({...selectedProduct, count: 1})
    })
}

for (let i = 0; i < removeFromCartButton.length; i++) {
    removeFromCartButton[i].addEventListener("click", function (e) {
        console.log("add chart event : ", e)
        for(let i = 0;i < cart.length ; i++){
            if( cart[i].id == e.target.name){
                if(cart[i].count == 1){
                    cart.splice(i, 1); 
                }else{
                    cart[i].count -= 1
                }
                renderChart()
                return
            }
        }
    })
}

function cartButtonsAddEventListener(){
    for (let i = 0; i < increaseCountButton.length; i++) {
        increaseCountButton[i].addEventListener("click", function (e) {
            console.log("increaseCountButton event : ", e)
            let selectedProduct;
            for(let i = 0;i < cart.length ; i++){
                if( cart[i].id == e.target.name){
                    cart[i].count += 1
                    renderChart()
                    return
                }
            }
            for(let i = 0;i < products2.length ; i++){
                if( products2[i].id == e.target.name){
                    selectedProduct = products2[i] ;
                }
            }
            selectedProduct && addToCart({...selectedProduct, count: 1})
        })
    }
    
    
    for (let i = 0; i < decreaseCountButton.length; i++) {
        decreaseCountButton[i].addEventListener("click", function (e) {
            console.log("decreaseCountButton event : ", e)
            let selectedProduct;
            for(let i = 0;i < cart.length ; i++){
                if( cart[i].id == e.target.name){
                    if(cart[i].count == 1){
                        cart.splice(i, 1); 
                    }else{
                        cart[i].count -= 1
                    }
                    renderChart()
                    return
                }
            }
        })
    } 
}

function getProductById(productId){
    let selectedProduct
    for(let i = 0;i < products2.length ; i++){
        if( products2[i].id == productId){
            selectedProduct = products2[i] ;
        }
    }
    return selectedProduct
}

function getProductFromChart(productId){
    let selectedProduct
    for(let i = 0;i < cart.length ; i++){
        if( cart[i].id == productId){
            selectedProduct = cart[i] ;
        }
    }
    return selectedProduct
}

function getTotalPrice(){
    let totalPrice = 0;
    cart.forEach((item, index) => {
        totalPrice += item.count * item.price
    })
    return totalPrice;
}



