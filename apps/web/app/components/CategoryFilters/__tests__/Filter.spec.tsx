import { render } from '@testing-library/react';
import { Filter } from '~/components/CategoryFilters/Filter';

describe('<Filter />', () => {
  it('should render component', () => {
    const { getByTestId } = render(
      <Filter
        facet={{
          values: [{ value: 'term1', productCount: 1, label: 'term1' }],
          label: 'label',
          name: 'name',
        }}
        selected={[]}
        type="size"
        onChange={() => {}}
      />,
    );

    expect(getByTestId('accordion-item')).toBeInTheDocument();
  });
});
