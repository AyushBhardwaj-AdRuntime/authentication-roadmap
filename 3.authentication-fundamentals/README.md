# Authentication Fundamentals

This chapter keeps authentication as basic as possible. You will learn the idea of checking a username and password with simple `if` and `else` logic before moving to real-world implementations later.

## What you will learn

- What authentication means
- The difference between a valid and invalid login
- How simple `if`, `else if`, and `else` checks work
- Why hardcoded examples are useful for learning but not for production

## Inside this module

- [codes/](codes/) for a tiny runnable login example
- [diagrams/](diagrams/) for the flow chart
- [practise/](practise/) for beginner exercises

## How to use this chapter

1. Read the diagram first.
2. Open [codes/authentication-basics.js](codes/authentication-basics.js).
3. Run the file with Node.js.
4. Complete the exercises in [practise/exercises.md](practise/exercises.md).

## The basic idea

Authentication answers one question: "Are you who you say you are?"

In this chapter, the answer is checked with a very small rule set:

- If the username or password is empty, ask the user to enter both values.
- If the values match the stored example, allow access.
- Otherwise, deny access.

## Code preview

```javascript
function login(username, password) {
	if (username === "" || password === "") {
		return "Please enter username and password.";
	} else if (username === "admin" && password === "1234") {
		return "Login successful. Access granted.";
	} else {
		return "Login failed. Access denied.";
	}
}
```

## Why this chapter matters

This is the smallest possible authentication lesson. Once this feels clear, it becomes much easier to understand passwords, hashing, JWTs, and protected routes later.

## Next chapter

Move on to [4.authentication-api](../4.authentication-api/README.md) after this lesson feels comfortable.
