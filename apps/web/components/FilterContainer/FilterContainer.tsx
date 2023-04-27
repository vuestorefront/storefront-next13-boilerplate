import { FilterContainerProps } from './types';

export function FilterContainer({ title, children }: FilterContainerProps): JSX.Element {
  return (
    <div className="w-full mb-6 last:mb-0">
      <span className="bg-neutral-100 md:rounded-md px-4 py-2 text-sm font-bold font-headings mb-2 tracking-widest uppercase block">
        {title}
      </span>
      {children}
    </div>
  );
}
