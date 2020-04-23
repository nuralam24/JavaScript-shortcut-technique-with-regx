
var T = [1, 2, 3, 4, 5];
for (var x of T) console.log(x);

var gggg = '12456789';
var LL = gggg.search(7);
console.log(LL);

console.log(gggg.slice(LL, LL+1));

console.log(gggg);


var s = '3+2+1';
console.log(s.split('+').sort().join('+'))



var arr = [9, 0, 1, 3, 1, 8, 0, 0, 0, 3, 5, 0, 1, 2, 1, 0, 6,1]
var L = arr.length
//arr.sort((a, b) => a - b)

for(var i=0; i<L; i++) {
    if(arr[i] == 1 || arr[i] == 0) {
         k = arr.indexOf(arr[i])
         arr.splice(k, 1)
         i --
          //console.log('abc');
    }
}
console.log(arr);

//------------------------------------------------------------------------------------

// string theke number summation 
var s = 'Mark 10 Tim 1020 Sam 10 Sara 102030'
var reg = s.match(/\d+/g)
console.log(reg);
console.log(eval(reg.join('+')));
//--------------------------------------------------------------------------------------


// string theke single number summation 
var ss = 'Mark 9 Tim 990 Sam 10 Sara 9920'
var ma = eval(ss.match(/\d/g).map(Number).join('+'))
console.log(ma);
//--------------------------------------------------------------------------------------------

// string summation or sub or mul or div
var g = '12345'
var sum = g.split('').join('+')
console.log(sum);
console.log(parseInt(eval(sum)));
//-----------------------------------------------------------------------------------------

// String variable e dublicate value ache kina check korbe 
var check = n => [...new Set(n)].join('') == n;
console.log(check('1233'));
console.log(check('1234'))
//-------------------------------------------------------------------------------------------


// single char ... upper to Lower .. Lower to upper
var l = 'M'
console.log( l < 'a' ? l.toLowerCase() : l.toUpperCase());
//-------------------------------------------------------------------------------------------


/// char replace 
var k = 'abcabcaabbcc'
var st = k.replace(/a/g, 'X').replace(/c/g, 'Y')
console.log(st);
//---------------------------------------------------------------------------------------

// Palindrome check function 
function Check(strr) {
    var sss = strr.replace(/[^A-Za-z0-9]/g, '').split('').reverse().join('')
    return sss == strr
}
console.log(Check('121'));

// alternative solution
function C(xxr) {
    var so = xxr.split('').reverse().join('')
    return so == xxr
}
console.log(C('121'));

//------------------------------------------------------------------------------------------

// String Sort
var n = 'cab' 
var m = n.split('').sort().join('')
console.log(m)
//------------------------------------------------------------------------------------------

// String reverse 
var c = m.split('').reverse().join('')
console.log(c)
//-------------------------------------------------------------------------------------------

// string sort & reverse 
var k = 'cabed'
var kk = k.split('').sort().reverse().join('')
console.log(kk);
//--------------------------------------------------------------------------------------------

// Char String Sort
var countries = ["Österreich", "Andorra", "Andorrr", "Vietnam"];
console.log(countries.sort((a, b) => a.localeCompare(b))); 

//---------------------------------------------------------------------------------------------

// String Array copy to another string variable .. but not change to original Array
function copySorted(arr) {
  return arr.slice().sort();
}
let Original = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(Original);

console.log(sorted);
console.log(Original);

//--------------------------------------------------------------------------------------------------

// duplicate char delete
var d = 'aabbdOo'.toLowerCase()
var u = [...new Set([...d])].join('');
console.log(u);

var uu = Array.from(new Set(d)).join('');
console.log(uu);

//---------------------------------------------------------------------------------------------

// duplicate char delete and sort hobe 
var str = "xxbanaconda";
var newstr = str.split("").sort().join("").replace(/(.)(?=.*\1)/g, "");
console.log(newstr)

//---------------------------------------------------------------------------------------------

// duplicate char delete & oi char ta sosho delete hobe & last e sort hobe 
var st = "anaconda";
var newstr = st.split("").sort().join("").replace(/(.)\1+/g, "");
console.log(newstr);
//----------------------------------------------------------------------------------------------

// duplicate char delete & oi char ta sosho delete hobe
var str = "anaconda";
var news = str.replace(new RegExp("[^"+str.split("").sort().join("").replace(/(.)\1+/g, "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")+"]","g"),"");
console.log(news);
//-----------------------------------------------------------------------------------------------------------------------------------------------

