import NextLink from 'next/link';
import { render } from '@testing-library/react';
import { Link } from '../Link';

jest.mock('next/link', () => jest.fn());

const NextLinkMock = jest.mocked(NextLink);

describe('Link', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  
  it('should have prefetch set to false by default', () => {
    render(<Link href="/" />);
    
    expect(NextLinkMock.mock.calls[0][0]).toMatchObject({ prefetch: false });
  });
  
  it('should set prefetch to true', () => {
    render(<Link href="/" prefetch />);
    
    expect(NextLinkMock.mock.calls[0][0]).toMatchObject({ prefetch: true });
  });
});
