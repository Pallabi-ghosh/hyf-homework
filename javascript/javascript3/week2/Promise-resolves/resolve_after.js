// Creating your own promise
const myPromiseResolve = (resolveafter) => {
    return new Promise(resolve => setTimeout(resolve, resolveafter * 8000))
}


myPromiseResolve(8)
    .then(() => {
        console.log('I am called asynchronously'); // logged out after 8 seconds
    })
    .catch((error) => {
        console.log(error);
    });

// async way
async function asyncAwaitExample() {
    try {
        const data = await promise;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

asyncAwaitExample();