allProducts = document.getElementById("allProducts");
let products = [{id:"", image:"", name:"",ptype:"", psize:"",pdetail:"",pprice:""},{},{},{},{}];
for (var i=0; i < products.length; i++) {
allProducts.innerHTML += `
<div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 my-4">
            <div class="card" style="width: 18rem">
              <img src="${products[i].image}" class="card-img-top" alt="${products[i].name}" />
              <div class="card-body">
                <h2 class="card-title">${products[i].name}</h2>
                <h2 class="card-title">${products[i].ptype}</h2>
                <h2 class="card-title">${products[i].psize}</h2>
                <p class="card-text">
                  ${products[i].pdetail}
                </p>
                
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
`
}