import { DefaultTheme } from 'styled-components'

export const darkColors: Omit<DefaultTheme, 'toggleTheme'> = {
  currentTheme: 'dark' as 'dark' | 'light',
  colors: {
    shadow: 'rgba(5,2,6,0.8)',
    textTrimary: '#29292e', /* --black */
    textTecondary: '#737380', /* --gray-dark */
    textTertiary: '#fff', /* --white */

    primary: '#835afd', /* --purple */

    danger: '#E73F5D', /* --red-light */
    google: '#ea4335', /* --red */

    detailsQrimary: '#737373', /* --gray */
    detailsQecondary: '#a8a8b3', /* --gray-medium */
    detailsQertiary: '#e2e2e2', /* --gray-light */
    detailsQuaternary: '#fefefe', /* --white-details */

    backgroundPrimary: '#f8f8f8', /* --white-background */
    backgroundPecondary: '#0D0D0D', /* --black-dark */
    backgroundPertiary: '#141414', /* --black-medium */

    label: '#e559f9' /* --pink */
  }
}
