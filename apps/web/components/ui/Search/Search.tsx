import { type ChangeEvent, type FormEvent, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { offset } from '@floating-ui/react-dom';
import { SfInput, SfIconSearch, SfIconCancel, useDisclosure, useTrapFocus, useDropdown } from '@storefront-ui/react';
import classNames from 'classnames';
import type { SearchProps } from '~/components';

export function Search({ className }: SearchProps) {
  const inputReference = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const { isOpen, close, open } = useDisclosure();
  const { refs } = useDropdown({ isOpen, onClose: close, placement: 'bottom-start', middleware: [offset(4)] });
  useTrapFocus(refs.floating, { arrowKeysOn: true, activeState: isOpen, initialFocus: false });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    close();
    await router.push(`/search?search=${searchValue}`);
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
          !!searchValue && (
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
