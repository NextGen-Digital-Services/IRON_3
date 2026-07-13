import { useState } from 'react';

// Asset Imports
import projectImg from '../assets/industrial_project.jpg';
import heroImg from '../assets/industrial_hero.jpg';
import pebImg from '../assets/peb_construction.jpg';
import factoryImg from '../assets/about_factory.jpg';
import demolitionImg from '../assets/demolition.jpg';
import scaffoldingImg from '../assets/scaffolding.jpg';
import scrapImg from '../assets/scrap_processing.jpg';

export default function Gallery() {
  const [filter, setFilter] = useState('All');

  const categories = [
    'All', 
    'Fabrication', 
    'Construction', 
    'Warehouses', 
    'Demolition', 
    'Scaffolding', 
    'Industrial Machinery', 
    'Structural Steel', 
    'Heavy Equipment', 
    'Project Execution'
  ];

  const images = [
    { title: 'CNC Oxy Profile Cutting', category: 'Fabrication', img: heroImg },
    { title: 'Heavy Excavator Demolition Works', category: 'Demolition', img: demolitionImg },
    { title: 'Scaffolding Materials Stockyard', category: 'Scaffolding', img: scaffoldingImg },
    { title: 'Ferrous Metal scrap Segregation', category: 'Industrial Machinery', img: scrapImg },
    { title: 'Structural Steel Column Erection', category: 'Construction', img: pebImg },
    { title: 'Completed Warehousing Complex', category: 'Warehouses', img: projectImg },
    { title: 'Dahej Plant Outer Workshop', category: 'Structural Steel', img: factoryImg },
    { title: 'Submerged Arc Welding column', category: 'Fabrication', img: heroImg },
    { title: 'Controlled Structural Dismantling', category: 'Demolition', img: demolitionImg },
    { title: 'Cuplock Scaffolding rental setup', category: 'Scaffolding', img: scaffoldingImg },
    { title: 'Hydraulic metal sorting crane', category: 'Heavy Equipment', img: scrapImg },
    { title: 'High-Altitude framing rafter', category: 'Project Execution', img: pebImg },
    { title: 'Logistics Distribution Yard', category: 'Warehouses', img: projectImg },
    { title: 'Structural Mezzanine Assembly', category: 'Construction', img: factoryImg },
    { title: 'Automatic Radial Drilling Machine', category: 'Industrial Machinery', img: heroImg },
    { title: 'Concrete Base PCC Leveling', category: 'Construction', img: pebImg },
    { title: 'Shuttering Plates stockyard', category: 'Scaffolding', img: scaffoldingImg },
    { title: 'Gas-cutting structural beam resizing', category: 'Fabrication', img: scrapImg },
    { title: 'Heavy process pylon framing', category: 'Structural Steel', img: heroImg },
    { title: 'Factory boiler shed clearing', category: 'Demolition', img: demolitionImg },
    { title: 'Standing Seam Roof Installation', category: 'Project Execution', img: projectImg },
    { title: 'High-Strength anchor bolt check', category: 'Construction', img: pebImg },
    { title: 'MS & GI Pipes warehouse supply', category: 'Structural Steel', img: scaffoldingImg },
    { title: 'Heavy Gantry Crane Erection', category: 'Heavy Equipment', img: demolitionImg },
    { title: 'CNC plasma profile cutter', category: 'Industrial Machinery', img: heroImg },
    { title: 'Ferrous structural scrap buyback', category: 'Demolition', img: scrapImg },
    { title: 'ISO multi-coat paint inspection', category: 'Project Execution', img: factoryImg },
    { title: 'Cuplock scaffolding load-test', category: 'Scaffolding', img: scaffoldingImg },
    { title: 'Finished steel platforms assembly', category: 'Fabrication', img: heroImg },
    { title: 'Turnkey chemical plant delivery', category: 'Warehouses', img: projectImg }
  ];

  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div className="bg-bg-light">
      
      {/* Header Banner */}
      <section className="bg-primary py-24 text-left relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={pebImg} alt="Gallery backdrop" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Media Assets</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Industrial Gallery</h1>
          <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
            Visual proof of our heavy engineering capacity, active site dismantling workflows, scaffolding inventory, and completed projects.
          </p>
        </div>
      </section>

      {/* Filter Menu */}
      <section className="py-12 bg-white border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl border transition-all duration-300 ${
                filter === cat
                  ? 'bg-secondary border-secondary text-white shadow-sm'
                  : 'bg-white border-gray-200 text-primary hover:border-primary hover:text-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Masonry-like Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm flex flex-col group">
                <div className="h-60 overflow-hidden relative bg-primary shrink-0">
                  <img 
                    src={image.img} 
                    alt={image.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider bg-secondary px-2.5 py-1.5 rounded-md">
                      {image.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 text-left flex-1 flex flex-col justify-center">
                  <h3 className="text-xs font-bold text-primary tracking-tight font-heading leading-tight truncate">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
