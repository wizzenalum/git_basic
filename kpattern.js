let reverse = true
let horizontal_stars = 0
for(let i = 0; i<20; i++){
    if(reverse){
        horizontal_stars = 10-i
    }else{
        horizontal_stars = i-10
    }
    for(let k = 0; k<horizontal_stars;k++){
        process.stdout.write("0");
    }
    if(i == 10){reverse = false}
    else{console.log("")}
}
