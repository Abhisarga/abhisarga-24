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
      getAll: `
            query AllClubs {
                AllClubs {
                  status
                  data
                }
              }
              `,
    },
    event: {
      getById: `
      query Event($eventId: String!) {
        Event(id: $eventId) {
          data {
            _id
            createdAt
            name
            club {
              _id
              name
            }
            description
            poster
            registrationLink
            rounds {
              name
              mode
              description
              start
              end
            }
            prizePool
            organizers {
              name
              phone
            }
          }
          status
        }
      }
            `,
      all: `
          query AllEvents {
            AllEvents {
              status
              data
            }
          }
      `,
    },
  },
  mutations: {},
};

export default schema;
