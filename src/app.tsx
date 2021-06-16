import { FC, Fragment, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Header } from './components'
import { useAppDispatch } from './redux'
import { coordinatesSlice } from './redux/coordinatesSlice'
import { ForecastScreen, WeatherHistoryScreen, SelectedScreen } from './screens'
import { styles } from './styles'

export const App: FC = () => {
  // get dispatch
  const dispatch = useAppDispatch()

  // get coordinates
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) =>
      dispatch(
        coordinatesSlice.actions.setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }),
      ),
    )
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

          {/* Selected  weather Screen */}
          <Route path="/selected" component={SelectedScreen} exact />

          {/* Redirect to Weather Screen */}
          <Redirect from="*" to="/forecast" />
        </Switch>
      </div>
    </Fragment>
  )
}
