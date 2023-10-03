//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let url = new URL(location.href);
let id = url.searchParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response)=>response.json())
    .then(post =>{
        let mainDIV = document.createElement('div');
        mainDIV.classList.add('mainDIV');
        document.body.appendChild(mainDIV);
        let divFP = document.createElement('div');
        divFP.classList.add('divFP');
        mainDIV.appendChild(divFP);
        let h2FP = document.createElement('h2');
        h2FP.classList.add('h2FP');
        h2FP.innerText = 'Post information';
        divFP.appendChild(h2FP);
        let divFP2 = document.createElement('div');
        divFP2.classList.add('ulFP');
        divFP.appendChild(divFP2);
        for (const postElement in post) {
            let liFP = document.createElement('ul');
            liFP.classList.add('liFP');
            liFP.innerHTML = `<b>${postElement}</b>` + ': ' + `${post[postElement]}`;
            divFP2.appendChild(liFP);
        }
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((response)=>response.json())
            .then(comments =>{
                let divFC = document.createElement('div');
                divFC.classList.add('divComm');
                mainDIV.appendChild(divFC);
                let h3FC = document.createElement('h3');
                h3FC.classList.add('h3Comm');
                h3FC.innerText = 'Comments';
                divFC.appendChild(h3FC);
                let divForAllComments = document.createElement('div');
                divForAllComments.classList.add('divForComments');
                divFC.appendChild(divForAllComments);
                for (const obj of comments) {
                    let divC = document.createElement('div');
                    divC.classList.add('divC');
                    divForAllComments.appendChild(divC);
                    for (const objKey in obj) {
                        let liC = document.createElement('li');
                        liC.innerHTML = `<b>${objKey}</b>` + ': ' + `${obj[objKey]}`;
                        divC.appendChild(liC);
                    }
                }
            })
    })