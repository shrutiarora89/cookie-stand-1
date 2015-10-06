var CookieStand = function(place, ulName, minCustHour, maxCustHour, avgCookiesCust) {
  this.place = place;
  this.ulName = ulName;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookiesCust = avgCookiesCust;
  this.dailyList = dailyList = [];
  this.hours = hours = [10, 11, 12, 13, 14, 15, 16, 17];
  this.randCustHour = function() {
  return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  };
  this.totalCookiesHour = function() {
    return Math.floor(this.randCustHour() * this.avgCookiesCust);
  };
  this.buildList = function(){
    for(var i = 0; i < 8; i++) {
      this.dailyList.push(this.totalCookiesHour());
    };
  }
   this.makeUL = function(array) {
    for (var i = 0; i < array.length; i++) {
       var ulElement = document.getElementById(ulName);
       var item = document.createElement('li');
       item.appendChild(document.createTextNode(this.hours[i] + ":00: " + array[i] + " cookies"));
       ulElement.appendChild(item);
      }
  }
}
var pikePlace = new CookieStand('Pike Place', 'pike', 17, 88, 5.2);
var seaTac = new CookieStand('Sea Tac', 'seatac', 6, 44, 1.2);
var southCenter = new CookieStand('South Center', 'Southcenter Mall', 11, 38, 1.9);
var bellevueSq = new CookieStand('Bellevue Square', 'Bellevue Square', 20, 48, 3.3);
var alki = new CookieStand('Alki', 'Alki', 3, 24, 2.6);


//   makeUL = function(array) {
//     for (var i = 0; i < array.length; i++) {
//        var listPikePlace = document.getElementById('list1');
//        var item = document.createElement('li');
//        item.appendChild(document.createTextNode(this.hours[i] + ":00: " + array[i] + " cookies"));
//        listPikePlace.appendChild(item);
//       }
//   }

console.log(pikePlace);
pikePlace.buildList();
pikePlace.makeUL(pikePlace.dailyList);

console.log(seaTac);
seaTac.buildList();
seaTac.makeUL(seaTac.dailyList);

console.log(southCenter);
southCenter.buildList();
southCenter.makeUL(southCenter.dailyList);

console.log(pikePlace);
bellevueSq.buildList();
bellevueSq.makeUL(bellevueSq.dailyList);

console.log(alki);
alki.buildList();
alki.makeUL(alki.dailyList);


//   makeUL = function(array) {
//     for (var i = 0; i < array.length; i++) {
//        var listseaTac = document.getElementById('list2');
//        var item = document.createElement('li');
//        item.appendChild(document.createTextNode(this.hours[i] + ":00: " + array[i] + " cookies"));
//        listseaTac.appendChild(item);
//      }
//   }

// console.log(seaTac);
// seaTac.buildList();
// seaTac.makeUL(seaTac.dailyList)

//   makeUL = function(array) {
//     for (var i = 0; i < array.length; i++) {
//        var listSouthCenter = document.getElementById('list3');
//        var item = document.createElement('li');
//        item.appendChild(document.createTextNode(this.hours[i] + ":00: " + array[i] + " cookies"));
//        listSouthCenter.appendChild(item);
//       }
//   }

// console.log(southCenter);
// southCenter.buildList();
// southCenter.makeUL(southCenter.dailyList)


//   makeUL = function(array) {
//     for (var i = 0; i < array.length; i++) {
//        var listBellevueSq = document.getElementById('list4');
//        var item = document.createElement('li');
//        item.appendChild(document.createTextNode(this.hours[i] + ":00: " + array[i] + " cookies"));
//        listBellevueSq.appendChild(item);
//       }
//   }

// console.log(bellevueSq);
// bellevueSq.buildList();
// bellevueSq.makeUL(bellevueSq.dailyList)


//   makeUL = function(array) {
//     for (var i = 0; i < array.length; i++) {
//        var listAlki = document.getElementById('list5');
//        var item = document.createElement('li');
//        item.appendChild(document.createTextNode(this.hours[i] + ":00: " + array[i] + " cookies"));
//        listAlki.appendChild(item);
//       }
//   }

// console.log(alki);
// alki.buildList();
// alki.makeUL(alki.dailyList)
