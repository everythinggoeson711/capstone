function displayRealateProduct(){
    var promise=axios({
        url:'https://shop.cyberlearn.vn/api/Product',
        method:'GET',
    })
    promise.then(function(result){
        renderRelateProduct(result.data.content);
    })
    promise.catch(function(error){
        console.log(error)
    })
}

function getdata(){
  function renderRelateProduct(arrRP){
    var category='';
    for (var index=0;index<arrRP.length;index++)
    {
        var  categoryRP=arrRP[index];
        category+= `
        <div class="product">
          <div class="product-img">
          <img src="${categoryRP.image}" alt="">
          </div>
          <div class="product-info">
            <h3 class="product-title">${categoryRP.name}</h3>
            <p class="product-desc">${categoryRP.shortDescription}</p>
            <div class="product-bottoms">
              <button class="product-btn"><a href="./detail.html?productid=${categoryRP.id}">Buy now </a></button>
              <button class="product-btns">85$</button>
            </div>
          </div>
        </div>
        `
    }
    document.querySelector('#relateProduct').innerHTML=category;
}
}
displayRealateProduct()