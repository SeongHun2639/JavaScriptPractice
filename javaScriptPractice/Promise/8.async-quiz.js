function fetchEgg(chicken){
    return Promise.resolve(`${chicken} => egg`)
}

function fryEgg(egg){
    return Promise.resolve(`${egg} =>달걀말이`)
}

function getChicken(chicken){
    return Promise.resolve(`정원 => 닭`)
}

async function makeFriedEgg(){
    try {
        const chicken_1 = await getChicken()
        const egg = await fetchEgg(chicken_1)
        return await fryEgg(egg)
    } catch (error) {
        return console.log(error.name)
    }
}

makeFriedEgg().then(console.log)

