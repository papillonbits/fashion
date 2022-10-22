import { getWebpackProductionSetup } from '@papillonbits/setup/webpack'
import { environmentVariablesFilePaths, micrositeFolderPaths, micrositeUrlPaths } from './webpack.constant'
import { webpackCommonSetup } from './webpack.common'
import packageJSON from '../../../package.json'

export default getWebpackProductionSetup({
  webpackCommonSetup,
  environmentVariablesFilePath: environmentVariablesFilePaths.test,
  micrositeUrlPath: micrositeUrlPaths.test,
  micrositeFolderPaths,
  packageJSON,
})
