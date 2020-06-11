export function dateFormat(millisecond) {
    return `${parseInt(millisecond / 1000 / 60)}`.padStart(2,'0') + `.`+`${millisecond / 1000 % 60}`.padStart(2,'0')
}
export default {
    dateFormat
}
