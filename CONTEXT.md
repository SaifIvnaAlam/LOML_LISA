# CONTEXT

Mobile-first gift site for **Lisa**. He went on a Bandarban tour she could not join. Cute pixel Polaroid walkthrough, later QR + Vercel. Local folder: `loml-lisa`. GitHub: [SaifIvnaAlam/LOML_LISA](https://github.com/SaifIvnaAlam/LOML_LISA).

## Voice

- His wording. Mixed English + transliterated Bangla. Keep slang and typos unless he asks to fix one word.
- No em dashes. No AI polish.
- Buttons: `nextLabel` gets a **You:** prefix. `buttonLabel` is raw, no prefix. Use whichever he wrote.
- Do only what he asked. He checks the browser himself. Do not hang on browser lock / click-through.

## Stack

Vite + React + TypeScript. No extra libraries. Dev: `http://localhost:5173/`.

| Thing | Where |
| --- | --- |
| All copy, beats, media, button labels | `src/content.ts` |
| Screens, Polaroids, cuddle, rides | `src/App.tsx` |
| Cream dotted page, Polaroids, buttons | `src/index.css` |
| Fonts: Pixelify Sans + Fredoka | `index.html` |
| Photos / videos | `public/media/` and `public/intro/` |

Media: copy WhatsApp files into `public/media/` with short names. Downloads filenames often have a narrow no-break space before `AM` — use Python `glob`. Videos stay short, under ~8MB.

## How a beat works

A **Beat** is one story page: media (images and/or videos), optional pixel `title`, body `text`, then a pink pixel button.

- `title` → Pixelify Sans heading (used for the Lisa-apu vlog titles)
- `cuddle: true` → speech-bubble button + still couple + moving head only (not two full frames)
- `busAfter` → full-screen pixel map after the tap, then the next beat (or end)

After the last beat’s ride, the **End** screen: pixel heart + `That is everything I could bring back.`

## Journey (current order)

1. Night bus Nordha / Dhaka — `bus-night.png`, `bus-cow.png` — ride **Dhaka → Cumilla**
2. Cumilla break — cuddle, her line about sitting in his lap — ride **Cumilla → Chokoria**
3. Rain + sleep clips — **You: Khuda laagse**
4. Chokoria eat — **You: onnek khaisi… Cholooooo bandarban jai**
5. Chander gari — **You: babai ami darabo**
6. Her POV — `Erpor?`
7. Cap in the wind — `Press to say: Bokachoda`
8. Trek start — **You: hu. Chaaaallooooo tracking shuru kori.**
9. Walk — sarcasm / onnek pera — **You: Ayhay er por? Keu pichla khay nai?**
10. Downhill slip — `Ayhay. Betha paise?`
11. Trail rest photos — `Aaaah i want to see the view.`
12. View clip — long thank-you button
13. Jiri + joint — `choto` jiri (not chutu) — `Press to show middle finger to me.`
14. Pathor souvenirs — heart stone + clip — **You: Ki cute pathor**
15. Yearning for Lisa apu part 1 🥺 — **You: aww ki cute tmi buly koro kno somosha ki tmr?**
16. Village arrival — group / rest / hut
17. Personal vloger clip
18. Village view + tetul close-up — `Khaboooooooooooo`
19. Night hut, last photo (phones died) — **You: I kill you but er por ki hoise?**
20. Heading back — `jaito` / `muri` — `abar? bhai............`
21. Yearning for Lisa apu part 2
22. Wild flowers + walk-back / kola ruti / Cox — `amra cox jacchi?` then combo ride

## Rides

Same pixel-map style as the early bus trips.

- Single hop: pink bus, `BusRide`
- Combo (flowers button): `ComboRide` — pickup **Bandarban → Chokoria** (center), short pause, swap to bus, then **Chokoria → Dolphin Mor**. Map pins + mountain / town / dolphin icons. Horizontal road, side → center → sea.

## Design notes

- Cream dotted background, sun + two clouds on every page
- Polaroids: white frame, slight tilt, peach well. Videos `object-fit: contain`, not cropped
- Page scroll lives on `.app` (`100dvh`, overflow-y auto). `body` is overflow hidden
- Cuddle: still body + nuzzling head/hair only. Glasses stay still. Do not inpaint yellow chest blobs

## What’s left

- Cox’s Bazar / Dolphin Mor pages after the combo ride (end is premature if the story continues)
- Vercel deploy + QR when content is done
- More WhatsApp clips as he sends them

## Terms

## Lisa

The person this gift is for. She missed the tour. Copy talks to her as `tmi` / `You:`.

## Beat

One story page in `content.beats`. Media + optional title + his copy + one button.

## Polaroid

Tilted white photo frame around an image or video on a beat.

## You-button

Pink pixel button with `You:` prefix. Driven by `nextLabel`.

## Ride

Full-screen pixel map overlay after a beat. Pickup or bus. Combo ride changes vehicle at Chokoria.

## Chander gari

The open jeep / pickup they rode into the hills. Combo ride starts as this, then becomes a bus at Chokoria.

## Jiri

Small stream / creek on the trek. She would put her feet in. Joints by the water.

## Loco

In-joke from `local`. They started saying "LOCO". Tetul trees by village houses.

## Dolphin Mor

Cox’s Bazar drop-off after Chokoria. End of the combo ride. Story after this is not built yet.
