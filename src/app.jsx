import React from 'react';
import ReactDOM from 'react-dom';
import css from './global.scss';

import Site from './components/Site.jsx';

export default {
  init: () => ReactDOM.render(<Site />, document.getElementById('root'))
}
