/* 
Time Words
Difficulty
Medium

Concepts
General


Write a function that turns a string of 24-hour time into words.

You can trust that you’ll be given a valid string (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.

Handle noon and midnight specially:

timeWord("00:00")
// 'midnight'

timeWord("12:00")
// 'noon'
Otherwise, covert times to text:

timeWord("01:00")
// "one o'clock am"

timeWord("06:01")
// 'six oh one am'

timeWord("06:10")
// 'six ten am'

timeWord("06:18")
// 'six eighteen am'

timeWord("06:30")
// 'six thirty am'

timeWord("10:34")
// 'ten thirty four am'
Don’t forget to handle early morning properly:

timeWord("00:12")
// 'twelve twelve am'
For times after noon, add ‘pm’:

timeWord("12:09")
// 'twelve oh nine pm'

timeWord("23:23")
// 'eleven twenty three pm'
*/

const timeWord = (str) => {
    const [h, m] = str.split(":")

    const ones = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"]
    const _ = ["", "eleven", "twelve", 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty']

    let newH = ''
    let newM = ''
    let hour = Number(h)
    let min = 0

    if (hour > 12) newH = ones[hour - 12]
    else newH = ones[hour]

    if (Number(m) < 12) {
        min = m.split("").map(Number)[1]
        time_mins = ones[min]
    }
    else if (Number(m) < 20) {
        min = m.split("").map(Number)[1]
        time_mins = _[min]
    } else {
        min = m.split("").map(Number)
        time_mins = `${tens[min[0]]} ${ones[min[1]]}`
    }

    newM = `${time_mins} ${(h >= 12) ? "pm" : "am"}`

    return newH + " " + newM

}

console.log(timeWord("23:23"))
console.log(timeWord("12:09"))
console.log(timeWord("00:12"))
console.log(timeWord("10:34"))