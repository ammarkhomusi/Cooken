const baseUrl = process.env.baseURL;

const createUser = async (user) => {
  try {
    const res = await fetch(`${baseUrl}/register`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    });
    const data = await res.json();
    return data;
  } catch (e) {
    return e;
  }
};



export const userService = {
  createUser,
}
