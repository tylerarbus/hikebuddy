import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar.jsx';
import VideoPlayer from './VideoPlayer.jsx';

export class Root extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <div>
            <Route path="/" component={SearchBar} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.objectOf(PropTypes.oneOfType(
      [PropTypes.string, PropTypes.array, PropTypes.object]
    )).isRequired
};

export default Root;
