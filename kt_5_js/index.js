//1
let phones = [ 
    '590.423.4568', 
    '650.124.7234', 
    '650.507.9879', 
    '011.44.1343.529268', 
    '011.44.1344.478968', 
    '011.44.1644.429267', 
    '11.44.1343.52', 
    '11.44.1643.52'
]

function phonesCens(phns) {
    return phns.map(phn => phn.replace(/(\.\d)\d+$/, "$1****"))
}

console.log(phonesCens(phones))


//2
let cards = [
    '4000 0012 0056 9499',
    '4000 0013 5456 7379',
    '4000 0014 1456 9869',
    '4000 0015 3466 7859',
    '4000 0016 3556 6899',
    '4000 0017 4456 4699'
]

function cardsCens(cards) {
    return cards.map(card => card.replace(/\s\d*\s\d*\s/, "*****"))
}

console.log(cardsCens(cards))


//3
let prices = [ 
    'Цена товара - 1200$', 
    'Стоимость - 500$', 
    'Цена не определена', '9999',
    'Ценовая категория - больше 300$',
    'Цена за услугу 500 EUR',
    '150$',
]

function getInfoPrises(prices) {
    return [
        prices.reduce((acc, price) => acc + (price.toLowerCase().includes("цена") ? 1 : 0), 0), 
        prices.reduce((acc, price) => acc + (price.toLowerCase().includes("$") ? 1 : 0), 0)
    ]
}

console.log(getInfoPrises(prices))


//4
const king = "сегодня хорошая погода"

function kingSayd(king) {
    king.toLowerCase().includes("король сказал: ") ? 
    console.log(king) : 
    console.log(king.replace(/^/, "Король сказал: "))
}

kingSayd(king)


//5
function iIstFridayToday(dayOfWeek) {
    dayOfWeek >= 1 && dayOfWeek <= 3 ?
    console.log(`Пятница будет через ${(5 - dayOfWeek + 7) % 7 } дня`) :
    dayOfWeek == 0 ?
    console.log("Пятница будет через 5 дней") :
    dayOfWeek == 4 ?
    console.log("Завтра пятница!") :
    dayOfWeek == 5 ? 
    console.log("Сегодня пятница!") :
    console.log("Пятница была вчера")
}

const date = new Date();
const dayOfWeek = date.getDay();

iIstFridayToday(dayOfWeek)

