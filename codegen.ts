import type { CodegenConfig } from '@graphql-codegen/cli'
import { config as dotenvConfig } from 'dotenv'

dotenvConfig({ path: '.env.local' })

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://parseapi.back4app.com/graphql': {
        headers: {
          'X-Parse-Application-Id': process.env.VITE_PARSE_APPLICATION_ID ?? '',
          'X-Parse-Client-Key': process.env.VITE_PARSE_CLIENT_KEY ?? ''
        }
      }
    }
  ],
  documents: ['src/**/*.vue', 'src/**/*.ts'],
  generates: {
    'src/types/gql/': {
      preset: 'client',
      plugins: []
    }
  }
}

export default config
