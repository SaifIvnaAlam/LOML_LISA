export type MediaItem = {
  type: 'image' | 'video'
  src: string
  alt?: string
  poster?: string
  caption?: string
  fit?: 'cover' | 'contain'
}

export type RideHop = {
  from: string
  to: string
  vehicle?: 'bus' | 'pickup' | 'boat'
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
  stargaze?: boolean
  bleed?: boolean
  magic?: {
    afterSrc: string
    teaseLabel: string
    revealLabel: string
  }
  busAfter?: BusLeg
  spotify?: {
    url: string
    title: string
    description: string
    cover: string
    tracks: { title: string; artist: string; cover: string }[]
  }
}

export type ExtraSlide = {
  type: 'image' | 'video' | 'end'
  src?: string
  overlay?: string
  hold?: number
}

export type Content = {
  forName: string
  introTitle: string
  intro: string
  beats: Beat[]
  ending: string
  extraClip: {
    youtubeId: string
    title: string
    artist: string
    cover: string
    duration: number
    slides: ExtraSlide[]
    ending: string
  }
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
      nextLabel: 'aww,Ki cute tmi bully koro kno? somosha ki?',
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
    {
      media: [
        {
          type: 'video',
          src: '/media/dolphin-lunch.mp4',
          alt: 'lunch after reaching Dolphin Mor',
        },
      ],
      text: 'In my head, Tmr onnnek khuda lagse special abar track kore ashar por kola ruti chara toh kisu khao nai. and we had lunch 4 ta baje here. the food wasnt the best but tmi mach nisila and ami murgi and we shared it ektu ektu kore duitai taste korsi. I love this janos. i really love this when we share food togather. koto baal saal try kori amra. er por amra tom tom niye eksathe beach jai jeikhane amder jonno boat wait kore.',
      nextLabel: 'amra noukay kothay jacchi?',
    },
    {
      media: [
        {
          type: 'video',
          src: '/media/beach-tomtom.mp4',
          alt: 'getting off the tom tom at the beach',
        },
      ],
      title: 'Personal Vloger part: 3',
      text: 'Amra Shondiya island a jacchi but Beach got me excited jano. I always wanted to go to the beach with you. Hopefully one day, but amra tom tom theke namte namte it got a bit dark. and in my head you were running on the beach in excitement. And what more can a man ask other than seeing their baccha happy.',
      nextLabel: 'tmi happy toh?',
    },
    {
      media: [
        {
          type: 'video',
          src: '/media/boat-night.mp4',
          alt: 'night boat journey after the beach',
        },
      ],
      text: 'Of course i am. You existing. your presense always makes me happy more than anything in this small life of mine. ekhon kotha shuno. er por we started the boat journy jodio raat hoye gesilo. everyone got in. and tmi ami boat er ektu upor er place a bochilam. eksathe cegaiya. you leaned on me and we watched the light go down ashte ashte. jodio amra sunset dekhte parinai beacuse we were bit late. but that\'s fine. you were with me so regadless i was happy. and about others shobai boat e niche boshe chilo and sezan or ekta light diye was taking videos. (Bisash koren rasel bhai er por ja hoilo)',
      buttonLabel: 'er por,Ki hoise?',
      busAfter: { from: 'Beach', to: 'Shondiya', vehicle: 'boat' },
    },
    {
      media: [
        {
          type: 'image',
          src: '/media/stars-night.jpg',
          alt: 'stars over the water on the way to Shondiya',
          fit: 'contain',
        },
      ],
      text: 'We watched the stars together. Dekho koto shundor. I held you tighter and kissed your forehead. Everyone else was stargazing as well. But bad news. Our boat got stuck and it couldn\'t reach all the way.',
      nextLabel: 'ayhay ebar ki hobe?',
      stargaze: true,
      bleed: true,
    },
    {
      media: [
        {
          type: 'video',
          src: '/media/boat-drag.mp4',
          alt: 'boatman dragging the boat toward the island',
        },
      ],
      text: 'boat wala draged us till the put the boat can go. amra ekta nodi er moto kore island e dhuksilam. low tide dekhe and lok ta amder pura boat tene tene joto tuku parse nise. but pura nite pare nai.',
      nextLabel: 'erpor?',
    },
    {
      media: [
        {
          type: 'video',
          src: '/media/water-down.mp4',
          alt: 'getting down from the boat into the water',
        },
      ],
      text: 'amra nodi typer jinish tar moddhei nama lagse. in my head. i went down age. er por i held you. tmke dhore dhore namaisi. and you were surprised je pani gorom chilo and mati ta ektu bali bali so tmi mojai paitesila. and we started walking to the land.',
      buttonLabel: 'mojjaaaaaaaaaa',
    },
    {
      media: [
        {
          type: 'video',
          src: '/media/dance-1.mp4',
          alt: 'us dancing while waiting',
        },
        {
          type: 'video',
          src: '/media/dance-2.mp4',
          alt: 'dancing more while waiting',
        },
      ],
      text: 'Our legs got dirty but we had to wait resort er lok ra boat theke bazar namanor jonno. Meanwhile we started dancing (very random of us). And in my mind even though your body is giving up you are the one who danced the most (I love admiring you when you are having fun).',
      nextLabel: 'babu tired rest nibo',
    },
    {
      media: [
        {
          type: 'video',
          src: '/media/resort-face.mp4',
          alt: 'your face getting brighter at the resort',
        },
      ],
      text: 'after walking for another 30 min. we reached the resort. pura rasta chinta korsi ki na ki resort. but eto underwhelming. but in my head you were tao happy karon finally ektu rest nite parba. boshte parba. onnek kosto korso. but there was no light at all. off season dekhe shob nosto hoye chilo and they didn\'t even say anything about it. tmr onnek mejaj kharap hoise but all of a sudden your face got brighter.',
      nextLabel: 'hu! kisher jonno?',
    },
    {
      media: [
        {
          type: 'video',
          src: '/media/swing.mp4',
          alt: 'you on the swing at the resort',
        },
      ],
      text: 'because you saw a swing and it instantly made you happy again. and you called me tmr sathe jawar jonno on the swing and we go sit to gather. reminded me of our winter resort swing. jokhon moddho raat porjnot just dolnay gejaisi amra. i love seeing you happy. makes my day the brightest. and it instantly made me cheerful. i was pushing u dolnay and you were enjoying youself.',
      buttonLabel: 'err por ki ki korsi?',
    },
    {
      media: [
        {
          type: 'image',
          src: '/media/saved-spot.jpg',
          alt: 'saving a spot for you on the bench',
          fit: 'contain',
        },
      ],
      title: 'I saved a spot for you',
      text: 'In reality you were not there my hands were shaking all of a sudden and my heart was heavy but i kept a sit beside me always empty. so that you could come and sit with me. in my mind you did came and sit beside me keeping your head on my shoulder. Making my heart calm again. You make my heart calm and peaceful.',
      magic: {
        afterSrc: '/media/saved-spot-together.png',
        teaseLabel: 'click 3 times to see magic',
        revealLabel: 'Ki shundor',
      },
    },
    {
      media: [
        {
          type: 'image',
          src: '/media/muri-makha.jpg',
          alt: 'first muri makha',
          fit: 'contain',
        },
        {
          type: 'image',
          src: '/media/tuna-grill.jpg',
          alt: 'grilled tuna after',
          fit: 'contain',
        },
      ],
      text: 'IKR. amra khawar dawar kori. first muri makha and after than tuna fish grilled (ekdomi bhalo chilona tuna ta tmi thakle marta hoyto).',
      buttonLabel: 'er por?',
    },
    {
      media: [
        {
          type: 'image',
          src: '/media/hangout-night.jpg',
          alt: 'everyone hanging out at night',
          fit: 'contain',
        },
      ],
      text: 'we hangout eksathe shobai. talking about the first time they had pot. you were having a lot of fun. and we were playing alot of soothing music.',
      nextLabel: 'Kon kon gaan shunso?',
      bleed: true,
    },
    {
      media: [],
      text: 'don\'t worry i got you coverd i created a playlist with all the music we played and in order we played it so that i can share it with you.',
      buttonLabel: 'erpor',
      spotify: {
        url: 'https://open.spotify.com/playlist/7Mw7z7BaRFLuSGy28iWeTg?si=Wb5shi3-THKl_NI2d2WQQg&utm_source=copy-link&pi=0gzVndiEQHO8m',
        title: 'Night playlist for muni',
        description: 'Please come here join me, i saved a spot for you.',
        cover: '/media/covers/playlist-muni.jpg',
        tracks: [
          { title: 'Ekhon Onek Raat', artist: 'Anupam Roy', cover: '/media/covers/01-ekhon-onek-raat.jpg' },
          { title: 'Hum tum kitne paas hai kitne', artist: 'Amit Kumar', cover: '/media/covers/02-hum-tum.jpg' },
          { title: 'Tumi', artist: 'Level Five', cover: '/media/covers/03-tumi.jpg' },
          { title: 'Rong Cha', artist: 'Kaaktaal', cover: '/media/covers/04-rong-cha.jpg' },
          { title: 'E Hawa', artist: 'Meghdol', cover: '/media/covers/05-e-hawa.jpg' },
          { title: 'Prithibi Tumi Sere Jao Ft. Debayan Banerjee', artist: 'Chirkut', cover: '/media/covers/06-prithibi.jpg' },
          { title: 'Take Me Home, Country Roads - Original Version', artist: 'John Denver', cover: '/media/covers/07-country-roads.jpg' },
          { title: 'Co2', artist: 'Prateek Kuhad', cover: '/media/covers/08-co2.jpg' },
          { title: 'K.', artist: 'Cigarettes After Sex', cover: '/media/covers/09-k.jpg' },
          { title: 'cold/mess', artist: 'Prateek Kuhad', cover: '/media/covers/10-cold-mess.jpg' },
          { title: 'Teri Yeh Baatein - From "Kho Gaye Hum Kahan"', artist: 'OAFF, Savera, Ankur Tewari', cover: '/media/covers/11-teri-yeh-baatein.jpg' },
          { title: 'Baahon Mein Teri - From "Kho Gaye Hum Kahan"', artist: 'Ankur Tewari', cover: '/media/covers/12-baahon-mein-teri.jpg' },
          { title: 'Rain Is the Most Beautiful Girl I\'ve Ever Seen', artist: 'Kaaktaal', cover: '/media/covers/13-rain.jpg' },
          { title: 'Sailor Song', artist: 'Gigi Perez', cover: '/media/covers/14-sailor-song.jpg' },
          { title: 'Khat', artist: 'Navjot Ahuja', cover: '/media/covers/15-khat.jpg' },
        ],
      },
    },
    {
      media: [
        {
          type: 'image',
          src: '/media/beach-sleep.jpg',
          alt: 'sleeping outside on the beach',
          fit: 'contain',
        },
      ],
      text: 'Resort er room er jei abosta we had to sleep outside beach a. in my head i sit there and you slept on my legs. or we tried. and i played with your hair all night while we are under the sky andtmke ador kore ghum parai dicchi and shokal a uthe we see the beach togather raat er jonno beach explore korte parinai amara. i wake you up kissie diye and calling you "Muni utho" and when you open your eyes you see something.',
      nextLabel: 'what do i see?',
    },
    {
      media: [
        {
          type: 'image',
          src: '/media/beach-spot.jpg',
          alt: 'saving a sit on the beach',
          fit: 'contain',
        },
      ],
      title: 'I saved a spot for you (2)',
      text: 'You see me waiting for you. I will always wait for you, Lisa. A seat saved on the beach. In my own world you came and sat beside me, ekta chador niye, and we pull it around both of us. We watch the beach together. Sand under our feet. Cold breeze on our faces. I look at you. You look at me. We kiss, and I kiss your forehead. Maybe a tear falls. Maybe I start shaking a little. Maybe I hold you tighter and tell you, "Lisa, I love you. I love you with all my heart. It might not be much, Lisa, but that\'s all I have. I will always save a spot for you, Lisa. Always and forever."',
      buttonLabel: 'Press to start the end of the story',
    },
  ],
  ending:
    'I love you, Muni.\nWith the last bit of love I have left in me. Maybe it is not something worth fighting for, but that\'s all I have.\nAnd that\'s everything I could bring for you from the tour, baccha.\nI missed you so much I can barely stand it.\nCan you please give me a hug? Please?',
  extraClip: {
    youtubeId: 'PezEbnqpIso',
    title: 'Hum tum kitne paas hai kitne',
    artist: 'Amit Kumar',
    cover: '/media/extra/song-cover.jpg',
    duration: 60,
    ending: 'now you can open the box.',
    slides: [
      { type: 'image', src: '/media/extra/slide-01.jpg', hold: 1800 },
      { type: 'image', src: '/media/extra/slide-02.jpg', hold: 1800 },
      { type: 'video', src: '/media/extra/clip-2444.mp4' },
      {
        type: 'image',
        src: '/media/extra/slide-03.jpg',
        hold: 6100,
        overlay:
          'we returned from the island the next morning. oder eto baje service dekhe. and i was missing you so much that i was so far from you. and when i can\'t feel your presence my everything feels shaken and i cant hold my tired. i had to come back to dhaka instantly and got into the next bus i got. alone.',
      },
      { type: 'image', src: '/media/extra/slide-04.jpg', hold: 1800 },
      { type: 'image', src: '/media/extra/slide-05.jpg', hold: 1800 },
      { type: 'image', src: '/media/extra/slide-06.jpg', hold: 1800 },
      { type: 'image', src: '/media/extra/slide-07.jpg', hold: 1800 },
      { type: 'video', src: '/media/extra/clip-2466.mp4' },
      {
        type: 'image',
        src: '/media/extra/slide-08.jpg',
        hold: 3200,
        overlay:
          'Just to feel a bit of your presence. Any presence. I took your socks. Just so I could have something of yours. Just to feel a bit closer.',
      },
      { type: 'image', src: '/media/extra/slide-14.jpg', hold: 1800 },
      { type: 'image', src: '/media/extra/slide-09.jpg', hold: 1800 },
      { type: 'image', src: '/media/extra/slide-10.jpg', hold: 1800 },
      { type: 'image', src: '/media/extra/slide-11.jpg', hold: 1800 },
      { type: 'image', src: '/media/extra/slide-12.jpg', hold: 1800 },
      { type: 'image', src: '/media/extra/slide-13.jpg', hold: 1800 },
      { type: 'image', src: '/media/extra/slide-15.jpg', hold: 1800 },
      { type: 'image', src: '/media/extra/slide-16.jpg', hold: 1800 },
      {
        type: 'image',
        src: '/media/extra/slide-last.jpg',
        hold: 6100,
        overlay:
          'Maybe I did not have to return home alone. I keep seeing it. Us. Cuddled all the way to Dhaka. I wanted that so badly. I came back by myself anyway. The end.',
      },
      { type: 'end', hold: 0 },
    ],
  },
}
