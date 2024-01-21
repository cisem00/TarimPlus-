export const NAV_ITEMS = [
    {
      label: 'Çiftçi Profili',
      children: [
        {
          label: 'İlan Ara',
          subLabel: 'İşçilerin ilanlarını görüntüle.',
          href: 'isciilanlari/',
        },
        {
          label: 'İş İlanı Oluştur',
          subLabel: 'Aradığın işçi kriterlerine göre ilan oluştur.',
          href: '/ilanyarat',
        },
        {
          label: 'Ürün İlanı Oluştur',
          subLabel: 'Satmak istediğin ürün için ilan oluştur.',
          href: '/ilanyarat',
        },
      ],
    },

    {
      label: 'Müşteri Profili',
      children: [
        {
          label: 'İlan Ara',
          subLabel: 'Ürün ilanlarını görüntüle.',
          href: '/urunilanlari',
        },
      ],
    },

    {
      label: 'İşçi Profili',
      children: [
        {
          label: 'İlan Ara',
          subLabel: 'İş ilanlarını görüntüle.',
          href: '/isilanlari',
        },
        {
          label: 'İş İlanı Oluştur',
          subLabel: 'Yapmak istediğin işle ilgili ilan oluştur.',
          href: '/ilanyarat',
        },
      ],
    },
  ];
  
  export const HOME_TEXTS = [
    'achieve your dreams?',
    'build your project?',
    'make the next big thing?',
    'solve your issues?',
    'co-found your business?',
    'create your app?',
  ];
  
  export const USER_BADGE_COLORS = {
    free: 'gray',
    premium: 'green',
    ultimate: 'yellow',
  };
  