var userRegisteration = [
  { id: 1, Name: "Hossein", Age: "23", lastname: "yazdani" },
  { id: 2, Name: "Alireza", Age: "24", lastname: "geysari" },
  { id: 3, Name: "Reza", Age: "23", lastname: "shirali" },
];
var userName = prompt("Please enter your name : ");
if (userName.length < 3 || userName.length > 10) {
  alert("name must be more than 3 character and less than 10");
  var userName = prompt("Please enter your name : ");
}
var userLastname = prompt("please enter your lastname");
if (userLastname.length < 3 || userLastname.length > 15) {
  alert("lastname must be more than 3 character and less than 15 character ");
}
var userAge = +prompt("please enter your age");
if (isNaN(userAge) || userAge > 999) {
  alert("not a valid amount");
  var userAge = +prompt("please enter your age");
}
var newUser = {
  id: 4,
  name: userName,
  Age: userAge,
  lastname: userLastname,
};
userRegisteration.push(newUser);
console.log(userRegisteration);