// String e sob gula char same kina
var n = 'aaa';
var c = /^(.)\1+$/.test(n);
console.log(c);

//-----------------------------------------------------------------------------------------------

// eksathe same character paile 1 ta rekhe baki gula delete korbe
var x = 'aaaabbbbcccddefabcc'
var m = x.replace(/(.)\1+/g, "$1")
console.log(m);
//----------------------------------------------------------------------------------------------

/// string theke zero delete
var st = '51 0 309 200'
var str = st.replace(/0/g, '');
console.log(str);
//----------------------------------------------------------------------------------------------

// string theke first er zero gula delete
var kkk = '0000902300'
var AA = kkk.replace(/^0+/, "");
console.log(AA);


//----------------------------------------------------------------------------------------------

// string theke Last er zero gula delete
var AA = "003592000";
var XXX = AA.replace(/0+$/, "");
console.log(XXX);


// var A = parseInt(AA)
// var ok = 1;
// while (ok) {
//   if (A % 10 == 0) {
//     A /= 10; ok = 1;
//   } else ok = 0;
// }
// console.log(A);  


//----------------------------------------------------------------------------------------------

//  2 digit kore summation 
var ss = 'Mark 10 Tim 1020 Sam 10 Sara 102030'
var reg = ss.match(/\d\d/g)  //or
//var reg = ss.match(/\d{2}/g)
console.log(reg);
console.log(eval(reg.join('+')));

//----------------------------------------------------------------------------------------------

// String Matching ..
var sports = ['football', 'archery', 'judo']
var hasFootball = sports.includes('football')
console.log(hasFootball) 

// ---------------------------------------------------------------------------------------------
// split word... Capital letter theke new word shuru ... so output 4
var letters = "nurAlamCseE";
var Ok = letters.split(/(?=[A-Z])/);

console.log(Ok);
console.log(Ok.length);

//----------------------------------------------------------------------------------------------
                     

    

//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------




// Integer to Binary convert
var str = 8
var Binary = str.toString(2) 
console.log(Binary);

var cnt = Binary.match(/0/g)
console.log(cnt);

if(cnt == null) k = 0
else k = cnt.length

console.log(k);
//------------------------------------------------------------------------------------------------

// Binary to Integer convert
var Binary = 101
var c = parseInt(Binary, 2)
console.log(c)
//------------------------------------------------------------------------------------------------

// 2 theke 6 er vitore jei number gula ache , array theke sei gula print korbe.. loop use kora chara
function ok(arr, a, b) {
  return arr.filter(item => a <= item && item <= b);
}

let arRay = [5, 3, 8, 1, 9, 4, 0];
let filtered = ok(arRay, 2, 6);
console.log(filtered);

//------------------------------------------------------------------------------------------------

// Compare 2 array 
var FirstArr = [1, 2, 3, 4, 5];
var SecondArr = [1, 2, 3, 4, 5];

console.log(JSON.stringify(FirstArr) == JSON.stringify(SecondArr));

//---------------------------------------------------------------------------------------------

// Array longly number print 
// duplicate array gula theke single digit print kora
var n = [5, 2, 7, 2, 5, 9, 1, 7, 1, 0, 5, 0]
n.sort().some((a, b) => {
    if (n[b-1] != a  &&  n[b+1] != a) k = a
})
console.log(k);
//----------------------------------------------------------------------------------------------

// array theke duplicate number gula print kora
var kk = [1, 1, 6, 1, 2, 3, 1, 3, 5]
var duplicates = kk.reduce((x, y, z, A) => {
    if (A.indexOf(y) !== z && x.indexOf(y) < 0) x.push(y); return x;
},[]);
console.log(duplicates);
// --------------------------------------------------------------------------------------------

// Integer Sort 
var k = ['30','111111111111','9','123456789','19999','10']
k.sort((a, b) => (a - b))
console.log(k);
//----------------------------------------------------------------------------------------------

/// Insert function  OR  duplicate array delete
var d = [1, 5, 1, 1, 2, 2, 3, 4, 3, 4, 5,]
var u = Array.from(new Set(d));
console.log(u);

//---------------------------------------------------------------------------------------------

// Maximum Duplicate digit print. array te kon duplicate digit ta sob cheye beshi bar ache. 6 beshi bar ache
var mon = [1, 2, 2, 2, 2, 3, 4, 5, 6, 6, 6, 6, 7, 6, 8];

var mode = x => x.reduce((a, b, i, ar) =>
    ar.filter(v => v === a).length >= ar.filter(v => v === b).length ? a : b
);
console.log(mode(mon));


