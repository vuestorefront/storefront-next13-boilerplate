import * as ReactUse from 'react-use';
import { fireEvent, render } from '@testing-library/react';
import { QuantitySelector } from '~/components';

describe('<QuantitySelector />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<QuantitySelector value={1} />);

    expect(getByTestId('quantitySelector')).toBeInTheDocument();
  });

  it('should render children', () => {
    const { getByText } = render(<QuantitySelector value={1}>Test</QuantitySelector>);

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should pass className', () => {
    const { container } = render(<QuantitySelector value={1} className="passed-class" />);

    expect(container.firstChild).toHaveClass('passed-class');
  });

  it('should pass value', () => {
    const { getByTestId } = render(<QuantitySelector value={1} />);

    expect(getByTestId('quantitySelectorInput')).toHaveValue(1);
  });

  it('should increase value', () => {
    const { getByTestId } = render(<QuantitySelector value={1} />);

    expect(getByTestId('quantitySelectorInput')).toHaveValue(1);

    fireEvent.click(getByTestId('quantitySelectorIncreaseButton'));

    expect(getByTestId('quantitySelectorInput')).toHaveValue(2);
  });

  it('should decrease value', () => {
    const { getByTestId } = render(<QuantitySelector value={2} />);

    expect(getByTestId('quantitySelectorInput')).toHaveValue(2);

    fireEvent.click(getByTestId('quantitySelectorDecreaseButton'));

    expect(getByTestId('quantitySelectorInput')).toHaveValue(1);
  });

  it('should init useCounter with value', () => {
    jest.spyOn(ReactUse, 'useCounter');

    render(<QuantitySelector value={2} />);

    expect(ReactUse.useCounter).toHaveBeenCalledWith(2);
  });
});
