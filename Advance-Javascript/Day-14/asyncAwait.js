const URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts(){
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

getPosts()
.then(response => {
    console.log(response);
})