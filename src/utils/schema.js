const schema = {
  queries: {
    club: {
        getById: `query Club($clubId: String!) {
            Club(id: $clubId) {
                data
                status
            }
        }`,
        all: `query AllClubs {
            AllClubs {
                status
                data
            }
        }`,
    },
    event: {
        getById: `query Event($eventId: String!) {
            Event(id: $eventId) {
                data {
                    _id
                    createdAt
                    name
                    club {
                        _id
                        theme {
                            _id
                            images {
                                position
                                url
                            }
                            name
                        }
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
        }`,
        all: `query AllEvents {
            AllEvents {
                status
                data
            }
        }`,
    },
    allEventsAndClubs: `query AllEvents {
        AllEvents {
            status
            data
        }
        AllClubs {
            data
            status
        }
    }`,
    theme: {
        getById: `query Theme($themeId: String!) {
            Theme(id: $themeId) {
              status
              data
            }
        }`,
    },
  },
  mutations: {},
};

export default schema;
