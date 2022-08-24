function fetchPage(name){
    fetch('./data/'+name).then(function(response) {
        response.text().then(function(text) {
            document.querySelector('#동').innerHTML = text;
        })
    })
}