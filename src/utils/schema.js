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
                        name
                        abbreviation
                        description
                        logo
                        socials {
                            instagram
                            linkedin
                            email
                        }
                        lead {
                            _id
                            name
                            email
                            phone
                            type
                            socials {
                            instagram
                            linkedin
                            email
                            }
                            profilePhoto
                        }
                        coLead {
                            _id
                            name
                            email
                            phone
                            type
                            socials {
                            instagram
                            linkedin
                            email
                            }
                            profilePhoto
                        }
                        representative {
                            _id
                            name
                            email
                            phone
                            type
                            socials {
                            instagram
                            linkedin
                            email
                            }
                            profilePhoto
                        }
                        theme {
                            _id
                            name
                            images
                        }
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
        }`
    },
    mutations: {},
};

export default schema;
