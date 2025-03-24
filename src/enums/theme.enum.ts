export const THEME = Object.freeze({
    light: 'light',
    dark: 'dark',
} as const);

export type Theme = keyof typeof THEME;
