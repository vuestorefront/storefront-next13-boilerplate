export enum TagVariant {
  primary = 'primary',
  secondary = 'secondary',
  negative = 'negative',
}

export enum TagSize {
  sm = 'sm',
  base = 'base',
}

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: `${TagSize}`;
  strong?: boolean;
  variant?: `${TagVariant}`;
}
