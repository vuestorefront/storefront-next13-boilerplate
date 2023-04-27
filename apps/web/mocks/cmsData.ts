export const cmsData = [
  {
    fields: {
      component: 'Page',
      name: 'Home Page',
      url: 'home-page',
      content: [
        {
          fields: {
            component: 'Hero',
            buttonLink: '/category/men',
            buttonRounded: false,
            buttonSize: 'base',
            buttonText: 'Browse deals',
            buttonVariant: 'primary',
            description: 'This fashionable sneaker collection features various colors, comfort and style.',
            direction: 'horizontal',
            image: '/images/hero.png',
            subtitle: 'SPECIAL OFFER',
            title: 'Sneaker hot drops',
          },
        },
        {
          fields: {
            component: 'Heading',
            className: 'text-center mb-6',
            tag: 'h2',
            title: 'Shop by category',
          },
        },
        {
          fields: {
            component: 'Card',
            items: [
              {
                fields: {
                  categoryId: '1c8e158c-bfe5-43bd-9c8d-73ac3ec68788',
                  image: '/images/new-card.png',
                },
              },
              {
                fields: {
                  categoryId: '9c6e4101-77a3-4c81-9762-b8177bd30f41',
                  image: '/images/men-card.png',
                },
              },
              {
                fields: {
                  categoryId: '68f2e58e-b7c5-4226-bb7d-bfb9231bdb3a',
                  image: '/images/women-card.png',
                },
              },
            ],
          },
        },
        {
          fields: {
            component: 'Display',
            items: [
              {
                fields: {
                  backgroundColor: '#DDD6FE',
                  buttonGreyscale: true,
                  buttonLink: '/category/women',
                  buttonRounded: false,
                  buttonText: 'Discover Now',
                  description: 'Make your palette pop with our all-new Designer pieces',
                  direction: 'horizontal-reverse',
                  image: '/images/display-1.png',
                  subtitle: 'NEW COLLECTION',
                  title: 'Fresg and bold',
                },
              },
              {
                fields: {
                  backgroundColor: '#FECDD3',
                  buttonGreyscale: true,
                  buttonLink: '/category/accessories',
                  buttonRounded: false,
                  buttonText: 'Discover now',
                  description: 'Explore our collection of designer shades.',
                  direction: 'vertical',
                  image: '/images/display-2.png',
                  subtitle: 'BE INSPIRED',
                  title: 'Designer sunglasses',
                },
              },
              {
                fields: {
                  backgroundColor: '#FEF08A',
                  buttonGreyscale: true,
                  buttonLink: '/category/women',
                  buttonRounded: false,
                  buttonText: 'Discover now',
                  description: '"Backpacks for everyday and long trips."',
                  direction: 'vertical',
                  image: '/images/display-3.png',
                  subtitle: 'BE ACTIVE',
                  title: 'Gear up and get ready',
                },
              },
            ],
          },
        },
        {
          fields: {
            component: 'Heading',
            className: 'text-center mb-6',
            tag: 'h2',
            title: 'Inspired by your picks',
          },
        },
        {
          fields: {
            component: 'ProductSlider',
            navigation: 'floating',
            scrollSnap: true,
            scrollbar: 'auto',
            items: [
              {
                fields: {
                  product: 'M0E20000000EL2R',
                },
              },
              {
                fields: {
                  product: 'M0E20000000EL2R',
                },
              },
              {
                fields: {
                  product: 'M0E20000000EL2R',
                },
              },
              {
                fields: {
                  product: 'M0E20000000EL2R',
                },
              },
              {
                fields: {
                  product: 'M0E20000000EL2R',
                },
              },
              {
                fields: {
                  product: 'M0E20000000EL2R',
                },
              },
            ],
          },
        },
      ],
    },
  },
];
