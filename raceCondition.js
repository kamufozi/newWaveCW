let userData = null;

function fetchUserData(userId, callback) {
  // Simulating API call with random delay
  setTimeout(() => {
    userData = { id: userId, name: `User ${userId}` };
    callback(userData);
  }, Math.random() * 1000);
}

// Race condition: Which user data will we end up with?
fetchUserData(1, (data) => console.log('User 1:', data));
fetchUserData(2, (data) => console.log('User 2:', data));
fetchUserData(3, (data) => console.log('User 3:', data));

// userData might be any of the three users!
setTimeout(() => console.log('Final userData:', userData), 1500);