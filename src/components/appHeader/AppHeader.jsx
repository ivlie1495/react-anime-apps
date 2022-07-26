/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

import AppHeaderLink from '../appHeaderLink'
import { menuItems } from '../../constants/menuItem'
import { 
  hamburgerMenuStyle, 
  menuStyle, 
  navbarStyle, 
  logoStyle, 
  toggleStyle,
} from './appHeaderStyle'

const AppHeader = () => {
  return (
    <nav css={navbarStyle}>
      <div css={logoStyle}>
        <AppHeaderLink to="/" data-testid="appBarHeaderTestId">
          Anime
        </AppHeaderLink>
      </div>
      <div>
        <input type="checkbox" id="checkbox-toggle" css={toggleStyle} />
        <label htmlFor="checkbox-toggle" css={hamburgerMenuStyle}>&#9776;</label>
        <div css={menuStyle}>
          {menuItems.map(({ key, to, label }) => (
            <div key={key}>
              <AppHeaderLink to={to}>
                {label}
              </AppHeaderLink>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default AppHeader