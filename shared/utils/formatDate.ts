export default function formatDate(date: Date): any {
    const dayOfWeek = ['日','月','火','水','木','金','土']

    return {
        year: date.getFullYear(),
        month: ('0' + (date.getMonth() + 1)).slice(-2),
        day: ('0' + date.getDate()).slice(-2),
        hour: ('0' + date.getHours()).slice(-2),
        minutes: ('0' + date.getMinutes()).slice(-2),
        second: ('0' + date.getSeconds()).slice(-2),
        dayOfWeek: dayOfWeek[date.getDay()],
    };
}
