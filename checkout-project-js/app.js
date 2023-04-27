
const minusBtn = document.querySelectorAll(".minus");
const plusBtn = document.querySelectorAll(".plus");
const orderAmounts = document.querySelectorAll(".amounts"); 
const prices = document.querySelectorAll(".prices"); 
const removeBtn = document.querySelectorAll(".remove");
const productTotals = document.querySelectorAll(".productTotals");

const subtotal = document.querySelector("#subtotal"); 
const taxes = document.querySelector("#taxes"); 
const shipping = document.querySelector("#shipping"); 
const total = document.querySelector("#total"); 

console.log(orderAmounts[1]);



const billing = () => {
    
    let subtotalPrice = 0;
    let shippingPrice = 0;
    
    orderAmounts.forEach((p,i,array) => {
        subtotalPrice += Number(p.textContent*prices[i].textContent);
        productTotals[i].textContent = Number(
          p.textContent * prices[i].textContent
        ).toFixed(2);
    })
    console.log(subtotalPrice);

    if (subtotalPrice) {
        shippingPrice = 15;
    }
    subtotal.textContent = `$${subtotalPrice.toFixed(2)}`;
    taxes.textContent = `$${(subtotalPrice*0.18).toFixed(2)}`;
    shipping.textContent = `$${shippingPrice.toFixed(2)}`;
    total.textContent = `$${(subtotalPrice * 1.18 + shippingPrice).toFixed(2)}`;
}

plusBtn.forEach((p,i, array) => {
    
    p.onclick = () => {
        orderAmounts[i].textContent++;
        billing();
    }
})

minusBtn.forEach((p, i, array) => {
    
    p.onclick = () => {
        if(orderAmounts[i].textContent>0) {
            orderAmounts[i].textContent--;
        }
        billing();
    };

});

removeBtn.forEach((p,i, array) => {
    p.onclick = () => {
        orderAmounts[i].textContent = 0;
        p.closest(".row").remove();
        billing();
    }
})

billing();