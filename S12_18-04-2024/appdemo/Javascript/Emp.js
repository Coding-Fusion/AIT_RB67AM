var empname = "Rahul Sharma"; //module scope: named export or default export

function changeName(newName) {
  empname = newName;
  console.log(empname);
}

export default changeName;
