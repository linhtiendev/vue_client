const API_BASE = "http://127.0.0.1:8000/api";

export default {
    // fetch all users
    FetchUsers: () => {
        return fetch(API_BASE + "/users/all")
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    return data.response.users;
                } else {
                    throw data.response.error;
                }
            })
            .catch((err) => {
                alert(err);
            });
    },

    // create a user
    CreateUser: (name = "", email = "", password = "") => {
        if (name == "" || email == "" || password == "") {
            return false;
        }

        return fetch(API_BASE + "/users/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    return data.response.user;
                } else {
                    throw data.response.error;
                }
            })
            .catch((err) => {
                alert(err);
            });
    },
};
