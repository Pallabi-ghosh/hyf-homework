function timeout(duration) {
    return new Promise(function(resolve) {
        setTimeout(resolve, duration);
    });
}

timeout(3000).then(function() {
    console.log('Called after 3 seconds!');
})


function getCurrentLocation() {
    then(function(position) {
            return position.text('I am called asynchronously');
        })
        .catch((error) => {
            console.log(error);
        });
}