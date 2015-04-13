// Loop problems

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
  for(var i=0; i<animals.length; i++) {
    console.log(animals[i]);
}

// Loop problem 1

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
  for(var i=0; i<animals.length-1; i++) {
    console.log(animals[i]);
}

// Loop problem 2

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
  for(var i=0; i<animals.length; i+=2) {
    console.log(animals[i]);
}

// Loop problem 3

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
animals.reverse();
  for(var i=0; i<animals.length; i++) {
    console.log(animals[i]);
}

// Loop problem 4

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
  for(var i=0; i< animals.length; i++) {
    if (animals[i] === animals[0] || animals[i] === animals[animals.length-1]){
      console.log(animals[i]);
    } else {
      console.log(animals[i]);
      console.log(animals[i]);
    }
  }
