// let data={name:"shifa",age:26,skills:"js"}
// let info={city:"ngp"}
//     data={data,...info}
//      let datas={data,...info}
// console.log(datas)  

//2
// let data={name:"shifa",age:26,skills:"js"}
// let info={city:"ngp",skills:"node"}
// data={...data,...info}
// console.log(data)   

//3
// const name="shifa"
// console.log(name());

//
// const result=false|| null ||{}// || this operater gives first postive falvue
// console.log(result);

//
// const result=false|| null || ""// if all the values are false then it will pick the last value
// console.log(result);

//
// const result=[]|| 0 || true
// console.log(result);

//
//console.log(Promise.resolve(5));

//
//JSON.parse()//It converts(parse) JSON to a javascript value.

//
// let name="shifa";
// function getname(){
//     console.log(name);
//     let name="anil"
// }

// getname();

// let has block level scope 
// let name="shifa";
// function getname(){
//     console.log(name);   
// }

// getname();

//
//console.log(`${(x=>x)('i love')} to program`)

// 
// function sumVal(x,y,z){
// return x+y+z;
// }
// console.log(sumVal(...[1,2,3]))

//console.log(!Boolean)
//console.log(typeof {})
//const name ='shifa';
// console.log(!typeof name===Object)
// console.log(!typeof name===String)
// console.log(!typeof name==false)

//
// const name='shifa'
// const age=26

// console.log(isNaN(name))
// console.log(isNaN(age))

//
// let person={name:"Shifa"}
// Object.seal(person)//when we add seal then we can modify existing obj and cannot add aditional keys or values.

// person.name='ahmed'
// console.log(person)


//
// let data=[1,3,5,7]
// //remove first element
// console.log(data)
// data.shift()
// //remove last element
// data.pop();

//
// let data={name:"shifa"}
// delete data.name//how to delete obj-as js is garbage collected it gets auto delete when no use of obj
// console.log(data)

// 
// let data='true'
// //convert data to boolean false value
// console.log(!data)

//
// let data='true'
// //convert data to boolean true value
// console.log(!!data)

//diff bet map and foreach function
//map returns something for each doesnt

//
// let data=['ab','xy','pq']
// delete data[1]
// console.log(data,data.length)


//merge two array
// let a=[1,2,3]
// let b=[4,5,6]
// let c=[...a,...b]
// console.log(c)

// merge unique element of an array
// let a=[1,2,3]
// let b=[1,2,4,5,689]
// let c=[...a,...b]
// let obj={}
// for(let i=0;i<c.length;i++){
// obj[c[i]]=0
// }
// console.log(Object.keys(obj))

//
// let c=3**3;
// console.log(c)

//
// let a=2;
// setTimeout(()=>{console.log(a)},0)
// a=100;

//
// let a=2;
// let A=33;
// console.log(A);

//
// let A10=23; variable should start with str
// let 10A=25
// console.log(A10)
// console.log(10A)

//
// let a='Like'
// let b=`Like`
// console.log(a===b)

//
// let a=1
// let c=2
// console.log(--c===a)

//
// let a=1
// let b=1
// let c=2
// console.log(a===b===--c)

//
// console.log(3*3)
// console.log(3**3)
// console.log(3***3)

//
// console.log(a)
// var a;

//
// console.log(b)

//
// console.log([[[[]]]])

//how to find OS name?
// navigator.platform

//
// let for=100//it will give err coz for is reserved keyword.


// function fruit(){
// console.log(name)
// console.log(price)

//     var name='apple'//hoisting hua phle use kro fir declare.but assign nhi hota i guess isliye undefined h .
//     let price=20//let ko phle declare kro badme use kro.
        
// }
// fruit();

//
// for (var i = 0; i < 3; i++) {
//     setTimeout(()=>console.log(i),1)
// }

//
// for (let i = 0; i < 3; i++) {
//     setTimeout(()=>console.log(i),1)
// }

//
// console.log(+true)//kisis bhi string bollean value ke aage + sign add krdo to wo number banjata h.
// console.log(typeof +true)

//
// console.log(!"shifa")
// console.log(typeof("shifa"))

//
// let data="size"
// const bird={
//     size:'small'
// }

// console.log(bird[data])
// console.log(bird["size"])
// console.log(bird.size)
// console.log(bird.data)

//
// let c={name:"peter"};
// let d;
// d=c;//here we did not copy the data we copied the location of obj in d.so if c changes automatically d also changes.
// c.name="anil"
// console.log(d.name);

// var ke sath krskte h but let const ke sath nhi .nd const koto declare ke sath val assign krna hota h
// var x;
// var x=10;
// console.log(x);

