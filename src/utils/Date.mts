const jpTimezoneOffset = 9 * 60 * 60 * 1000;

export function toJpISOString(date: Date): string {
    return new Date(date.getTime() + jpTimezoneOffset).toISOString().slice(0, -1) + "+09:00";
}

export function toJpISODateString(date: Date): string {
    return new Date(date.getTime() + jpTimezoneOffset).toISOString().slice(0, 10);
}

export function toJpDateString(date: Date): string {
    const iso = toJpISOString(date);
    return `${iso.slice(0, 4)}年${iso.slice(5, 7)}月${iso.slice(8, 10)}日`;
}
