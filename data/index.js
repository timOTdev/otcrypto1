export default function globals() {
  const socials = {
    website: {
      url: 'https://owltactics.com',
      alt: 'Owl Tactics Crypto Website',
    },
    discord: {
      url: 'https://discord.gg/F3pMdCtmmm',
      alt: 'Owl Tactics Crypto Discord',
    },
    youtube: {
      url: 'https://www.youtube.com/channel/UCZQ3Rn824OENzUs10_eKpXA',
      alt: 'Owl Tactics Crypto Youtube',
    },
    twitter: {
      url: 'https://twitter.com/otactcrypto',
      alt: 'Owl Tactics Crypto Twitter',
    },
    instagram: {
      url: 'https://www.instagram.com/owltacticscrypto',
      alt: 'Owl Tactics Crypto Instagram',
    },
    email: {
      url: 'mailto:owltacticscrypto@pm.me?subject=Hello from OTC',
      alt: 'Owl Tactics Crypto Email',
    },
  };

  const videos = {
    intro: {
      url: 'https://youtu.be/kqL5278Ed1Q',
      embed: 'https://www.youtube.com/embed/kqL5278Ed1Q',
    },
  };

  const deals = [
    {
      name: 'Celsius Network',
      description:
        'My go-to platform for staking Bitcoin and Ethereum. The rates are 1-2% higher than Nexo but I really like the staking variety, ability to withdraw without limits (unlike Nexo), and top-notch security and asset protection.',
      offer:
        'Use the referral code 15442521ce when signing up and earn $40 in BTC with your first transfer of $400 or more.',
      link: 'https://celsiusnetwork.app.link/15442521ce',
    },
    {
      name: 'Gate.io',
      description:
        "Binance.com and Binance.US is not available to Texas, USA. This is the next best thing if you're looking for huge amounts of coin offerings and more technical trading beyond Coinbase Pro or Crypto.com. This is not recommended for the crypto initiate.",
      offer: 'We share 40% in commission rewards. I get 20%, you get 20%.',
      link: 'https://www.gate.io/signup/5403310',
    },
    {
      name: 'Surfshark',
      description:
        'This great VPN service helps keeps my browsing more secure with many connection locations. The service is affordable compared to ExpressVPN and NordVPN.',
      offer: 'We both get a free month of service when you sign up.',
      link: 'https://surfshark.club/friend/qLtLHArX',
    },
    {
      name: 'Crypto.com',
      description:
        'My current crypto card. This 2% crypto rewards card in CRO was less complicated than other cards and helps convert my fiat to crypto. If you get the Ruby card, you also get free Spotify ($14 value). I will update this if I come across a better card.',
      offer:
        'Sign up for Crypto.com Ruby card or above and we both get $25 USD in CRO.',
      link: 'https://crypto.com/app/9zqwdpcces ',
    },
    {
      name: 'Koinly',
      description:
        'Koinly takes the konfusion out of tracking crypto taxes. I really like their interface because it shows my cost basis. I was able to link many exchanges including Coinbase, Coinbase Pro, Kraken, Nexo, Celsius Network, Yoroi Wallet, Gate.io, and Crypto.com Wallet. Push the easy button!',
      offer: 'Give friends $20 off on their first order and get $20 in return.',
      link: 'https://koinly.io/?via=BC293767',
    },
  ];

  return { socials, videos, deals };
}
