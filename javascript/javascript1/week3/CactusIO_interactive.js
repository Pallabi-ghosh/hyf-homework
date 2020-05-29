const activity = [];

addActivity('23/7-18', 'Youtube', 30);
addActivity('23/7-18', 'Telivision', 15);
addActivity('23/7-18', 'Instagram', 60);
addActivity('23/7-18', 'Facebook', 19);

function addActivity(d, a, dura) {
    var myObject = {
        date: d,
        activity: a,
        duration: dura
    }
    activity.push(myObject)
}
console.log(activity);