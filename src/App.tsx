import { useEffect, useState } from 'react'
import { content, type BusLeg, type MediaItem, type RideHop } from './content'

type Screen = 'intro' | 'journey' | 'end'

type PetWho = 'eve' | 'lilith' | 'frog'
type PetSpot =
  | 'bl'
  | 'br'
  | 'tl'
  | 'tr'
  | 'photo-peek'
  | 'peek-left'
  | 'cuddle-right'
  | 'btn-side'
  | 'btn-left'
  | 'mid-right'
  | 'flower'
  | 'end-left'
  | 'end-right'
  | 'end-bottom'

type PetPlace = { who: PetWho; spot: PetSpot }

const BEAT_PETS: Record<number, PetPlace[]> = {
  0: [{ who: 'eve', spot: 'peek-left' }],
  1: [{ who: 'lilith', spot: 'cuddle-right' }],
  2: [{ who: 'eve', spot: 'tr' }],
  3: [{ who: 'frog', spot: 'btn-side' }],
  4: [{ who: 'frog', spot: 'btn-left' }],
  5: [{ who: 'eve', spot: 'photo-peek' }],
  6: [{ who: 'lilith', spot: 'tl' }],
  7: [{ who: 'frog', spot: 'photo-peek' }],
  8: [{ who: 'lilith', spot: 'tr' }],
  9: [{ who: 'frog', spot: 'photo-peek' }],
  10: [{ who: 'eve', spot: 'peek-left' }],
  11: [{ who: 'lilith', spot: 'tr' }],
  12: [{ who: 'frog', spot: 'btn-side' }],
  13: [{ who: 'eve', spot: 'photo-peek' }],
  14: [{ who: 'lilith', spot: 'peek-left' }],
  15: [{ who: 'eve', spot: 'peek-left' }],
  16: [{ who: 'frog', spot: 'btn-side' }],
  17: [{ who: 'lilith', spot: 'tr' }],
  18: [
    { who: 'eve', spot: 'peek-left' },
    { who: 'lilith', spot: 'photo-peek' },
  ],
  19: [{ who: 'frog', spot: 'btn-left' }],
  20: [{ who: 'lilith', spot: 'photo-peek' }],
  21: [{ who: 'eve', spot: 'flower' }],
}

const END_PETS: PetPlace[] = [
  { who: 'eve', spot: 'end-left' },
  { who: 'lilith', spot: 'end-right' },
  { who: 'frog', spot: 'end-bottom' },
]

