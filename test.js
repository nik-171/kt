import t from 'tap'
import f from './src/func.js'

//1
t.test('basic cases', t => {
    t.equal(f.sumOfObj({ 'a': 3, 'b': 6, 'c': 4}), 13)
    t.equal(f.sumOfObj({ 'a': -3, 'b': 3, 'c': -4}), -4)
    t.equal(f.sumOfObj({ 'b': 6, 'c': 4}), 10)
    t.equal(f.sumOfObj({ 'a': 3, 'b': 0, 'c': 4}), 7)
    t.equal(f.sumOfObj({ 'a': 34444, 'b': 5555, 'c': 443894}), 483893)
    t.equal(f.sumOfObj({ 'a': 6, 'b': -3, 'c': -3}), 0)
    t.equal(f.sumOfObj({ 'a': 3, 'b': 6, 'c': -4}), 5)
    t.equal(f.sumOfObj({ 'a': -3, 'b': -6, 'c': -4}), -13)
    t.end()
}) 

t.test('empty Obj', t => {
    t.equal(f.sumOfObj({}), 0)
    t.end()
})

t.test('function is not modifying an Obj', t => {
    const obj = { 'a': 0, 'b': 6, 'c': -2, 'd': null}
    f.sumOfObj(obj)
    t.equal(obj.a, 0)
    t.equal(obj.b, 6)
    t.equal(obj.c, -2)
    t.equal(obj.d, null)
    t.end()
})


//2
t.test('objMod: basic cases', t => {
    t.same(f.objMod([ {id: 1, name: 'apple'}, 
        {id: 2, name: 'watermelon'}, 
        {id: 3, name: 'qiwi'}, 
        {id: 4, name: 'lemon'} ]), 
        [
            [1,"apple"],
            [2,"watermelon"],
            [3,"qiwi"],
            [4,"lemon"]
        ])

    t.end()
})

t.test('objMod: empty objArr', t => {
    t.equal(f.objMod({}), 0)
    t.end()
})


//4
t.test('checkObj: basic cases', t => {
    t.equal(f.сheckObj({id: 1, particle: 10}), true)
    t.equal(f.сheckObj({id: 1, name: 10}), false)
    t.end()
})

t.test('checkObj: empty Obj', t => {
    t.equal(f.сheckObj({}), false)
    t.end()
})


//5
t.test('generateArray: basic cases', t => {
    t.match(f.generateArray([[1], {id: 40}, [100], [300], {part: 10}]), [[1], [40], [100], [300], [10]])
    t.match(f.generateArray([[1], [40], [100], [300], [10]]), [[1], [40], [100], [300], [10]])
    t.match(f.generateArray([{id: 1}, {id: 40}, {id: -100}, [300], {part: 10}]), [[1], [40], [-100], [300], [10]])
    t.match(f.generateArray([[1], {id: 40}, [100], [300], {name: 'string'}]), [[1], [40], [100], [300], ['string']])
    t.end()
})

t.test('generateArray: empty array', t => {
    t.match(f.generateArray([]), [])
    t.end()
})


//6
t.test('addUser: basic cases', t => {
    global.users = global.users || [];
    f.addUser('any', 'any', 20)

    t.equal(users.length, 1)
    t.same(users[0], {id: 1, name: 'any', surname: 'any', age: 20})

    f.addUser('any2', 'any2', 21)

    t.equal(users.length, 2)
    t.same(users[1], {id: 2, name: 'any2', surname: 'any2', age: 21})
    t.same(users, [
        {id: 1, name: 'any', surname: 'any', age: 20},
        {id: 2, name: 'any2', surname: 'any2', age: 21}
    ])

    t.end()
})

t.test('updateUser: basic cases', t => {
    users = []
    f.addUser('any', 'any', 20)
    f.updateUser(1, 'any3', 'any3', 42)

    t.same(users[0], {id: 1, name: 'any3', surname: 'any3', age: 42})
    t.end()
})

t.test('deleteUser: basic cases', t => {
    users = []
    f.addUser('any', 'any', 20)
    f.addUser('any', 'any', 21)
    f.addUser('any', 'any', 22)
    f.addUser('any', 'any', 23)

    t.same(users, [
        {id: 1, name: 'any', surname: 'any', age: 20},
        {id: 2, name: 'any', surname: 'any', age: 21},
        {id: 3, name: 'any', surname: 'any', age: 22},
        {id: 4, name: 'any', surname: 'any', age: 23}
    ])

    f.deleteUser(2)

    t.same(users, [
        {id: 1, name: 'any', surname: 'any', age: 20},
        {id: 3, name: 'any', surname: 'any', age: 22},
        {id: 4, name: 'any', surname: 'any', age: 23}
    ])

    f.deleteUser(3)

    t.same(users, [
        {id: 1, name: 'any', surname: 'any', age: 20},
        {id: 4, name: 'any', surname: 'any', age: 23}
    ])

    t.end()
})

