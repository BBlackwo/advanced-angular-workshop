const BaseEndpoints = {
  THINGS_TO_DO: 'https://melbourne-things-to-do.firebaseio.com',
}

export const ApiEndpoints = {
  ACTIVITIES: `${BaseEndpoints.THINGS_TO_DO}/activities.json`
};
