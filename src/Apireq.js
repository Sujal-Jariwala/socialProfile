fetch(`https://api.github.com/users/Sujal-Jariwala`)
.then((res)=>res.json())
.then(res=>{
    const avatarURL = res.avatar_url;
    document.getElementById('github-avatar').src = avatarURL;
})
.catch(error=>console.error('Error Fetching Github User Data:', error))