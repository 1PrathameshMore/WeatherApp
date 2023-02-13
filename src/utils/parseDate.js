export const parseDate = (dateNumString) => {
    const returnObject = {}
    const [year, month, date] = dateNumString.split('-')
    returnObject.date = dateFormatHero(date, month, year)
    return returnObject
}

const dateFormatHero = (date, month, year) => {
    let returnValue = `${date}`
    if (date == 1) {
        returnValue += 'ST'
    } else if (date == 2) {
        returnValue += 'ND'
    } else if (date == 3) {
        returnValue += 'RD'
    } else {
        returnValue += 'TH'
    }

    returnValue += ' ' + getMonthString(month)

    returnValue += ` ${year}`
    return returnValue
}

const getMonthString = (month) => {
    let returnValue = ''

    switch (month) {
        case '01':
            returnValue += 'JAN'
            break
        case '02':
            returnValue += 'FEB'
            break
        case '03':
            returnValue += 'MAR'
            break
        case '04':
            returnValue += 'APR'
            break
        case '05':
            returnValue += 'MAY'
            break
        case '06':
            returnValue += 'JUN'
            break
        case '07':
            returnValue += 'JUL'
            break
        case '08':
            returnValue += 'AUG'
            break
        case '09':
            returnValue += 'SEP'
            break
        case '10':
            returnValue += 'OCT'
            break
        case '11':
            returnValue += 'NOV'
            break
        case '12':
            returnValue += 'DEC'
            break
    }

    return returnValue
}

export const getDaysAndDates = (dateNumString) => {
    let returnObject = {}
    if (dateNumString) {
        let day = new Date(dateNumString).getDay()
        const [year, monthS, dateS] = dateNumString.split('-')
        const month = getMonthString(monthS)
        const date = parseInt(dateS)
        // console.log((days - 2) % 7, (days - 1) % 7, (days + 1) % 7, (days + 2) % 7)
        day = day + 7
        returnObject.days = [{
            day: days[(day - 2) % 7],
            date: getDateString((date - 2), month)
        },
        {
            day: days[(day - 1) % 7],
            date: getDateString((date - 1), month)
        },
        {
            day: days[day % 7],
            date: 'Today'
        },
        {
            day: days[(day + 1) % 7],
            date: getDateString((date + 1), month)
        },
        {
            day: days[(day + 2) % 7],
            date: getDateString((date + 2), month)
        }]
    }
    return returnObject
}

const getDateString = (date, month) => {
    let returnValue = ''
    let dateString = (date + 0).toString()
    if(date < 10) {
        dateString = '0' + dateString
    }
    returnValue = dateString + ' ' + month
    return returnValue
}

const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']