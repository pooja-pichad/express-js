// var array=['dog','dog','dog','cat','cat','elephant','pearot','pearot','pearot','pearot','pearot']

// const question=(animal)=>{
//     var a=['dog','dog','dog','cat','cat','elephant','pearot','pearot','pearot','pearot','pearot']
//     if(a[i]=="dog"){


//     }

// }


// k=[]
// # i=0
// # while i<len(char_list):
// #     j=0
// #     count=0
// #     a=[]
// #     while j<len(char_list):
// #         if char_list[i]==char_list[j]:
// #             count=count+1
// #         j=j+1
// #     a.append(char_list[i])
// #     a.append(count)
// #     if a not in k:
// #         k.append(a)
// #     i=i+1
// # print(k)


// let ="so in which we have to use higher order function"
// var u={}
// var l=[]
// for (i of c){
//     if (l.includes(i)){
//         u[i]=u[i]+1
//     }
//     else{
//         l.push(i)
//         u[i]=1
//     }
// }
// console.log(l)


// var mainString="My name is kumar, and my friend’s name is Dhamu"
// var subString="is"
// var splits=mainString.split(" ")
// var count=0
// for (i in splits){
//     var s=splits[i]
//     if (s===subString){
//         count++
//     }
// }
// console.log("the substring is there",count,"in main string")


// var str="so in which we have to use higher order function"
// var spaces=' '
// count=0
// for(var i=0;i<str.length;i++){
//     if (str[i]==' '){
//     count=count+1
//     }
// }
// console.log("The substring",count,"times in mainstrig")

// a=[1,2,[54,[5,4[6,7]]]]
// b=[]
// for(i in a){
//     if (typeof(i)==Array){
//         for(j in i){
//             if(typeof(j)==Array){
//                 for(s in j){
//                     b.push(s)
//                 }
//             }
//             else{
//                 b.push(j)
//             }
//         }
//     }
//     else{
//         b.push(i)
//     }

// }
// console.log(b)



// function flatten(ary) {
//     var ret = [];
//     for(var i = 0; i < ary.length; i++) {
//         if(Array.isArray(ary[i])) {
//             ret = ret.concat(flatten(ary[i]));
//         } else {
//             ret.push(ary[i]);
//         }
//     }
//     console.log(ret);
// }

// flatten([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]) 
a=[1,2,3,45]
// Helping People8:36 PM
a.length=0
console.log(a)

// a=['a','s']
// // b=['a','s']
// a.lenght=0
// console.log(a)
body_parsar=require('body-parser')