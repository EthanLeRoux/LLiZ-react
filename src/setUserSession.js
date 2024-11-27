function userSession(username,userid,role,email,key) {
    sessionStorage.setItem('username', JSON.stringify(username));
    sessionStorage.setItem('userid', JSON.stringify(userid));
    sessionStorage.setItem('role', JSON.stringify(role));
    sessionStorage.setItem('email', JSON.stringify(email));
    sessionStorage.setItem('key', JSON.stringify(key));
}

export default userSession;