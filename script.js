allProducts = document.getElementById("allProducts");
let products = [
    {id:"1", image:"Images/1.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"2", image:"Images/2.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"3", image:"Images/3.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"4", image:"Images/4.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"5", image:"Images/5.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"6", image:"Images/6.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"7", image:"Images/7.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"8", image:"Images/8.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"9", image:"Images/9.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"10", image:"Images/10.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"11", image:"Images/11.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"12", image:"Images/12.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"13", image:"Images/13.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"14", image:"Images/14.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"15", image:"Images/15.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"16", image:"Images/16.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"17", image:"Images/17.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"18", image:"Images/18.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"19", image:"Images/19.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"20", image:"Images/20.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"21", image:"Images/21.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"22", image:"Images/22.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"23", image:"Images/23.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"24", image:"Images/24.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""},
    {id:"25", image:"Images/25.png", name:"Wild Property",ptype:"", psize:"",pdetail:"",pprice:""}];
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
                <a href="#" class="btn btn-primary">Details</a>
              </div>
            
        </div>
`
}