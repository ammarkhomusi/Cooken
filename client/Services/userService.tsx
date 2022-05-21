
interface User {
    email: string;
    password: string;
    username: string;
    favCuisines: string[]
}

const createUser = (user: User) => {

    return fetch(`http://192.168.5.7:3001/register` , {
        method: 'POST',
        headers: { Accept: 'application/json',
            "Content-Type": "application/json",
    },
        body: JSON.stringify({ user }),
    })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {console.log(error)});
};

const login = (email: string) => {
    console.log(email)
}

export const userService = {
    createUser,
    login,
}
