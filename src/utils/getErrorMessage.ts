// util used for getting error message from api request
export const getErrorMessage = async (error: any): Promise<string> => {
  const errorMessage =
    'json' in error
      ? await error.json().then((t: { message: string }) => t.message)
      : String(error)

  return errorMessage
}
