function fetchEgg(chicken){
    return Promise.resolve(`${chicken} => egg`)
}

function fryEgg(egg){
    return Promise.resolve(`${egg} =>달걀말이`)
}

function getChicken(chicken){
    return Promise.reject(new Error('치킨을 가지고 올 수 없음!'))
    //return Promise.resolve(`정원 => 닭`)
}

getChicken()
.then(chicken => fetchEgg(chicken))
.then(egg => fryEgg(egg))
.then((friedEgg) => console.log(friedEgg))
.catch((error) => console.log(error.name))
