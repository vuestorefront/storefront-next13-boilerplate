import { render, within } from '@testing-library/react';
import { Footer } from '~/components';
import { bottomLinks, categories, companyName, contactOptions, socialMedia } from '~/mocks/footerData';

describe('<Footer />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<Footer />);

    expect(getByTestId('footer')).toBeTruthy();
  });

  it('should render categories', () => {
    const { getByTestId } = render(<Footer />);
    const section = getByTestId('section-top');

    categories.forEach(({ key }) => within(section as HTMLElement).getByText(`categories.${key}.label`));
  });

  it('should render subcategories', () => {
    const { getByTestId } = render(<Footer />);
    const section = getByTestId('section-top');

    categories.forEach(({ key, subcategories }) =>
      subcategories.forEach(({ key: subcategoryKey }) =>
        within(section as HTMLElement).getAllByText(`categories.${key}.subcategories.${subcategoryKey}`),
      ),
    );
  });

  it('should render contact options', () => {
    const { getByTestId } = render(<Footer />);
    const section = getByTestId('section-middle');

    contactOptions.forEach(({ key }) => within(section as HTMLElement).getByText(`contactOptions.${key}.label`));
  });

  it('should render bottom links', () => {
    const { getByTestId } = render(<Footer />);
    const section = getByTestId('section-bottom');

    bottomLinks.forEach(({ key }) => within(section as HTMLElement).getByText(`bottomLinks.${key}`));
  });

  it('should render social media', () => {
    const { getByTestId } = render(<Footer />);

    socialMedia.forEach(({ label }) => getByTestId(label));
  });

  it('should render company name', () => {
    const { getByText } = render(<Footer />);

    getByText(companyName);
  });
});
