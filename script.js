async function getProfile(){
    const username = document.getElementById("usernameInput").value.trim();
    const profileDiv = document.getElementById("profile");

    if(!username){
        profileDiv.innerHTML="<p> Please Ebter a Github Username</p>"
        return;
    }
    try{
        const resposne = await fetch(`https://api.github.com/users/${username}`)
        if(! resposne.ok){
            throw new Error("User not found");
        }
        const data = await resposne.json();
        console.log(data);
        profileDiv.innerHTML=
        `<div class="profile-card">

        <img src="${data.avatar_url}" alt="avatar" />
         <h2>${data.name || "Name Not available"}</h2>
         <p>${data.bio || "No bio Provided"}</p>
         <p>${data.location || "No location provided"}</p>
         <p>${data.followers || "No active followers"}</p>
         <p>${data.following || "No active following"}</p>
         <p>${data.public_repos}Public Repositories</p>
         <p>${data.company || "No company provided"}</p>
         </div>

         `
    }catch(err){
        console.log("error happened", err)
    }
}