import { FC, Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Header } from './components'
import { ForecastScreen, HistoryScreen, SelectedScreen } from './screens'
import { styles } from './styles'

export const App: FC = () => {
  return (
    <Fragment>
      <Header />

      <div css={styles.container}>
        <Switch>
          {/* Forecast Screen */}
          <Route path="/forecast" component={ForecastScreen} exact />

          {/* Weather  History Screen */}
          <Route path="/history" component={HistoryScreen} exact />

          {/* Selected  weather Screen */}
          <Route path="/selected" component={SelectedScreen} exact />

          {/* Redirect to Weather Screen */}
          <Redirect from="*" to="/forecast" />
        </Switch>
      </div>
    </Fragment>
  )
}
