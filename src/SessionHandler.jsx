function userSession(username,userid) {
    sessionStorage.setItem('username', JSON.stringify(username));
    sessionStorage.setItem('userid', JSON.stringify(userid));
}

export default userSession;