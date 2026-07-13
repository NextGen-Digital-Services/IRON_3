import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCategory {
  name: string;
  tagline?: string;
  services: string[];
}

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
  categories?: ServiceCategory[];
  buttonText?: string;
}

export default function ServiceCard({ image, title, description, path, icon, categories, buttonText }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden flex flex-col group service-card-hover">
      {/* Card Image Container */}
      <div className="relative h-60 overflow-hidden shrink-0 bg-primary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-primary bg-opacity-20 group-hover:bg-opacity-35 transition-all duration-300" />
        
        {/* Service Icon Badge */}
        <div className="absolute bottom-4 left-4 bg-white text-secondary p-3 rounded-xl shadow-md border border-gray-50 flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-primary leading-snug group-hover:text-secondary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed font-body">
            {description}
          </p>

          {/* Categories & Bullet Lists */}
          {categories && categories.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-gray-150 text-left">
              {categories.map((cat, cIdx) => (
                <div key={cIdx} className="space-y-1">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-wider block">
                    {cat.name}
                  </span>
                  {cat.tagline && (
                    <span className="text-[9px] text-gray-400 italic block font-semibold">
                      {cat.tagline}
                    </span>
                  )}
                  <ul className="grid grid-cols-1 gap-1 text-[11px] text-gray-500 font-body mt-1">
                    {cat.services.slice(0, 3).map((s, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-1.5">
                        <span className="text-secondary mt-0.5">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                    {cat.services.length > 3 && (
                      <li className="text-[9px] text-gray-400 font-medium pl-3">
                        + {cat.services.length - 3} more services
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Explore Services Link */}
        <Link
          to={path}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary group-hover:text-secondary transition-colors mt-8 focus:outline-none pt-4 border-t border-gray-100"
        >
          <span>{buttonText || 'Read More'}</span>
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
