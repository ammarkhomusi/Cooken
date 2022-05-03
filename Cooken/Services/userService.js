
//const baseUrl = process.env.baseURL || 'https://97.120.50.204:3001';

const createUser = (user) => {
    console.log('api user', user);
  return fetch(`https://97.120.50.204:3001/register` , {
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

const login = (email) => {

}

export const userService = {
  createUser,
  login,
}
