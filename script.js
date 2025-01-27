allProducts = document.getElementById("allProducts");
let products = [
    {id:"1", image:"", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"1", image:"", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"1", image:"", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"1", image:"", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"1", image:"", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""}];
for (var i=0; i < products.length; i++) {
allProducts.innerHTML += `
        <div class="col-xl-3 col-lg-3 col-md-4 col-sm- col-12">
            <div class="card" style="width: 100%;">
              <img height="200" src="${products[i].image}"  class="card-img-top" alt="${products[i].name}"/>
              </div>
              <div class="card-body">
                <h2 class="card-title">${products[i].name}</h2>
                <h3 class="card-title">${products[i].ptype}</h3>
                <h3 class="card-title">${products[i].psize}</h3>
                <p class="card-text">
                  ${products[i].pdetail}
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            
        </div>
`
}