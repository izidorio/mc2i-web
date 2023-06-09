export const ROUTES = {
  public: {
    login: {
      path: "/login",
    },
    forgot: {
      path: "/forgot",
    },
  },
  private: {
    me: {
      path: "/me",
      acl: [""],
    },
    users: {
      path: "/users",
      acl: ["admin"],
    },
  },
};
