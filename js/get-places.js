let places = [
  {
    "name" : "New York City, NY",
    "image" : "https://lh3.googleusercontent.com/-uHnftdMzZsc/V43bqjuUluI/AAAAAAAACOk/kVRtHBngPBAXgWM7O72A0Nu04ev-PYJwACJkC/w544-h360-k-no/",
    "visited" : 1
  }, {
    "name" : "Disney World",
    "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Walt_Disney_World_Resort_entrance.jpg/2560px-Walt_Disney_World_Resort_entrance.jpg",
    "visited" : 1
  }, {
    "name" : "Tampa, FL",
    "image" : "https://vacationidea.com/pix/img25Hy8R/florida/best-things-to-do-in-tampa-fl_f_mobi.jpg",
    "visited" : 1
  }, {
    "name" : "Gatlinburg, TN",
    "image" : "https://www.blackbeargatlinburg.com/wp-content/uploads/2017/11/Overlook-of-Gatlinburg.jpg",
    "visited" : 1
  }, {
    "name" : "Las Vegas, NV",
    "image" : "https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,h_900,q_75,w_1600/v1/clients/lasvegas/strip3_d7b175ef-3642-41a4-9dad-33b9be2b00a9.jpg",
    "visited" : 1
  }, {
    "name" : "France",
    "image" : "https://cdn.travel-mediaserver.com/driveaway/images/car-hire/destinations/france-large.jpg",
    "visited" : 2
  }, {
    "name" : "Ethiopia",
    "image" : "https://ethiopiatouring.com/wp-content/uploads/2014/04/lionstatue.jpg",
    "visited" :  2
  }, {
    "name" : "Scotland",
    "image" : "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1024,c_fill,g_auto,h_576,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606121333-scotland---travel-destination---shutterstock-512226913.jpg",
    "visited" : 2
  }, {
    "name" : "Washington, DC",
    "image" : "https://cdn.vox-cdn.com/thumbor/bWyTFwGMeaHJSm_ksL7tcsWUDrg=/0x0:4529x3000/1200x675/filters:focal(1903x1138:2627x1862)/cdn.vox-cdn.com/uploads/chorus_image/image/57301301/shutterstock_110970671.0.0.jpg",
    "visited" : 1
  }, {
    "name" : "Atlanta, GA",
    "image" : "https://www.atlantaga.gov/Home/ShowImage?id=3272&t=636335665341170000",
    "visited" : 1
  }, {
    "name" : "Cimarron, NM",
    "image" : "https://tampabayscouting.org/wp/wp-content/uploads/2016/08/Philmont_Scout_Ranch_Tooth_of_Time_2004.jpg",
    "visited" : 1
  }
];

let btn = $("#see-places");
let outputDiv = $("#output-places");
let search = $("#search");



function alphabetize() {
   places.sort(function(a, b){
	  var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
	  if (nameA < nameB) //sort string ascending
 	  	return -1 
	  if (nameA > nameB)
	  	return 1
	  return 0 //default return value (no sorting)
  })
};

function visitedOverWantToGo() {
  places.sort(function(a, b) {
	return a.visited - b.visited
  })
};

function populatePlaces(placesArray) { 
  let radioBtn = $("input[name=placeChoice]:checked").attr('id');
  let searchVal = search.val().toLowerCase();
  ///// CLEARS THE DIV FOR THE NEW DISPLAY //////////////////
  outputDiv.html("");
  for(let i of placesArray) {
    ////CHECKS TO SEE IF THE VALUE IN THE SEARCH BAR MATCHES ANYTHING IN THE ARRAYS NAMES//////
    if ((i.name.toLowerCase().includes(searchVal))) { 
    //CHECKS IF RADIO BUTTON THAT I HAVE BEEN THERE IS CHECKED///////////////
      console.log(">>>radiobtn var >>>>>", radioBtn)
     if (radioBtn === "been") {
       console.log("been button works")
      //CHECKS THE ARRAY TO SEE IF I ACTUALLY HAVE BEEN THERE //////////////
        if (i.visited === 1) {
        //SPITS OUT THE CARD USING THE INFORMATION FROM THE ARRAY/////////////////  
              console.log((i.name.toLowerCase().includes(searchVal)))
              outputDiv.append(`<div class="card places-cards bg-dark text-white col" style="width:18rem;"><h5 class="card-header">${i.name}</h5><img class="card-img-top location-image" src="${i.image}"alt="${i.name}"><div class="card-footer">Been there!</div></div>`).children(':last').hide().fadeIn(1500);
              console.log(i.name);
              console.log(search.val());
            }  ///CHECKS TO SEE IF THE RADIO BUTTON FOR WANT TO GO IS CHECKED
      } else if(radioBtn === "want") {
            ///THEN CHECKS THRU THE ARRAY TO SEE IF I HAVE IN FACT NOT BEEN THERE
            if (i.visited === 2) {
            // SPITS OUT A CARD USING THE INFORMATION FROM THE ARRAY
              outputDiv.append(`<div class="card places-cards wantToGo text-white col" style="width: 18rem;"><h5 class="card-header">${i.name}</h5><img class="card-img-top location-image" src="${i.image}"alt="${i.name}"><div class="card-footer">Want to go!</div></div>`).children(':last').hide().fadeIn(1500);
              console.log(i.name);
              console.log(search.val());
              console.log(!(i.name.toLowerCase().includes(searchVal)))

            } //// IF NEITHER BUTTON IS CLICKED THEN IT WILL SHOW EVERYTHING 
          } else {
               if (i.visited === 1) {
                 outputDiv.append(`<div class="card places-cards bg-dark text-white col" style="width: 18rem;"><h5 class="card-header">${i.name}</h5><img class="card-img-top location-image" src="${i.image}"alt="${i.name}"><div class="card-footer">Been there!</div></div>`).children(':last').hide().fadeIn(1500);
              }   else {
                    outputDiv.append(`<div class="card places-cards wantToGo text-white col" style="width: 18rem;"><h5 class="card-header">${i.name}</h5><img class="card-img-top location-image" src="${i.image}"alt="${i.name}"><div class="card-footer">Want to go!</div></div>`).children(':last').hide().fadeIn(1500);
                 }         
            }
        }
   }   if(outputDiv.html() === "") {
     //////IF THERE IS NOTHING SHOWN IN THE DIV THEN IT MEANS THE SEARCH RESULTED IN NOTHING AND SHOWS THIS MESSAGE//////
        outputDiv.html("<h2>Sorry, there's nothing here for you at this time</h2>");
       }
};



$(placesForm).submit(function(e) {
  e.preventDefault();
  alphabetize();
  visitedOverWantToGo();
  populatePlaces(places);
});