// var x;
// let x=10;
// console.log(x);

//
// let a=3;//type is number
// let b=new Number(3)//type is Object
// console.log(b)
// console.log(a==b)
// console.log(a===b)

//
// let name;
// nmae={}//typo (jab kuchh nhi dalte let or const then it will take it as var.)
// console.log(name)//why it didnt say undefined?

//
// function fruit(){
//     console.log("woo!")
// }

// fruit.name='apple'
// fruit();

//
// function sum(a,b){
//     return a+b
// }

// console.log(sum(1,'2'))

//
// let number=0;
// console.log(number++)//it gets increment but its a post increment so it log first then increment
// console.log(++number)//uts pre hence it log with the incremented val.
// console.log(number)

//
// function getAge(...args){
// console.log(typeof args)//args=[21]
// }

// getAge(21)


//
// function getAge(){
// 'use strict'
//     age=21
//     console.log(age);
// }

// getAge()

//67
// const sum=eval('10*10+5')//eval turn string into mathematical expression.
// console.log(sum);

//69
// const obj={1:'a',2:'b',3:'c'}
// console.log(obj.hasOwnProperty(1))
// console.log(obj.hasOwnProperty('1'))

// 
// const obj={a:'one',b:'two',a:'repeat'}
// console.log(obj);

//
// for (let i = 0; i < 5; i++) {
//     if (i==3) continue;
//     console.log(i);
  
// }

//
// const foo=()=>console.log('first')
// const bar=()=>setTimeout(()=>console.log('second'))
// const bazz=()=>console.log('third')

// bar();
// foo();
// bazz()

//
// const person={name: "shifa"}
// function sayHi(age){
//     return`$(this.name) is $(this.age)`;
// }
// console.log(sayHi.call(person,21))
// console.log(sayHi.bind(person,21))

//
// function sayHi(){
// return(()=>0)()
// }

// console.log(typeof sayHi())

//
// function sayHi(){
// return ()=>0
// }

// console.log(typeof sayHi())

//
// console.log(typeof typeof 1)

//
// const numbers=[1,2,3];
// numbers[6]=11;
// console.log(numbers);

//
// const numbers=[1,2,3];
// numbers[2]=numbers;//same array ke ander same array daldo to infinite loop banjata h.
// console.log(numbers);

//
//Everything in javascript is either a primitive or Object.

//81
// console.log(!!null)
// console.log(!!"")
// console.log(!!1)

// setInterval() returns unique id.it runs infinitely.
// console.log(setInterval(()=>console.log('hi',1000)))
// console.log(setInterval(()=>console.log('hi',1000)))
// console.log(setInterval(()=>console.log('hi',1000)))

//
// console.log([...'shifa'])

//85
// let person={name:"peter"} //please explain
// const members=person;
// person=null;
// console.log(members)

//
// const person={
// name:"shifa",
//     age:26
// }
// for(const item in person){
// console.log(item);
// }

// //
// let data=2+4+'5'
// console.log(typeof data)

//
// console.log(typeof 2+4+'5')

//
// console.log(typeof (2+4+ +'5'))//kisi bhi string ke aage + lagado to wo number banjata h 

//90
// console.log([]==[])//It is basically comparing the memory location .which is basicallynot same.

//
// let data=[1,2,3].map(num=>{
//     if(typeof num ==='number') return;//jab khali return krte h to undefined  hota h .
//     return num*2;
// })

// console.log(data);

//92
// function getInfo(member){
// member='shifa'
// }

// const person={name:"Ahmed"}

// getInfo(person);

// console.log(person);

//93
// function Car(name){
// this.make='tata';
// this.name=name
//     // return {make:'kia'}//If we return property it overrides existing property.
// }
// //new:1.It creates an Object.2.Bind the property(this.) with the Object.3.return Object(in case of new we dont need to explicitely return the value.nd if returns it overrides.)
// const myCar= Car('c1');
// const myCar2= new Car('c2');
// console.log(myCar, 'obj');
// console.log(myCar2, 'obj2');
// console.log(myCar.make, 'make');
// console.log(myCar2.make, 'make2');


//94
// (()=>{
// let x=(y=10);
// })();

// console.log(typeof x);//here x has block level scope hence it cant be accesses outside of it.(undefined)

//95
// (()=>{
// let x=(y=10);
// })();

// console.log(typeof y)

//98
// let x=100;
// (()=>{
// var x=20;
// })()

// console.log(x)

//
// console.log(!true-true)

 //
// console.log(true + + '10')