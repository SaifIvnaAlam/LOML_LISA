export type MediaItem = {
  type: 'image' | 'video'
  src: string
  alt?: string
  poster?: string
  caption?: string
}

export type RideHop = {
  from: string
  to: string
  vehicle?: 'bus' | 'pickup'
}

export type BusLeg = RideHop & {
  then?: RideHop
}

export type Beat = {
  media: MediaItem[]
  title?: string
  text: string
  nextLabel?: string
  buttonLabel?: string
  cuddle?: boolean
  busAfter?: BusLeg
}

export type Content = {
  forName: string
  introTitle: string
  intro: string
  beats: Beat[]
  ending: string
}

/**
 * Put photos and videos in /public/media
 * then point src at /media/your-file.jpg
 *
 * Keep videos short, 720p, under about 8MB so Vercel and phones stay happy.
 * Write in your own words. Use as many paragraphs as you want.
 */
export const content: Content = {
  forName: 'Lisa',
  introTitle: 'Hello, LOML.',
  intro:
    'You couldn’t make it to the tour so I bought the tour to you. Let’s go on this journey together. We will walk through everything that happened. Every sec that reminded me of you and what went through my mind. In a very ADHD manner, as I can not stay on a linear thought. Hope you wouldn’t mind :3',
  beats: [
    {
      media: [
        {
          type: 'image',
          src: '/media/bus-night.png',
          alt: 'getting on the bus at night',
        },
        {
          type: 'image',
          src: '/media/bus-cow.png',
          alt: 'a cow outside the bus window',
        },
      ],
      text: 'We started the journey from Nordha. We thought the bus would be at the counter at 10:30pm. We rushed ourselves and it arrived 30 min late. Should have understood the whole tour was going to be full of inconvenience. Everyone was a couple except for me so I had to sit alone with this old dude. I was thinking of laying a bit and it reminded me of you. The way you usually fold yourself into my arms whenever we travel. I was missing it a lot. Basically amar kolbalish and blanket tumi. Maliha kanna kati kortesilo karon oy bhabse tomar theke chador marbe bus e. Dhaka theke ber howar time tokhon amader bus er samne ei goru ta dekhi. He looked very sad tho. But that reminded me of you and your unhealthy obsession with shada kalo mixed rong er cow :3',
      busAfter: { from: 'Dhaka', to: 'Cumilla' },
    },
    {
      media: [
        {
          type: 'image',
          src: '/media/cumilla-break.png',
          alt: 'break in Cumilla',
        },
      ],
      text: 'We took a pee and zaza break. Had zaza. And in my mind if you were there tumi onek high hoye jaita. Then we would get on the bus and you would crawl into my arms and ghumaiye jaita.',
      nextLabel:
        'Bhai, ami onek chhodhoye gesi, tomar kole uthe boshis. Let’s continue with the journey',
      cuddle: true,
      busAfter: { from: 'Cumilla', to: 'Chokoria' },
    },
    {
      media: [
        {
          type: 'video',
          src: '/media/bus-rain.mp4',
          alt: 'rainy morning from the bus',
          caption:
            'It was raining shokal a jano. and rain reminds me of you. Tmr birsti onnek pochondo tai. it was such a soothing morning. Tmr thanda lagto bus a and i was thinking tmi thakle i would amar shirt nisilam ekta mota oita porai ditam toke jodi tui chador na niti :3',
        },
        {
          type: 'image',
          src: '/media/bus-sleep.png',
          alt: 'someone sleeping on the bus',
          caption: 'Dekho baccha gula kemne ghumay',
        },
      ],
      text: '',
      nextLabel: 'Khuda laagse',
    },
    {
      media: [
        {
          type: 'video',
          src: '/media/chokoria-eat.mp4',
          alt: 'eating stop in Chokoria',
          caption:
            'Eito muni amra khaite aschi. Oh also meet Toyaa. Abhi er girl friend. and if you notice i left a spot for you to sit. ei khan theke kheye amra Chaander gari te utbo baccha.',
        },
      ],
      text: '',
      nextLabel: 'onnek khaisi bhai. Cholooooo bandarban jai',
    },
    {
      media: [
        {
          type: 'image',
          src: '/media/chander-gari.png',
          alt: 'on the chander gari',
        },
        {
          type: 'video',
          src: '/media/chander-gari.mp4',
          alt: 'chander gari ride',
        },
      ],
      text: 'Er por amra chaander gaari te utsi. ami ekdom first a bochi and you beside me in my head. and i am using my hand as your sit belt.',
      nextLabel: 'babai ami darabo',
    },
    {
      media: [
        {
          type: 'video',
          src: '/media/chander-pov.mp4',
          alt: 'your POV after standing',
        },
      ],
      text: 'eije tmi daranor por tmr POV.',
      buttonLabel: 'Erpor?',
    },
    {
      media: [
        {
          type: 'video',
          src: '/media/cap-wind.mp4',
          alt: 'cap flying in the wind',
        },
      ],
      text: '“Tumi” choltesilo and i wanted to hug you from behind and stand with you. but amar cap ure jay batash a so Rafsan was getting it. Oh tmi toh rafsan ke chino na. Meet the new charachter part 2: Rafsan hocche sezan er friend amder sathe gesilo and he was geting my cap. Purai badbuzz diye dilam moment ta te.',
      buttonLabel: 'Press to say: Bokachoda',
    },
    {
      media: [
        {
          type: 'video',
          src: '/media/trek-start.mp4',
          alt: 'arriving at the trek start',
        },
        {
          type: 'image',
          src: '/media/trek-start.png',
          alt: 'ready in shorts for the hike',
        },
      ],
      text: 'After 1 eternity and 3 check post later amra amder tracking/hiking jeikhan theke shuru korbo oitay ashi. i can’t remamber the name of the place :3 sorry. but amra change kore nei shorts a shobai tmio meye der sathe change kore ready hou. tmi ektu scard but exited at the same time. Maliha zayed ke cute lagtese taina?',
      nextLabel: 'hu. Chaaaallooooo tracking shuru kori.',
    },
    {
      media: [
        {
          type: 'video',
          src: '/media/trek-walk.mp4',
          alt: 'walking the trek together',
        },
      ],
      text: 'And the 2nd journy starts. amra eksathe hati. ami tmr pashe. tmke cute ekta bash kine disi 10 taka diye jate balance korte paro. and we start walking jokhon aminul bhai bhabhi bole je 7 hours lagbe naki. (Sarcasam) Maliha zayed onnek pera kheye gese. tar upor jiri jiri bristi.',
      nextLabel: 'Ayhay er por? Keu pichla khay nai?',
    },
    {
      media: [
        {
          type: 'video',
          src: '/media/trek-fall.mp4',
          alt: 'slipping downhill',
        },
      ],
      text: 'I am glad you asked. Eita dekho :3 duita basically goraite goraite samne downhll a namse:3',
      buttonLabel: 'Ayhay. Betha paise?',
    },
    {
      media: [
        {
          type: 'image',
          src: '/media/trek-rest-1.png',
          alt: 'resting on the trail',
        },
        {
          type: 'image',
          src: '/media/trek-rest-2.png',
          alt: 'the group resting on the trail',
        },
      ],
      text: 'Hae ektu paise. Zayed er pa katsilo ektu. Er jonno ektu ektu kore agai rest nicchilam. eto pichla je amio pera kheye gesilam. but slowly agacchilam amra. ar aminul bhai bhabi to expert they were leading us.',
      buttonLabel: 'Aaaah i want to see the view.',
    },
    {
      media: [
        {
          type: 'video',
          src: '/media/trek-view.mp4',
          alt: 'the view from the rest spot',
        },
      ],
      text: 'look at this view amra jeikhane rest nicchilam. Tmi onnek tired hoye jaita and pichlao khaita. but i would hold you tight jate na poro. in my head tmr ei view ta onnek pochondo hoito. ektu struggle korta but you would love to see it. and i would sit with you and tmke pa malish kore ditam ektu.',
      buttonLabel:
        'Thank you (The cutiesi one). er por amra koi jacchi? tracking ekhono baki?',
    },
    {
      media: [
        {
          type: 'video',
          src: '/media/jiri-1.mp4',
          alt: 'a small jiri on the trek',
        },
        {
          type: 'video',
          src: '/media/jiri-2.mp4',
          alt: 'another jiri on the trek',
        },
        {
          type: 'image',
          src: '/media/jiri-rest.png',
          alt: 'resting by the jiri',
        },
        {
          type: 'image',
          src: '/media/jiri-joint.png',
          alt: 'a joint by the jiri',
        },
      ],
      text: 'Hae pakhi. amra alsmot 3 hour plus tracking kori. we pass through alot of choto jiri. tmi oitay paa diye thand hoye nita in my head. and amra spot a daraiya ekta kore joint khaitam. but tmke ami ektu kom khaite boltam karon onnek pichila high hoile balace rakhte parta na.',
      buttonLabel: 'Press to show middle finger to me.',
    },
    {
      media: [
        {
          type: 'image',
          src: '/media/pathor-heart.jpeg',
          alt: 'a heart shaped pathor from the jiri',
        },
        {
          type: 'video',
          src: '/media/pathor-collect.mp4',
          alt: 'collecting pathor as souvenirs',
        },
      ],
      text: 'Tmi pathor collect korta as souvenirs of the memories.',
      nextLabel: 'Ki cute pathor',
    },
    {
      media: [
        {
          type: 'video',
          src: '/media/yearning-lisa.mp4',
          alt: 'yearning for Lisa apu',
        },
      ],
      title: 'Yearning for Lisa apu part 1 🥺',
      text: '',
      nextLabel: 'aww ki cute tmi buly koro kno somosha ki tmr?',
    },
    {
      media: [
        {
          type: 'image',
          src: '/media/village-group.jpeg',
          alt: 'the group arriving at the village',
        },
        {
          type: 'image',
          src: '/media/village-rest.jpeg',
          alt: 'resting on a log in the village',
        },
        {
          type: 'image',
          src: '/media/village-hut.jpeg',
          alt: 'inside the village hut',
        },
      ],
      text: 'Sorry :3 after 3+ hours of tracking , we finally arrive at a very small village in the middle of the mountain. They don\'t have a washroom, they don\'t have anything, and they don\'t even host people, but our guide somehow manages for us to stay there for the night. Karon raat hocchilo amader initial plan chilo ekta jorna dekha. but amder karoi shokti nai toklhon ar we we dicided to stay. in my head. tmr onnek kosto hoito but you would enjoy the  village. village pashei ekta jiri chilo boro.',
      buttonLabel: 'Koi dekhi?',
    },
    {
      media: [
        {
          type: 'video',
          src: '/media/village-vlog.mp4',
          alt: 'me being your personal vloger',
        },
      ],
      title: 'me being your personal vloger',
      text: '',
      buttonLabel: 'erpor?',
    },
    {
      media: [
        {
          type: 'image',
          src: '/media/village-view.jpeg',
          alt: 'the view from the village',
        },
        {
          type: 'image',
          src: '/media/tetul-close.jpeg',
          alt: 'tetul gaach by the village houses',
        },
      ],
      text: 'see this view baccha. ki shundor you would have liked it very much onnek local toh. so we started saying the word "LOCO" as a joke for some reason and oder bashar pashei onnek gula tetul gaach chilo and onnek gula kochi korchi tetul. in my mind you would have wanted to eat them. tetul pere ditam.',
      buttonLabel: 'Khaboooooooooooo',
    },
    {
      media: [
        {
          type: 'image',
          src: '/media/village-night.jpeg',
          alt: 'last picture at night in the village',
        },
      ],
      text: 'Thikase. khaio. er por amader shobar e phone er charge ses and oidike ekta single network nai this was the last picture tulsilam ami. Raat amra giye khechuri ranna korsilam nijera karon lunch kori nai. tmi thakle tmi onnek moja kore ranna korte parta but oder oikhane kisui pawa jayna. amra ekta lok pathai elakar peyaj niye aschilam 5-7 ta. er por raat a amder guide amder ke murgi ranna kore dise shada bhat diye. tmi onnke moja paita. don\'t kill me karon ami picutre tulte parinai phone er jonno naile tmke dekhanor kotha amr mathay chilo. But bhai murgi jeita rana korese guide eto jaal chilo oh my fucking good. and raat a amra mod score disilam. tmi ei mod khaile sure ssathe sathe chod khaita karon eto pure alcohol. purai. infact i my mind ami tmke boltam je just cekhe dekhte na khaite eto kora oita. er por raat a adda diye ghumai jai amra. and oikhane kono balish ba kisu nai. in my head choltesilo tmi thakle tmke jorai dore ghumai jaitam. my portable blanket:3 please don\'t kill me.',
      nextLabel: 'I kill you but er por ki hoise?',
    },
    {
      media: [
        {
          type: 'image',
          src: '/media/trail-back.jpeg',
          alt: 'heading back on the trail',
        },
      ],
      text: 'Raat a under theke battery er sathe lagai amra kono rokom phone a charge dei. karon amar power bank a charge chilo na. i my mind ami chinta kortesilam "Muni thakle orta diye charge deya jaito" but shokal e er por breakfast charai shudu muri kheye we started heading back to where we started.',
      buttonLabel: 'abar? bhai............',
    },
    {
      media: [
        {
          type: 'video',
          src: '/media/yearning-lisa-2.mp4',
          alt: 'yearning for lisa apu part 2',
        },
      ],
      title: 'yearning for lisa apu part 2',
      text: 'yuour personal vlogger :3\n\ntrue i agree tmr onnek kosto hoito er poro i would still want you to experince this. Honestly i would want to experince this with you ashole beparta:3 this wild trail bhai. very fun.',
      buttonLabel: 'erpor?',
    },
    {
      media: [
        {
          type: 'image',
          src: '/media/wildflowers-hill.jpeg',
          alt: 'wild flowers on the hillside',
        },
        {
          type: 'image',
          src: '/media/wildflowers-hand.jpeg',
          alt: 'picking wild flowers for you',
        },
      ],
      text: 'ashar shomoy we saw a lot of wild flowers. in my mind you would have loved it. ami tmr jonno collect kore nitam flowers gula. Flowers always reminds me of you. after tracking the same route abar ashar somoy amra finaly 2 hours er moddhe back korte pari jeikhan theke suru korsilam jeikhane chaander gaari namai disilo. it was easier  coming back ashole shukay gesilo rasta ta. Bristi te onnek pera disilo jawar time. main road a ashe local der theke kola ruti kheye amra abr ready hoi. cox er jonno.',
      buttonLabel: 'amra cox jacchi?',
      busAfter: {
        from: 'Bandarban',
        to: 'Chokoria',
        vehicle: 'pickup',
        then: { from: 'Chokoria', to: 'Dolphin Mor', vehicle: 'bus' },
      },
    },
  ],
  ending: 'That is everything I could bring back.',
}
