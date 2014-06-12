function myName() {
  return this.name;
}

var harpo = { name: 'Harpo'},
    chico = { name: 'Chico'},
    groucho = { name: 'Groucho'};
    
var fh = myName.bind(harpo);
console.log(fh());

var fc = myName.bind(chico);
console.log(fc());
var fhg = fh.bind(groucho);
console.log(fhg(), fc.call(groucho), fc.apply(groucho, []));