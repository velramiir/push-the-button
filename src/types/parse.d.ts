declare module 'parse/dist/parse.min.js' {
  // Import everything from the '@types/parse' package
  import * as ParseTypes from '@types/parse'

  // Re-export all types from the '@types/parse' package
  export = ParseTypes
  export const Parse: typeof ParseTypes
}
