import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import MenuBar from '../../../components/molecules/MenuBar';

describe('<MenuBar />', () => {
  it('sould render correctly', () => {
    const title = 'WKAMUY';
    const tree = renderer
      .create(
        <Router>
          <MenuBar title={title} />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