export default function App() {
  const [screen, setScreen] = useState<Screen>('intro')
  const [beatIndex, setBeatIndex] = useState(0)
  const [busRide, setBusRide] = useState<BusLeg | null>(null)
  const [dir, setDir] = useState<'fwd' | 'back'>('fwd')

  const beat = content.beats[beatIndex]
  const isFirstBeat = beatIndex === 0
  const isLastBeat = beatIndex === content.beats.length - 1

  const finishBusRide = () => {
    const nextIndex = beatIndex + 1
    setBusRide(null)
    setDir('fwd')
    if (nextIndex >= content.beats.length) {
      setScreen('end')
      return
    }
    setBeatIndex(nextIndex)
  }

  const goNext = () => {
    setDir('fwd')
    if (screen === 'intro') {
      setScreen('journey')
      return
    }

    if (screen === 'journey' && beat?.busAfter) {
      setBusRide(beat.busAfter)
      return
    }

    if (screen === 'journey' && !isLastBeat) {
      setBeatIndex((index) => index + 1)
      return
    }

    if (screen === 'journey') {
      setScreen('end')
    }
  }

  const goBack = () => {
    setDir('back')
    if (screen === 'end') {
      setScreen('journey')
      return
    }

    if (screen === 'journey' && !isFirstBeat) {
      setBeatIndex((index) => index - 1)
      return
    }

    if (screen === 'journey') {
      setScreen('intro')
    }
  }

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'Enter') {
        if (screen !== 'end') {
          goNext()
        }
      }
      if (event.key === 'ArrowLeft' || event.key === 'Backspace') {
        if (screen !== 'intro') {
          goBack()
        }
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <div className="app">
      <SkyBits />
      {screen === 'intro' && (
        <section className={`panel intro enter-${dir}`} key="intro">
          <IntroScene />
          <p className="for">for {content.forName}</p>
          <h1 className="hello">{content.introTitle}</h1>
          <p className="copy intro-copy">{content.intro}</p>
          <button type="button" className="pixel-btn" onClick={goNext}>
            let’s gooooooo
          </button>
        </section>
      )}

      {screen === 'journey' && beat && (
        <section className={`panel journey enter-${dir}`} key={`beat-${beatIndex}`}>
          <PageSparkle />
          <PetStickers pets={BEAT_PETS[beatIndex] ?? []} />
          <header className="topbar">
            <button type="button" className="ghost-btn" onClick={goBack}>
              back
            </button>
            <p className="progress">
              {beatIndex + 1} / {content.beats.length}
            </p>
          </header>

          <MediaStage items={beat.media} />
          {beat.title ? <h2 className="beat-title">{beat.title}</h2> : null}
          {beat.text ? <p className="copy beat-copy">{beat.text}</p> : null}

          {beat.cuddle ? (
            <div className="cuddle-scene">
              <p className="press-hint" aria-hidden="true">
                Press me
                <span className="press-arrow" />
              </p>
              <button type="button" className="pixel-btn speech-btn" onClick={goNext}>
                <span className="speech-who">You:</span>
                {beat.nextLabel}
              </button>
              <div className="cuddle-puppet" aria-hidden="true">
                <img
                  className="cuddle-still"
                  src="/intro/bus-cuddle-2.png?v=14"
                  alt=""
                />
                <img
                  className="cuddle-head"
                  src="/intro/bus-cuddle-head.png?v=14"
                  alt=""
                />
              </div>
            </div>
          ) : (
            <button
              type="button"
              className={beat.nextLabel ? 'pixel-btn line-btn' : 'pixel-btn'}
              onClick={goNext}
            >
              {beat.nextLabel ? (
                <>
                  <span className="speech-who">You:</span>
                  {beat.nextLabel}
                </>
              ) : (
                (beat.buttonLabel ?? (isLastBeat ? 'almost done' : 'and then'))
              )}
            </button>
          )}
        </section>
      )}

      {busRide &&
        (busRide.then ? (
          <ComboRide ride={busRide} onDone={finishBusRide} />
        ) : (
          <BusRide ride={busRide} onDone={finishBusRide} />
        ))}

      {screen === 'end' && (
        <section className={`panel intro enter-${dir}`} key="end">
          <PetStickers pets={END_PETS} />
          <PixelHeart />
          <p className="copy">{content.ending}</p>
          <button type="button" className="ghost-btn" onClick={goBack}>
            back
          </button>
        </section>
      )}
    </div>
  )
}

function MediaStage({ items }: { items: MediaItem[] }) {
  if (items.length === 0) {
    return null
  }

  return (
    <div className={items.length > 1 ? 'polaroid-stack pair' : 'polaroid-stack'}>
      {items.map((item, itemIndex) => (
        <div
          key={`${item.src}-${itemIndex}`}
          className="polaroid-enter"
        >
        <div
          className={`polaroid media-polaroid tilt-${itemIndex % 2 === 0 ? 'left' : 'right'}`}
        >
          <div className="photo">
            {item.type === 'video' ? (
              <video
                src={item.src}
                poster={item.poster}
                controls
                playsInline
                preload="metadata"
              />
            ) : (
              <img src={item.src} alt={item.alt ?? ''} />
            )}
          </div>
          {item.caption ? <p className="copy media-copy">{item.caption}</p> : null}
        </div>
        </div>
      ))}
    </div>
  )
}

type Point = { x: number; y: number }

type RouteLook = {
  path: string
  start: Point
  end: Point
}

const ROUTES: Record<string, RouteLook> = {
  'Dhaka-Cumilla': {
    path: 'M58 72 C92 48 128 86 158 102 S214 148 262 176',
    start: { x: 52, y: 66 },
    end: { x: 256, y: 170 },
  },
  'Cumilla-Chokoria': {
    path: 'M64 56 C108 88 148 118 176 150 S228 192 262 208',
    start: { x: 58, y: 50 },
    end: { x: 256, y: 202 },
  },
}

