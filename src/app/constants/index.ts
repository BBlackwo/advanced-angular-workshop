const BaseEndpoints = {
  THINGS_TO_DO: 'https://melbourne-things-to-do-bbackwo.firebaseio.com',
};

export const ApiEndpoints = {
  ACTIVITIES: `${BaseEndpoints.THINGS_TO_DO}/activities.json`
};

const Prefix = 'AAW';

export const StorageKeys = {
  ACTIVITY_CACHE: `${Prefix}-ActivityCache`
};
