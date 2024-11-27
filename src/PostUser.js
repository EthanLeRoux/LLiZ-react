async function postUser(userData){
    try{
        const url = "http://localhost:8080/api/users";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userName: userData.userName,  // map userName from the userData object
                userEmail: userData.userEmail, // map userEmail
                userPassword: userData.userPassword, // map userPassword
                userKey:userData.userKey,
                role:'user'
            })
        });

        if(!response.ok){
            throw new Error("Network response was not ok.");
            //alert("Net Res not ok!");
        }

        const data = await response.json();
        return data
    }
    catch(error){
        console.error(error);
    }
}

export default postUser