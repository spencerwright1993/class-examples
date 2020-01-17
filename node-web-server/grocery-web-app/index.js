const productListElement = document.querySelector('.Items');


axios.get('http://localhost:3000/api/products')
 .then(function (response) {
     const products = response.data;

     const productElementList = document.createElement('div');
     productElementList.classList.add('Items');



    for(let i = 0; i < products.length; i++){
        const p = products[i];
        const img = p.url;
        const buttonElement = document.createElement('button');
        const imageElement = document.createElement("img");
        imageElement.setAttribute('src', `./thumbnails/${img}`)
        buttonElement.textContent ='Add to Cart';
         const nameElement = document.createElement('div');
         nameElement.textContent = p.title;
         const priceElement = document.createElement('div');
         priceElement.textContent = `\$${p.price}`;
         const productElement = document.createElement('div');
         productElement.append(nameElement);
         productElement.append(priceElement);
         productElement.classList.add('item');
         productElementList.append(productElement);
         productElement.append(buttonElement); 
         productElement.append(imageElement);    
        }

     productListElement.replaceWith(productElementList);




 // handle success
 
 console.log(response);
 
 // add to the DOM
    })
 .catch(function (error) {
 // handle error
 console.log(error);
 });