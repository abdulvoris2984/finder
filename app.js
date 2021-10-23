(function () {
   
    const userChange = debounce(getInputValue);
    const searchInput = document.querySelector("#searchInput");
    searchInput.addEventListener("keyup", userChange);
})();

function debounce(callback, timeout = 500) {
    let timer;
    return function (arg) {
      clearTimeout(timer);
      timer = setTimeout(function () {
          callback(arg);
      }, timeout);
    };
}

async function getInputValue (e) {
    const userName = e.target.value.trim();
    const github = new Github;
    const ui =  new UI;
    try {
        const { profile, repos } = await github.getUser(userName);

        ui.showProfile(profile);
        ui.showRepos(repos);
    } catch (err) {
        ui.showAlert(err.response.data.message, 'alert-danger');
        ui.clearProfile();
    }
}
