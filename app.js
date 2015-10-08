var CookieStand = function(place, ulName, minCustHour, maxCustHour, avgCookiesCust) {
  this.place = place;
  this.ulName = ulName;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookiesCust = avgCookiesCust;
  this.dailyList = [];
  this.hours = [10, 11, 12, 13, 14, 15, 16, 17];
  this.randCustHour = function() {
  return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1))
    + this.minCustHour;
  };

  this.totalCookiesHour = function() {
    return Math.floor(this.randCustHour() * this.avgCookiesCust);
  };

  this.buildList = function(){
    for(var i = 0; i < 8; i++) {
      this.dailyList.push(this.totalCookiesHour());
    }
  };

  this.totalCookiesDay = function(){
    var sum = 0;
      for(var i = 0; i < this.dailyList.length; i ++) {
          sum = sum + this.dailyList[i];
      }
      return sum
  };

  this.makeUL = function() {
    this.buildList();
    for (var i = 0; i < this.dailyList.length; i++) {
       var ulElement = document.getElementById(this.ulName);
       var item = document.createElement('li');
       item.appendChild(document.createTextNode(this.hours[i] + ":00: "
        + this.dailyList[i] + " cookies"));
       ulElement.appendChild(item);
      }
      var totalItems = document.createElement("li");
      totalItems.appendChild(document.createTextNode("Total: " + this.totalCookiesDay()));
      ulElement.appendChild(totalItems);
  };

  this.makeUL();
}
var pikePlace = new CookieStand('Pike Place', 'pike', 17, 88, 5.2);
var seaTac = new CookieStand('Sea Tac', 'seatac', 6, 44, 1.2);
var southCenter = new CookieStand('South Center', 'southcenter', 11, 38, 1.9);
var bellevueSq = new CookieStand('Bellevue Square', 'bellevue', 20, 48, 3.3);
var alki = new CookieStand('Alki', 'Alki', 3, 24, 2.6);
