let countValue = new Promise(function (resolve, reject) {
    // could be resolved or rejected   
    resolve('Promise resolved'); 
});

// add other blocks of code
countValue.then(
    (result) => console.log(result) 
)
.finally(
    function greet() {
        console.log("run finally ");
    }
);