// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
let url = new URL(location.href);
let id = url.searchParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then(user => {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('maiDiUsers');
        document.body.appendChild(mainDiv);
        let divForUser = document.createElement('div');
        divForUser.classList.add('div_for_user');
        let h2ForUser = document.createElement('h2');
        h2ForUser.innerText = 'User information';
        h2ForUser.classList.add('h2user');
        divForUser.appendChild(h2ForUser);
        let ulForUser = document.createElement('ul');
        divForUser.appendChild(ulForUser);

        function explorer(object) {
            for (const objectKey in object) {
                // let li = document.createElement('li');
                // li.innerText = `${objectKey}` + ': ' + `${object[objectKey]}`;
                // ulForUser.appendChild(li);
                // if (typeof object[objectKey]==='object'){
                //     li.innerText = `<b>${objectKey}</b>` + ': ';
                //     explorer(object[objectKey]);
                // }
                let value = object[objectKey];
                let li = document.createElement('li');
                if (typeof value === 'object') {
                    li.innerText = `${objectKey}` + ': ';
                    ulForUser.appendChild(li);
                    explorer(value);
                } else {
                    li.innerText = `${objectKey}` + ': ' + `${object[objectKey]}`;
                    ulForUser.appendChild(li);
                }
            }
        }

        explorer(user);
        let button = document.createElement('button');
        button.innerText = 'Post of current user';
        button.classList.add('button2');
        function onClick() {
            let divForPostTitles = document.createElement('div');
            divForPostTitles.classList.add('mainFPT');
            mainDiv.appendChild(divForPostTitles);
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then((response) => response.json())
                .then((posts) =>{
                    posts.forEach(post=>{
                        let divFPT = document.createElement('div');
                        divFPT.classList.add('divFPT');
                        divForPostTitles.appendChild(divFPT);
                        let pFPT = document.createElement('p');
                        pFPT.classList.add('pFPT');
                        divFPT.appendChild(pFPT);
                        pFPT.innerText = `${post.title}`;
                        let buttonFTP = document.createElement('button');
                        buttonFTP.classList.add('button3');
                        divFPT.appendChild(buttonFTP);
                        buttonFTP.innerText = 'More information';
                        buttonFTP.onclick = function () {
                            location.href = `post-details.html?id=${post.id}`;
                        }
                    })
                })

        }


        button.addEventListener('click', onClick, {once: true});
        divForUser.appendChild(button);

        mainDiv.appendChild(divForUser);

    });