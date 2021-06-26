import { ReactComponent as AppLogoImg } from '@assets/images/logo.svg'

import styled from 'styled-components'

export const AppLogoContainer = styled(AppLogoImg)`
  .letme {
    fill: ${ctx => ctx.theme.colors.textPrimary};
  }
`
