import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}


interface User {
  id: number;
  name: string;
  email: string;
}

async function getUserData() {
  const url = 'https://api.example.com/user';
  const userData = await fetchData<User>(url);
  console.log(userData);
}
