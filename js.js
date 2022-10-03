let hoodies = [
    {   
        img: "img/Hoodie2.jpg",
        name: "Ducati hoodie",
        price: "$70"
    },
    
    {
        img: "img/Hoodie3.webp",
        name: "Honda hoodie",
        price: "$75"
    },

    {
        img: "img/Hoodie4.webp",
        name: "Suzuki hoodie",
        price: "$65"
    },

    {
        img: "img/Hoodie5.webp",
        name: "VR46 hoodie",
        price: "$80"
    },
]

let tShirts = [
    {
        img: "img/t-shirt1.jpg",
        name: "VR46 T-shirt",
        price: "$30"
    },

    {
        img: "img/t-shirt2.webp",
        name: "VR46 T-shirt2",
        price: "$30"
    },

    {
        img: "img/t-shirt3.webp",
        name: "Honda T-shirt",
        price: "$40"
    },

    {
        img: "img/t-shirt4.webp",
        name: "Suzuki T-shirt",
        price: "$35"
    },

    {
        img: "img/t-shirt5.webp",
        name: "Yamaha T-shirt",
        price: "$30"
    }
]



let hats = [
    {
        img: "img/hat1.webp",
        name: "VR46 hat",
        price: "$20"
    },

    {
        img: "img/hat2.webp",
        name: "VR46 hat2",
        price: "$20"
    },

    {
        img: "img/hat3.jpg",
        name: "Suzuki cap",
        price: "$35"
    },

    {
        img: "img/hat4.jpg",
        name: "The Doctor cap",
        price: "$45"
    },

    {
        img: "img/hat5.jpg",
        name: "Marco Bezzecchi cap",
        price: "$40"
    }
];

for(let i=0;i<hoodies.length;i++){
    let img = hoodies[i].img;
    let name = hoodies[i].name;
    let price = hoodies[i].price;
    let div = document.querySelector("#productHoodies").id;
    div = `#${div}`;

    rendre(img,name,price,div)
}

for(let i=0;i<tShirts.length;i++){
    let img = tShirts[i].img;
    let name = tShirts[i].name;
    let price = tShirts[i].price;
    let div = document.querySelector("#productTShirt").id;
    div = `#${div}`;

    rendre(img,name,price,div);
}

for(let i=0;i<hats.length;i++){
    let img = hats[i].img;
    let name = hats[i].name;
    let price = hats[i].price;
    let div = document.querySelector("#productHats").id;
    div = `#${div}`;

    rendre(img,name,price,div);
}

let btn = document.querySelectorAll(".btnAdd");
let cart = document.querySelector('#finalCart');

for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click', btnAddToCart);
}

function btnAddToCart(){
    
    let dugme = this;
    let proizvod = dugme.parentElement;
    let slika = proizvod.querySelector('.images').src;
    let ime = proizvod.querySelector('.name').innerHTML;
    let cena = proizvod.querySelector('.price').innerHTML;
    
    let imeKorpa = document.querySelectorAll(".ispisKorpa .name");

    for(let i = 0;i<imeKorpa.length;i++){
        if(ime == imeKorpa[i].innerText){
            alert('The product is already in the cart');
            return;
        }
    }
    
    let ispisKorpa = `<article class="ispisKorpa">
    <img class="images" src="${slika}" alt="${ime}">
    <p class="name">${ime}</p>
    <p class="price">${cena}</p>
    <input type="number" name="number" class="number" value=1 min=1 max=50>
    <button class="remove">remove</button>
    </article>`
    
    cart.innerHTML +=ispisKorpa;

    azurirajTotal()
    
    let remoeBtn = document.querySelectorAll(".remove");
    remoeBtn.forEach(elem=>{
        elem.addEventListener("click", removeFunction);
    });

    let kolicina = document.querySelectorAll(".number");
    kolicina.forEach(elem=>{
        elem.addEventListener("change", promenaKolicine);
    })
    
    removeDiv()
    cartNumber()  
}

function promenaKolicine(){
    azurirajTotal()
    
}

function removeFunction(){
    this.parentElement.remove();
    azurirajTotal()
    removeDiv()
    cartNumber()
    
}

function azurirajTotal() {

    let korpa = document.querySelector("#finalCart");
    let korpaProizvodi = korpa.querySelectorAll('.ispisKorpa');
    let total = 0;
    for (let i = 0; i < korpaProizvodi.length; i++) {

        let cenaE = korpaProizvodi[i].querySelector(".price").innerText;
        let cena = parseInt(cenaE.replace("$", ""));
        let kolicina = korpaProizvodi[i].querySelector(".number").value;
        total = total + cena * kolicina;
    }

    document.querySelector("#totalPrice").innerText = `Total price: $${total}`;
}

function removeDiv(){

    let x = document.querySelector('#finalCart').hasChildNodes();
    if(x==true){
        document.querySelector("#final").style.display = "flex"
        document.querySelector("#cart").style.display = "block"
    } else{
        document.querySelector("#final").style.display = "none"
        document.querySelector("#cart").style.display = "none"
    }

}

function cartNumber(){
    let x = document.querySelectorAll(".remove").length;
    if(x==0){
        document.querySelector("#cartIcon").style.display = "none"
    }else{
        document.querySelector("#cartIcon").style.display = "block"
        document.querySelector("i").innerHTML =x;

    }
    
}

let order = document.querySelector("#order");
order.addEventListener("click", orderProduct);

function orderProduct(){
    alert(`Thank you for shopping`);
    document.querySelector('#finalCart').innerHTML="";
    document.querySelector("#final").style.display = "none"
    document.querySelector("#cart").style.display = "none"
    document.querySelector("#cartIcon").style.display = "none"
}

function rendre(img, name, price, productHoodies){

    let ispis = `<article>
    <img class="images" src=${img} alt="${name}">
    <p class="name">${name}</p>
    <p class="price">${price}</p>
    <button class="btnAdd">Add to cart</button>
    </article>`

    document.querySelector(`${productHoodies}`).innerHTML +=ispis;
}