// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: "http://localhost:8000/api",
  acceptHeader: { Accept: 'application/json' },
  messages: {
    success: {
      productCreated: "Product created",
      productUpdated: "Product updated",
      productDeleted: "Product deleted"
    },
    errors: {
      nameIsInvalid: "The name must be between 3 and 10 characters long!",
      emailIsInvalid: "The email is not valid!",
      passwordIsInvalid: "The password does not meet the requirements!",
      passwordsNotMatch: "The passwords do not match!",
      productNotCreated: "Product not created",
      productNotUpdated: "Product not updated",
      productNotDeleted: "Product not deleted"
    }
  },
  productCrud: {
    new: "New product",
    edit: "Edit product",
    delete: "Delete product"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
