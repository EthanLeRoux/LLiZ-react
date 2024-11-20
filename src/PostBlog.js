async function postBlog(blogData){


   try{
      const url ="http://localhost:8080/api/blogs";
      const response = await fetch(url,{
         method: "POST",
         headers:{
            "Content-Type": "application/json"
         },
         body: JSON.stringify({
            title: blogData.title,
            content: blogData.content
         })
      });

      if(!response.ok){
         throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      console.log('Success:', data);
      alert('Success: Blog Posted')
   }
   catch(error){
      console.error(error);
   }
}

export default postBlog;