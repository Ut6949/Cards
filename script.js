allProducts = document.getElementById("allProducts");
let products = [
    {image:"Images/1.png", name:"Pink House By the Lake",ptype:"Lake House", psize:"",pdetail:"",pprice:"$ 20 mil"},
    {image:"Images/2.png", name:"Stone House on the Hills",ptype:"Hill House", psize:"",pdetail:"",pprice:"$ 30 mil"},
    {image:"Images/3.png", name:"Forest Front Property",ptype:"Forest House", psize:"",pdetail:"",pprice:"$ 25 mil"},
    {image:"Images/4.png", name:"Blackwood Small House",ptype:"Modern House", psize:"",pdetail:"",pprice:"$ 18 mil"},
    {image:"Images/5.png", name:"Brown House with a Driveway",ptype:"Modern House", psize:"",pdetail:"",pprice:"$ 22 mil"},
    {image:"Images/6.png", name:"Lonely House in the Green",ptype:"Field House", psize:"",pdetail:"",pprice:"$ 28 mil"},
    {image:"Images/7.png", name:"Grey Blue Victorian House",ptype:"Victorian Style", psize:"",pdetail:"",pprice:"$ 35 mil"},
    {image:"Images/8.png", name:"Small Country Side Cottage",ptype:"Cottage", psize:"",pdetail:"",pprice:"$ 15 mil"},
    {image:"Images/9.png", name:"House With Red Sand",ptype:"Bungalow", psize:"",pdetail:"",pprice:"$ 32 mil"},
    {image:"Images/10.png", name:"Red Barn Style House",ptype:"Barn House", psize:"",pdetail:"",pprice:"$ 29 mil"},
    {image:"Images/11.png", name:"Yellow Stone House",ptype:"Stone House", psize:"",pdetail:"",pprice:"$ 24 mil"},
    {image:"Images/12.png", name:"Stone House By the Lake",ptype:"Lake House", psize:"",pdetail:"",pprice:"$ 26 mil"},
    {image:"Images/13.png", name:"Gray House by the Woods",ptype:"Forest House", psize:"",pdetail:"",pprice:"$ 31 mil"},
    {image:"Images/14.png", name:"White Victorian Style House",ptype:"Victorian House", psize:"",pdetail:"",pprice:"$ 38 mil"},
    {image:"Images/15.png", name:"Yellow House in City",ptype:"City House", psize:"",pdetail:"",pprice:"$ 21 mil"},
    {image:"Images/16.png", name:"White Modern Villa",ptype:"Villa", psize:"",pdetail:"",pprice:"$ 40 mil"},
    {image:"Images/17.png", name:"Luxury House of City",ptype:"Mansion", psize:"",pdetail:"",pprice:"$ 45 mil"},
    {image:"Images/18.png", name:"House in the Grass Land",ptype:"House", psize:"",pdetail:"",pprice:"$ 19 mil"},
    {image:"Images/19.png", name:"House By the Mountains",ptype:"Mountain House", psize:"",pdetail:"",pprice:"$ 34 mil"},
    {image:"Images/20.png", name:"White House By the Canal",ptype:"Modern House", psize:"",pdetail:"",pprice:"$ 27 mil"},
    {image:"Images/21.png", name:"Family Vacation House",ptype:"Vacation House", psize:"",pdetail:"",pprice:"$ 23 mil"},
    {image:"Images/22.png", name:"Gray House on White Hill",ptype:"Hill House", psize:"",pdetail:"",pprice:"$ 39 mil"},
    {image:"Images/23.png", name:"Small White Wood house",ptype:"", psize:"",pdetail:"",pprice:"$ 17 mil"},
    {image:"Images/24.png", name:"Luxury City House",ptype:"", psize:"",pdetail:"",pprice:"$ 42 mil"},
    {image:"Images/25.png", name:"Modern Style Villa",ptype:"", psize:"",pdetail:"",pprice:"$ 50 mil"}];
for (var i=0; i < products.length; i++) {
allProducts.innerHTML += `
        <div class="col-xl-3 col-lg-3 col-md-4 col-sm- col-12" id="cards">
            <div class="card" style="width: 100%;">
              <img height="200" src="${products[i].image}"  class="card-img-top" alt="${products[i].name}"/>
              </div>
              <div class="card-body">
                <h2 class="card-pname">${products[i].name}</h2>
                <h4 class="card-ptype">${products[i].ptype}</h4>
                <p class="card-pdetail">
                  ${products[i].pdetail}
                </p>
                <h3 class="card-psize">${products[i].pprice}</h3>
                <a href="each-page.html?id=${i}" class="btn btn-primary">Details</a>
              </div>
            
        </div>
`
}