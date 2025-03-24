import { THEME } from './theme.enum';

export const COLORS = Object.freeze({
  [THEME.light]: {
    white: '#FFFFFF',
    background: '#e8ebea',
    backround_input: '#FFFFFF',
    background_green: '#0e5c2d',
    background_inactive: '#668c76',
    background_light_grey: '#F5F5F5',
    border: '#E3E3E3',
    border_focus: '#AEAEAE',
    text_primary: '#000000',
    text_secondary: '#777777',
    danger: '#FF0000',
  },
  [THEME.dark]: {
    white: '#FFFFFF',
    background: '#383838',
    backround_input: '#575757',
    background_green: '#35945b',
    background_inactive: '#648c75',
    background_light_grey: '#F5F5F5',
    border: '#4d4d4d',
    border_focus: '#696969',
    text_primary: '#FFFFFF',
    text_secondary: '#bdbdbd',
    danger: '#FF0000',
  },
});
