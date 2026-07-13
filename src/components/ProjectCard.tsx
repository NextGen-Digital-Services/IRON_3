import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  image: string;
  name: string;
  location: string;
  category: string;
  year: string;
  path: string;
}

export default function ProjectCard({ image, name, location, category, year, path }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 group relative flex flex-col h-[420px] shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Project Image and Hover Overlay */}
      <div className="relative w-full h-full overflow-hidden bg-primary flex-1">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Default subtle gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-300" />

        {/* Static Info overlay at bottom (visible when NOT hovered) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col text-white group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">{category}</span>
          <h3 className="text-xl font-bold font-heading line-clamp-1 mb-3">{name}</h3>
          
          <div className="flex items-center justify-between text-xs font-semibold text-gray-300">
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-secondary" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-secondary" />
              <span>{year}</span>
            </div>
          </div>
        </div>

        {/* Hover State Corporate Overlay */}
        <div className="absolute inset-0 bg-primary bg-opacity-95 flex flex-col justify-between p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-350 z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-3">{category}</span>
            <h3 className="text-2xl font-bold text-white font-heading leading-tight mb-4">{name}</h3>
            
            <div className="space-y-2 mt-6">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-300">
                <MapPin size={16} className="text-secondary shrink-0" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-300">
                <Calendar size={16} className="text-secondary shrink-0" />
                <span>Completion Year: {year}</span>
              </div>
            </div>
          </div>

          {/* Action Link */}
          <Link
            to={path}
            className="inline-flex items-center justify-between w-full border border-secondary hover:bg-secondary text-white hover:text-white font-bold uppercase tracking-widest text-xs px-5 py-3.5 rounded-xl transition-all duration-300 mt-auto focus:outline-none"
          >
            <span>View Project</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
