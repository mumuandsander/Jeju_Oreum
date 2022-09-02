function fetchPage(name) {
    fetch(`./jsonData/${name}.json`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            // console.log(data.info);
            let articleh2 = `<h2>${data.name}</h2>`;
            document.querySelector('#articleBody').innerHTML = articleh2;
            let insta = `<li><a href="https://www.instagram.com/explore/tags/${name}/" target="_blank">Click :) instagram</a></li>`;

            data.info.map(infos => {
                // console.log(infos);
                let keys = Object.keys(infos);
                // console.log(keys);
                let tags = '';

                for(let i = 0; i < keys.length; i++) {
                    let key = keys[i];
                    // console.log(key);
                    // console.log(infos[key]);
                    let tag = `<li><b>${key}</b> : ${infos[key]}</li>`
                    tags += tag;
                    // console.log(tags);
                    document.querySelector('.infoList').innerHTML = `${tags}${insta}`;
                }
            } )
        })
}

function fetcMain(){
    fetch('./jsonData/welcome.json')
        .then(res => res.json())
        .then(data => {
            let welcome = `<h1>${data.name}</h1><p>${data.info}</p>`
            document.querySelector('#articleBody').innerHTML = welcome;
        })
}

// url의 hash( #!) 가 없으면 fetchPage함수에 welcome 데이터를 넣어주는 조건문.
if(location.hash){
    fetchPage(location.hash.substring(2))
} else {
    fetcMain();
}

fetch(`./jsonData/list.json`)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        for(let key in data){
            // console.log(key); 
            let items = data[key];
            // console.log(items);
            let tags = '';
            for (let i = 0; i < items.length; i++) {
                let item = items[i];
                // console.log(item);
                let tag = `<li><a class="dropdown-item" href="#!${item}" onclick="fetchPage('${item}')">${item}</a></li>`;
                tags += tag;
                // console.log(tags);
                document.querySelector(`#${key}`).innerHTML = tags;
            }
        }
    } )
