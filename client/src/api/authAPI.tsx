import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });
    
    const data = await response.json();

    if (!response.ok) {
      throw new Error('User information not found');
    }

    return data;
  } catch (error) {
    console.error('Error:', error);
    return Promise.reject('An error occurred');
  }
}

export { login };
