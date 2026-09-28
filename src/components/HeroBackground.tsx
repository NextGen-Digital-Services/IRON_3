import Slideshow from './Slideshow';

export type HeroImage = {
  src: string;
  alt: string;
};

type HeroBackgroundProps = {
  images: HeroImage[];
  interval?: number;
  className?: string;
};

export default function HeroBackground({
  images,
  interval = 4500,
  className = 'absolute inset-0',
}: HeroBackgroundProps) {
  if (images.length === 0) return null;
  const single = images.length === 1;

  return (
    <div className={`${className} overflow-hidden pointer-events-none`} aria-hidden="true">
      {single ? (
        <img
          src={images[0].src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <Slideshow
          images={images}
          interval={interval}
          showControls={false}
          overlay={false}
          className="absolute inset-0"
        />
      )}
      {/* Brand blue wash — deliberately light so the photo stays visible */}
      <div className="absolute inset-0 bg-[#07101A]/20" />
      {/* Legibility gradient — copy sits on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07101A]/90 via-[#07101A]/55 to-[#07101A]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07101A]/70 via-transparent to-transparent" />
    </div>
  );
}
