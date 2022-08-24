function fetchPage(name){
    fetch('./data/'+name).then(function(response) {
        response.text().then(function(text) {
            document.querySelector('#동').innerHTML = text;
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
        document.querySelector('#navBar1').innerHTML = text;
    })
})