type NodeDef = {
  name: string;
  x: number;
  y: number;
  side: 'left' | 'right' | 'above' | 'below';
  primary?: boolean;
};

const nodes: NodeDef[] = [
  { name: 'THANE', x: 35, y: 28, side: 'above' },
  { name: 'BHIWANDI', x: 68, y: 20, side: 'right' },
  { name: 'NAVI MUMBAI', x: 72, y: 47, side: 'right', primary: true },
  { name: 'MUMBAI', x: 28, y: 48, side: 'left' },
  { name: 'JNPT / NHAVA SHEVA', x: 43, y: 70, side: 'right' },
  { name: 'PANVEL', x: 68, y: 65, side: 'left' },
  { name: 'RAIGAD', x: 87, y: 84, side: 'left' },
];

const paths = [
  'M35,28 Q51.5,21.5 68,20',
  'M35,28 Q55,33 72,47',
  'M35,28 Q33,36.5 28,48',
  'M28,48 Q33.5,60 43,70',
  'M28,48 Q50,44 72,47',
  'M43,70 Q55,61 72,47',
  'M72,47 Q74,33 68,20',
  'M72,47 Q70,56 68,65',
  'M68,20 Q71.5,42 68,65',
  'M68,65 Q75.5,72.5 87,84',
  'M72,47 Q83,62 87,84',
];

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
            strokeOpacity="0.55"
            strokeWidth="1"
            strokeDasharray="4 5"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {nodes.map((n) => (
        <div key={n.name} className="absolute" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
          {n.primary && (
            <span
              className="absolute -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(198,107,69,0.22) 0%, rgba(198,107,69,0.07) 45%, transparent 70%)',
              }}
            />
          )}
          <span
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C66B45] ${
              n.primary ? 'w-[9px] h-[9px]' : 'w-[6px] h-[6px]'
            }`}
          />
          <span
            className={
              n.primary
                ? 'absolute left-2.5 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10.5px] sm:text-[11.5px] uppercase tracking-[0.1em] font-semibold text-[#F4F1EA]'
                : n.side === 'right'
                ? 'absolute left-2.5 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] sm:text-[11px] uppercase tracking-[0.1em] text-[#F4F1EA]/55'
                : n.side === 'left'
                ? 'absolute right-2.5 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] sm:text-[11px] uppercase tracking-[0.1em] text-[#F4F1EA]/55'
                : n.side === 'above'
                ? 'absolute left-1/2 -translate-x-1/2 bottom-2.5 whitespace-nowrap text-[10px] sm:text-[11px] uppercase tracking-[0.1em] text-[#F4F1EA]/55'
                : 'absolute left-1/2 -translate-x-1/2 top-3 whitespace-nowrap text-[10px] sm:text-[11px] uppercase tracking-[0.1em] text-[#F4F1EA]/55'
            }
          >
            {n.name}
          </span>
        </div>
      ))}

      <span className="absolute bottom-3 left-4 text-[8px] uppercase tracking-[0.2em] text-[#F4F1EA]/30">
        Operating Region / Schematic &mdash; Not To Scale
      </span>
    </div>
  );
}
