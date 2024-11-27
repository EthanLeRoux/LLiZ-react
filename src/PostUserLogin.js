import sessionHandler from "./setUserSession.js";

async function postUser(userData) {
    try {
        const url = "http://localhost:8080/api/users/login";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userName: userData.userName, // send the username
                userPassword: userData.userPassword, // send the plain-text password
            }),
        });

        if (!response.ok) {
            throw new Error("Invalid login credentials.");
        }

        const data = await response.json();
        console.log(data);
        // Handle session
        sessionHandler(data.userName,data.id,data.role,data.userEmail,data.userKey); // Save session (e.g., JWT or user data)
        return data
    } catch (error) {
        console.error("Login failed:", error);
    }
}

export default postUser;
