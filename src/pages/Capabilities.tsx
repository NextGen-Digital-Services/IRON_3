import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Wrench,
  Layers,
  Building,
  CheckCircle2,
  TrendingUp
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
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Four Specialised Business Divisions</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Different Industrial Problems. One Operating Standard.</h1>
          <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
            Each IRONEX division is built around a defined requirement, specialised operating process and relevant commercial model. Clients may work with one division independently or use multiple divisions where the project requires connected capabilities.
          </p>
        </div>
      </section>

      {/* ==========================================
          DIVISION 01: INDUSTRIAL SCRAP
          ========================================== */}
      <section id="site-transformation" className="py-24 bg-white border-b border-gray-150 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Division Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 pb-8 border-b border-gray-100 text-left">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/25 text-secondary text-[10px] font-bold uppercase tracking-widest rounded-lg">
                <Wrench size={12} />
                Division 01
              </span>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                Industrial Scrap Procurement &amp; Processing
              </h2>
              <p className="text-sm text-gray-500 font-body leading-relaxed">
                Industrial scrap requires more than a price per kilogram. IRONEX participates as a direct buyer in government, PSU, corporate, industrial and private scrap auctions and tenders - purchasing scrap lots for our own account and coordinating inspection, commercial evaluation, lifting, segregation, processing, transportation and onward resale.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <img src={demolitionImg} alt="Scrap site works" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>

          {/* Service Categories Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
            
            {/* Category 1: Procurement & Processing */}
            <div className="space-y-6 bg-[#F7F8FA] p-8 rounded-xl border border-gray-200/50 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-secondary p-3 rounded-xl shadow-xs">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">Scrap Procurement &amp; Processing</h3>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Material Value, Managed Professionally.</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 font-body leading-relaxed pt-2">
                  IRONEX procures ferrous and non-ferrous industrial scrap from projects, dismantling works, manufacturing units and surplus stock. The division focuses on genuine capability, clear assessment and practical processing - sorting, segregating, cutting and packing scrap for onward movement to processors and end buyers.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold text-gray-500 font-body pt-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    <span>Ferrous & Non-Ferrous Scrap Sourcing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    <span>Scrap Segregation & Sorting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    <span>Cutting & Packing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    <span>Weighing & Valuation</span>
                  </li>
                </ul>
              </div>

              {/* Scrap Photo Embed */}
              <div className="mt-8 rounded-xl overflow-hidden h-40 bg-primary">
                <img src={scrapImg} alt="Scrap processing" className="w-full h-full object-cover opacity-90" />
              </div>
            </div>

            {/* Category 2: Dismantling, Buyback & Logistics */}
            <div className="space-y-6 bg-[#F7F8FA] p-8 rounded-xl border border-gray-200/50 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-secondary p-3 rounded-xl shadow-xs">
                    <Wrench size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">Dismantling, Buyback &amp; Logistics</h3>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Clear the Existing. Recover the Value.</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 font-body leading-relaxed pt-2">
                  The division takes up structure dismantling and demolition to recover industrial material, and buys back obsolete machinery, girders and steel sheeting. Collection is supported by vehicles and a defined network, with clear communication on what the division can commit to in terms of volumes, timelines and commercial terms.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold text-gray-500 font-body pt-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    <span>Structure Dismantling & Demolition</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    <span>Machinery & Obsolete Equipment Buyback</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    <span>Scrap Collection & Transport</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    <span>Surplus Material Clearance</span>
                  </li>
                </ul>
              </div>

              {/* Demolition Photo Embed */}
              <div className="mt-8 rounded-xl overflow-hidden h-40 bg-primary">
                <img src={demolitionImg} alt="Dismantled site" className="w-full h-full object-cover opacity-90" />
              </div>
            </div>

          </div>

          {/* Important Clarification & Suitable Requirements */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <div className="bg-primary text-white p-8 rounded-xl border border-primary h-full">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-3">Important Clarification</span>
                <p className="text-sm leading-relaxed font-body">
                  IRONEX does not operate auctions or provide scrap-disposal consultancy. It participates as a buyer.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <h3 className="text-base font-bold text-primary mb-4">Suitable Requirements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold text-gray-500 font-body">
                {['Government scrap auctions','PSU scrap tenders','Corporate industrial scrap','Manufacturing-plant scrap','Machinery and structural scrap','Warehouse and logistics scrap','Private industrial disposals','Recurring scrap procurement'].map((req) => (
                  <span key={req} className="flex items-center gap-2 bg-[#F7F8FA] border border-gray-200/60 rounded-lg px-3 py-2.5">
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    {req}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Row */}
          <div className="mt-12 text-center space-y-3">
            <p className="text-xs text-gray-400 italic font-body">
              The highest bid may win attention. The most prepared buyer completes the lifting.
            </p>
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-secondary hover:bg-opacity-95 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300"
            >
              Submit Scrap-Lot Details
            </button>
          </div>

        </div>
      </section>

      {/* ==========================================
          DIVISION 02: SCAFFOLDING & FORMWORK
          ========================================== */}
      <section id="project-materials" className="py-24 bg-[#F7F8FA] border-b border-gray-150 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Division Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 pb-8 border-b border-gray-200 text-left">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/25 text-secondary text-[10px] font-bold uppercase tracking-widest rounded-lg">
                <Layers size={12} />
                Division 02
              </span>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                Scaffolding &amp; Formwork Systems
              </h2>
              <p className="text-sm text-gray-500 font-body leading-relaxed">
                Reliable access systems for workfronts that cannot remain idle. IRONEX manufactures, rents and sells scaffolding and related systems for industrial, infrastructure, commercial and construction projects - with system type, component quantities, inventory availability, rental duration and dispatch requirements verified before commitment.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <img src={scaffoldingImg} alt="Scaffolding access systems" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>

          {/* Detailed Descriptions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left mb-16">
            
            {/* Category 1: Scaffolding Supply & Sales */}
            <div className="space-y-4 bg-white p-8 rounded-xl border border-gray-100 shadow-xs">
              <h3 className="text-lg font-bold text-primary">Scaffolding Supply &amp; Sales</h3>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block -mt-1">Rigid Access. Reliable Supply.</span>
              <p className="text-xs text-gray-500 font-body leading-relaxed pt-2">
                The division supplies new and sound reconditioned scaffolding equipment including cuplock systems, H-frames, pipes, walk planks and accessories. Material is checked before dispatch, and the division is straightforward about availability, rates and timelines before confirming an order.
              </p>
              <p className="text-xs text-gray-400 font-body italic leading-relaxed pt-1">
                Typical Uses: Construction access, high-elevation fitting, plastering and painting platforms, and temporary access structures.
              </p>
            </div>

            {/* Category 2: Scaffolding & Formwork Rental */}
            <div className="space-y-4 bg-white p-8 rounded-xl border border-gray-100 shadow-xs">
              <h3 className="text-lg font-bold text-primary">Scaffolding &amp; Formwork Rental Services</h3>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block -mt-1">Inventory. Mobilisation. Recovery.</span>
              <p className="text-xs text-gray-500 font-body leading-relaxed pt-2">
                For projects that need temporary access without purchasing equipment, the division offers rental services backed by 1,000+ MT of scaffolding inventory. Rental includes defined quantities, agreed rates, mobilisation planning and clear commercial terms covering period, transport and responsibilities.
              </p>
              <p className="text-xs text-gray-400 font-body italic leading-relaxed pt-1">
                Typical Uses: Slab support, column shuttering, ceiling maintenance access, and temporary bridge supports.
              </p>
            </div>

          </div>

          {/* Product Grid with Images and Explanations */}
          <div className="space-y-8 text-left mb-12">
            <h3 className="text-lg font-bold text-primary uppercase tracking-wider border-b border-gray-200 pb-3">
              Scaffolding Equipment Range
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
                  <img src={pebImg} alt="H-Frame scaffolding" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider">H-Frame Scaffolding</h4>
                  <p className="text-[10px] text-gray-500 leading-relaxed font-body mt-1 line-clamp-2">Modular access towers for finishing, plastering and maintenance work.</p>
                  <span className="text-[9px] font-bold text-secondary uppercase tracking-widest mt-2 block">Application: Maintenance Access</span>
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
                  <img src={projectImg} alt="Walk planks and couplers" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider">Walk Planks &amp; Couplers</h4>
                  <p className="text-[10px] text-gray-500 leading-relaxed font-body mt-1 line-clamp-2">Secure working platforms and safety couplers for elevated work.</p>
                  <span className="text-[9px] font-bold text-secondary uppercase tracking-widest mt-2 block">Application: Working Platforms</span>
                </div>
              </div>

            </div>
          </div>

          {/* Complete Product Range & Suitable Customers */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200/60 rounded-xl p-6">
              <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Complete Product Range</h4>
              <div className="flex flex-wrap gap-2">
                {['Cuplock verticals','Cuplock ledgers','H-Frames','Cross braces','Walkway platforms','Adjustable props','Base jacks','U-head jacks','Joint pins','Staircase components','Fabricated accessories'].map((p) => (
                  <span key={p} className="text-[10px] font-bold text-gray-500 bg-[#F7F8FA] border border-gray-200/60 rounded-lg px-3 py-1.5">{p}</span>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-200/60 rounded-xl p-6">
              <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Suitable Customers</h4>
              <div className="flex flex-wrap gap-2">
                {['Builders','EPC contractors','Industrial maintenance companies','Infrastructure contractors','Ports and logistics facilities','Warehouses','Project contractors'].map((c) => (
                  <span key={c} className="text-[10px] font-bold text-gray-500 bg-[#F7F8FA] border border-gray-200/60 rounded-lg px-3 py-1.5">{c}</span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Row */}
          <div className="mt-12 text-center space-y-3">
            <p className="text-xs text-gray-400 italic font-body">
              Scaffolding may be temporary. Its effect on safety and productivity is not.
            </p>
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-secondary hover:bg-opacity-95 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300"
            >
              Check Scaffolding Availability
            </button>
          </div>

        </div>
      </section>

      {/* ==========================================
          DIVISION 03: STEEL & MATERIAL SUPPLY
          ========================================== */}
      <section id="steel-engineering" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Division Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 pb-8 border-b border-gray-100 text-left">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/25 text-secondary text-[10px] font-bold uppercase tracking-widest rounded-lg">
                <Building size={12} />
                Division 03
              </span>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                Steel &amp; Construction-Material Supply
              </h2>
              <p className="text-sm text-gray-500 font-body leading-relaxed">
                Material supply starts with the correct specification. IRONEX supplies structural steel, pipes, sheets, TMT bars, construction materials and all roofing solutions - reviewing product, grade, size, thickness, brand, quantity and delivery requirement before issuing the commercial offer.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <img src={heroImg} alt="Steel and material supply" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>

          {/* Detailed Descriptions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left mb-16">
            
            {/* Category 1: Structural Steel & Pipes Supply */}
            <div className="space-y-4 bg-[#F7F8FA] p-8 rounded-xl border border-gray-200/50 shadow-xs">
              <h3 className="text-lg font-bold text-primary">Structural Steel &amp; Pipe Supply</h3>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block -mt-1">Project-Ready Materials. Dependable Supply.</span>
              <p className="text-xs text-gray-500 font-body leading-relaxed pt-2">
                The division supplies structural steel, MS and GI pipes and related material against defined specifications and quantities. Enquiries are reviewed for genuine feasibility before quoting - covering sizes, grades, quantities, transport and delivery timelines.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-gray-500 font-body pt-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-secondary shrink-0" />
                  <span>Structural Steel Sections</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-secondary shrink-0" />
                  <span>MS &amp; GI Pipes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-secondary shrink-0" />
                  <span>Specification-Based Supply</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-secondary shrink-0" />
                  <span>Delivery &amp; Transport Coordination</span>
                </li>
              </ul>
            </div>

            {/* Category 2: Roofing & Building Materials */}
            <div className="space-y-4 bg-[#F7F8FA] p-8 rounded-xl border border-gray-200/50 shadow-xs">
              <h3 className="text-lg font-bold text-primary">Roofing &amp; Building Materials</h3>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block -mt-1">The Right Material. For the Right Job.</span>
              <p className="text-xs text-gray-500 font-body leading-relaxed pt-2">
                Beyond structural steel and pipes, the division supplies roofing sheets and building materials used in industrial, commercial and residential construction. Product clarity and honest capability come first - if a requirement is outside the division's current supply capacity, it is communicated before any commitment.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-gray-500 font-body pt-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-secondary shrink-0" />
                  <span>Roofing Sheets &amp; Accessories</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-secondary shrink-0" />
                  <span>Building &amp; Construction Materials</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-secondary shrink-0" />
                  <span>Product Availability Confirmation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-secondary shrink-0" />
                  <span>Clear Rate &amp; Quantity Terms</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Service Models & Suitable Customers */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#F7F8FA] border border-gray-200/60 rounded-xl p-6">
              <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Service Models</h4>
              <div className="flex flex-wrap gap-2">
                {['Spot purchase','Project-based supply','Recurring monthly supply','BOQ-based procurement','Brand-specific sourcing','Scheduled deliveries','Industrial and contractor supply'].map((s) => (
                  <span key={s} className="text-[10px] font-bold text-gray-500 bg-white border border-gray-200/60 rounded-lg px-3 py-1.5">{s}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#F7F8FA] border border-gray-200/60 rounded-xl p-6">
              <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Suitable Customers</h4>
              <div className="flex flex-wrap gap-2">
                {['Builders and developers','Fabricators','Warehouses','Industrial plants','Infrastructure contractors','Retail and institutional buyers','EPC companies'].map((c) => (
                  <span key={c} className="text-[10px] font-bold text-gray-500 bg-white border border-gray-200/60 rounded-lg px-3 py-1.5">{c}</span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Row */}
          <div className="mt-12 text-center space-y-3">
            <p className="text-xs text-gray-400 italic font-body">
              A material supplier should solve the requirement - not become another requirement to manage.
            </p>
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-secondary hover:bg-opacity-95 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300"
            >
              Upload Your BOQ
            </button>
          </div>

        </div>
      </section>

      {/* ==========================================
          DIVISION 04: FABRICATION & CIVIL WORKS
          ========================================== */}
      <section id="fabrication-civil" className="py-24 bg-[#F7F8FA] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Division Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 pb-8 border-b border-gray-200 text-left">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/25 text-secondary text-[10px] font-bold uppercase tracking-widest rounded-lg">
                <TrendingUp size={12} />
                Division 04
              </span>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                Structural Fabrication &amp; Civil Works
              </h2>
              <p className="text-sm text-gray-500 font-body leading-relaxed">
                From drawings and measurements to physical execution. IRONEX connects site review, measurements, scope definition, material planning, fabrication and erection through one execution process.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <img src={factoryImg} alt="Structural fabrication works" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>

          {/* Service Categories Breakdown */}
          <div className="space-y-16 text-left">
            
            {/* Category 1: Structural Fabrication */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-lg font-bold text-primary">Structural Fabrication</h3>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block -mt-2">Fabricated for Purpose. Built for Performance.</span>
                <p className="text-xs text-gray-500 font-body leading-relaxed">
                  The division takes up steel processing, cutting, assembly and welding to produce structural components - beams, columns, trusses, platforms and purlins - as per drawings and specifications. Practical engineering understanding is applied to every drawing review, with clear communication on what can be delivered and by when.
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-gray-500 font-body pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>Drawing &amp; Specification Review</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>Steel Cutting, Assembly &amp; Welding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>Beams, Columns, Trusses &amp; Platforms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>On-Site &amp; Workshop Fabrication</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-xs border border-gray-150 aspect-[16/9]">
                  <img src={projectImg} alt="Fabrication progress" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Category 2: Civil Works & Execution */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-gray-100">
              <div className="lg:col-span-7 lg:order-last space-y-4">
                <h3 className="text-lg font-bold text-primary">Civil Works &amp; Execution</h3>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block -mt-2">From Foundation to Final Finish.</span>
                <p className="text-xs text-gray-500 font-body leading-relaxed">
                  The division undertakes civil works and construction execution covering foundations, site works, structural and finishing activities. Scope, material responsibility, site access and timelines are agreed before work begins, and the client is updated through execution.
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-gray-500 font-body pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>Foundations &amp; Site Works</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>Structural &amp; Finishing Works</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>Industrial &amp; Commercial Civil Execution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>Clear Scope &amp; Timeline Agreement</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-xs border border-gray-150 aspect-[16/9]">
                  <img src={pebImg} alt="Civil construction site" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

          </div>

          {/* Capability Areas & Suitable Customers */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200/60 rounded-xl p-6">
              <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Capability Areas</h4>
              <div className="flex flex-wrap gap-2">
                {['Structural steel fabrication','Industrial sheds','Platforms','Walkways','Staircases','Handrails','Equipment-support structures','Pipe-support structures','Repairs and modifications','Structural strengthening','Site erection','Foundations','Pedestals','Industrial civil works','Selected commercial civil works'].map((a) => (
                  <span key={a} className="text-[10px] font-bold text-gray-500 bg-[#F7F8FA] border border-gray-200/60 rounded-lg px-3 py-1.5">{a}</span>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-200/60 rounded-xl p-6">
              <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Suitable Customers</h4>
              <div className="flex flex-wrap gap-2">
                {['Industrial plants','Ports','Logistics facilities','Warehouses','Builders','EPC contractors','Government contractors','Commercial project owners'].map((c) => (
                  <span key={c} className="text-[10px] font-bold text-gray-500 bg-[#F7F8FA] border border-gray-200/60 rounded-lg px-3 py-1.5">{c}</span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Row */}
          <div className="mt-12 text-center space-y-3">
            <p className="text-xs text-gray-400 italic font-body">
              A structure is not complete because it looks correct on paper. It is complete when it performs correctly on site.
            </p>
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-secondary hover:bg-opacity-95 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300"
            >
              Submit Your Project Scope
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
