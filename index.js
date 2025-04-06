import func from "./src/func.js";


console.log(func.sumOfObj({ 'a': -3, 'b': 3, 'c': -4}))

console.log( func.objMod( {id: 1, name: 'apple'}, 
    {id: 2, name: 'watermelon'}, 
    {id: 3, name: 'qiwi'}, 
    {id: 4, name: 'lemon'} 
))

console.log(func.logString("Hello", "my", "world!"))

console.log(func.сheckObj({id: 1, particle: 10}))
console.log(func.сheckObj({id: 1, name: "tag"}))

console.log(func.generateArray([[1], [3], { 'a': 5 }, [7]]))


global.users = global.users || [];

func.addUser("ivan", "petrovich", 42)
func.addUser("ivan", "petrovich", 43)
func.addUser("ivan", "petrovich", 44)
func.addUser("ivan", "petrovich", 45)
func.addUser("ivan", "petrovich", 46)
func.addUser("ivan", "petrovich", 47)
func.addUser("ivan", "petrovich", 48)
console.log(global.users)

func.updateUser(8, "petr", "ivanich", 43)
console.log(global.users)

func.deleteUser(4)
func.deleteUser(5)
console.log(users)


let products = [
    {
        id: 1,
        title: 'велосипед',
        price: 45000,
        count: 3, // количество на складе
        marks: [4, 3, 5, 3] // оценки товара от 4х покупателей
    },
    {
        id: 2,
        title: 'ролики',
        price: 25000,
        count: 5,
        marks: [4, 3, 5, 5]
    },
    {
        id: 3,
        title: 'арбалет',
        price: 1700,
        count: 9,
        marks: [3, 3, 4, 5]
    },
    {
        id: 4,
        title: 'коньки',
        price: 4500,
        count: 3,
        marks: [4, 3, 4, 3]
    },
    {
        id: 5,
        title: 'ракетки',
        price: 900,
        count: 15,
        marks: [5, 3, 5, 3]
    },
    {
        id: 6,
        title: 'штанги',
        price: 14000,
        count: 5,
        marks: [3, 3, 3, 2]
    },
    {
        id: 7,
        title: 'стрелы',
        price: 1200,
        count: 55,
        marks: [3, 2, 4, 5]
    },
    {
        id: 8,
        title: 'мячи',
        price: 500,
        count: 49,
        marks: [5, 4, 4, 4]
    },
    {
        id: 9,
        title: 'сетка',
        price: 5000,
        count: 6,
        marks: [4, 5, 2, 5]
    },
    {
        id: 10,
        title: 'гантели',
        price: 3400,
        count: 12,
        marks: [3, 2, 4, 2]
    },
    {
        id: 11,
        title: 'маты',
        price: 16500,
        count: 7,
        marks: [4, 4, 4, 5]
    }
  ]

console.log(func.filterProducts(products), "\n\n")
console.log(func.sortByPrice(products))
console.log(func.totalPrice(products))
console.log(func.totalMarksSorted(products))
console.log(func.findPrice(products))