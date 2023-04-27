import { HTMLAttributes } from 'react';

type FetchPriority = 'high' | 'low' | 'auto';

declare module 'react' {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    fetchpriority?: FetchPriority;
  }
  interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
    fetchpriority?: FetchPriority;
  }
}

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

export {};
