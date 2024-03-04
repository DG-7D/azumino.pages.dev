const jpTimezoneOffset = 9 * 60 * 60 * 1000;

export function toJpISODateTimeString(date: Date): string {
    return new Date(date.getTime() + jpTimezoneOffset).toISOString().slice(0, -1) + "+09:00";
}

export function toJpISODateString(date: Date): string {
    return new Date(date.getTime() + jpTimezoneOffset).toISOString().slice(0, 10);
}

export function toJpDateString(date: Date | string): string {
    const dateArray = date instanceof Date
        ? toJpISODateString(date).split("-")
        : date.split("-");
    return dateArray[0] + "年" + dateArray[1] + "月" + dateArray[2] + "日";
}

export function toJpTimeString(date: Date): string {
    const [, timeString] = toJpISODateTimeString(date).split("T");
    const [hour, minute,] = timeString!.split(":");
    return hour + "時" + minute + "分";
}

export function toJpDateTimeString(date: Date): string {
    return toJpDateString(date) + " " + toJpTimeString(date);
}