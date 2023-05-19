function solve() {
   let textAreaElement = document.querySelector('textarea');
   let buttonElements = document.querySelectorAll('.add-product');
   let checkOutButton = document.querySelector('.checkout');
   let allButtons = document.getElementsByTagName('button')
   let arrOfProducts = [];
   let totalPrice = 0;
   for (const button of buttonElements) {
      button.addEventListener('click', (e) => {
         let parentElement = button.parentElement.parentElement;
         let productName = parentElement.querySelector('.product-details .product-title').textContent;
         let productPrice = parentElement.querySelector('.product-line-price').textContent;
         textAreaElement.textContent += `Added ${productName} for ${productPrice} to the car. \n`
         if (!arrOfProducts.includes(productName)){
            arrOfProducts.push(productName);
         }
         totalPrice += Number(productPrice)
      })
   }
   checkOutButton.addEventListener('click', disableButtons)
   function disableButtons () {
      for (const button of allButtons) {
         button.disabled = true;
      }
   }
   checkOutButton.addEventListener('click', (e) =>{
      textAreaElement.textContent += `You brought ${arrOfProducts.join(", ")} for ${(totalPrice.toFixed(2))}`
   })
 
}