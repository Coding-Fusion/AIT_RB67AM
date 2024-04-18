export var userCity = "Delhi"; //Global Scope ==> Module Scope

export var userName = "Raj Verma";

export function changeName(newName) {
  userName = newName;
  console.log(userName);
}
