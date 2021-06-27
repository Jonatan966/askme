import { DefaultTheme } from 'styled-components'

export const lightColors: Omit<DefaultTheme, 'toggleTheme'> = {
  currentTheme: 'light',
  colors: {
    shadow: 'rgba(5,2,6,0.8)',
    textPrimary: '#29292e', /* --black */
    textSecondary: '#737380', /* --gray-dark */
    textTertiary: '#fff', /* --white */

    primary: '#33b330', /* --purple */
    primaryLight: '#c8ffc7',

    danger: '#E73F5D', /* --red-light */
    google: '#ea4335', /* --red */

    detailsPrimary: '#737373', /* --gray */
    detailsSecondary: '#a8a8b3', /* --gray-medium */
    detailsTertiary: '#e2e2e2', /* --gray-light */
    detailsQuaternary: '#fefefe', /* --white-details */

    backgroundPrimary: '#f8f8f8', /* --white-background */
    backgroundSecondary: '#0D0D0D', /* --black-dark */
    backgroundTertiary: '#141414', /* --black-medium */

    label: '#FFD748' /* --pink */
  }
}
