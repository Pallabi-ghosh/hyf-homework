const activities = [];

function addActivity(date, activity, duration) {
    activities.push({ date, activity, duration });
}


addActivity('23/7-18', 'Youtube', 30);
addActivity('23/7-18', 'Telivision', 15);
addActivity('23/7-18', 'Instagram', 60);
addActivity('23/7-18', 'Facebook', 19);

console.log(activities);