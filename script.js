const APIURL = "https://api.github.com/users/" 
const main = document.querySelector('#main');

const getUser = async(username) =>{
    const response = await fetch(APIURL + username);
    console.log(response);
    // convert data into JSON(because data is in string format so need to convert it..)
    const data = await response.json();
    console.log(data);   
    const card = `<div class="card">

                    <!-- left box -->
                    <div class="left-box">
                        <img src="${data.avatar_ur}" alt="Florin Pop" class="image">
                    </div>

                    <!-- right box -->
                    <div class="user-info">
                        <h2 class="name">Name</h2>
                        <p class="bio">Bio</p>
                        <ul class="info">
                            <li>### <strong>Followers</strong></li>
                            <li>## <strong>Following</strong></li>
                            <li>### <strong>Repos</strong></li>
                        </ul>
                        <div id="repos">
                            <a href="#" class="repo" target="_blank">Repo1</a>
                            <a href="#" class="repo" target="_blank">Repo2</a>
                            <a href="#" class="repo" target="_blank">Repo3</a>
                        </div>
                    </div>
                </div>`
                
                main.innerHTML = card;
}

getUser("NoorFatima-developer");