function routeKey(from: string, to: string) {
  return `${from}-${to}`.replace(/['’]/g, '')
}

function hopsFromRide(ride: BusLeg): RideHop[] {
  const first: RideHop = {
    from: ride.from,
    to: ride.to,
    vehicle: ride.vehicle ?? 'bus',
  }
  if (!ride.then) {
    return [first]
  }
  return [first, { ...ride.then, vehicle: ride.then.vehicle ?? 'bus' }]
}

function MapPin({ x, y, fill = '#ff7b9c' }: { x: number; y: number; fill?: string }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect x="-5" y="-18" width="10" height="10" fill={fill} />
      <rect x="-3" y="-20" width="6" height="2" fill={fill} />
      <rect x="-3" y="-8" width="6" height="4" fill={fill} />
      <rect x="-1" y="-4" width="2" height="4" fill={fill} />
      <rect x="-2" y="-16" width="4" height="4" fill="#fff6eb" />
    </g>
  )
}

function MountainIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect x="8" y="10" width="8" height="10" fill="#5a8f6a" />
      <rect x="4" y="16" width="16" height="8" fill="#4e7d5c" />
      <rect x="10" y="6" width="4" height="4" fill="#eef6f0" />
    </g>
  )
}

function TownIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect x="2" y="10" width="10" height="12" fill="#f3d4c2" />
      <rect x="12" y="6" width="10" height="16" fill="#e8b89a" />
      <rect x="4" y="13" width="3" height="3" fill="#fff6eb" />
      <rect x="14" y="9" width="3" height="3" fill="#fff6eb" />
      <rect x="14" y="14" width="3" height="3" fill="#fff6eb" />
      <rect x="5" y="6" width="4" height="4" fill="#c45c6a" />
    </g>
  )
}

function DolphinIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect x="4" y="10" width="16" height="6" fill="#7ec8e3" />
      <rect x="16" y="7" width="6" height="6" fill="#7ec8e3" />
      <rect x="20" y="5" width="3" height="3" fill="#7ec8e3" />
      <rect x="8" y="6" width="4" height="4" fill="#7ec8e3" />
      <rect x="2" y="12" width="4" height="3" fill="#5bb3d3" />
      <rect x="18" y="8" width="2" height="2" fill="#3a2433" />
      <rect x="6" y="18" width="6" height="2" fill="#6ec3dc" />
      <rect x="14" y="20" width="8" height="2" fill="#6ec3dc" />
    </g>
  )
}

