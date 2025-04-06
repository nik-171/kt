import { error } from "tap";



// 1
function sumOfObj(obj){
    let sum = 0;
    for (const value of Object.values(obj)) {
        sum += value;
    }
    return sum;
}


//2
function objMod(objArr) {
    try {
        return objArr.map(obj => Object.values(obj));
    } catch {
        return 0
    }
}

    
//3
function logString(...wrd) {
    let tmp = '';
    for (const word in wrd) {
        tmp += wrd[word] + " ";
    }
    return tmp;
}


//4
function сheckObj(obj) {
    for (const val in Object.keys(obj)) {
        if (Object.keys(obj)[val] == 'particle') {
            return true;
        }
    }
    return false
}


//5
function generateArray(data) {
    return data.map(data => typeof data === 'object' ? Object.values(data) : data)
}


//6
function addUser(name, sName, age) {
    try {
        global.users.push({ 'id': global.users[global.users.length - 1].id + 1, 'name': name, 'surname': sName, 'age': age })
    } catch {
        global.users.push({ 'id': 1, 'name': name, 'surname': sName, 'age': age })        
    }
}


function updateUser(id, name, sName, age) {
    try {
        let user = global.users.findIndex(item => item.id == id);
        if (user == -1) throw error;
    } catch {
        console.log("error: there is no such element")
        return
    }

    global.users[global.users.findIndex(item => item.id == id)] = { 'id': id, 'name': name, 'surname': sName, 'age': age }
}


function deleteUser(id) {
    try {
        let user = global.users.findIndex(item => item.id == id);
        if (user == -1) throw error;
        global.users.splice(user, 1)
    } catch {
        console.log("error: user not found")
        return
    }
}


//7
function filterProducts(products) {
    return products.filter(product => product.count >= 10);
}


function findPrice(products) {
    return products.findIndex(product => product.price >= 800 && product.price <= 900)
}


function sortByPrice(products) {
    return products.sort(function (a, b) {
        return b.price - a.price;
    });
}


function totalPrice(products) {
    return products.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
}


function totalMarksSorted(products) {
    return (products.map(({ marks, ...obj }) => ({
        ...obj,
        marks_total: marks.reduce((acc, mark) => acc + mark, 0)
    })))
    .sort(function (a, b) {
        return b.marks_total - a.marks_total;
    })
}


//8
class Email {
    constructor(email) {
        this.email = email;
    }

    isValid() {
        return (
            !/[*#$%^]/.test(this.email) &&
            this.email.split('.').pop().length <= 3
          );
    }

    set setEmail(email) {
        if (!Array.isArray(email)) throw new Error('Incorrect format. Use array')

        if (email.length !== 3) throw new Error('Incorrect arguments. Use array with three elements')

        email.forEach(e => {
            if (typeof e !== 'string') throw new Error('Incorrect argument quantity. Each array element must be a string')
            if (e.length < 1) throw new Error('Incorrect value. Each array element must be not empty')
        });

        this.email = email[0] + '@' + email[1] + '.' + email[2]
    }
}


var a = new Email()

a.setEmail = ['example', 'gmail', 'com']
console.log(a.isValid)
console.log(a.email, "\n")


var b = new Email()

b.setEmail = ['ex$$$mple', 'gmail', 'com']
console.log(b.isValid)
console.log(b.email, "\n\n")


//9
class Contact extends Email {
    constructor(phone) {
        super(phone)
    }

    get numberValidation() {
        let tmp = this.phone.length;
        return tmp == 19 ? "Городской" : tmp == 13 ? "Мобильный" : "Неизвестный"
    }
}


var c = new Contact()

c.phone = "+123456789012"
console.log(c.numberValidation)


var d = new Contact()

d.phone = "+123456789012345678"
console.log(d.numberValidation)



export default {
    sumOfObj,
    objMod,
    logString,
    сheckObj,
    generateArray,
    addUser,
    updateUser,
    deleteUser,
    filterProducts,
    findPrice,
    sortByPrice,
    totalPrice,
    totalMarksSorted,
    Email,
    Contact
};