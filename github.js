class GitHub {
    constructor() {
        this.client_id = 'f54046b1d2ea49bcf0f6';
        this.client_secret = 'ba2c1f7f52f18997e1a1baa44426befceb359ac0';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}