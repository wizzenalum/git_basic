let cars={
    brand1: "Ferrari",
    "brand2": "Bugati",
    brand3: "Porche",
    4: "Tata"
}
cars.brand2
console.log(cars[4])



// const obj = {};

// obj[Symbol("a")] = "a";
// obj[Symbol.for("b")] = "b";
// obj["c"] = "c";
// obj.d = "d";

for (const i in cars) {
  console.log(i);
}