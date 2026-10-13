type NodeDef = {
  name: string;
  x: number;
  y: number;
  side: 'left' | 'right' | 'aboveRight';
  glow?: boolean;
};

const nodes: NodeDef[] = [
  { name: 'Thane', x: 29.5, y: 28.3, side: 'right' },
  { name: 'Bhiwandi', x: 67.3, y: 19.7, side: 'right' },
  { name: 'Navi Mumbai', x: 71.9, y: 42.5, side: 'right' },
  { name: 'Panvel', x: 65.4, y: 64.8, side: 'right' },
  { name: 'Raigad', x: 82.4, y: 89.8, side: 'right' },
  { name: 'Mumbai', x: 28.6, y: 55.6, side: 'right' },
  { name: 'JNPT / Nhava Sheva', x: 40.0, y: 65.1, side: 'aboveRight' },
  { name: 'URAN', x: 51.3, y: 75.2, side: 'right', glow: true },
];

const junctions = [
  { x: 55.1, y: 41.9 },
  { x: 49.0, y: 72.7, faint: true },
];

const paths = [
  'M29.5,28.3 L67.3,19.7',
  'M29.5,28.3 L28.6,55.6',
  'M29.5,28.3 L55.1,41.9',
  'M67.3,19.7 L71.9,42.5',
  'M67.3,19.7 L55.1,41.9',
  'M55.1,41.9 L65.4,64.8',
  'M71.9,42.5 L65.4,64.8',
  'M28.6,55.6 L40.0,65.1',
  'M40.0,65.1 L49.0,72.7',
  'M49.0,72.7 L51.3,75.2',
  'M65.4,64.8 L82.4,89.8',
  'M51.3,75.2 L65.4,64.8',
];

const labelBase =
  'absolute whitespace-nowrap tracking-[0.05em] text-[10px] sm:text-[11px] [font-family:Inter,system-ui,sans-serif] text-[#94A3B8]';

export default function OperatingMap() {
  return (
    <div className="relative aspect-[1.25/1] bg-[#09131E] border border-[#F4F1EA]/12 p-5 sm:p-6 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {paths.map((d) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="#94A3B8"
            strokeOpacity="0.5"
            strokeWidth="1"
            strokeDasharray="3 4"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {junctions.map((j) => (
        <span
          key={`${j.x}-${j.y}`}
          className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full ${
            'faint' in j && j.faint ? 'w-[3px] h-[3px] bg-[#C66B45]/50' : 'w-[5px] h-[5px] bg-[#C66B45]/80'
          }`}
          style={{ left: `${j.x}%`, top: `${j.y}%` }}
        />
      ))}

      {nodes.map((n) => (
        <div key={n.name} className="absolute" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
          {n.glow && (
            <span
              className="absolute -translate-x-1/2 -translate-y-1/2 w-[56px] h-[56px] rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(214,212,205,0.28) 0%, rgba(170,170,165,0.10) 55%, transparent 72%)',
              }}
            />
          )}
          <span className="absolute -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-[#C66B45]" />
          <span
            className={`${labelBase} ${
              n.glow
                ? 'left-3 top-1/2 -translate-y-1/2 text-[#F4F1EA]/85'
                : n.side === 'right'
                ? 'left-2.5 top-1/2 -translate-y-1/2'
                : n.side === 'left'
                ? 'right-2.5 top-1/2 -translate-y-1/2'
                : 'left-1.5 bottom-2 -translate-y-full'
            }`}
          >
            {n.name}
          </span>
        </div>
      ))}

      <span className="absolute bottom-3 left-4 text-[8px] uppercase tracking-[0.2em] text-[#F4F1EA]/30 [font-family:Inter,system-ui,sans-serif]">
        Operating Region / Schematic &mdash; Not To Scale
      </span>
    </div>
  );
}
