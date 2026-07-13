import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Wrench, 
  Layers, 
  Building, 
  CheckCircle2, 
  TrendingUp, 
  Workflow
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

// Assets
import heroImg from '../assets/industrial_hero.jpg';
import factoryImg from '../assets/about_factory.jpg';
import pebImg from '../assets/peb_construction.jpg';
import projectImg from '../assets/industrial_project.jpg';
import demolitionImg from '../assets/demolition.jpg';
import scaffoldingImg from '../assets/scaffolding.jpg';
import scrapImg from '../assets/scrap_processing.jpg';

export default function Capabilities() {
  const { setIsQuoteOpen } = useModal();
  const location = useLocation();

  // Scroll to anchor on load
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="bg-bg-light">
      
      {/* Page Hero Banner */}
      <section className="bg-primary py-24 text-left relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={pebImg} alt="Capabilities background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Operational Divisions</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Our Industrial Capabilities</h1>
          <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
            Delivering complete, highly coordinated industrial solutions from demolition and material recovery to structural fabrication, civil construction, and site execution.
          </p>
        </div>
      </section>

      {/* ==========================================
          PILLAR 01: SITE TRANSFORMATION
          ========================================== */}
      <section id="site-transformation" className="py-24 bg-white border-b border-gray-150 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Pillar Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 pb-8 border-b border-gray-100 text-left">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/25 text-secondary text-[10px] font-bold uppercase tracking-widest rounded-lg">
                <Wrench size={12} />
                Pillar 01
              </span>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                Site Transformation & Resource Management
              </h2>
              <p className="text-sm text-gray-500 font-body leading-relaxed">
                Everything required to safely transform an existing industrial site through demolition, dismantling, and professional material recovery. We prepare complex project zones for next-generation expansion.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <img src={demolitionImg} alt="Demolition site works" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>

          {/* Service Categories Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
            
            {/* Category 1: Demolition & Dismantling */}
            <div className="space-y-6 bg-[#F7F8FA] p-8 rounded-xl border border-gray-200/50 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-secondary p-3 rounded-xl shadow-xs">
                    <Workflow size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">Demolition & Dismantling</h3>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Clear the Existing. Prepare for What's Next.</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 font-body leading-relaxed pt-2">
                  At IRONEX, we execute heavy structural demolition and dismantling works under absolute engineering control. Our dismantling engineers conduct systematic risk analyses prior to clearing industrial sheds, factories, processing platforms, or obsolete plant frameworks. We utilize specialized hydraulic concrete shears, mechanical excavators, and ODC crane setups to drop components securely without affecting nearby operating lines.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold text-gray-500 font-body pt-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    <span>Industrial Structure Dismantling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    <span>Steel Shed Dismantling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    <span>Warehouse Dismantling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    <span>Selective Site Demolition</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    <span>Machinery & Equipment Removal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    <span>Structural Modifications</span>
                  </li>
                </ul>
              </div>

              {/* Demolition Photo Embed */}
              <div className="mt-8 rounded-xl overflow-hidden h-40 bg-primary">
                <img src={scrapImg} alt="Scrap processing demolition" className="w-full h-full object-cover opacity-90" />
              </div>
            </div>

            {/* Category 2: Industrial Scrap Management */}
            <div className="space-y-6 bg-[#F7F8FA] p-8 rounded-xl border border-gray-200/50 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-secondary p-3 rounded-xl shadow-xs">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">Industrial Scrap Management</h3>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Material Value, Managed Professionally.</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 font-body leading-relaxed pt-2">
                  Our metal recovery and scrap management division turns discarded factory materials and surplus metals into capital resources. We buy ferrous and non-ferrous construction scrap, old plant machinery, obsolete girders, and steel sheeting directly from site transformations. By providing on-site sorting, gas-cutting, and secure segregation machinery, we reduce project waste and ensure environmental compliance.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold text-gray-500 font-body pt-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    <span>Ferrous & Non-Ferrous Scrap Sourcing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    <span>Structural Steel Scrap Sourcing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    <span>Machinery & Obsolete Equipment Buyback</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    <span>Surplus Material Segregation & Clearance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    <span>Periodic Scrap Management Contracts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    <span>Tender & Auction Sourcing Compliance</span>
                  </li>
                </ul>
              </div>

              {/* Scrap Processing Photo Embed */}
              <div className="mt-8 rounded-xl overflow-hidden h-40 bg-primary">
                <img src={demolitionImg} alt="Dismantled site" className="w-full h-full object-cover opacity-90" />
              </div>
            </div>

          </div>

          {/* CTA Row */}
          <div className="mt-12 text-center">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-secondary hover:bg-opacity-95 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300"
            >
              Consult site transformation
            </button>
          </div>

        </div>
      </section>

      {/* ==========================================
          PILLAR 02: PROJECT MATERIALS
          ========================================== */}
      <section id="project-materials" className="py-24 bg-[#F7F8FA] border-b border-gray-150 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Pillar Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 pb-8 border-b border-gray-200 text-left">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/25 text-secondary text-[10px] font-bold uppercase tracking-widest rounded-lg">
                <Layers size={12} />
                Pillar 02
              </span>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                Project Materials & Access Systems
              </h2>
              <p className="text-sm text-gray-500 font-body leading-relaxed">
                Reliable supply of structural materials and temporary access systems to keep industrial and infrastructure projects moving efficiently.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <img src={scaffoldingImg} alt="Scaffolding access materials" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>

          {/* Detailed Descriptions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left mb-16">
            
            {/* Category 1: Iron, Steel Supply */}
            <div className="space-y-4 bg-white p-8 rounded-xl border border-gray-100 shadow-xs">
              <h3 className="text-lg font-bold text-primary">Iron, Steel & Building Material Supply</h3>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block -mt-1">Project-Ready Materials. Dependable Supply.</span>
              <p className="text-xs text-gray-500 font-body leading-relaxed pt-2">
                We act as a direct procurement partner for heavy infrastructure builders. We source structural steel, TMT bars, angles, channels, plates, and hollow sections directly from primary steel manufacturers like SAIL, JSW, and TATA. This ensures absolute material grade verification and consistency in stress performance. We bid against BOQs and manage scheduling logistics to deliver materials directly to GIDC locations.
              </p>
              <p className="text-xs text-gray-400 font-body italic leading-relaxed pt-1">
                Typical Uses: Primary framing, roof purlins, heavy machinery foundations, compound walls, concrete slab reinforcements, and gantry frames.
              </p>
            </div>

            {/* Category 2: Scaffolding access solutions */}
            <div className="space-y-4 bg-white p-8 rounded-xl border border-gray-100 shadow-xs">
              <h3 className="text-lg font-bold text-primary">Scaffolding, Formwork & Access Solutions</h3>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block -mt-1">Reliable Access. Continuous Progress.</span>
              <p className="text-xs text-gray-500 font-body leading-relaxed pt-2">
                Temporary access planning is critical to the safety of high-altitude structural installations. IRONEX offers premium scaffolding rentals and direct material sales. Our inventory includes cuplock scaffolding systems, H-frames, walk planks, shuttering plates, spans, adjustable base jacks, and safety couplers. All items undergo regular load tests to ensure they exceed safety regulations.
              </p>
              <p className="text-xs text-gray-400 font-body italic leading-relaxed pt-1">
                Typical Uses: High-elevation rafter fitting, brickwork access, concrete column shuttering, ceiling piping maintenance, and temporary bridge supports.
              </p>
            </div>

          </div>

          {/* Product Grid with Images and Explanations */}
          <div className="space-y-8 text-left mb-12">
            <h3 className="text-lg font-bold text-primary uppercase tracking-wider border-b border-gray-200 pb-3">
              Scaffolding & Structural Products Grid
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              
              {/* Product 1 */}
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xs flex flex-col justify-between h-72">
                <div className="h-32 bg-primary">
                  <img src={scaffoldingImg} alt="Cuplock systems" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider">Cuplock Scaffolding</h4>
                  <p className="text-[10px] text-gray-500 leading-relaxed font-body mt-1 line-clamp-2">Rigid vertical access structure. Best for concrete slabs and high elevations.</p>
                  <span className="text-[9px] font-bold text-secondary uppercase tracking-widest mt-2 block">Application: Slab Support</span>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xs flex flex-col justify-between h-72">
                <div className="h-32 bg-primary">
                  <img src={projectImg} alt="Structural steel plates" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider">Mild Steel Sections</h4>
                  <p className="text-[10px] text-gray-500 leading-relaxed font-body mt-1 line-clamp-2">T-sections, channels, angles, and purlins for robust steel sheds.</p>
                  <span className="text-[9px] font-bold text-secondary uppercase tracking-widest mt-2 block">Application: Roof Framing</span>
                </div>
              </div>

              {/* Product 3 */}
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xs flex flex-col justify-between h-72">
                <div className="h-32 bg-primary">
                  <img src={scaffoldingImg} alt="Adjustable Props" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider">Adjustable Props</h4>
                  <p className="text-[10px] text-gray-500 leading-relaxed font-body mt-1 line-clamp-2">Heavy-duty shoring props supporting beam framework and ceilings.</p>
                  <span className="text-[9px] font-bold text-secondary uppercase tracking-widest mt-2 block">Application: Formwork Shoring</span>
                </div>
              </div>

              {/* Product 4 */}
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xs flex flex-col justify-between h-72">
                <div className="h-32 bg-primary">
                  <img src={pebImg} alt="Structural pipes" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider">MS & GI Pipes</h4>
                  <p className="text-[10px] text-gray-500 leading-relaxed font-body mt-1 line-clamp-2">Structural circular pipes for industrial liquid transits and support scaffolding.</p>
                  <span className="text-[9px] font-bold text-secondary uppercase tracking-widest mt-2 block">Application: Utilities & Access</span>
                </div>
              </div>

            </div>
          </div>

          {/* CTA Row */}
          <div className="text-center">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-secondary hover:bg-opacity-95 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300"
            >
              Request material quote
            </button>
          </div>

        </div>
      </section>

      {/* ==========================================
          PILLAR 03: STEEL ENGINEERING
          ========================================== */}
      <section id="steel-engineering" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Pillar Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 pb-8 border-b border-gray-100 text-left">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/25 text-secondary text-[10px] font-bold uppercase tracking-widest rounded-lg">
                <Building size={12} />
                Pillar 03
              </span>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                Steel Engineering & Construction Execution
              </h2>
              <p className="text-sm text-gray-500 font-body leading-relaxed">
                End-to-end engineering solutions covering fabrication, construction, structural execution and industrial project support.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <img src={heroImg} alt="Steel fabrication shop" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>

          {/* Service Categories Breakdown */}
          <div className="space-y-16 text-left">
            
            {/* Category 1: Structural Steel & Fabrication */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-lg font-bold text-primary">Structural Steel & Fabrication</h3>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block -mt-2">Fabricated for Purpose. Built for Performance.</span>
                <p className="text-xs text-gray-500 font-body leading-relaxed">
                  Our fabrication plant handles high-precision steel processing, cutting, assembly, and welding under ISO certified protocols. We convert raw plates and rollings into heavy structural components (beams, columns, trusses, purlins). We verify every angle and splice against detailed engineering models to ensure zero-clash assemblies during field erection.
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-gray-500 font-body pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>Tekla 3D Model Verification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>Automatic Submerged Arc Welding (SAW)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>Industrial Sheds & Warehouses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>Mezzanines, Platforms & Walkways</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-xs border border-gray-150 aspect-[16/9]">
                  <img src={factoryImg} alt="Fabrication progress" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Category 2: Construction & Redevelopment */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-gray-100">
              <div className="lg:col-span-7 lg:order-last space-y-4">
                <h3 className="text-lg font-bold text-primary">Construction & Redevelopment</h3>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block -mt-2">From Cleared Ground to Working Asset.</span>
                <p className="text-xs text-gray-500 font-body leading-relaxed">
                  We bridge the gap between steel design and site civil contracting. Our construction division manages the preparation of structural foundations, site excavations, plain cement concrete (PCC) bases, reinforced concrete (RCC) columns, drainage networks, yard pavings, and structural masonry modifications. We coordinate civil foundations to fit the anchor-bolt coordinates of the fabricated steel columns perfectly.
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-gray-500 font-body pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>Heavy Civil foundations & RCC Columns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>PCC Base Leveling & Concrete Flooring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>Factory Extensions & Redevelopment Civil Works</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>Industrial Drainage & Yard Developments</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-xs border border-gray-150 aspect-[16/9]">
                  <img src={pebImg} alt="Civil construction site" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Category 3: Industrial Project Support */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-gray-100">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-lg font-bold text-primary">Industrial Project Support</h3>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block -mt-2">Connected Support for Complex Sites.</span>
                <p className="text-xs text-gray-500 font-body leading-relaxed">
                  Industrial operations require regular maintenance shutdowns and structural reinforcements. We offer specialized contractor support that coordinates materials, fabrication, and site execution under tight deadlines. This covers pipeline rack repairs, machinery platform updates, safety catwalk extensions, and rapid custom engineering supports.
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-gray-500 font-body pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>Site Material Coordination & Procurement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>Maintenance Fabrication & Shutdown Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>Catwalks, cat ladders & custom platforms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>Emergency structural damage reinforcements</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-xs border border-gray-150 aspect-[16/9]">
                  <img src={projectImg} alt="Project support works" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

          </div>

          {/* CTA Row */}
          <div className="mt-16 text-center">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-secondary hover:bg-opacity-95 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300"
            >
              Consult Project Execution
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
