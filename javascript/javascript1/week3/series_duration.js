const seriesDurations = [{
        title: 'Game of thrones',
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: 'House of cards',
        days: 2,
        hours: 12,
        minutes: 49,
    },
    {
        title: 'Friends',
        days: 6,
        hours: 15,
        minutes: 10,
    }
]


let totalTimeInPercentage = 0;
const totalMinutes = 80 * 365 * 24 * 60;

function logOutSeriesText(seriesTime) {
    for (var i = 0; i < seriesTime.length; i++) {
        var minutesInLifeSpan = seriesTime[i].days * 24 * 60 + seriesTime[i].hours * 60 + seriesTime[i].minutes
            //console.log(seriesTime[i].days * 24 * 60 + seriesTime[i].hours * 60 + seriesTime[i].minutes)

        var percentage = parseFloat((minutesInLifeSpan / totalMinutes * 100).toFixed(3))
        console.log(seriesTime[i].title + "took" + percentage + " % of my life ")
    }

    totalTimeInPercentage += percentage
    console.log(totalTimeInPercentage)
}

logOutSeriesText(seriesDurations);