function PixelVehicle({ kind }: { kind: 'bus' | 'pickup' }) {
  if (kind === 'pickup') {
    return (
      <g transform="translate(-20, -30)">
        <rect className="dust d1" x="-8" y="18" width="6" height="4" fill="#d7c4a8" />
        <rect className="dust d2" x="-14" y="22" width="5" height="4" fill="#c4b08c" />
        <rect className="dust d3" x="-4" y="24" width="4" height="3" fill="#e8d7b8" />
        <rect x="14" y="10" width="22" height="12" fill="#f4c46a" />
        <rect x="2" y="12" width="14" height="14" fill="#e89b3c" />
        <rect x="5" y="14" width="7" height="6" fill="#fff6eb" />
        <rect x="32" y="16" width="3" height="3" fill="#ffe28a" />
        <g transform="translate(10, 26)">
          <g className="bus-wheel">
            <rect x="-5" y="-5" width="10" height="10" fill="#3a2433" />
            <rect x="-2" y="-5" width="4" height="10" fill="#6a4a5c" />
            <rect x="-5" y="-2" width="10" height="4" fill="#6a4a5c" />
          </g>
        </g>
        <g transform="translate(30, 26)">
          <g className="bus-wheel">
            <rect x="-5" y="-5" width="10" height="10" fill="#3a2433" />
            <rect x="-2" y="-5" width="4" height="10" fill="#6a4a5c" />
            <rect x="-5" y="-2" width="10" height="4" fill="#6a4a5c" />
          </g>
        </g>
      </g>
    )
  }

  return (
    <g transform="translate(-22, -34)">
      <rect className="dust d1" x="-8" y="20" width="6" height="4" fill="#d7c4a8" />
      <rect className="dust d2" x="-14" y="24" width="5" height="4" fill="#c4b08c" />
      <rect className="dust d3" x="-4" y="26" width="4" height="3" fill="#e8d7b8" />
      <rect x="4" y="8" width="38" height="16" fill="#ffb3c6" />
      <rect x="2" y="12" width="10" height="14" fill="#ff7b9c" />
      <rect x="12" y="10" width="7" height="7" fill="#fff6eb" />
      <rect x="22" y="10" width="7" height="7" fill="#fff6eb" />
      <rect x="32" y="10" width="7" height="7" fill="#fff6eb" />
      <rect x="40" y="16" width="4" height="4" fill="#ffe28a" />
      <g transform="translate(12, 28)">
        <g className="bus-wheel">
          <rect x="-5" y="-5" width="10" height="10" fill="#3a2433" />
          <rect x="-2" y="-5" width="4" height="10" fill="#6a4a5c" />
          <rect x="-5" y="-2" width="10" height="4" fill="#6a4a5c" />
        </g>
      </g>
      <g transform="translate(34, 28)">
        <g className="bus-wheel">
          <rect x="-5" y="-5" width="10" height="10" fill="#3a2433" />
          <rect x="-2" y="-5" width="4" height="10" fill="#6a4a5c" />
          <rect x="-5" y="-2" width="10" height="4" fill="#6a4a5c" />
        </g>
      </g>
    </g>
  )
}

type ComboPhase = 'in' | 'off' | 'walk' | 'on' | 'out'

const CREW = [
  { shirt: '#1c1c1c', pants: '#c4a574', hair: '#3a2433', mark: '#fff6eb' },
  { shirt: '#8b3a44', pants: '#ee6b6b', hair: '#2a1a18' },
  { shirt: '#9bb89a', pants: '#3a2433', hair: '#3a2433' },
  { shirt: '#f5f0e8', pants: '#2c3d6b', hair: '#3a2433' },
  { shirt: '#243556', pants: '#3a2433', hair: '#2a1a18' },
  { shirt: '#8ec5e8', pants: '#3a2433', hair: '#4a3028' },
] as const

function PixelPerson({
  shirt,
  pants,
  hair,
  mark,
}: {
  shirt: string
  pants: string
  hair: string
  mark?: string
}) {
  return (
    <g>
      <rect x="2" y="-2" width="5" height="3" fill={hair} />
      <rect x="2" y="1" width="5" height="3" fill="#f3d4c2" />
      <rect x="1" y="4" width="7" height="6" fill={shirt} />
      {mark ? <rect x="3" y="5" width="3" height="2" fill={mark} /> : null}
      <rect x="1" y="10" width="3" height="5" fill={pants} />
      <rect x="5" y="10" width="3" height="5" fill={pants} />
    </g>
  )
}

