const myAxios = axios.create({
    baseURL: "https://api.github.com/users/",
    responseType: "json"
})

class Github {
    constructor () {
        this.clientId = "dea603707ec7db0e024b";
        this.secretId = "4629b21774e87153d2db747052e353562cfc7fa6";
        this.reposCount = 5;
        this.reposSort = "created_at:asc"
    }

    async getUser(userName)
    {
       try {
        const profileResponse = await myAxios.get(`${userName}`, {
           
        });

        const reposResponse = await myAxios.get(`${userName}/repos`, {
            params: {
                per_page: this.reposCount,
                sort: this.reposSort
            }
        })
        
        return {
            profile: profileResponse.data,
            repos: reposResponse.data
        }
       } catch (e) {
           throw e;
       }
    }
}