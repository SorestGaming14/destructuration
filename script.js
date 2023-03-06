// A

const data = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', 2000]

const [name, surname, department, position, salary] = data
console.log(name, surname, department, position, salary);

//B

const data1 = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', 2000]
const [name1, surname1, info1] = data1
console.log(name1, surname1, info1);

//C

const data2 = ['Иван', 'Иванов', 'Отдел разработки']
const [name2, surname2, department2, position2 = 'Junior'] = data2
function func(){
    position2.push(data2)
}
console.log(name2, surname2, department2, position2);

//D

const data3 = {
    color: 'red',
    width: 400,
    height: 500,
}

const {color, width, height} = data3

const options = {}

const {color: color1, width: width1, height: height1} = data3

console.log(color1, width1, height1); /* ?? */