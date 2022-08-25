// 본문영역(articleBody)에 name에 해당하는 데이터 넣어주는 함수.
function fetchPage(name){
    fetch('./data/'+name).then(function(response) {
        response.text().then(function(text) {
            document.querySelector('.articleText').innerHTML = text;
        })
    })
}

// url의 hash( #!) 가 없으면 fetchPage함수에 welcome 데이터를 넣어주는 조건문.
if(location.hash){
    fetchPage(location.hash.substring(2))
} else {
    fetchPage('welcome')
}

// 'list'의 오름 리스트를 구분자 ,로 구분하여 배열로 만들고, 
// 배열을 순차적으로 돌며 데이터 리스트들을 만듦
// 리스트를 클릭했을 때(onclick) fetchPage함수를 통해 데이터가 innerHTML이 되게함.
fetch('./data/list_동').then(function(response) {
    response.text().then(function(text) {
        let items = text.split(',');
        let i = 0;
        let tags = '';
        while (i < items.length) {
            let item = items[i];
            item = item.trim();
            let tag = `<li><a class="dropdown-item" href="#!${item}" onclick="fetchPage('${item}')">${item}</a></li>`;
            tags = tags + tag;
            i = i + 1;
        }
        document.querySelector('#navBar1').innerHTML = tags;
    })
});

fetch('./data/list_서').then(function(response) {
    response.text().then(function(text) {
        let items = text.split(',');
        let i = 0;
        let tags = '';
        while (i < items.length) {
            let item = items[i];
            item = item.trim();
            let tag = `<li><a class="dropdown-item" href="#!${item}" onclick="fetchPage('${item}')">${item}</a></li>`;
            tags = tags + tag;
            i = i + 1;
        }
        document.querySelector('#navBar2').innerHTML = tags;
    })
});

fetch('./data/list_남').then(function(response) {
    response.text().then(function(text) {
        let items = text.split(',');
        let i = 0;
        let tags = '';
        while (i < items.length) {
            let item = items[i];
            item = item.trim();
            let tag = `<li><a class="dropdown-item" href="#!${item}" onclick="fetchPage('${item}')">${item}</a></li>`;
            tags = tags + tag;
            i = i + 1;
        }
        document.querySelector('#navBar3').innerHTML = tags;
    })
});

fetch('./data/list_북').then(function(response) {
    response.text().then(function(text) {
        let items = text.split(',');
        let i = 0;
        let tags = '';
        while (i < items.length) {
            let item = items[i];
            item = item.trim();
            let tag = `<li><a class="dropdown-item" href="#!${item}" onclick="fetchPage('${item}')">${item}</a></li>`;
            tags = tags + tag;
            i = i + 1;
        }
        document.querySelector('#navBar4').innerHTML = tags;
    })
});