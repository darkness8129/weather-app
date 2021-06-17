import { FC, useState, Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Squash as Hamburger } from 'hamburger-react'
import { styles } from './styles'

export const Header: FC = () => {
  const [isMobileDropdownOpened, setMobileDropdownOpened] = useState<boolean>(false)
  const { pathname } = useLocation()

  return (
    <Fragment>
      <div css={styles.container}>
        <div css={styles.logo}>
          Weather<span>APP</span>
        </div>

        {/* desktop */}
        <div css={styles.navigation}>
          <Link
            to="/forecast"
            css={[styles.item.base, pathname === '/forecast' && styles.item.active]}
          >
            Forecast
          </Link>

          <Link
            to="/history"
            css={[styles.item.base, pathname === '/history' && styles.item.active]}
          >
            Weather history
          </Link>
        </div>

        <div css={styles.mobileHamburger}>
          <Hamburger
            toggled={isMobileDropdownOpened}
            toggle={setMobileDropdownOpened}
            color="#73797d"
            size={30}
            easing="ease-in"
            distance="md"
            rounded
          />
        </div>
      </div>

      {/* mobile */}
      <div
        css={[styles.mobile.container, isMobileDropdownOpened && styles.mobile.animation]}
      >
        <div css={styles.mobile.menu}>
          <div onClick={() => setMobileDropdownOpened(false)}>
            <Link
              to="/forecast"
              css={[
                styles.item.base,
                styles.mobile.item,
                pathname === '/forecast' && styles.item.active,
              ]}
            >
              Forecast
            </Link>

            <Link
              to="/history"
              css={[
                styles.item.base,
                styles.mobile.item,
                pathname === '/history' && styles.item.active,
              ]}
            >
              Weather history
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
