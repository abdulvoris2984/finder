class UI {
    constructor() {
        this.profile = document.getElementById("profile");
        this.repos = document.getElementById("repos");
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card-body">
            <div class="row">
                <div class="col-md-4 ">
                    <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block rounded-pill mb-3">View profile</a>
                </div>
                <div class="col-md-8">
                    <h3>${user.name}</h3>
                    <div class="badge badge-primary mb-2">Public Repos: ${user.public_repos}</div>
                    <div class="badge badge-secondary mb-2">Public Gists: ${user.public_gists}</div>
                    <div class="badge badge-success mb-2">Public Followers: ${user.followers}</div>
                    <div class="badge badge-info mb-2">Public Following: ${user.following}</div>
                    <ul class="list-group">
                        <li class="list-group-item">${user.company}</li>
                        <li class="list-group-item">
                            <a href="http://${user.blog}">
                                ${user.blog}
                            </a>
                        </li>
                        <li class="list-group-item">${user.location }</li>
                        <li class="list-group-item">${moment(user.created_at).format("DD/MM/YYYY")}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    }

    showRepos(repos) {
        let reposOutput = ``;

        repos.forEach(function (repo) {
            reposOutput += `
                <div class="card">
                    <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <div class="badge badge-primary mb-2">Stars: ${repo.stargazers_count}</div>
                            <div class="badge badge-secondary mb-2">Watchers: ${repo.watchers_count}</div>
                            <div class="badge badge-success mb-2">Forks: ${repo.forks_count}</div>
                        </div>
                    </div>
                    </div>
                </div>
            `
        })

        this.repos.innerHTML = `
            <div class="card-header">
                <h3>Latest repos</h3>
            </div>
            <div class="card-body">
                ${reposOutput}
            </div>
        `;
    }

    clearProfile () {
        this.profile.innerHTML = '';
        this.repos.innerHTML = '';
    }

    showAlert (message, className) {
        this.clearAlert();
        const alertDiv = `
        <div class="alert ${className}">
            ${message}
        </div>
        `;

        document.querySelector('.search-container').insertAdjacentHTML('beforebegin', alertDiv);

        let _this = this;
        setTimeout(function () {
            _this.clearAlert();
        }, 3000)
    }

    clearAlert () {
        const alertDiv = document.querySelector(".alert");

        if (alertDiv) 
            alertDiv.remove();
    }
}