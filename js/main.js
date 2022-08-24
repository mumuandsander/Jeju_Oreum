function fetchPage(name){
    fetch('./data/'+name).then(function(response) {
        response.text().then(function(text) {
            document.querySelector('.articleText').innerHTML = text;
        })
    })
}

if(location.hash){
    fetchPage(location.hash.substring(2))
} else {
    fetchPage('welcome')
}


fetch('./data/list_동').then(function(response) {
    response.text().then(function(text) {
        let items = text.split(',');
        let i = 0;
        let tags = '';
        while (i < items.length) {
            let item = items[i];
            item = item.trim();
            let tag = `<li><a href="#!${item}" onclick="fetchPage('${item}')">${item}</a></li>`;
            tags = tags + tag;
            i = i + 1;
        }
        document.querySelector('#navBar1').innerHTML = tags;
    })
});


// 목록
fetch('./data/list_서').then(function(response) {
    response.text().then(function(text) {
        let items = text.split(',');
        let i = 0;
        let tags = '';
        while (i < items.length) {
            let item = items[i];
            item = item.trim();
            let tag = `<li><a href="#!${item}" onclick="fetchPage('${item}')">${item}</a></li>`;
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
            let tag = `<li><a href="#!${item}" onclick="fetchPage('${item}')">${item}</a></li>`;
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
            let tag = `<li><a href="#!${item}" onclick="fetchPage('${item}')">${item}</a></li>`;
            tags = tags + tag;
            i = i + 1;
        }
        document.querySelector('#navBar4').innerHTML = tags;
    })
});