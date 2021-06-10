import { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { WeatherScreen } from './screens'

export const App: FC = () => {
  return (
    <Switch>
      <WeatherScreen />
      {/* Weather Screen */}
      <Route path="/weather" component={WeatherScreen} />

      {/* Redirect to Weather Screen */}
      <Redirect from="*" to="/weather" />
    </Switch>
  )
}
