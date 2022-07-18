function a(){
    console.log('a')
    return 1;
}

function b(){
    const result =a() + 1;
    console.log('b',result)
    return result
}

function c(){
    const result = b() +1; 
    console.log('c',result)
    return  result
}

const num = c();
console.log(num);