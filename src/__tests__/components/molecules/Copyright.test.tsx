import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Copyright from '../../../components/molecules/Copyright';

describe('<Copyright />', () => {
  it('should render correctly', () => {
    const mockDate = new Date(2021, 1, 1);
    const spy = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => (mockDate as unknown) as string);

    const tree = renderer.create(<Copyright authorName="wkamuy" />).toJSON();
    expect(tree).toMatchSnapshot();

    spy.mockRestore();
  });
});
