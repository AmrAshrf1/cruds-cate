let title = document.getElementById('tit')
let price = document.getElementById('pri')
let taxes = document.getElementById('tax')
let ads = document.getElementById('ads')
let discount = document.getElementById('dis')
let Total = document.getElementById('Total')
let count = document.getElementById('cou')
let category =document.getElementById('cat')
let create =document.getElementById('create')

function  getTotal()
{
    if(price.value != ''){
        let result = (+price.value + +taxes.value + +ads.value) 
        - +discount.value
         Total.innerHTML = result ;
         Total.style.background = 'green';
    }
    else{
        Total.innerHTML = '' ;
        Total.style.background = 'white'

    }
} ;

let dataPro = []

create.onclick = function(){
let newPro = {
    title:title.value,
    price:price.value,
    taxes:taxes.value,
    ads:ads.value,
   discount:discount.value,
   Total:Total.innerHTML,
   count:count.value,
   category:category.value,
}
dataPro.push(newPro) ;
localStorage.setItem('product' ,JSON.stringify(dataPro))
console.log(dataPro)

}
