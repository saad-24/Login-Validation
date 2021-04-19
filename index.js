
//profile lookup

var contacts = [
    {
        "firstName": "Saad",
        "lastName" : "Saud",
        "password" : "saad"
    },

    {
        "firstName" : "Sohaib",
        "lastName" : "Nayyar",
        "password" : "sohaib"
    },

    {
        "firstName" : "Asad",
        "lastName" : "Ali",
        "password" : "asad"
    }
];

function LoginChecker(myname, pass) {
    for(i = 0; i < contacts.length; i++) {
            if (contacts[i].firstName === myname && contacts[i].password === pass) {
                return "Welcome!" || "User not found";
            }
    }
    return "Invalid login";
}

// driver code

console.log(LoginChecker(myname,pass));