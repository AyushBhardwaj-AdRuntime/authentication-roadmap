# Authentication Fundamentals

This chapter keeps authentication as basic as possible. You will check a username and password with simple `if` / `else if` / `else` logic before moving on to real-world authentication later.

## Copy, paste, run

```bash
cd 3.authentication-fundamentals/codes
node authentication-basics.js
```

## What you will learn

- What authentication means
- How a login check decides between success, failure, and missing input
- How `if`, `else if`, and `else` work together
- Why hardcoded values are useful for learning but not safe for production

## Inside this module

- [codes/](codes/) for the runnable login example
- [diagrams/](diagrams/) for the flow chart
- [practise/](practise/) for beginner exercises

## How to use this chapter

1. Read the diagram in [diagrams/README.md](diagrams/README.md).
2. Open [codes/authentication-basics.js](codes/authentication-basics.js).
3. Run the file with Node.js.
4. Compare the output with the messages in the code.
5. Complete the exercises in [practise/exercises.md](practise/exercises.md).

## The basic idea

Authentication answers one question: "Are you who you say you are?"

In this chapter, the answer is checked with a small rule set:

- If the username or password is empty, ask the user to enter both values.
- If the values match the stored example, allow access.
- Otherwise, deny access.

## Example logic

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

## What the code does

- `storedUsername` and `storedPassword` hold the example login values.
- `login()` compares the values the user typed with the stored values.
- The first check handles missing input.
- The second check handles the correct username and password.
- The last branch handles everything else.

## Why this chapter matters

This is the smallest possible authentication lesson. Once this feels clear, it becomes easier to understand passwords, hashing, JWTs, protected routes, and refresh tokens later.

## Practice

- Open [practise/exercises.md](practise/exercises.md) and change the stored username and password.
- Add one more `login()` call in [codes/authentication-basics.js](codes/authentication-basics.js).
- Rewrite the failure message so it explains why the login was rejected.

## Next chapter

Move on to [4.authentication-api](../4.authentication-api/README.md) after this lesson feels comfortable.
