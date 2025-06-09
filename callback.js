async function getUserData(userId) {
  const user = await fetch(`/api/users/${userId}`);
  const userData = await user.json();
  console.log(userData.name.toUpperCase()); // What if name is undefined?
  return userData;
}

// Rewrite to properly handle:
// - Network errors
// - JSON parsing errors
// - Missing user data
// - Missing name property
async function getUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    
    if (!response.ok) {
      console.error(`Network error: ${response.status} ${response.statusText}`);
      return { error: 'Failed to fetch user data.' };
    }

    let userData;
    try {
      userData = await response.json();
    } catch (jsonError) {
      console.error('JSON parsing error:', jsonError);
      return { error: 'Invalid JSON response.' };
    }

    if (!userData || typeof userData !== 'object') {
      console.error('Missing or invalid user data.');
      return { error: 'User data not found.' };
    }

    const name = userData.name;
    if (typeof name !== 'string') {
      console.error('Missing or invalid name property.');
      return { ...userData, name: 'UNKNOWN' };
    }

    console.log(name.toUpperCase());
    return userData;

  } catch (error) {
    console.error('Unexpected error:', error);
    return { error: 'An unexpected error occurred.' };
  }
}


async function taskA() { return new Promise((res,rej)=>{
   setTimeout(()=>{
    resolve("a");
   },1000)
})}
async function taskB() { 
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            resolve("b")
        },1000)
    })
}
async function taskC() {   
      return new Promise((res,rej)=>{
        setTimeout(()=>{
            resolve("c")
        },1000)
    }) }

// Version 1: Run sequentially (should take ~3 seconds)
async function runSequential() {
  // Your implementation
    await taskA();
    await taskB();
    await taskC();

}

// Version 2: Run concurrently (should take ~1 second)
function runConcurrent() {
  // Your implementation
Promise.all([taskA(),taskB(),taskC()]);

    
}

