// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('all_users');
        for (const user of users) {
            let divForUser = document.createElement('div');
            divForUser.classList.add('user');
            let pForUser = document.createElement('p');
            pForUser.classList.add('p_user');
            let buttonForMoreInformation = document.createElement('button');
            buttonForMoreInformation.classList.add('button_1');
            buttonForMoreInformation.innerText = 'More information';
            buttonForMoreInformation.onclick = function () {
                location.href = `user-details.html?id=${user.id}`;
            };
            pForUser.innerHTML = `${user.id} <b>${user.name}</b>`;
            divForUser.append(pForUser, buttonForMoreInformation);
            mainDiv.appendChild(divForUser);
        }
        document.body.appendChild(mainDiv);
    });

