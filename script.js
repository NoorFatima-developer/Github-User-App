const APIURL = "https://api.github.com/users/" 
const main = document.querySelector('#main');
const searchbox = document.querySelector("#search");

const getUser = async(username) =>{
    const response = await fetch(APIURL + username);
    console.log(response);
    // convert data into JSON(because data is in string format so need to convert it..)
    const data = await response.json();
    console.log(data);   
    const card = `<div class="card">

                    <!-- left box -->
                    <div class="left-box">
                        <img src="${data.avatar_url}" alt="Florin Pop" class="image">
                    </div>

                    <!-- right box -->
                    <div class="user-info">
                        <h2 class="name">${data.name}</h2>
                        <p class="bio">${data.bio || 'No bio available'}</p>
                        <ul class="info">
                            <li>${data.followers}<strong>Followers</strong></li>
                            <li>${data.following}<strong>Following</strong></li>
                            <li>${data.public_repos}<strong>Repos</strong></li>
                        </ul>
                        <div id="repos">
                            
                        </div>
                    </div>
                </div>`

      main.innerHTML = card;
      getRepos(username);
}

getUser("NoorFatima-developer");

const getRepos = async(username) => {
    const repos = document.querySelector("#repos")
    const response = await fetch(APIURL + username + '/repos');
    const data = await response.json();
    data.forEach(
        (item) => {
            console.log(item);
            const elem = document.createElement("a");
            elem.classList.add("repo");
            elem.href = item.html_url;
            elem.target = "_blank";
            elem.textContent = item.name;
            repos.appendChild(elem);
            console.log(repos);
        }
    )
}

const formsubmit = () => {
    if (searchbox.value != ""){
        getUser(searchbox.value);
        searchbox.value = "";
    }
    return false;
}

searchbox.addEventListener('focusout', (e) => {
    formsubmit();
});

/*
    <a href="#" class="repo" target="_blank">Repo1</a>
    <a href="#" class="repo" target="_blank">Repo2</a>
    <a href="#" class="repo" target="_blank">Repo3</a> */