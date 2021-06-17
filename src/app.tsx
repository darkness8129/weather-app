import { FC, Fragment, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Header } from './components'
import { useAppDispatch } from './redux'
import { getCoordinates } from './redux/coodrinates'
import { ForecastScreen, WeatherHistoryScreen } from './screens'
import { styles } from './styles'

export const App: FC = () => {
  // get dispatch
  const dispatch = useAppDispatch()

  // get coordinates
  useEffect(() => {
    dispatch(getCoordinates())
  }, [])

  return (
    <Fragment>
      <Header />

      <div css={styles.container}>
        <Switch>
          {/* Forecast Screen */}
          <Route path="/forecast" component={ForecastScreen} exact />

          {/* Weather  History Screen */}
          <Route path="/history" component={WeatherHistoryScreen} exact />

          {/* Redirect to Weather Screen */}
          <Redirect from="*" to="/forecast" />
        </Switch>
      </div>
    </Fragment>
  )
}