//----------------------------------------------------------------------------------------------

// nearest value print
var counts = [4, 9, 15, 6, 2];  
var goal = 8;
var output = counts.reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
console.log(output);

//---------------------------------------------------------------------------------------------

// check korbe all value of array are equal
var AR= [3, 3, 3, 3];
var KK = AR.join('') === Array(AR.length).fill(AR[0]).join('');
console.log(KK);

//----------------------------------------------------------------------------------------------

// Searching number of Array .. Find the number and Position Print
var arR = [2, 5, 1, 7, 4];
console.log(arR.indexOf(7));

//----------------------------------------------------------------------------------------------

// Set precision
var s = 12.5555555
console.log(s.toFixed(3));
console.log(s.toPrecision(2));
//---------------------------------------------------------------------------------------------

// concat ... 2 ta array ke 1 ta array kora
var letters = ['a', 'b', 'c'];
var numbers = [1, 2, 3];
var add = letters.concat(numbers);
console.log(add);

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const number = num1.concat(num2, num3);
console.log(number);
//--------------------------------------------------------------------------------------------

// Integer array theke Number e convert kora 
var a = [2, 4, 1, 5, 3]
console.log(a.join(' '));


//--------------------------------------------------------------------------------------------

// string theke char array te convert 
var str = '53931'
//var nn = Array.from(str)  // or 
var nn = str.split('')
console.log(nn);
//---------------------------------------------------------------------------------------------

// char array theke integer array te convert
var s = ['5.5', '6', '1.9', '7']
var chaR = s.map(int => parseInt(int))
console.log(chaR);
//---------------------------------------------------------------------------------------------

// String theke Integer Array te Convert
var sTring = "12345";
var inTger = sTring.split("").map(x => parseInt(x));
console.log(inTger);
// ----------------------------------------------------------------------------------------------

// array summation 
var n = [4, 2, 5, 1, 3]
var sum = n.reduce((a, b) => a + b)
console.log(sum);
//-----------------------------------------------------------------------------------------------

// Array Copy to another Variable but not change to original Array .
var aA = [1, 2, 3, 4];
var bB = [...aA];
aA.push(6);
console.log(aA);
console.log(bB);
//------------------------------------------------------------------------------------------------

// check korbe array ta ascending order e ache kina
var a = [9, 1, 3, 2, 5];
var k = a.every((a, b) => a - b)
console.log(k ? 'yes' : 'no');
//---------------------------------------------------------------------------------------------






//--------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------

// Index print 
var sports = ['football', 'archery', 'judo']
var judoIndex = sports.indexOf('judo')
console.log(judoIndex) // 


// slice mane delete kore print korbe
// slice 2 ta argument ney. 1st argument ta 1st theke delete korbe ar 
//                          2nd argument ta holo koto dur porjonto jabe.
var id = "Bangladesh";
var L = id.length;
console.log(id)
console.log(id.slice(1))
console.log(id.slice(1, 3));
console.log(id.slice(0, 1));
console.log(id.slice(0, L-1))
console.log(id.slice(L - 1));


// Splice
// 1st argument position , 2nd argument delete korbe, 3rd argument holo item
var months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb');
console.log(months);

months.splice(2, 1, 'X');
console.log(months);

months.splice(2, 2, 'M', 'N');
console.log(months);




var array = [11, 12, 13, 14, 15]
var new_array = array.splice(3);
console.log(new_array);
console.log(array);


var array = [2, 9, 14, 5, 7, 5, 4, 9, 5];
console.log(array.indexOf(5));

var nur = (a, b) => (b*a)-(a+b)
console.log(nur(10,6));


function isodd(element, index, array) {
    return (element % 2 == 1);
  }
  console.log([561, 921, 181, 8181, 121].every(isodd));

var arr = [23,76,19,94];
arr.unshift(28,65);

var k = arr.unshift();
console.log(arr);

arr.shift()
console.log(arr);

var nur = [4, 1, 5, 2, 6, 3]

var k = nur.toString()
console.log(k);


var a = ['1','2','3']
var result = a.map((x) => parseInt(x));
console.log(result);

var m = parseInt(a)
console.log(m);

var a = 123 
var b = '123'  

console.log(a == b);
console.log(a === b);

  

var arr = [1, 2, 3, 4, 5, 6]
var a = arr.filter(even)
console.log(a);

function even (check) {
    return check % 2 == 0
}
var kkk = 1.000000;
console.log(Number(kk));
