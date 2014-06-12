function inventoryRecord (apples, oranges, eggs) {
  this.record = {
    apples: apples,
    oranges: oranges,
    eggs: eggs
  }
}

inventoryRecord.prototype.apples = function apples() {
  return this.record.apples;
}

inventoryRecord.prototype.oranges = function oranges() {
  return this.record.oranges;
}

inventoryRecord.prototype.eggs = function eggs() {
  return this.record.eggs;
}

var inventories = [
   new inventoryRecord(0, 144, 36),
   new inventoryRecord(240,54,12),
   new inventoryRecord(24,12,42)
];

function mapWith(fn) {
  return function (list) {
    return Array.prototype.map.call(list, function (something) {
      return fn.call(this, something);
    });
  };
};

function getWith(attr) {
  return function (object){
    return object[attr];
  }
}

console.log(mapWith(getWith('eggs')(inventories)));
console.log(inventories[0].record);