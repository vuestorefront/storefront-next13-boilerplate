import { act, renderHook } from '@testing-library/react';
import { useLockBodyScroll } from '~/hooks';

describe('useLockBodyScroll', () => {
  it('should change isOpen', () => {
    const { result } = renderHook(() => useLockBodyScroll());

    act(() => {
      result.current.open();
    });

    expect(result.current.isOpen).toBeTruthy();

    act(() => {
      result.current.close();
    });

    expect(result.current.isOpen).toBeFalsy();
  });
});
