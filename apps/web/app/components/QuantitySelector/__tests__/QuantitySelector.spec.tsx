import * as ReactUse from 'react-use';
import { fireEvent, render } from '@testing-library/react';
import { QuantitySelector } from '~/components';

describe('<QuantitySelector />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<QuantitySelector value={1} />);

    expect(getByTestId('quantitySelector')).toBeInTheDocument();
  });
});
