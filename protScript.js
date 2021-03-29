// creating an array for storing objects 
let arrayPortrait= [];
let arrayEvents= [];
let arrayNuture= [];


// creating interface for on overview of properties used in classes



class Portrait{
  imgId;
  imgUrl;
  
  constructor(imgId,imgUrl) {
   this.imgId=imgId;
   this.imgUrl=imgUrl;
    arrayPortrait.push(this); // pushing each property into array
  }

 
  divideDiv1() {
    return `
    <div class="col cardZoom">
    <div class="card h-100 rounded-3 shadow bgColor-4">
    <a href="img/protPortrait/${this.imgUrl}" class="fancbox" data-fancybox="gallery1">
    <img src="img/protPortrait/${this.imgUrl}" class=" d-md-block card-img-top" alt="..."  width="100%"  height="100%">
   </a>
  <div class="card-body">
    `
  }
    
  divideDiv2() {
    return `
        </div>
      </div>
    </div>
    `
  }
}


class Events {
    imgId;
    imgUrl;
    constructor(imgId,imgUrl) {
        this.imgId=imgId;
        this.imgUrl=imgUrl;
         arrayEvents.push(this); // pushing each property into array
       }
     

       divideDiv1() {
        return `
        <div class="col cardZoom">
        <div class="card h-100 rounded-3 shadow bgColor-4">
        <a href="img/${this.imgUrl}" class="fancbox" data-fancybox="gallery2">
        <img src="img/${this.imgUrl}" class="d-md-block card-img-top" alt="..."  width="100%"  height="100%">
       </a>
      <div class="card-body">
        `
      }
        
      divideDiv2() {
        return `
            </div>
          </div>
        </div>
        `
      }
} 




class Nuture {
    imgId;
    imgUrl;
    constructor(imgId,imgUrl) {
        this.imgId=imgId;
        this.imgUrl=imgUrl;
         arrayNuture.push(this); // pushing each property into array
       }
     

       divideDiv1() {
        return `
        <div class="col cardZoom">
          <div class="card h-100 rounded-3 shadow bgColor-4">
          <a href="img/${this.imgUrl}" class="fancbox" data-fancybox="gallery3">
          <img src="img/${this.imgUrl}" class=" d-md-block card-img-top" alt="..."  width="100%"  height="100%">
         </a>
        <div class="card-body">
        `
      }
        //display only the inner part of "card-body"
    //   display() {
    //     return `
    //             <h5 class="card-title textColor-1 fw-bold">${this.locName}</h5>
    //             <p class="card-text textColor-1">${this.locAddress}</p>
    //     `
    //   }
        // display only the last part of "col"
      divideDiv2() {
        return `
            </div>
          </div>
        </div>
        `
      }
}


new Events(1,"p3.jpg");
new Events(2,"p3.jpg");
new Events(3,"p3.jpg");
new Events(4,"p3.jpg");

new Portrait(1,"portrait1.jpg");
new Portrait(2,"portrait2.jpg");
new Portrait(3,"portrait3.jpg");
new Portrait(4,"portrait4.jpg");
new Portrait(1,"portrait5.jpg");
new Portrait(2,"portrait6.jpg");
new Portrait(3,"portrait7.jpg");
new Portrait(4,"portrait8.jpg");





new Nuture(1,"p6.jpg");
new Nuture(2,"p6.jpg");
new Nuture(3,"p6.jpg");
new Nuture(4,"p6.jpg");





// looping through the objects and printing them on the browser
for (let value of arrayPortrait) {
  document.getElementById("showH1Portrait").innerHTML = `<section id="locations"><h1 class="text-center p-3 textColor-1 mb-2">Portrait</h1></section>`;
  document.getElementById("showPortraitPic").innerHTML += `${value.divideDiv1()}${value.divideDiv2()}`;
}

for (let value of arrayNuture) {
  document.getElementById("showH1Nature").innerHTML = `<section id="restaurant"><h1 class="text-center p-3 textColor-1 mt-4 mb-2">Nuture</h1></section>`;
  document.getElementById("showNaturePic").innerHTML += `${value.divideDiv1()}${value.divideDiv2()}`;
}

for (let value of arrayEvents) {
  document.getElementById("showH1Events").innerHTML = `<section id="events"><h1 class="text-center p-3 textColor-1 mt-4 mb-2">Events</h1></section>`;
  document.getElementById("showEventsPic").innerHTML += `${value.divideDiv1()}  ${value.divideDiv2()}`;
}

console.table(arrayNuture);
console.table(arrayPortrait);
console.table(arrayEvents);



