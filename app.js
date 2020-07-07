//Init

const github = new GitHub;



//Search Input

const searchUser = document.getElementById('searchUser');

//Search Input Event Listener

searchUser.addEventListener('keyup', (e) => {
    //Get input text

    const userText = e.target.value;

    if (userText !== "") {
        //Make http call

        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //Show Alert

                } else {
                    //Show the profile
                }
            })
    } else {
        //clear profile
    }
});