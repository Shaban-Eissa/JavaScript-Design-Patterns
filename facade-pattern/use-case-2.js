class ApiFacade {
  constructor(baseURL, token) {
    this.baseURL = baseURL;
    this.token = token;
  }

  // Internal helper for making requests
  async request(endpoint, options = {}) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`API Error: ${response.status} - ${error}`);
    }

    return response.json();
  }

  // Facade methods
  getUsers() {
    return this.request("/users");
  }

  getUser(id) {
    return this.request(`/users/${id}`);
  }

  createUser(data) {
    return this.request("/users", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }
}

const api = new ApiFacade("https://jsonplaceholder.typicode.com", "token123");

// Get all users
api
  .getUsers()
  .then((users) => console.log("Users:", users))
  .catch(console.error);

// Get one user
api
  .getUser(1)
  .then((user) => console.log("User 1:", user))
  .catch(console.error);

// Create a new user
api
  .createUser({ name: "Shaban", email: "shaban@example.com" })
  .then((newUser) => console.log("Created user:", newUser))
  .catch(console.error);
