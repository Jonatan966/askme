import { DefaultTheme } from 'styled-components'

export const darkColors: Omit<DefaultTheme, 'toggleTheme'> = {
  currentTheme: 'dark' as 'dark' | 'light',
  colors: {
    shadow: 'rgba(5,2,6,0.8)',
    textPrimary: '#d1d1d6', /* --black */
    textSecondary: '#737380', /* --gray-dark */
    textTertiary: '#0D0D0D', /* --white */

    primary: '#33b330', /* --purple */
    primaryLight: '#c8ffc7',

    danger: '#E73F5D', /* --red-light */
    google: '#ea4335', /* --red */

    detailsPrimary: '#737373', /* --gray */
    detailsSecondary: '#a8a8b3', /* --gray-medium */
    detailsTertiary: '#2E2F31', /* --gray-light */
    detailsQuaternary: '#0E0E0E', /* --white-details */

    backgroundPrimary: '#141414', /* --white-background */
    backgroundSecondary: '#0D0D0D', /* --black-dark */
    backgroundTertiary: '#141414', /* --black-medium */

    label: '#FFD748' /* --pink */
  }
}
