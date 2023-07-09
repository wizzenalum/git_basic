function outside() {
    let x=20
    function inside(y) {
      x=x+10;
        return x + y;

    }
    console.log(x);
    return inside;
  }
  
  const fnInside = outside(); // Think of it like: give me a function that adds 3 to whatever you give it
  console.log(fnInside(5)); // 8
  console.log(outside()(5)); // 8