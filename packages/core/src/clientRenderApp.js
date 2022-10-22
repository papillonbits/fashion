/* eslint-disable import/no-import-module-exports */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { checkAccessibilityIssues } from '@papillonbits/library/a11y'
import { Fashion } from './pattern/template/News/Fashion'
import { fashion } from './data/fashion'

/* istanbul ignore next */
function renderApp() {
  checkAccessibilityIssues(React, ReactDOM, 1000)

  ReactDOM.createRoot(document.getElementById('app')).render(<Fashion {...fashion} />)

  if (module.hot) {
    module.hot.accept()
  }
}

renderApp()
