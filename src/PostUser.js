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
                userKey:userData.userKey})
        });

        if(!response.ok){
            throw new Error("Network response was not ok.");
            //alert("Net Res not ok!");
        }

        const data = await response.json();
        console.log('Success:', data);
        alert('Success:')
    }
    catch(error){
        console.error(error);
    }
}

export default postUser