import { createTheme, ThemeOptions } from '@mui/material/styles';

import colors from '@/styles/_themes-vars.module.scss';

import themeComponents from './components';
import themePalette from './palette';
import themeTypography from './typography';

export default function themes() {
  const themeOption = {
    colors: colors,
    heading: colors.grey900,
    paper: colors.paper,
    backgroundDefault: colors.paper,
    background: colors.primaryLight,
    darkTextPrimary: colors.grey700,
    darkTextSecondary: colors.grey500,
    textDark: colors.grey900,
    menuSelected: colors.secondaryDark,
    menuSelectedBack: colors.secondaryLight,
    divider: colors.grey200,
    // customization,
  };

  const themeOptions: ThemeOptions = {
    direction: 'ltr',
    palette: themePalette(themeOption),
    typography: themeTypography(themeOption),
    components: themeComponents(themeOption),
  };

  const themes = createTheme(themeOptions);

  return themes;
}
