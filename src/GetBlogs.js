async function getBlogs(){
    try{
        const url = `${import.meta.env.VITE_API_URL}/api/blogs`;
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