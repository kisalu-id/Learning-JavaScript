var person = {
    firstName : "Jane",
    lastName : "Doe"
}
person.age = 30;
person["hobby"] = "sport";

for (var i in person) {
    if(person.hasOwnProperty(i)) { //bool
        console.log("Member " + i + " has the property " + person[i]);
    }
}
