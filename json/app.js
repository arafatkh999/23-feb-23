function getComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then(data => displayData(data))
};

function displayData(info){
    const getSection = document.getElementById('main-div');
    for(const post of info){
        const postDiv = document.createElement('div');
        postDiv.innerHTML=`
        <h4>Id:${post.id}</h4>
        <h2>name:${post.name}</h2>
        <h2>email:${post.email}</h2>
        `;
        getSection.appendChild(postDiv)
    }


};

getComment();