var pikePlace = {
  location: 'Pike Place Market',
  minCustHour: 17,
  maxCustHour: 88,
  avgCookiesCust: 5.2,
  hours: [10, 11, 12, 13, 14, 15, 16, 17],
  dailyList: [],
  randCustHour: function() {
  return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  },
  totalCookiesHour: function() {
    return Math.floor(this.randCustHour() * this.avgCookiesCust);
  },
  buildList: function(){
    for(var i = 0; i < 8; i++) {
      this.dailyList.push(this.totalCookiesHour());
    }
  },
  makeUL: function(array) {
    for (var i = 0; i < array.length; i++) {
       var listPikePlace = document.getElementById('list1');
       var item = document.createElement('li');
       item.appendChild(document.createTextNode(this.hours[i] + ":00: " + array[i] + " cookies"));
       listPikePlace.appendChild(item);
      }
  }
};
console.log(pikePlace);
pikePlace.buildList();
pikePlace.makeUL(pikePlace.dailyList)


var seaTac = {
  location: 'SeaTac Airport',
  minCustHour: 6,
  maxCustHour: 44,
  avgCookiesCust: 1.2,
  dailyList: [],
  hours: [10, 11, 12, 13, 14, 15, 16, 17],
  randCustHour: function() {
  return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  },
  totalCookiesHour: function() {
    return Math.floor(this.randCustHour() * this.avgCookiesCust);
  },
  buildList: function(){
    for(var i = 0; i < 8; i++) {
      this.dailyList.push(this.totalCookiesHour());
    }
  },
  makeUL: function(array) {
    for (var i = 0; i < array.length; i++) {
       var listseaTac = document.getElementById('list2');
       var item = document.createElement('li');
       item.appendChild(document.createTextNode(this.hours[i] + ":00: " + array[i] + " cookies"));
       listseaTac.appendChild(item);
     }
  }
};
console.log(seaTac);
seaTac.buildList();
seaTac.makeUL(seaTac.dailyList)

var southCenter = {
  location: 'Southcenter Mall',
  minCustHour: 11,
  maxCustHour: 38,
  avgCookiesCust: 1.9,
  hours: [10, 11, 12, 13, 14, 15, 16, 17],
  dailyList: [],
  randCustHour: function() {
  return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  },
  totalCookiesHour: function() {
    return Math.floor(this.randCustHour() * this.avgCookiesCust);
  },
  buildList: function(){
    for(var i = 0; i < 8; i++) {
      this.dailyList.push(this.totalCookiesHour());
    }
  },
  makeUL: function(array) {
    for (var i = 0; i < array.length; i++) {
       var listSouthCenter = document.getElementById('list3');
       var item = document.createElement('li');
       item.appendChild(document.createTextNode(this.hours[i] + ":00: " + array[i] + " cookies"));
       listSouthCenter.appendChild(item);
      }
  }
};
console.log(southCenter);
southCenter.buildList();
southCenter.makeUL(southCenter.dailyList)

var bellevueSq = {
  location: 'Bellevue Square',
  minCustHour: 20,
  maxCustHour: 48,
  avgCookiesCust: 3.3,
  hours: [10, 11, 12, 13, 14, 15, 16, 17],
  dailyList: [],
  randCustHour: function() {
  return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  },
  totalCookiesHour: function() {
    return Math.floor(this.randCustHour() * this.avgCookiesCust);
  },
  buildList: function(){
    for(var i = 0; i < 8; i++) {
      this.dailyList.push(this.totalCookiesHour());
    }
  },
  makeUL: function(array) {
    for (var i = 0; i < array.length; i++) {
       var listBellevueSq = document.getElementById('list4');
       var item = document.createElement('li');
       item.appendChild(document.createTextNode(this.hours[i] + ":00: " + array[i] + " cookies"));
       listBellevueSq.appendChild(item);
      }
  }
};
console.log(bellevueSq);
bellevueSq.buildList();
bellevueSq.makeUL(bellevueSq.dailyList)

var alki = {
  location: 'Alki',
  minCustHour: 3,
  maxCustHour: 24,
  avgCookiesCust: 2.6,
  hours: [10, 11, 12, 13, 14, 15, 16, 17],
  dailyList: [],
  randCustHour: function() {
  return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  },
  totalCookiesHour: function() {
    return Math.floor(this.randCustHour() * this.avgCookiesCust);
  },
  buildList: function(){
    for(var i = 0; i < 8; i++) {
      this.dailyList.push(this.totalCookiesHour());
    }
  },
  makeUL: function(array) {
    for (var i = 0; i < array.length; i++) {
       var listAlki = document.getElementById('list5');
       var item = document.createElement('li');
       item.appendChild(document.createTextNode(this.hours[i] + ":00: " + array[i] + " cookies"));
       listAlki.appendChild(item);
      }
  }
};
console.log(alki);
alki.buildList();
alki.makeUL(alki.dailyList)
