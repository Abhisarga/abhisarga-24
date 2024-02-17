const schema = {
    queries: {
        club: {
            getById: `
                query Club($clubId: String!) {
                    Club(id: $clubId) {
                        data
                        status
                    }
                }
            `
        }
    },
    mutations: {

    }
}