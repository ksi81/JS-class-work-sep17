// Zadacha-1
var  m = [7, [7, 8,9], 17]
document.getElementById('zadacha1').innerHTML=m[1][2];

// Zadacha-2
var m = [5, {"one": 2000, "two": 4000 },56]
document.getElementById('zadacha2').innerHTML=m[1].two;
document.getElementById('zadacha22').innerHTML=m[2];

// Zadacha-3
var m ={"one": 5, "two": [23, 45]}
document.getElementById('zadacha3').innerHTML=m.two[1];

// Zadacha-4
var m ={"one": 5, "two": {"kkk":23,"mmm":45}}
document.getElementById('zadacha4').innerHTML=m.two['mmm'];

// Zadacha-5

var p=document.getElementById('out')
var m =[{"mts": "+38050556677", "life": "+093445566"},{"mts": "+38050665544", "life": "+093112233"}]
var out='';
for (var i=0; i<m.length; i++){
	out += `${m[i].mts}<br>`+`${m[i].life}<br>` ;
	p.innerHTML=out;
}

// Zadacha-6
var p=document.getElementById('out6');
var p1=document.getElementById('out62');

var m ={"phone1": {"mts": "+38050556677", "life": "+093445566"},"phone2":  {"mts": "+38050665544", "life": "+093112233"}}
var out6='';
for(var key in m){
	out6 += `${m[key].mts}<br>`;
}
p.innerHTML=out6;
var out62='';
for(var key in m){
	out62 += `${m[key].mts}<br>`+ `${m[key].life}<br>`;
}
p1.innerHTML=out62;

// Zadacha-7
var p=document.getElementById('out7');
var m =[["+38050556677", "+093445566"],["+38050665544", "+093112233"]]
var out7='';
for (var i=0; i<m.length; i++){
	out7=m
}
p.innerHTML=out7;


// Zadacha-8
var p=document.getElementById('out8');
var mas3 = [2, 3, 4, 5, 6, 4, 77, 32, 4];
var out8='';
for (var i=0; i<mas3.length; i++){
	out8 += i +'-' +mas3[i]+';<br>';
}
p.innerHTML=out8;

// Zadacha-9 - Выведитетеэлементымассива, которыеменьше 35
var p=document.getElementById('out9');
var a = [4, 5, 6, 7, 8, 12, 32, 21, 41, 34, 25, 15, 11, "hello"];
var out9='';
for (var i=0; i<a.length; i++){
	if (a[i]<35){
		out9 += i +' '+a[i]+'<br>';
	}
}
p.innerHTML=out9;


// Zadacha-10 
var p=document.getElementById('out10');
var b = {
	"user1": {"name" : "Alex", "age": 17},
	"user2": {"name" : "Ivan", "age": 27},
	"user3": {"name" : "Sergey", "age": 28},
	"user4": {"name" : "Vitaliy", "age": 30},
	"user5": {"name" : "Olga", "age": 24},
};
var out10='';
for (var key in b){
	out10 += b[key].name + ' ';
}
p.innerHTML +=out10;


// Zadacha-11
document.getElementById('start').onclick=age;
var p=document.getElementById('out11');
function age() {
	var x=document.getElementById('inp11').value;
	var b = {
		"user1": {"name" : "Alex", "age": 17},
		"user2": {"name" : "Ivan", "age": 27},
		"user3": {"name" : "Sergey", "age": 28},
		"user4": {"name" : "Vitaliy", "age": 30},
		"user5": {"name" : "Olga", "age": 24},
	};
	var out11='';
	for (var key in b) {
		if (b[key].age <= x){
			out11 += b[key].name + '; ';
		}
	}
	p.innerHTML += out11;
}

// Zadacha-12
document.getElementById('start2').onclick=name;
var k=document.getElementById('out12');
function name() {
	var x=document.getElementById('inp12').value;
	var b = {
		"user1": {"name" : "Alex", "age": 17},
		"user2": {"name" : "Ivan", "age": 27},
		"user3": {"name" : "Sergey", "age": 28},
		"user4": {"name" : "Vitaliy", "age": 30},
		"user5": {"name" : "Olga", "age": 24},
	};
	var out12='';
	for (var key in b) {
		if (b[key].name == x){
			out12 += b[key].age + '; ';
		}
	}
	k.innerHTML += out12;
}



// Zadacha-13
var my=document.getElementById('out13');
var my1 =  {
	"name" : "Alex", 
	"age": 17,
	"sex" : "male",
	"born": 1998,
	"sity": "kiev",
	"state": "kievskay"
};

var count = 0;
for (var key in my1) {
	count++
}
my.innerHTML = count;








// document.getElementById('zadacha5').innerHTML=out;



// var a=[5,6,7]
// var b={
// 	"name": "Alex",
// 	"age": 232,
// 	"sity": "Kiev"
// };

// document.getElementById('arr1').innerHTML=a;
// //document.getElementById('arr2').innerHTML=b;

// var out='';
// for(var key in b){
// 	out += `${b[key]}<br>`;
// }
// document.getElementById('arr2').innerHTML=out;
// //три одиинаковые вывода
// document.getElementById('arr1').innerHTML=b.name;
// document.getElementById('arr1').innerHTML=b['name'];
// var c ='name';
// document.getElementById('arr1').innerHTML=b[c];


//document.getElementById('arr2').innerHTML=b;

// var out='';
// for(var key in b){
// 	out += `${b[key]}<br>`;
// }
// document.getElementById('arr2').innerHTML=out;
// //три одиинаковые вывода
// document.getElementById('arr1').innerHTML=b.name;
// document.getElementById('arr1').innerHTML=b['name'];
// var c ='name';
// document.getElementById('arr1').innerHTML=b[c];




// var out='';
// for (var i=0; i<m.length; i++){
// 	if (m[i]=9){
// out += i +' '+m[i]+'<br>';
// }
// }