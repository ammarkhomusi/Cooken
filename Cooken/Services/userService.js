const baseUrl = process.env.baseURL || 'http://localhost:3001';

const createUser = (user) => {
  return fetch(`${baseUrl}/register` , {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
};

const login = (email) => {

}

export const userService = {
  createUser,
  login,
}