function ComboRide({ ride, onDone }: { ride: BusLeg; onDone: () => void }) {
  const [phase, setPhase] = useState<ComboPhase>('in')

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      const timer = window.setTimeout(onDone, 400)
      return () => window.clearTimeout(timer)
    }

    const waits = { in: 3200, off: 1100, walk: 1700, on: 800, out: 3400 } as const
    const next: Record<ComboPhase, ComboPhase | 'done'> = {
      in: 'off',
      off: 'walk',
      walk: 'on',
      on: 'out',
      out: 'done',
    }
    const timer = window.setTimeout(() => {
      const step = next[phase]
      if (step === 'done') {
        onDone()
        return
      }
      setPhase(step)
    }, waits[phase])
    return () => window.clearTimeout(timer)
  }, [phase, onDone])

  const title =
    phase === 'in'
      ? `${ride.from} to ${ride.to}`
      : phase === 'off'
        ? 'hopping off'
        : phase === 'walk'
          ? 'switching at Chokoria'
          : phase === 'on'
            ? 'onto the bus'
            : `${ride.to} to ${ride.then?.to ?? 'Dolphin Mor'}`

  const showCrew = phase === 'off' || phase === 'walk' || phase === 'on'

  return (
    <div className="bus-ride" role="status">
      <SkyBits tone="ride" />
      <p className="bus-title">{title}</p>
      <div className="pixel-map combo">
        <svg
          className="map-svg"
          viewBox="0 0 360 220"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          shapeRendering="crispEdges"
        >
          <rect width="360" height="220" fill="#8ec8e8" />
          <rect x="0" y="52" width="360" height="168" fill="#8ecf9a" />
          <rect x="0" y="52" width="70" height="168" fill="#6bb07e" />
          <rect x="290" y="52" width="70" height="168" fill="#6ec3dc" />
          <rect x="270" y="150" width="90" height="70" fill="#5bb3d3" />
          <rect x="250" y="186" width="40" height="34" fill="#6ec3dc" />
          <path
            d="M28 118 H332"
            fill="none"
            stroke="#c9a27a"
            strokeWidth="14"
            strokeLinecap="square"
          />
          <path
            d="M28 118 H332"
            fill="none"
            stroke="#3a2433"
            strokeWidth="3"
            strokeDasharray="8 6"
            strokeLinecap="square"
            className="route-line"
          />

          <MountainIcon x={22} y={58} />
          <TownIcon x={166} y={56} />
          <DolphinIcon x={300} y={56} />

          <MapPin x={40} y={118} />
          <MapPin x={180} y={118} fill="#ffb14a" />
          <MapPin x={320} y={118} fill="#5bb3d3" />

          <g className={`combo-car pickup ${phase === 'in' ? 'driving' : 'parked'}`}>
            <PixelVehicle kind="pickup" />
          </g>
          <g className={`combo-car bus ${phase === 'out' ? 'driving' : 'waiting'}`}>
            <PixelVehicle kind="bus" />
          </g>

          {showCrew ? (
            <g className={`combo-crew crew-${phase}`}>
              {CREW.map((person, index) => (
                <g key={index} className={`pixel-person p-${index}`}>
                  <g className="person-bob">
                    <PixelPerson {...person} />
                  </g>
                </g>
              ))}
            </g>
          ) : null}
        </svg>
        <span className="map-label start">{ride.from}</span>
        <span className="map-label mid">{ride.to}</span>
        <span className="map-label end">{ride.then?.to ?? 'Dolphin Mor'}</span>
      </div>
    </div>
  )
}

function BusRide({ ride, onDone }: { ride: BusLeg; onDone: () => void }) {
  const hops = hopsFromRide(ride)
  const hop = hops[0]
  const key = routeKey(hop.from, hop.to)
  const look = ROUTES[key] ?? ROUTES['Dhaka-Cumilla']
  const routeId = `route-${key}`.replace(/\s+/g, '-')

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const wait = reduced ? 400 : 4300
    const timer = window.setTimeout(onDone, wait)
    return () => window.clearTimeout(timer)
  }, [onDone])

  return (
    <div className="bus-ride" role="status">
      <SkyBits tone="ride" />
      <p className="bus-title">
        {hop.from} to {hop.to}
      </p>
      <div className="pixel-map">
        <svg
          className="map-svg"
          viewBox="0 0 320 240"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          shapeRendering="crispEdges"
        >
          <rect width="320" height="240" fill="#9fd4e4" />
          <rect x="36" y="20" width="260" height="200" fill="#7dbf8f" />
          <rect x="20" y="40" width="28" height="140" fill="#7dbf8f" />
          <rect x="276" y="48" width="24" height="120" fill="#7dbf8f" />
          <rect x="56" y="8" width="70" height="22" fill="#7dbf8f" />
          <rect x="200" y="16" width="50" height="18" fill="#6bb07e" />
          <rect x="0" y="0" width="32" height="240" fill="#6ec3dc" />
          <rect x="32" y="128" width="40" height="14" fill="#6ec3dc" />
          <rect x="60" y="134" width="54" height="12" fill="#6ec3dc" />
          <rect x="100" y="118" width="22" height="30" fill="#6ec3dc" />
          <rect x="70" y="52" width="18" height="14" fill="#f3d4c2" />
          <rect x="230" y="160" width="16" height="12" fill="#f3d4c2" />
          <path
            id={routeId}
            d={look.path}
            fill="none"
            stroke="#c9a27a"
            strokeWidth="8"
            strokeLinecap="square"
          />
          <path
            d={look.path}
            fill="none"
            stroke="#3a2433"
            strokeWidth="3"
            strokeDasharray="6 5"
            strokeLinecap="square"
            className="route-line"
          />
          <MapPin x={look.start.x + 6} y={look.start.y + 6} />
          <MapPin x={look.end.x + 6} y={look.end.y + 6} />
          <g className="moving-bus">
            <PixelVehicle kind={hop.vehicle ?? 'bus'} />
            <animateMotion dur="4s" fill="freeze" rotate="auto">
              <mpath href={`#${routeId}`} />
            </animateMotion>
          </g>
        </svg>
        <span className="map-label start">{hop.from}</span>
        <span className="map-label end">{hop.to}</span>
      </div>
    </div>
  )
}

