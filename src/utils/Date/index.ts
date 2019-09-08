const months = {
    0: 'JAN',
    1: 'FEB',
    2: 'MAR',
    3: 'APR',
    4: 'MAY',
    5: 'JUN',
    6: 'JUL',
    7: 'AUG',
    8: 'SEP',
    9: 'OCT',
    10: 'NOV',
    11: 'DEC',
};

/**
 * Returns a 3-letter formatted month & a 0-padded day from given date.
 *
 * @param date the date to extract data from
 */
function getMonthAndDay(date: Date) {
    const month = months[date.getMonth()];
    const day = date
        .getDate()
        .toString()
        .padStart(2, '0');
    return [month, day];
}

export { getMonthAndDay };
