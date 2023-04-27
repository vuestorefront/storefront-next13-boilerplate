import { type ChangeEvent, type FormEvent, useState, useRef } from 'react';
import { offset } from '@floating-ui/react-dom';
import { SfInput, SfIconSearch, SfIconCancel, useDisclosure, useTrapFocus, useDropdown } from '@storefront-ui/react';
import classNames from 'classnames';
import type { SearchProps } from '~/components/ui/Search/types';

export function Search({ className }: SearchProps) {
  const inputReference = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState('');
  const { isOpen, close, open } = useDisclosure();
  const { refs } = useDropdown({ isOpen, onClose: close, placement: 'bottom-start', middleware: [offset(4)] });
  useTrapFocus(refs.floating, { arrowKeysOn: true, activeState: isOpen, initialFocus: false });
  const isResetButton = Boolean(searchValue);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    close();
    alert(`Search for phrase: ${searchValue}`);
  };
  const handleReset = () => {
    setSearchValue('');
    close();
    inputReference.current?.focus();
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const phrase = event.target.value;
    if (phrase) {
      setSearchValue(phrase);
    } else {
      handleReset();
    }
  };

  return (
    <form role="search" onSubmit={handleSubmit} ref={refs.setReference} className={classNames('relative', className)}>
      <SfInput
        ref={inputReference}
        value={searchValue}
        onChange={handleChange}
        onFocus={open}
        aria-label="Search"
        placeholder="Search"
        slotPrefix={<SfIconSearch />}
        slotSuffix={
          isResetButton && (
            <button
              type="button"
              onClick={handleReset}
              aria-label="Reset search"
              className="flex rounded-md focus-visible:outline focus-visible:outline-offset"
            >
              <SfIconCancel />
            </button>
          )
        }
      />
    </form>
  );
}
