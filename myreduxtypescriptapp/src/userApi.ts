const ApiURL = "https://jsonplaceholder.typicode.com/users";

//fetch users from API 
export const fetchUsers = async (): Promise<any[]> => {
  const response = await fetch(ApiURL);
  if(!response.ok) {
     throw new Error("Failed to fetch user");
  }
  return response.json();
} 

export const addUser = async (user: {name: string; email: string}) => {
    const response = await fetch(ApiURL, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(user),
    })

    if(!response.ok) {
        throw new Error("Failed to add user");
     }
     return response.json(); // Return new user with ID
};