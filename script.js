// Task 1
// მოცემულია მასივი, რომელშიც არის ერთზე მეტი მნიშვნელობა, მაგრამ კონკრეტულად რამდენი არ ვიცით,
// შეიძლება 100 ან 200 ან 10.
// მაგ: let fruits = [“apple”, “mango”, “avocado”,”kiwi”]
// splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა მნიშვნელობა და მაგის მაგივრად ჩასვით “strawberry”.

let fruits = ["apple", "mango", "avocado", "kiwi"];
fruits.splice(fruits.length - 2, 1, "strawberry");
console.log(fruits);

// Task 2
// მოცემულია სტრინგი: let info= ‘good day”,
// ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთოდის საშუალებით.

let info = "good day";
let day = info.slice(5, 8);
console.log(day);

// Task 3
// დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.

let func1 = (anyString) => {
  return anyString.length;
};

let result1 = func1("hello");
console.log(result1);

// Task 4
// შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;
// მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
// მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
// გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;

let array2 = [5, 25, 89, 120, 36];
array2.push("javascript", "python");
array2.unshift("html", "css");
console.log(array2);
console.log(array2.length);
array2.shift();
array2.pop();
console.log(array2);

// Task 5
// შექმენით მასივი, შემდეგი ელემენტებით:ფორთოხალი,ბანანი,კივი;
// გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
// მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
// მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
// გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
// წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
// გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

let array3 = ["ფორთოხალი", "ბანანი", "კივი"];
console.log(array3.length);
array3.push("ვაშლი", "ანანასი");
array3.unshift("საზამთრო");
console.log(array3.length);
array3.splice(2, 0, "მანგო");
array2.shift();
array2.pop();
console.log(array3);
console.log(array3.length);

// Task 6
// მოცემულია მასივი let array3 =[1, 2, 3, 4, 5].
// splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].

let array4 = [1, 2, 3, 4, 5]; // i changed the array name as im already using array3 above
array4.splice(3, 0, "a", "b", "c");
console.log(array4);

// Task 7
// მოცემულია მასივი: let array7 =  [15, 100, 25, 10, 36]
// წაშალეთ ამ მასივიდან რიცხვი 10;

array7 = [15, 100, 25, 10, 36];
array7.splice(3, 1);
console.log(array7);

// Task 8
// მოცემულია მასივი:   let array8 = [ 1, 2 , 3 , 4, 5]
// Splice მეთოდის საშალებით 3-ის მაგივრად ჩასვით სიტყვა three;

let array8 = [1, 2, 3, 4, 5];
array8.splice(2, 0, "three");
console.log(array8);

// Task 9
// მოცემულია მასივი:
// let array4 = [1, 2, 3, 4, 5];
// foreach საშუალებით გამოთვალეთ რიცხვების ჯამი

array5 = [1, 2, 3, 4, 5];
let sum = 0;

array5.forEach((item) => {
  sum += item;
});

console.log(sum);

// Task 10
// მოცემულია მასივი:
// let array2 = [14, 150, 'css', null, 'javascript', 25];
// შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით:
// თუ ელემენტი არის რიცხვი, ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი.
// vთუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით.
// სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.

let array6 = [14, 150, "css", null, "javascript", 25];
let newArray = array6.map(function (item) {
  return typeof item == "number"
    ? item * item
    : typeof item == "string"
    ? item.toUpperCase()
    : item;
});

console.log(newArray);

// Task 11
//  prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა:
// საქართველოს დედაქალაქი? სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და  შეინახეთ ცვლადში.
// როდესაც მიიღებთ პასუხს მომხმარებლისგან, გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს.
// თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია.

// let question = prompt(" საქართველოს დედაქალაქი?").toLowerCase();
// let answer = "tbilisi";
// console.log(question == answer ? "სწორია" : "არასწორია");

// Task 12
// მოცემულია მასივი:
// let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];
// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;

let array9 = [12, 25, 3, 6, 8, 14, 7, 23];
let newArray9 = array9.map(function (item) {
  return item / 3;
});
console.log(newArray9);
