async function getBlogs(){
    try{
        const url = "http://localhost:8080/api/blogs";
        const response = await fetch(url,{
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }

        });

        if(!response.ok){
            throw new Error();
        }

        const data = await response.json();
        return data;
    }
    catch(error){
        console.error(error);
    }
}

export default getBlogs;