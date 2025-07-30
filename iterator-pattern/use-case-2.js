// A mock API function simulating paginated data
function mockFetchUsers(page) {
  const allUsers = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
  ];
  const pageSize = 3;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const users = allUsers.slice(start, end);
  const nextPage = end < allUsers.length ? page + 1 : null;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ users, nextPage });
    }, 500); // simulate network delay
  });
}

// Iterator pattern for paginated users
function createUserIterator() {
  let currentPage = 1;
  let done = false;

  return {
    async next() {
      if (done) return { value: undefined, done: true };

      const { users, nextPage } = await mockFetchUsers(currentPage);
      if (!nextPage) done = true;
      currentPage = nextPage;

      return { value: users, done: false };
    },
  };
}

// Usage
(async () => {
  const userIterator = createUserIterator();

  console.log(await userIterator.next()); // ["Alice", "Bob", "Charlie"]
  console.log(await userIterator.next()); // ["David", "Eve", "Frank"]
  console.log(await userIterator.next()); // ["Grace"]
  console.log(await userIterator.next()); // { value: undefined, done: true }
})();
