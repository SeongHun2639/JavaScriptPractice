function iterator(max, action){
    for (let i=0; i <max ; i++){
        action(i);
    }
}

function log (num){
    console.log(num);
}
iterator(4,log);