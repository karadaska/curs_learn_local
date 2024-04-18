const a = [1, 2, 3, 4, 5];

a.forEach(elem =>{
    console.log(elem);
})

a.forEach((number, index) => {
    console.log(number + ' ' + index);
})