t.test('filterProducts: basic case', t => {
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

    t.same(f.filterProducts(products), [
        {
          id: 5,
          title: 'ракетки',
          price: 900,
          count: 15,
          marks: [ 5, 3, 5, 3 ]
        },
        {
          id: 7,
          title: 'стрелы',
          price: 1200,
          count: 55,
          marks: [ 3, 2, 4, 5 ]
        },
        {
          id: 8,
          title: 'мячи',
          price: 500,
          count: 49,
          marks: [ 5, 4, 4, 4 ]
        },
        {
          id: 10,
          title: 'гантели',
          price: 3400,
          count: 12,
          marks: [ 3, 2, 4, 2 ]
        }
    ])

    t.same(f.findPrice(products), 4)
    t.same(f.sortByPrice(products), [
        {
          id: 1,
          title: 'велосипед',
          price: 45000,
          count: 3,
          marks: [ 4, 3, 5, 3 ]
        },
        {
          id: 2,
          title: 'ролики',
          price: 25000,
          count: 5,
          marks: [ 4, 3, 5, 5 ]
        },
        {
          id: 11,
          title: 'маты',
          price: 16500,
          count: 7,
          marks: [ 4, 4, 4, 5 ]
        },
        {
          id: 6,
          title: 'штанги',
          price: 14000,
          count: 5,
          marks: [ 3, 3, 3, 2 ]
        },
        {
          id: 9,
          title: 'сетка',
          price: 5000,
          count: 6,
          marks: [ 4, 5, 2, 5 ]
        },
        {
          id: 4,
          title: 'коньки',
          price: 4500,
          count: 3,
          marks: [ 4, 3, 4, 3 ]
        },
        {
          id: 10,
          title: 'гантели',
          price: 3400,
          count: 12,
          marks: [ 3, 2, 4, 2 ]
        },
        {
          id: 3,
          title: 'арбалет',
          price: 1700,
          count: 9,
          marks: [ 3, 3, 4, 5 ]
        },
        {
          id: 7,
          title: 'стрелы',
          price: 1200,
          count: 55,
          marks: [ 3, 2, 4, 5 ]
        },
        {
          id: 5,
          title: 'ракетки',
          price: 900,
          count: 15,
          marks: [ 5, 3, 5, 3 ]
        },
        {
          id: 8,
          title: 'мячи',
          price: 500,
          count: 49,
          marks: [ 5, 4, 4, 4 ]
        }
    ])

    t.equal(f.totalPrice(products), 117700)

    t.same(f.totalMarksSorted(products), [
        { id: 2, title: 'ролики', price: 25000, count: 5, marks_total: 17 },
        { id: 11, title: 'маты', price: 16500, count: 7, marks_total: 17 },
        { id: 8, title: 'мячи', price: 500, count: 49, marks_total: 17 },
        { id: 9, title: 'сетка', price: 5000, count: 6, marks_total: 16 },
        { id: 5, title: 'ракетки', price: 900, count: 15, marks_total: 16 },
        { id: 1, title: 'велосипед', price: 45000, count: 3, marks_total: 15 },
        { id: 3, title: 'арбалет', price: 1700, count: 9, marks_total: 15 },
        { id: 4, title: 'коньки', price: 4500, count: 3, marks_total: 14 },
        { id: 7, title: 'стрелы', price: 1200, count: 55, marks_total: 14 },
        { id: 6, title: 'штанги', price: 14000, count: 5, marks_total: 11 },
        { id: 10, title: 'гантели', price: 3400, count: 12, marks_total: 11 }
    ])
    t.end()
})


//8
t.test('Email: basic cases', t => {
    var e = new f.Email()
    e.setEmail = ['example', 'gmail', 'com']

    t.equal(e.isValid(), true)
    t.same(e.email, 'example@gmail.com')

    e.setEmail = ['ex$$$mple', 'gmail', 'com']

    t.equal(e.isValid(), false)
    t.same(e.email, 'ex$$$mple@gmail.com')

    e.setEmail = ['example', 'gmail', 'online']
    t.same(e.isValid(), false)
    t.end()
})


//9
t.test('Contact: basic cases', t => {
    var p = new f.Contact()
    p.phone = '+123456789012'

    t.same(p.numberValidation, 'Мобильный')

    p.phone = '+123456789012345678'
    t.same(p.numberValidation, 'Городской')

    p.phone = '123123123123'
    t.same(p.numberValidation, 'Неизвестный')
    t.end()
})