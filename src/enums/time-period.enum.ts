export const TIME_PERIOD = Object.freeze({
    day: 'day',
    month: 'month',
    year: 'year',
} as const);

export type TimePeriod = keyof typeof TIME_PERIOD;
