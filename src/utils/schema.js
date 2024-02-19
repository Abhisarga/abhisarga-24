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
            `,
    },
  },
  mutations: {
    auth: {
      login: `mutation Login($password: String!, $email: String!) {
        Login(password: $password, email: $email) {
            data
            status
            }
        }`,
      register: `mutation Login($user: UserInput!) {
        Register(user: $user) {
          status
          data
        }
      } 
        `,
    },
  },
};

export default schema;
