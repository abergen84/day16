var githubUsername = "abergen84";
var url = "https://api.github.com/users/" + githubUsername;
$.get(url).then(function(data){
    drawProfile(data);
})

function drawProfile(data) {
    document.body.innerHTML = [

        
        '<img src=',
        data.avatar_url,
        '/>',

        '<h1> Name:',
        data.name,
        '</h1>',

        '<h2> Blog:',
        data.blog,
        '</h2>',

        '<h3> Place of Bidness:',
        data.location,
        '</h3>',

        '<h3> Email:',
        data.email,
        '</h3>',

        '<h3> URL:',
        data.html_url,
        '</h3>'



    ].join('')
}

