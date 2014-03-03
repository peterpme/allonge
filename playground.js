function butFirst() {
    return Array.prototype.slice.call(arguments,1,3);
}

console.log(butFirst('a', 'b','c','d'));
