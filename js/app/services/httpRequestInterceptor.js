function MyInterceptor() {
    this.responseError = function (config) {
      alert('Error!');
    };
}
 
angular
    .module('app')
    .service('MyInterceptor', MyInterceptor)
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('MyInterceptor');
    });


// function httpRequestInterceptor() {
//   this.responseError = function () {
//     alert('Error!');
//   }
// }

// angular
//   .module('app')
//   .service('httpRequestInterceptor', httpRequestInterceptor)
//   .config(function ($httpProvider) {
//     $httpProvider.interceptors.push('httpRequestInterceptor');
//   });
