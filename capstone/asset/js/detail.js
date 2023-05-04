window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    console.log('params',myParam)

    //call api load lên giao diện 
        var promise=axios({
            url:'https://shop.cyberlearn.vn/api/Product/getbyid?id='+myParam,
            method:'GET',
            ResponseType:JSON,
        })
            promise.then(function(result){
                console.log(result.data.content     );
                
                var contentClick=result.data.content;
                var arrSize=contentClick.size
                var displaySize=``;
                var indexSize=-1
                for(var index=0;index<arrSize.length;index++)
                {
                    indexSize=index
                    displaySize+=`
                        <button class="btnsize" >
                        ${arrSize[indexSize]}
                        </button>
                    `
                }
                var display='';
                display=`
                <section class="product-detail">
                    <div class="photo">
                        <img src="${contentClick.image}">
                    </div>
                    <div class="detail">
                        <h1> ${contentClick.name}</h1>
                        <span>Available size</span>
                        <div class="catalogue-size">
                            ${displaySize}
                        </div>
                        <h3>${contentClick.price}$</h3>
                        <div class="changethenumber">
                            <button class="" id="btnup" onclick="increase()">+</button>
                            <input type="text" id="quantity" value="0" />
                            <button class="" id="btndown" onclick="decrease()">-</button>
                        </div>
                        <button class="btn" id="btn-add-to-cart">Add to cart</button>
                    </div>
                </section>
    
    
                `
                 
               
                document.querySelector('.container').innerHTML=display;
                var currentNumb=+document.getElementById('quantity').value;
            increase=function(){
                numb=currentNumb+=1
                document.getElementById('quantity').value=numb
            decrease=function(){
                
                if (numb>0){
                    numb=currentNumb-=1;
                }
                document.getElementById('quantity').value=numb;
                

            }
            }
            })
            promise.catch(function(error){
                console.log(error)
            })
    }
            
   