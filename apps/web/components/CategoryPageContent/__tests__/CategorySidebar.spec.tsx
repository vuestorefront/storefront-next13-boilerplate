import { render } from '@testing-library/react';
import { CategorySidebar } from '../CategorySidebar';

const mockedText = 'test content';

describe('CategorySidebar', () => {
  it('renders the category sidebar with children', () => {
    const { getByText } = render(
      <CategorySidebar isOpen={false} closeSidebar={jest.fn()}>
        <span>{mockedText}</span>
      </CategorySidebar>,
    );

    expect(getByText(mockedText)).toBeInTheDocument();
    expect(getByText('listSettings')).toBeInTheDocument();
    expect(getByText('showProducts')).toBeInTheDocument();
  });
});
