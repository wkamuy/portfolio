import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CodeBlock from '../../../components/molecules/CodeBlock';

describe('<CodeBlock />', () => {
  it('sould render correctly', () => {
    const value = 'test';
    const tree = renderer.create(<CodeBlock value={value} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
