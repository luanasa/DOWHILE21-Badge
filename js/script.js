const linksSocialMedia = {
    github: 'luanasa',
    youtube: '',
    facebook: '',
    instagram: 'awildfire',
    twitter: 'brainshunter',
}

function changeSocialMediaLinks () {
    //const userName = document.getElementById('userName').textContent = 'Olivia' // long way 

    //userName.textContent = 'Marcelo' // short way to get the element by id

    for (let li of changeSocialMediaLinks.children) {
        const social = li.getAttribute('class')
        
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
}

changeSocialMediaLinks ()


function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url).then(response => response.json()).then(data =>  {
        userName.textContent = data.name 
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userPhoto.src = data.avatar_url
        userLogin.textContent = data.login
    }) //promisse
}

getGitHubProfileInfos()