import { Divider, Link } from '@/components/';
import { bottomLinks, categories, companyName, contactOptions, socialMedia } from '@/static/footerData';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';

export function Footer({ className }: { className?: string }): JSX.Element {
  const { t } = useTranslation('footer');

  return (
    <footer className={classNames('pt-10 bg-neutral-100', className)} data-testid="footer">
      <div
        className="grid gap-5 justify-center grid-cols-[1fr_1fr] md:grid-cols-[repeat(4,1fr)] px-4 md:px-6 pb-10 mx-auto max-w-screen-3xl"
        data-testid="section-top"
      >
        {categories.map(({ key, subcategories }) => (
          <div key={key} className="min-w-[25%] xs:min-w-[50%] flex flex-col">
            <p className="font-medium leading-7 text-neutral-900 text-lg pb-2">{t(`categories.${key}.label`)}</p>
            {subcategories?.map(({ link, key: subcategoryKey }) => (
              <Link
                href={link}
                className="text-sm leading-5 py-2 text-neutral-600 hover:underline"
                key={subcategoryKey}
              >
                {t(`categories.${key}.subcategories.${subcategoryKey}`)}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <Divider />
      <div className="py-10 lg:flex mx-auto max-w-screen-3xl" data-testid="section-middle">
        {contactOptions.map(({ icon, link, details, key }) => (
          <div key={key} className="mx-auto my-4 text-center flex flex-col items-center">
            {icon}
            <Link href={link} className="font-medium leading-7 text-neutral-900 text-lg py-1 my-2">
              {t(`contactOptions.${key}.label`)}
            </Link>
            {details?.map((option) => (
              <p className="text-sm leading-5" key={option}>
                {t(`contactOptions.${key}.details.${option}`)}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="bg-neutral-900" data-testid="section-bottom">
        <div className="mx-auto max-w-screen-3xl text-sm leading-5 text-white justify-end px-4 py-10 lg:flex lg:py-6">
          <div className="flex justify-center gap-6 lg:self-start">
            {socialMedia.map(({ icon, label, link }) => (
              <Link
                key={label}
                href={link}
                className="hover:bg-neutral-500 hover:shadow-[0_0_0_8px] hover:shadow-neutral-500 rounded-sm"
                data-testid={label}
              >
                {icon}
              </Link>
            ))}
          </div>
          <div className="flex justify-center gap-6 my-6 lg:ml-auto lg:my-0">
            {bottomLinks.map(({ link, key }) => (
              <Link key={key} href={link}>
                {t(`bottomLinks.${key}`)}
              </Link>
            ))}
          </div>
          <p className="text-center text-white/50 lg:ml-6">{companyName}</p>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  className: '',
};
