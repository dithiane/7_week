/* *
Road Trip Time
Difficulty
Harder

Concepts
Math, Higher Order Functions


You are planning a road trip (in a time before Google Maps) and want to know how long each segment of the trip is going to be. Given an array of objects like this:

{
    name: `Jake's Great Shakes`,
    speedLimits: [
        {
            distance: 100,
            speedLimit: 75
        },
        {
            distance: 84,
            speedLimit: 70
        },
        {
            distance: 20,
            speedLimit: 75
        }
    ],
    traffic: 30
}
Update the given function so that the segmentTimes array in the result object contains the times for each segment of the trip in hours.

You can round the times to whole numbers.

Also update the totalTime property to be the total time of the trip.

Additionally, because you like data, you want to know what the average speed limit for each segment of the trip of is.

Since you are traveling different distances at each speed, you’ll need to weight the averages. For example, given a trip segment where you travel 10 miles at 50 MPH and for 20 miles at 35 MPH, the average weighted speed limit would be 39.9. If you just added 50 and 35 and divided by 2 for a typical average, you would get 42.5. The weighted average is lower since you traveled a longer distance at the lower speed.

As you find these weighted averages, add them into the avgSpeedLimits array in the result object.

Return the result object from the function.

Hint: You can use the reduce method.*/


const stops = [
    {
        name: `Jake's Great Shakes`,
        speedLimits: [
            {
                distance: 100,
                speedLimit: 75
            },
            {
                distance: 84,
                speedLimit: 70
            },
            {
                distance: 20,
                speedLimit: 75
            }
        ],
        traffic: 30
    }
]
const tripTime = (arr) => {


    let result = {
        avgSpeedLimits: [],
        segmentTimes: [],
        totalTime: null
    }

    let avgSpeedLimit = 0
    let segmentTime = 0

    let totalTime = arr.reduce((acc, curr) => {
        let segmentDistance = curr.speedLimits.reduce((acc, curr) => acc += curr.distance, 0)
        acc += segmentDistance


        curr.speedLimits.forEach(el => {
            avgSpeedLimit += Math.round(el.speedLimit * (el.distance / segmentDistance))
            segmentTime += Math.round((el.distance * (el.speedLimit / 60)) / 60) + curr.traffic
        })

        result.avgSpeedLimits.push(avgSpeedLimit)
        result.segmentTimes.push(segmentTime)
        return acc

    }, 0)

    result.totalTime = totalTime
    return result

}

console.log(tripTime(stops))