function SkyBits({ tone = 'page' }: { tone?: 'page' | 'ride' }) {
  return (
    <div className={tone === 'ride' ? 'skybits ride-sky' : 'skybits'} aria-hidden="true">
      <span className="sun" />
      <span className="cloud cloud-a" />
      <span className="cloud cloud-b" />
      <span className="cloud cloud-c" />
    </div>
  )
}

function PetStickers({ pets }: { pets: PetPlace[] }) {
  if (pets.length === 0) {
    return null
  }

  return (
    <div className="page-pets" aria-hidden="true">
      {pets.map((pet) => (
        <span key={`${pet.who}-${pet.spot}`} className={`page-pet spot-${pet.spot}`}>
          {pet.who === 'lilith' ? (
            <span className="pet-body pet-lilith">
              <img src="/intro/lilith.png?v=2" alt="" />
              <img className="wag" src="/intro/lilith-wag.png" alt="" />
            </span>
          ) : (
            <img
              className={`pet-body pet-${pet.who}`}
              src={pet.who === 'eve' ? '/intro/eve.png?v=2' : '/intro/frog.png'}
              alt=""
            />
          )}
        </span>
      ))}
    </div>
  )
}

function PageSparkle() {
  return (
    <div className="page-sparkle" aria-hidden="true">
      <span className="mini-heart h1" />
      <span className="mini-heart h2" />
      <span className="mini-heart h3" />
    </div>
  )
}

function IntroScene() {
  return (
    <div className="intro-scene">
      <div className="polaroid couple-polaroid">
        <div className="photo couple-photo">
          <img
            className="couple-jump"
            src="/intro/couple-cutout.png"
            alt="Lisa and me"
          />
        </div>
        <p className="polaroid-cap">us</p>
        <img className="pet eve" src="/intro/eve.png?v=2" alt="" />
        <span className="pet lilith">
          <img src="/intro/lilith.png?v=2" alt="" />
          <img className="wag" src="/intro/lilith-wag.png" alt="" />
        </span>
        <img className="pet frog" src="/intro/frog.png" alt="" />
      </div>
    </div>
  )
}

function PixelHeart() {
  return (
    <svg
      className="heart"
      viewBox="0 0 16 16"
      aria-hidden="true"
      shapeRendering="crispEdges"
    >
      <rect x="3" y="4" width="4" height="3" fill="#ff7b9c" />
      <rect x="9" y="4" width="4" height="3" fill="#ff7b9c" />
      <rect x="2" y="5" width="2" height="3" fill="#ff7b9c" />
      <rect x="12" y="5" width="2" height="3" fill="#ff7b9c" />
      <rect x="3" y="8" width="10" height="2" fill="#ff7b9c" />
      <rect x="5" y="10" width="6" height="2" fill="#ff7b9c" />
      <rect x="7" y="12" width="2" height="2" fill="#ee5d82" />
    </svg>
  )
}
