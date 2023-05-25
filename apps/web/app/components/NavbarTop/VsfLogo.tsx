'use client';

import classNames from 'classnames';
import { VsfLogoProps } from './types';

export function VsfLogo({ className, style, ...attributes }: VsfLogoProps) {
  return (
    <svg
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('fill-current h-full w-auto', className)}
      viewBox="0 0 205 28"
      {...attributes}
    >
      <path d="M150.233 11.135h-2.65v3.12h2.65v9.104h3.701v-9.104h3.175v-3.12h-3.175v-.67c0-.462.144-.805.434-1.028s.716-.335 1.279-.335a6.7 6.7 0 0 1 .697.035 7.54 7.54 0 0 1 .765.127V6.167a7.8 7.8 0 0 0-.925-.162 8.49 8.49 0 0 0-1.04-.069c-1.583 0-2.798.385-3.643 1.155s-1.268 1.872-1.268 3.304v.739zM85.84 20.886l2.193-2.889a11.33 11.33 0 0 0 2.696 1.71 6.67 6.67 0 0 0 2.627.531c.898 0 1.603-.139 2.113-.416s.765-.662.765-1.155a1.23 1.23 0 0 0-.124-.587 1.19 1.19 0 0 0-.389-.453c-.343-.246-.91-.439-1.702-.578l-3.518-.624c-1.295-.231-2.292-.732-2.992-1.502s-1.051-1.748-1.051-2.935c0-1.556.582-2.784 1.747-3.686s2.768-1.352 4.808-1.352a11.02 11.02 0 0 1 3.598.624 10.03 10.03 0 0 1 3.118 1.687l-2.079 2.935a9.56 9.56 0 0 0-2.456-1.456 6.78 6.78 0 0 0-2.456-.462c-.792 0-1.42.127-1.885.381s-.697.597-.697 1.028a1.11 1.11 0 0 0 .106.525 1.09 1.09 0 0 0 .339.411c.297.224.781.389 1.451.497l3.312.555c1.538.247 2.707.763 3.506 1.548s1.199 1.802 1.199 3.05c0 1.633-.628 2.927-1.884 3.882s-2.965 1.433-5.128 1.433a10.81 10.81 0 0 1-3.826-.716 11.23 11.23 0 0 1-3.392-1.987zm-41.755 2.473L37.621 7.183h4.249l4.546 12.039 4.637-12.039h4.089l-6.556 16.175h-4.5zM58.59 11.135v7.025a2.12 2.12 0 0 0 .133.868c.104.276.265.528.472.738a2.08 2.08 0 0 0 .729.478c.273.106.566.151.858.134a2.95 2.95 0 0 0 1.256-.254 2.47 2.47 0 0 0 .914-.716v-8.273h3.7v12.224h-3.7v-.832a5.06 5.06 0 0 1-1.496.786 5.49 5.49 0 0 1-1.747.277c-1.416 0-2.574-.462-3.472-1.387s-1.348-2.103-1.348-3.535v-7.533h3.7zm19.085 12.016c.856-.327 1.649-.804 2.341-1.41l-2.444-2.195a3 3 0 0 1-1.051.682 3.71 3.71 0 0 1-1.37.243 3.1 3.1 0 0 1-1.827-.543 3.22 3.22 0 0 1-1.142-1.398h8.612v-.924a7.64 7.64 0 0 0-.457-2.669 6.3 6.3 0 0 0-1.268-2.114c-.559-.605-1.237-1.087-1.99-1.413a5.85 5.85 0 0 0-2.384-.482c-.85-.007-1.693.159-2.479.485a6.12 6.12 0 0 0-1.999 1.34 6.34 6.34 0 0 0-1.336 2.022 6.33 6.33 0 0 0-.491 2.484 6.08 6.08 0 0 0 .514 2.484 6.36 6.36 0 0 0 1.394 2.022 6.34 6.34 0 0 0 2.09 1.34 6.87 6.87 0 0 0 2.581.485 7.84 7.84 0 0 0 2.707-.439zm-4.626-8.665a2.51 2.51 0 0 1 1.576-.508c.566-.009 1.119.178 1.565.532a2.96 2.96 0 0 1 .971 1.41h-5.048c.151-.568.479-1.07.937-1.433zm29.9-.232v5.384c0 1.279.369 2.246 1.108 2.9s1.831.982 3.278.982c.436-.007.871-.041 1.302-.104a7.58 7.58 0 0 0 1.28-.266v-3.027a5.86 5.86 0 0 1-.846.196c-.272.04-.547.059-.822.058-.594 0-1.009-.112-1.245-.335s-.354-.604-.354-1.144v-4.645h3.381v-3.12h-3.381v-3.95l-3.701.809v3.143h-2.444v3.12h2.444zm7.972 3.004c-.004-.855.171-1.702.514-2.484.33-.759.804-1.446 1.394-2.022.602-.58 1.307-1.039 2.078-1.352a6.9 6.9 0 0 1 5.14 0 6.55 6.55 0 0 1 2.079 1.352 6.38 6.38 0 0 1 1.393 2.022c.339.783.514 1.629.514 2.484s-.175 1.701-.514 2.484a6.37 6.37 0 0 1-1.393 2.022 6.39 6.39 0 0 1-2.079 1.34 7.05 7.05 0 0 1-5.14 0 6.37 6.37 0 0 1-2.078-1.34 6.37 6.37 0 0 1-1.394-2.022c-.343-.782-.518-1.629-.514-2.484zm6.556 3.097a2.76 2.76 0 0 0 1.14-.226 2.8 2.8 0 0 0 .951-.676c.55-.6.856-1.388.856-2.207s-.306-1.607-.856-2.207a2.9 2.9 0 0 0-.955-.666c-.359-.155-.745-.235-1.136-.235a2.87 2.87 0 0 0-1.136.235 2.92 2.92 0 0 0-.954.666c-.55.6-.856 1.388-.856 2.207s.306 1.607.856 2.207a2.81 2.81 0 0 0 .95.676 2.77 2.77 0 0 0 1.14.226zm8.292-9.22v12.224h3.701v-7.764a3.33 3.33 0 0 1 1.199-1.132c.492-.277 1.047-.42 1.61-.416.315-.001.629.034.937.104a4.55 4.55 0 0 1 .822.266v-3.258a1.36 1.36 0 0 0-.548-.22c-.28-.045-.562-.072-.845-.081-.616-.009-1.226.126-1.782.393a4.21 4.21 0 0 0-1.393 1.109v-1.225h-3.701zm20.49 10.606a7.75 7.75 0 0 1-2.341 1.41c-.871.304-1.787.453-2.708.439a6.87 6.87 0 0 1-2.581-.485 6.35 6.35 0 0 1-2.09-1.34c-.59-.576-1.064-1.262-1.393-2.022a6.08 6.08 0 0 1-.514-2.484c-.005-.853.162-1.699.491-2.484a6.35 6.35 0 0 1 1.336-2.022 6.01 6.01 0 0 1 1.999-1.34 6.33 6.33 0 0 1 2.478-.485 5.85 5.85 0 0 1 2.385.482c.753.326 1.43.807 1.99 1.413.557.613.988 1.332 1.268 2.114a7.65 7.65 0 0 1 .456 2.669v.924h-8.611a3.22 3.22 0 0 0 1.142 1.398 3.11 3.11 0 0 0 1.827.543 3.71 3.71 0 0 0 1.371-.243c.393-.15.751-.383 1.051-.682l2.444 2.195zm-5.391-7.764a2.51 2.51 0 0 0-1.576.508c-.458.362-.786.865-.937 1.433h5.049c-.179-.557-.517-1.047-.971-1.41a2.46 2.46 0 0 0-1.565-.532zm17.794 9.382V11.135h3.701v1.225a4.21 4.21 0 0 1 1.393-1.109c.556-.267 1.166-.402 1.782-.393.283.009.565.036.845.081a1.36 1.36 0 0 1 .548.22v3.258a4.49 4.49 0 0 0-.823-.266 4.21 4.21 0 0 0-.936-.104c-.563-.004-1.118.139-1.61.416a3.33 3.33 0 0 0-1.199 1.132v7.764h-3.701zm9.377-8.585a6.08 6.08 0 0 0-.514 2.484 6.08 6.08 0 0 0 .514 2.484c.329.759.803 1.446 1.393 2.022a6.37 6.37 0 0 0 2.079 1.34c1.653.647 3.486.647 5.139 0a6.37 6.37 0 0 0 2.079-1.34c.59-.576 1.064-1.262 1.393-2.022.339-.783.514-1.629.514-2.484s-.175-1.701-.514-2.484a6.38 6.38 0 0 0-1.393-2.022 6.54 6.54 0 0 0-2.079-1.352c-1.65-.662-3.488-.662-5.139 0a6.54 6.54 0 0 0-2.079 1.352 6.38 6.38 0 0 0-1.393 2.022zm7.181 5.355a2.76 2.76 0 0 1-1.14.226 2.76 2.76 0 0 1-1.139-.226c-.36-.155-.684-.386-.95-.676-.551-.6-.857-1.388-.857-2.207a3.26 3.26 0 0 1 .857-2.207 2.88 2.88 0 0 1 2.09-.901c.391 0 .776.08 1.136.235a2.91 2.91 0 0 1 .954.666c.55.6.856 1.388.856 2.207s-.306 1.607-.856 2.207a2.79 2.79 0 0 1-.951.676zm7.152-8.994h3.701v.832c.452-.344.957-.61 1.496-.786a5.5 5.5 0 0 1 1.747-.277c1.417 0 2.574.462 3.472 1.386s1.348 2.103 1.348 3.535v7.533h-3.7v-7.025a2.14 2.14 0 0 0-.133-.868 2.12 2.12 0 0 0-.473-.738 2.07 2.07 0 0 0-.729-.478 2.06 2.06 0 0 0-.858-.135 2.95 2.95 0 0 0-1.256.254 2.47 2.47 0 0 0-.914.716v8.272h-3.701V11.135zm15.214 3.119v5.384c-.001 1.279.369 2.246 1.107 2.9s1.831.982 3.278.982c.436-.007.871-.041 1.302-.104a7.56 7.56 0 0 0 1.279-.266v-3.027a5.82 5.82 0 0 1-.845.196c-.272.04-.547.059-.822.058-.594 0-1.009-.112-1.245-.335s-.354-.604-.354-1.144v-4.645h3.381v-3.12h-3.381v-3.95l-3.7.809v3.143h-2.445v3.12h2.445zM12.458.942c-.247.155-.489.401-.974.891l-.881.985c-.508.827-.508 1.874 0 2.701.154.25.396.495.88.985h0c.485.49.727.735.974.891.817.514 1.852.514 2.67 0 .247-.155.489-.401.974-.891l.881-.985c.508-.827.508-1.874 0-2.701-.153-.25-.396-.495-.88-.985s-.727-.735-.974-.891c-.817-.514-1.853-.514-2.67 0zm3.189 15.339l5.64-5.705c.234-.236.511-.424.816-.552a2.49 2.49 0 0 1 1.926 0 2.5 2.5 0 0 1 .816.552l2.834 2.867-13.839 14-13.84-14 2.864-2.897c.234-.236.511-.424.816-.552a2.49 2.49 0 0 1 1.925 0 2.51 2.51 0 0 1 .816.552l5.669 5.735c.234.236.511.424.816.552s.632.194.963.194a2.49 2.49 0 0 0 .963-.194 2.51 2.51 0 0 0 .816-.552z" />
    </svg>
  );
}
