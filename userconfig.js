const CONFIG = new Config({
  crypto: {
    coin: 'USDT',
    currency: 'BRL',
    refreshIn: 10
  },
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Matão, São Paulo',
    scale: 'C'
  },
  clock: {
    format: 'h:i p',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar'
  },
  disabled: [],
  openLastVisitedTab: false,
  tabs: [
    {
      name: 'home',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [{
        name: 'fun',
        links: [
          {
            url: 'https://youtu.be/',
            icon: 'brand-youtube',
            icon_color: '#996767'
          },
          {
            url: 'https://www.twitch.tv/',
            icon: 'brand-twitch',
            icon_color: '#806799'
          },
          {
            url: 'https://www.disneyplus.com/pt-br/home',
            icon: 'brand-disney',
            icon_color: '#677e99'
          },
        ]
      },
      {
        name: 'forbidden',
        links: [
          {
            name: '/u/',
            url: 'https://4chan.org/u',
            icon: 'forbid-2',
            icon_color: '#64876d'
          },
          {
            name: 'mangago',
            url: 'https://anon.cafe/comfy/catalog.html',            icon: 'forbid-2',
            icon_color: '#877764'
          }
        ]
      },
      {
        name: 'useful',
        links: [
          {
            url: 'https://mail.google.com/mail/u/0/',
            icon: 'brand-gmail',
            icon_color: '#876464'
          },
          {
            url: 'https://drive.google.com/drive/my-drive',
            icon: 'brand-google-drive',
            icon_color: '#877764'
          },
          {
            url: 'https://web.whatsapp.com/',
            icon: 'brand-whatsapp',
            icon_color: '#64876d'
          },
          {
            url: 'https://tumblr.com/',
            icon: 'brand-tumblr',
            icon_color: '#2d3c52'
          },
          {
            url: 'https://twitter.com/',
            icon: 'brand-twitter',
            icon_color: '#5c8ead'
          },
        ]
      },
      ]
    },
    {
      name: 'music',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
        {
          name: 'music services',
          links: [
            {
              url: 'https://soundcloud.com/',
              icon: 'brand-soundcloud',
              icon_color: '#c57750'
            },
            {
              url: 'https://youtu.be/',
              icon: 'brand-youtube',
              icon_color: '#996767'
            },
            {
              url: 'https://r-a-d.io/',
              icon: 'radio'
            },
          ]
        },
        {
          name: 'music boards',
          links: [
            {
              name: '/music/',
              url: 'https://lainchan.org/music/',
              icon: 'disc'
            },
            {
              name: '/mu/',
              url: 'https://boards.4channel.org/mu/',
            }
          ]
        }
      ]
    },
  ]
});
