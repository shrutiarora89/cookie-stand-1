

var CookieStand = function(place, minCustHour, maxCustHour, avgCookiesCust) {
  this.place = place;
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
}

var pikePlace = new CookieStand('Pike Place', 17, 88, 5.2);
var seaTac = new CookieStand('Sea Tac', 6, 44, 1.2);
var southCenter = new CookieStand('South Center', 11, 38, 1.9);
var bellevueSq = new CookieStand('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStand('Alki', 3, 24, 2.6);

makeUL = function(array) {
    for (var i = 0; i < array.length; i++) {
       var place = document.getElementById('list2');
       var item = document.createElement('li');
       item.appendChild(document.createTextNode(this.hours[i] + ":00: " + array[i] + " cookies"));
       listplace.appendChild(item);
     }
  }

console.log(pikePlace);
console.log(seaTac);
