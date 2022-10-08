// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseUrl: 'https://rapidweather.p.rapidapi.com/data/2.5/weather',
  XRapidAPIHeaderName : 'X-RapidAPI-Host',
  XRapidAPIHeaderValue : 'rapidweather.p.rapidapi.com',
  XRapidAPIKeyHeaderName : 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue : 'ea80309b75msh8422a5b282bdcb5p1eed58jsn28d354fd3917'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
