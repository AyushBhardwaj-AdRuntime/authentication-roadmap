const storedUsername = "admin";
const storedPassword = "1234";

function login(username, password) {
    if (username === "" || password === "") {
        return "Please enter username and password.";
    } else if (username === storedUsername && password === storedPassword) {
        return "Login successful. Access granted.";
    } else {
        return "Login failed. Access denied.";
    }
}

console.log(login("admin", "1234"));
console.log(login("admin", "wrong"));
console.log(login("", ""));