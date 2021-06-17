import { AppDispatch } from '~/redux'
import { coordinatesSlice } from './slice'

// getCoordinates used for getting coordinates
export const getCoordinates = (): any => async (dispatch: AppDispatch) => {
  // set coordinates
  await navigator.geolocation.getCurrentPosition((position) => {
    dispatch(
      coordinatesSlice.actions.setCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }),
    )
  })

  // stop loading coordinates
  dispatch(coordinatesSlice.actions.stopLoading())
}
