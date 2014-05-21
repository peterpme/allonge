var Queue = function() {
  extend(this, {
    array: [],
    head: 0,
    tail: -1
  })
};

// extend(Queue.prototype, {
//   pushTail: function(value){
//     return this.array[this.tail +=1] = value;
//   },
//   pullHead: function() {
//     var value; 
    
//     if(!this.isEmpty()) {
//       value = this.array[this.head];
//       this.array[this.head] = void 0;
//       this.head += 1;
//       return value
//     }
//   },
//   isEmpty: function() {
//     return this.tail > this.head;
//   }
// })