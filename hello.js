const func = (a, b) => {
    let len = (a + b).toString().length;
    if (len > 1) {
        let arr = (a + b).toString().split('');
        console.log(arr);
        
        arr.forEach(element => {

            console.log(parseInt(element) + 1);
            
        });
    }
    else {
        console.log("We get problems");
    }
}

console.log(func(10,120));

console.log("Printing something new");