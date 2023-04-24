import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Hello from the Vue Storefront React Boilerplate!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
