import React, { useState } from 'react';
import {
  Ship,
  Plane,
  Truck,
  Train,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Check,
  MapPin,
  Phone,
  Mail,
  Globe,
  Layers,
  Zap,
  Sliders,
  Users,
  Cpu,
  Network,
  Send,
  BookOpen,
  ArrowUp,
  FileText,
  LayoutGrid,
  DollarSign,
  TrendingUp,
  UserCheck,
  Database,
  Eye,
  Settings,
  Building2,
  Clock,
  IndianRupee,
  Route,
  ClipboardList,
  Fuel,
  Navigation,
  ClipboardCheck,
  FileCheck,
  Receipt,
  Wallet,
  Handshake,
  Gift,
  Calculator,
  BarChart3,
  ShieldCheck,
  LineChart,
  Rocket
} from 'lucide-react';
import { NrsLogo } from './NrsLogo';

const heroLogisticsImage = '/src/assets/images/multimodal_freight_logistics_1791449677775.jpg';
const reachStackerImage = '/src/assets/images/container_terminal_reach_stacker_1791449699918.jpg';
const blueTruckImage = '/src/assets/images/blue_commercial_truck_highway_1791452184337.jpg';
const freightTrainImage = '/src/assets/images/freight_train_intermodal_tracks_1791452201670.jpg';

interface FullExactLandingPageProps {
  onRequestConsultation: (topic?: string) => void;
  onOpenBrochure: () => void;
}

export const FullExactLandingPage: React.FC<FullExactLandingPageProps> = ({
  onRequestConsultation,
  onOpenBrochure
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    corporateEmail: '',
    phone: '',
    solutionSuite: 'Freight Forwarding Solution',
    deploymentPreference: 'ERP Agnostic Model (Oracle, Microsoft, Zoho)',
    requirements: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.corporateEmail) return;
    setFormSubmitted(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#0B1320] overflow-x-hidden">
      
      {/* ============================================================== */}
      {/* SECTION 1: HERO — EDITORIAL MASTHEAD & PANORAMIC VISUAL DECK   */}
      {/* ============================================================== */}
      <section className="relative w-full bg-[#FAF8F5] border-b border-[#DDD6CC]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-12 lg:pt-14 lg:pb-16">
          
          {/* Upper Editorial Masthead */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-10 border-b border-[#DDD6CC]">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#C87D20]" />
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#0D7A72] uppercase">
                  INNOVATIONS • TECHNOLOGY • CONSULTING
                </span>
              </div>

              <h1 className="font-display text-5xl sm:text-7xl lg:text-[84px] font-bold text-[#0B1320] tracking-tight leading-[0.94] uppercase">
                NRS <span className="text-[#0D7A72]">CONSULTING</span>
              </h1>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center lg:items-end justify-end gap-3.5">
              <button
                onClick={() => scrollToSection('explore-solutions')}
                className="px-7 py-4 bg-[#0B1320] hover:bg-[#0D7A72] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Explore solutions</span>
                <ArrowUpRight className="w-4 h-4 text-[#E5A93C]" />
              </button>

              <button
                onClick={() => scrollToSection('contact-section')}
                className="px-7 py-4 bg-white hover:bg-[#F1ECE2] border border-[#0B1320] text-[#0B1320] text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Contact NRS</span>
                <ArrowRight className="w-4 h-4 text-[#0D7A72]" />
              </button>
            </div>
          </div>

          {/* Lower Widescreen Logistics Showcase + 4-Mode Architectural Dock */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 border border-[#0B1320] bg-[#0B1320]">
            
            {/* Widescreen Photograph */}
            <div className="lg:col-span-9 relative h-[340px] sm:h-[440px] lg:h-[500px] overflow-hidden">
              <img
                src={heroLogisticsImage}
                alt="Multi-modal logistics fleet: ocean container ship, freight trucks, cargo train, airplane"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/80 via-transparent to-[#0B1320]/20 pointer-events-none" />
            </div>

            {/* Right Vertical Mode Selector Deck */}
            <div className="lg:col-span-3 bg-[#0B1320] text-white flex flex-col justify-between divide-y divide-white/10 border-t lg:border-t-0 lg:border-l border-white/15">
              {[
                { label: 'OCEAN', icon: Ship, target: 'solution-freight', code: '01 / SEA' },
                { label: 'AIR', icon: Plane, target: 'solution-freight', code: '02 / AIR' },
                { label: 'ROAD', icon: Truck, target: 'solution-road', code: '03 / LAND' },
                { label: 'RAIL', icon: Train, target: 'solution-rail', code: '04 / RAIL' }
              ].map((mode, idx) => {
                const MIcon = mode.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => scrollToSection(mode.target)}
                    className="flex-1 px-6 py-5 flex items-center justify-between text-left hover:bg-[#0D7A72]/25 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 border border-white/20 bg-white/5 flex items-center justify-center group-hover:border-[#E5A93C] group-hover:bg-[#E5A93C]/15 transition-colors">
                        <MIcon className="w-4 h-4 text-[#E5A93C]" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-stone-400 block">{mode.code}</span>
                        <span className="font-display text-lg font-bold tracking-wider text-white group-hover:text-[#E5A93C] transition-colors">
                          {mode.label}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 2: EXPLORE THE SOLUTIONS — EDITORIAL INDEX LEDGER      */}
      {/* ============================================================== */}
      <section id="explore-solutions" className="py-20 lg:py-24 bg-[#FAF8F5] border-b border-[#DDD6CC]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Editorial Column */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2.5">
                <span className="w-2 h-2 bg-[#0D7A72]" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#0D7A72]">
                  INTEGRATED LOGISTICS MANAGEMENT
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#0B1320] tracking-tight leading-[1.05] uppercase">
                EXPLORE THE SOLUTIONS
              </h2>

              <p className="text-base text-stone-600 leading-relaxed pt-2 border-t border-[#DDD6CC]">
                Our unified platform brings together Road and Rail shipment management with warehousing solutions, enabling a fully integrated supply chain ecosystem.
              </p>
            </div>

            {/* Right Interactive Architectural Ledger */}
            <div className="lg:col-span-7 border-t-2 border-[#0B1320] divide-y divide-[#DDD6CC] bg-white border-x border-b border-x-[#DDD6CC] border-b-[#DDD6CC]">
              {[
                {
                  id: 'solution-freight',
                  num: '01',
                  modes: 'OCEAN / AIR / ROAD / RAIL',
                  title: 'FREIGHT FORWARDING SOLUTION',
                  icon: Ship
                },
                {
                  id: 'solution-multimodal',
                  num: '02',
                  modes: 'ROAD / RAIL / COASTAL',
                  title: 'MULTI-MODAL LOGISTICS SOLUTIONS',
                  icon: Layers
                },
                {
                  id: 'solution-road',
                  num: '03',
                  modes: 'ROAD',
                  title: 'ROAD TRANSPORTATION SUITE',
                  icon: Truck
                },
                {
                  id: 'solution-rail',
                  num: '04',
                  modes: 'RAIL',
                  title: 'RAIL LOGISTICS SOLUTIONS',
                  icon: Train
                }
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#F3EFE8] transition-colors cursor-pointer group"
                  >
                    <div className="flex items-start sm:items-center gap-5">
                      <span className="font-mono text-2xl sm:text-3xl font-bold text-[#C87D20] shrink-0">
                        {item.num}.
                      </span>
                      <div className="space-y-1">
                        <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#0D7A72] block">
                          {item.modes}
                        </span>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-[#0B1320] group-hover:text-[#0D7A72] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#E5DFD5]">
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-600 group-hover:text-[#0B1320]">
                        Explore Architecture
                      </span>
                      <div className="w-10 h-10 border border-[#D8D2C7] bg-[#FAF8F5] group-hover:bg-[#0B1320] group-hover:border-[#0B1320] group-hover:text-white flex items-center justify-center transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 3: SOLUTION 01 — FREIGHT FORWARDING SOLUTION           */}
      {/* Layout: Widescreen Visual Split + 4-Col Pillar Table + Spec Rows */}
      {/* ============================================================== */}
      <section id="solution-freight" className="py-20 lg:py-28 bg-white border-b border-[#DDD6CC]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-14">
          
          {/* Editorial Section Masthead */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10 border-b-2 border-[#0B1320]">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-[#0B1320] text-[#E5A93C] font-mono text-xs font-bold">
                  01
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#0D7A72]">
                  01 · END-TO-END FREIGHT FORWARDING MANAGEMENT
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#0B1320] tracking-tight uppercase">
                FREIGHT FORWARDING SOLUTION
              </h2>
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-3xl">
                Transform traditional freight forwarding operations into a fully digital, automated workflow—from customer enquiry to final shipment delivery.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-2.5">
              <span className="px-4 py-2 bg-[#0D7A72] text-white text-xs font-bold uppercase tracking-wider">
                Digitize. Automate. Deliver.
              </span>
              <span className="px-4 py-2 bg-[#0B1320] text-[#E5A93C] text-xs font-bold uppercase tracking-wider">
                Cloud ERP for Freight Forwarders
              </span>
            </div>
          </div>

          {/* Row 1: Widescreen Visual Frame + Midnight Control & Benefits Console */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#0B1320]">
            
            {/* Left 7 Cols: Photography & Transport Mode Strip */}
            <div className="lg:col-span-7 flex flex-col justify-between bg-[#0B1320]">
              <div className="relative h-[340px] sm:h-[420px] overflow-hidden">
                <img
                  src={heroLogisticsImage}
                  alt="Freight Forwarding Ocean & Air Fleet"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320] via-transparent to-black/30 pointer-events-none" />

                {/* Top Overlay Badge */}
                <div className="absolute top-5 left-5 flex flex-wrap items-center gap-2">
                  <span className="bg-[#0B1320]/90 backdrop-blur-md text-[#E5A93C] font-mono text-xs font-bold px-3.5 py-1.5 border border-white/15">
                    CLOUD ERP FOR FREIGHT FORWARDERS
                  </span>
                </div>

                {/* Bottom Audience Bar */}
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="bg-[#0D7A72]/95 text-white text-xs sm:text-sm font-bold px-4 py-3 flex items-center gap-3 border border-white/20">
                    <Users className="w-4 h-4 text-[#E5A93C] shrink-0" />
                    <span>Supporting Freight Forwarders, NVOCCs, 3PLs &amp; 4PLs</span>
                  </div>
                </div>
              </div>

              {/* 4 Transport Modes Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/15 border-t border-white/15 bg-[#121C2D] text-white">
                {[
                  { icon: Ship, label: 'OCEAN' },
                  { icon: Plane, label: 'AIR' },
                  { icon: Truck, label: 'ROAD' },
                  { icon: Train, label: 'RAIL' }
                ].map((m, idx) => {
                  const MIcon = m.icon;
                  return (
                    <div key={idx} className="py-3.5 px-4 flex items-center justify-center gap-2.5 text-xs font-bold tracking-widest">
                      <MIcon className="w-4 h-4 text-[#E5A93C]" />
                      <span>{m.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right 5 Cols: Core Control Capabilities & Benefits */}
            <div className="lg:col-span-5 bg-[#0B1320] text-white p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/15 space-y-8">
              
              {/* 6 Core Control Capabilities */}
              <div>
                <span className="font-mono text-xs font-bold tracking-[0.18em] text-[#E5A93C] uppercase block mb-4">
                  CORE CONTROL CAPABILITIES
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-white/15 border border-white/15">
                  {[
                    { icon: LayoutGrid, label: 'Single Window Visibility' },
                    { icon: MapPin, label: 'Real-Time Tracking' },
                    { icon: FileText, label: 'Automated Documentation' },
                    { icon: DollarSign, label: 'Multi-Currency Billing' },
                    { icon: TrendingUp, label: 'Profitability Analytics' },
                    { icon: UserCheck, label: 'Carrier Performance' }
                  ].map((cap, i) => {
                    const CapIcon = cap.icon;
                    return (
                      <div
                        key={i}
                        className="bg-[#121C2D] p-4 flex flex-col justify-between gap-3 hover:bg-[#192840] transition-colors"
                      >
                        <CapIcon className="w-4 h-4 text-[#2DD4BF]" />
                        <span className="text-xs font-bold text-white leading-snug">{cap.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Benefits Ledger */}
              <div className="pt-6 border-t border-white/15">
                <h4 className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#2DD4BF] mb-3.5">
                  BENEFITS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Reduced Manual Data Entry',
                    'Faster Shipment Processing',
                    'Improved Operational Accuracy',
                    'Better Customer Responsiveness',
                    'Standardized Processes'
                  ].map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs text-stone-200 font-medium bg-white/[0.04] px-3 py-2 border border-white/10"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A93C] shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Row 2: Complete Freight Operations Control — 4-Column Architectural Table */}
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#0D7A72] block">
                  COMPLETE FREIGHT OPERATIONS CONTROL
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0B1320] mt-1">
                  Manage the entire shipment lifecycle through a single intelligent platform.
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#0B1320] divide-y sm:divide-y-0 sm:divide-x divide-[#DDD6CC] bg-[#FAF8F5]">
              {[
                {
                  num: '01',
                  icon: Truck,
                  title: 'SHIPMENT MANAGEMENT',
                  items: [
                    'End-to-End Shipment Monitoring',
                    'Multi-modal Shipment Planning',
                    'Booking Management',
                    'Shipment Alerts & Notifications'
                  ]
                },
                {
                  num: '02',
                  icon: Ship,
                  title: 'FREIGHT MANAGEMENT',
                  items: [
                    'Rate Management',
                    'Carrier Selection',
                    'Contracted Tariff Management',
                    'Booking Automation'
                  ]
                },
                {
                  num: '03',
                  icon: Users,
                  title: 'CUSTOMER & QUOTATION MANAGEMENT',
                  items: [
                    'Customer Enquiries',
                    'Proposal Management',
                    'Quote Generation',
                    'Customer Communication'
                  ]
                },
                {
                  num: '04',
                  icon: Database,
                  title: 'MASTER DATA MANAGEMENT',
                  items: [
                    'Customer Master',
                    'Carrier Master',
                    'Trade Lane Management',
                    'Contract Management'
                  ]
                }
              ].map((mod, idx) => {
                const ModIcon = mod.icon;
                return (
                  <div key={idx} className="p-6 sm:p-7 flex flex-col justify-between bg-white hover:bg-[#FAF8F5] transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#E5DFD5]">
                        <span className="font-mono text-xs font-bold text-[#C87D20]">{mod.num}</span>
                        <div className="w-8 h-8 bg-[#0B1320] text-white flex items-center justify-center">
                          <ModIcon className="w-4 h-4" />
                        </div>
                      </div>
                      <h4 className="font-display text-sm font-bold text-[#0B1320] uppercase tracking-wide mb-4">
                        {mod.title}
                      </h4>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                        {mod.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 bg-[#0D7A72] mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 3: Detailed Functional Architecture — 5-Row Editorial Specification Ledger */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
            <div className="lg:col-span-4 space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#C87D20] block">
                SYSTEM SPECIFICATION
              </span>
              <h3 className="font-display text-2xl font-bold text-[#0B1320] uppercase">
                DETAILED FUNCTIONAL ARCHITECTURE
              </h3>
              <div className="pt-2">
                <button
                  onClick={() => onRequestConsultation('Freight Forwarding Solution')}
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#0B1320] hover:bg-[#0D7A72] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>DISCUSS THIS SOLUTION</span>
                  <ArrowRight className="w-4 h-4 text-[#E5A93C]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 border-t-2 border-[#0B1320] divide-y divide-[#DDD6CC]">
              {[
                {
                  title: 'VISIBILITY & TRACKING',
                  desc: 'Real-Time Shipment Visibility · Track & Trace Across Carriers · Exception Alerts · Proactive Notifications · Milestone Monitoring'
                },
                {
                  title: 'WORKFLOW AUTOMATION',
                  desc: 'Automated Shipment Workflows · Reduced Manual Touchpoints · Process Standardization · Automated Task Management'
                },
                {
                  title: 'DOCUMENTATION AUTOMATION',
                  desc: 'Commercial Invoices · Bills of Lading · Waybills · Compliance Documentation · Automated Document Generation'
                },
                {
                  title: 'FINANCIAL & BILLING MANAGEMENT',
                  desc: 'Multi-Currency Billing · Revenue Management · Expense Tracking · Freight Audit & Payments · Carrier Invoice Reconciliation'
                },
                {
                  title: 'PROFITABILITY ANALYSIS',
                  desc: 'Shipment Margin Analysis · Customer Profitability · Trade Lane Analysis · Revenue vs Expense Tracking'
                }
              ].map((arch, idx) => (
                <div
                  key={idx}
                  className="py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
                >
                  <div className="sm:col-span-4 flex items-center gap-2.5">
                    <span className="font-mono text-[11px] font-bold text-[#0D7A72]">0{idx + 1}</span>
                    <h5 className="font-display text-xs sm:text-sm font-bold text-[#0B1320] uppercase tracking-wide">
                      {arch.title}
                    </h5>
                  </div>
                  <p className="sm:col-span-8 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {arch.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 4: SOLUTION 02 — MULTI-MODAL LOGISTICS SOLUTIONS       */}
      {/* Layout: Deep Midnight Theme + Connected Mode Ribbon + Blueprint */}
      {/* ============================================================== */}
      <section id="solution-multimodal" className="py-20 lg:py-28 bg-[#0B1320] text-[#FAF8F5] border-b border-white/15">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-14">
          
          {/* Top Editorial Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10 border-b border-white/15">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-[#E5A93C] text-[#0B1320] font-mono text-xs font-bold">
                  02
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#2DD4BF]">
                  02 · ONE NETWORK. ONE PLATFORM. ENDLESS POSSIBILITIES.
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase">
                MULTI-MODAL LOGISTICS SOLUTIONS
              </h2>
              <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-3xl">
                Multi-modal logistics is redefining how supply chains operate—enabling seamless movement of goods across road, rail, and coastal networks through a single, integrated service provider. We empower both OEMs and Logistics Service Providers (LSPs) to collaborate, optimize, and scale operations effortlessly.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-2.5">
              <span className="px-4 py-2 bg-[#0D7A72] text-white text-xs font-bold uppercase tracking-wider">
                One Network. One Platform. Endless Possibilities.
              </span>
              <span className="px-4 py-2 bg-white/10 text-[#E5A93C] text-xs font-bold uppercase tracking-wider border border-white/15">
                OEMs &amp; LSPs Unified Ecosystem
              </span>
            </div>
          </div>

          {/* Connected 3-Mode Transport Corridor Ribbon */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border border-white/15 divide-y sm:divide-y-0 sm:divide-x divide-white/15 bg-[#121C2D]">
            {[
              { icon: Truck, mode: 'ROAD', code: 'CORRIDOR 01' },
              { icon: Train, mode: 'RAIL', code: 'CORRIDOR 02' },
              { icon: Ship, mode: 'COASTAL', code: 'CORRIDOR 03' }
            ].map((m, i) => {
              const MIcon = m.icon;
              return (
                <div key={i} className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 bg-[#0D7A72]/25 border border-[#2DD4BF]/40 flex items-center justify-center text-[#2DD4BF]">
                      <MIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-stone-400 block">{m.code}</span>
                      <span className="font-display text-base font-bold tracking-wider text-white">{m.mode}</span>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#2DD4BF]" />
                </div>
              );
            })}
          </div>

          {/* Asymmetric Visual & Operational Advantages Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left 6 Cols: Reach Stacker Photography */}
            <div className="lg:col-span-6 relative min-h-[360px] sm:min-h-[420px] border border-white/15 overflow-hidden bg-black">
              <img
                src={reachStackerImage}
                alt="Container Reach Stacker at Intermodal Yard"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320] via-[#0B1320]/20 to-transparent pointer-events-none" />

              <div className="absolute top-5 left-5">
                <span className="bg-[#0B1320]/90 backdrop-blur-md text-[#2DD4BF] font-mono text-xs font-bold px-3.5 py-1.5 border border-white/15">
                  MULTIMODAL LOGISTICS NETWORK
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-[#0B1320]/95 text-white text-xs sm:text-sm font-bold p-4 border border-white/15 flex items-center gap-3">
                  <Users className="w-4 h-4 text-[#E5A93C] shrink-0" />
                  <span>Supporting OEMs, Shippers, 3PLs, 4PLs and Logistics Service Providers.</span>
                </div>
              </div>
            </div>

            {/* Right 6 Cols: Built for the Future of Logistics + 4 Core Operational Advantages */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-6">
              
              {/* Built for the Future of Logistics Editorial Block */}
              <div className="bg-[#121C2D] border-l-4 border-[#E5A93C] p-6 sm:p-8 space-y-3">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#E5A93C] block">
                  BUILT FOR THE FUTURE OF LOGISTICS
                </span>
                <p className="text-sm sm:text-base text-white leading-relaxed font-medium">
                  Our unified platform brings together Road and Rail shipment management with warehousing solutions, enabling a fully integrated supply chain ecosystem.
                </p>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  For LSPs, this is a game changer—offering complete control, enhanced service capabilities, and the ability to deliver end-to-end value to customers.
                </p>
              </div>

              {/* 4 Core Operational Advantages */}
              <div className="bg-[#121C2D] border border-white/15 p-6">
                <span className="font-mono text-xs font-bold tracking-[0.18em] text-[#2DD4BF] uppercase block mb-4">
                  CORE OPERATIONAL ADVANTAGES
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { icon: Eye, label: 'End-to-End Visibility' },
                    { icon: Settings, label: 'Optimized Operations' },
                    { icon: DollarSign, label: 'Cost Efficiency' },
                    { icon: Clock, label: 'Just-In-Time Delivery' }
                  ].map((adv, i) => {
                    const AdvIcon = adv.icon;
                    return (
                      <div
                        key={i}
                        className="bg-[#0B1320] border border-white/10 p-4 flex flex-col justify-between gap-3"
                      >
                        <AdvIcon className="w-4 h-4 text-[#E5A93C]" />
                        <span className="text-xs font-bold text-white leading-snug">{adv.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

          {/* Key Benefits — 5-Column Horizontal Architectural Band */}
          <div className="space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#E5A93C] block">
              KEY BENEFITS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-white/15 divide-y sm:divide-y-0 sm:divide-x divide-white/15 bg-[#121C2D]">
              {[
                {
                  icon: Eye,
                  title: 'END-TO-END VISIBILITY',
                  desc: 'Track shipments across all mode with complete transparency and real-time insights.'
                },
                {
                  icon: TrendingUp,
                  title: 'OPTIMIZED OPERATIONS',
                  desc: 'Improve efficiency through streamlined planning, scheduling, and execution.'
                },
                {
                  icon: DollarSign,
                  title: 'COST EFFICIENCY',
                  desc: 'Leverage economies of scale by integrating multiple logistics services under one platform.'
                },
                {
                  icon: Building2,
                  title: 'INFRASTRUCTURE-FREE SCALABILITY',
                  desc: 'Reduce capital investment with managed warehousing and yard solutions.'
                },
                {
                  icon: Clock,
                  title: 'JUST-IN-TIME DELIVERY',
                  desc: 'Ensure precise delivery timelines through intelligent coordination and planning.'
                }
              ].map((b, idx) => {
                const BIcon = b.icon;
                return (
                  <div key={idx} className="p-5 sm:p-6 flex flex-col justify-between gap-4 hover:bg-white/[0.03] transition-colors">
                    <div className="space-y-3">
                      <div className="w-9 h-9 bg-[#0D7A72]/30 border border-[#2DD4BF]/30 text-[#2DD4BF] flex items-center justify-center">
                        <BIcon className="w-4 h-4" />
                      </div>
                      <h4 className="font-display text-xs sm:text-sm font-bold text-white uppercase tracking-wide">
                        {b.title}
                      </h4>
                      <p className="text-xs text-stone-300 leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Comprehensive Capabilities — 4-Column Blueprint Matrix */}
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#2DD4BF] block">
                COMPREHENSIVE CAPABILITIES
              </span>
              <button
                onClick={() => onRequestConsultation('Multi-Modal Logistics Solutions')}
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#E5A93C] hover:bg-[#d4962a] text-[#0B1320] text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer self-start sm:self-auto"
              >
                <span>DISCUSS THIS SOLUTION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: Truck,
                  title: 'MULTI-MODAL OPERATIONS',
                  items: [
                    'Multi-modal transportation (Road, Rail & Coastal)',
                    'Contract logistics and feeder line management',
                    'Load planning and shipment scheduling',
                    'Assembling and kitting services'
                  ]
                },
                {
                  icon: Building2,
                  title: 'WAREHOUSING & YARD MANAGEMENT',
                  items: [
                    'Warehousing and yard management',
                    'Inventory and stock visibility',
                    'Yard planning and optimization',
                    'Dock and gate scheduling'
                  ]
                },
                {
                  icon: MapPin,
                  title: 'REAL-TIME VISIBILITY & TRACEABILITY',
                  items: [
                    'Real-time tracking & traceability',
                    'Milestone monitoring',
                    'Exception management',
                    'End-to-end status updates'
                  ]
                },
                {
                  icon: FileText,
                  title: 'FINANCIAL & BILLING MANAGEMENT',
                  items: [
                    'Integrated billing and invoicing',
                    'Expense management',
                    'Revenue tracking',
                    'Settlement management'
                  ]
                }
              ].map((cap, idx) => {
                const CapIcon = cap.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#121C2D] border border-white/15 p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                        <CapIcon className="w-4 h-4 text-[#E5A93C] shrink-0" />
                        <h4 className="font-display text-xs sm:text-sm font-bold text-white uppercase tracking-wide">
                          {cap.title}
                        </h4>
                      </div>
                      <ul className="space-y-2.5 text-xs text-stone-300">
                        {cap.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 bg-[#2DD4BF] mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 5: SOLUTION 03 — ROAD TRANSPORTATION SUITE             */}
      {/* Layout: Editorial Highway Spread + 6-Tile Strip + 3-Col Deck   */}
      {/* ============================================================== */}
      <section id="solution-road" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#DDD6CC]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-14">
          
          {/* Editorial Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10 border-b-2 border-[#0B1320]">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-[#0B1320] text-[#E5A93C] font-mono text-xs font-bold">
                  03
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#0D7A72]">
                  03 · END-TO-END ROAD TRANSPORTATION MANAGEMENT
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#0B1320] tracking-tight uppercase">
                ROAD TRANSPORTATION SUITE
              </h2>
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-3xl">
                Transform your enterprise into a future-ready, intelligent organization with secure Cloud ERP, Business AI, and advanced Transport Management capabilities.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-2.5">
              <span className="px-4 py-2 bg-[#0D7A72] text-white text-xs font-bold uppercase tracking-wider">
                Cloud ERP for Transporters
              </span>
              <span className="px-4 py-2 bg-[#0B1320] text-[#E5A93C] text-xs font-bold uppercase tracking-wider">
                One Powerful Platform. Complete Operational Control.
              </span>
            </div>
          </div>

          {/* Full-Width Truck Panorama + 4 Core Pillars Overlay Deck */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#0B1320] bg-white">
            
            {/* Left 8 Cols: Blue Commercial Truck Panorama */}
            <div className="lg:col-span-8 relative min-h-[340px] sm:min-h-[420px] overflow-hidden bg-[#0B1320]">
              <img
                src={blueTruckImage}
                alt="Modern Blue Commercial Freight Semi-Truck"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/90 via-transparent to-black/30 pointer-events-none" />

              {/* Top Overlay Strip */}
              <div className="absolute top-5 left-5 right-5 flex flex-wrap items-center justify-between gap-2">
                <div className="bg-[#0B1320]/90 backdrop-blur-md px-4 py-2 border border-white/15 flex items-center gap-3 text-[11px] font-bold text-white">
                  <span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5 text-[#2DD4BF]" /> FLEET</span>
                  <span className="text-stone-500">|</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#E5A93C]" /> VISIBILITY</span>
                  <span className="text-stone-500">|</span>
                  <span className="flex items-center gap-1"><IndianRupee className="w-3.5 h-3.5 text-[#2DD4BF]" /> FINANCIAL</span>
                  <span className="text-stone-500">|</span>
                  <span className="flex items-center gap-1"><BarChart3 className="w-3.5 h-3.5 text-[#E5A93C]" /> BI</span>
                </div>

                <span className="bg-[#0D7A72] text-white font-mono text-xs font-bold px-3.5 py-1.5">
                  CLOUD ERP FOR TRANSPORTERS
                </span>
              </div>

              {/* Bottom Audience Caption */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-[#0B1320]/95 text-white text-xs sm:text-sm font-bold px-4 py-3 border border-white/15 flex items-center gap-3">
                  <Users className="w-4 h-4 text-[#E5A93C] shrink-0" />
                  <span>Supporting Transporters, Fleet Operators, 3PLs, Contract Logistics Providers and Enterprise Logistics Teams.</span>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: 4 Core Pillars + Platform Tagline */}
            <div className="lg:col-span-4 bg-[#0B1320] text-white p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/15">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#E5A93C] block mb-4">
                  CORE PILLARS
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Truck, label: 'Fleet Operations' },
                    { icon: MapPin, label: 'Real-Time Visibility' },
                    { icon: IndianRupee, label: 'Financial Control' },
                    { icon: BarChart3, label: 'Business Intelligence' }
                  ].map((pillar, i) => {
                    const PIcon = pillar.icon;
                    return (
                      <div
                        key={i}
                        className="bg-[#121C2D] border border-white/10 p-4 flex flex-col justify-between gap-3"
                      >
                        <PIcon className="w-5 h-5 text-[#2DD4BF]" />
                        <span className="text-xs font-bold text-white leading-snug">{pillar.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/15">
                <span className="font-mono text-xs font-bold text-[#2DD4BF] uppercase block">
                  One Powerful Platform.
                </span>
                <span className="font-display text-lg font-bold text-white tracking-tight block mt-0.5">
                  Complete Operational Control.
                </span>
              </div>
            </div>

          </div>

          {/* Complete Operational Control — Fleet & Operations 6-Tile Strip + Benefits Ribbon */}
          <div className="bg-white border border-[#DDD6CC] p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-5 border-b border-[#E5DFD5]">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#0D7A72] block">
                  COMPLETE OPERATIONAL CONTROL
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0B1320] mt-1">
                  Manage your entire logistics lifecycle on a single intelligent platform.
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#FAF8F5] border border-[#DDD6CC]">
                <MapPin className="w-4 h-4 text-[#0D7A72]" />
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[#0B1320]">
                  FLEET &amp; OPERATIONS MANAGEMENT
                </span>
              </div>
            </div>

            {/* 6 Modules Horizontal Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
              {[
                { icon: Truck, label: 'Fleet Management' },
                { icon: Route, label: 'Route Planning & Optimization' },
                { icon: ClipboardList, label: 'Trip Management' },
                { icon: UserCheck, label: 'Driver Management' },
                { icon: Fuel, label: 'Fuel Monitoring' },
                {
                  icon: null,
                  label: 'Toll & Tax Management'
                }
              ].map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#FAF8F5] border border-[#DDD6CC] p-4 flex flex-col justify-between gap-3 hover:border-[#0D7A72] transition-colors"
                  >
                    <div className="w-8 h-8 bg-[#0B1320] text-[#E5A93C] flex items-center justify-center">
                      {ItemIcon ? (
                        <ItemIcon className="w-4 h-4" />
                      ) : (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 19L8 5" />
                          <path d="M16 5L20 19" />
                          <path d="M12 6v2" />
                          <path d="M12 11v2" />
                          <path d="M12 16v2" />
                        </svg>
                      )}
                    </div>
                    <span className="text-xs font-bold text-[#0B1320] leading-snug">{item.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Fleet & Operations Benefits Strip */}
            <div className="bg-[#F3EFE8] border border-[#DDD6CC] p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0D7A72] shrink-0">
                BENEFITS
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {[
                  'Improved fleet utilization',
                  'Reduced operational costs',
                  'Better route efficiency',
                  'Increased driver productivity',
                  'Centralized operations management'
                ].map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs font-semibold text-[#0B1320] bg-white px-3.5 py-2 border border-[#DDD6CC]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7A72] shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Real-Time Visibility & Financial Control — 3-Column Architectural Deck */}
          <div className="space-y-5">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#C87D20] block">
              REAL-TIME VISIBILITY &amp; FINANCIAL CONTROL
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#0B1320] divide-y lg:divide-y-0 lg:divide-x divide-[#DDD6CC] bg-white">
              
              {/* Column 1: REAL-TIME VISIBILITY */}
              <div className="lg:col-span-4 p-6 sm:p-7 space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-[#E5DFD5]">
                  <div className="w-8 h-8 bg-[#0D7A72] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h4 className="font-display text-sm font-bold text-[#0B1320] uppercase tracking-wide">
                    REAL-TIME VISIBILITY
                  </h4>
                </div>
                <div className="space-y-2.5">
                  {[
                    { icon: Navigation, label: 'Live Track & Trace' },
                    { icon: Truck, label: 'Vehicle Monitoring' },
                    { icon: ClipboardCheck, label: 'Trip Status Updates' },
                    { icon: FileCheck, label: 'Proof of Delivery (POD) Management' }
                  ].map((item, i) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={i} className="p-3 bg-[#FAF8F5] border border-[#E5DFD5] flex items-center gap-3">
                        <ItemIcon className="w-4 h-4 text-[#0D7A72] shrink-0" />
                        <span className="text-xs font-semibold text-[#0B1320]">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Column 2: FINANCIAL & SETTLEMENT MANAGEMENT */}
              <div className="lg:col-span-4 p-6 sm:p-7 space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-[#E5DFD5]">
                  <div className="w-8 h-8 bg-[#0B1320] text-[#E5A93C] flex items-center justify-center shrink-0">
                    <IndianRupee className="w-4 h-4" />
                  </div>
                  <h4 className="font-display text-sm font-bold text-[#0B1320] uppercase tracking-wide">
                    FINANCIAL &amp; SETTLEMENT MANAGEMENT
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { icon: Receipt, label: 'Automated Invoicing' },
                    { icon: TrendingUp, label: 'Revenue Accounting' },
                    { icon: Wallet, label: 'Expense Management' },
                    { icon: Handshake, label: 'Settlement Management' },
                    { icon: Gift, label: 'Incentive Management' },
                    { icon: Calculator, label: 'Budgeting & Cost Control' }
                  ].map((item, i) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={i} className="p-3 bg-[#FAF8F5] border border-[#E5DFD5] flex items-center gap-2.5">
                        <ItemIcon className="w-4 h-4 text-[#C87D20] shrink-0" />
                        <span className="text-xs font-semibold text-[#0B1320] leading-tight">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Column 3: COMPLIANCE & REPORTING */}
              <div className="lg:col-span-4 p-6 sm:p-7 space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-[#E5DFD5]">
                  <div className="w-8 h-8 bg-[#0D7A72] text-white flex items-center justify-center shrink-0">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <h4 className="font-display text-sm font-bold text-[#0B1320] uppercase tracking-wide">
                    COMPLIANCE &amp; REPORTING
                  </h4>
                </div>
                <div className="space-y-2.5">
                  {[
                    { icon: ShieldCheck, label: 'Statutory Compliance' },
                    { icon: BarChart3, label: 'Advanced Analytics' },
                    { icon: LayoutGrid, label: 'Operational Dashboards' },
                    { icon: LineChart, label: 'Performance Insights' }
                  ].map((item, i) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={i} className="p-3 bg-[#FAF8F5] border border-[#E5DFD5] flex items-center gap-3">
                        <ItemIcon className="w-4 h-4 text-[#0D7A72] shrink-0" />
                        <span className="text-xs font-semibold text-[#0B1320]">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Split: Scalability Callout & Business Outcomes */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 bg-[#0B1320] text-white p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#E5A93C] text-[#0B1320] flex items-center justify-center shrink-0">
                  <Rocket className="w-5 h-5" />
                </div>
                <p className="font-display text-base sm:text-lg font-bold text-white leading-snug">
                  A solution that grows with you—simple to start, powerful to scale.
                </p>
              </div>

              <div>
                <button
                  onClick={() => onRequestConsultation('Road Transportation Suite')}
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#0D7A72] hover:bg-[#0f8f85] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>DISCUSS THIS SOLUTION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white border border-[#DDD6CC] p-6 sm:p-8">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#0D7A72] block mb-4">
                BUSINESS OUTCOMES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {[
                  'Enhanced operational visibility',
                  'Reduced manual intervention',
                  'Improved fleet utilization',
                  'Faster billing cycles',
                  'Better compliance management',
                  'Improved customer service',
                  'Scalable for future growth'
                ].map((outcome, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs font-semibold text-[#0B1320] bg-[#FAF8F5] px-3.5 py-2.5 border border-[#E5DFD5]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0D7A72] shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 6: SOLUTION 04 — RAIL LOGISTICS SOLUTIONS              */}
      {/* Layout: Spacious Image-Led Masthead + 4x2 Engineering Grid     */}
      {/* ============================================================== */}
      <section id="solution-rail" className="py-20 lg:py-28 bg-white border-b border-[#DDD6CC]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-14">
          
          {/* Spacious Image-Led Split Masthead */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-2 border-[#0B1320] bg-[#FAF8F5]">
            
            {/* Left 6 Cols: Editorial Story & Core Pillars */}
            <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 bg-[#0B1320] text-[#E5A93C] font-mono text-xs font-bold">
                    04
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#0D7A72]">
                    04 · END-TO-END RAIL SHIPMENT MANAGEMENT
                  </span>
                </div>

                <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#0B1320] tracking-tight uppercase leading-[1.02]">
                  RAIL LOGISTICS SOLUTIONS
                </h2>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-1">
                  A powerful, all-in-one platform built for rail operators, shippers, and logistics service providers to manage containerized and non-containerized cargo with complete control, visibility, and efficiency across every stage of the shipment lifecycle.
                </p>

                <div className="pt-2">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#0B1320] text-[#E5A93C] text-xs font-bold">
                    <Train className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                    <span>Supporting CTO, AFTO, NMG and Third-Party Rake Operations</span>
                  </div>
                </div>
              </div>

              {/* 4 Core Pillars Horizontal Matrix */}
              <div className="pt-6 border-t border-[#DDD6CC]">
                <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-[#C87D20] uppercase block mb-3">
                  CORE PILLARS
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { icon: Eye, label: 'Complete Visibility' },
                    { icon: Settings, label: 'Operational Excellence' },
                    { icon: BarChart3, label: 'Smarter Decisions' },
                    { icon: Users, label: 'Stronger Collaboration' }
                  ].map((pillar, i) => {
                    const PIcon = pillar.icon;
                    return (
                      <div key={i} className="bg-white border border-[#DDD6CC] p-3.5 flex flex-col justify-between gap-2.5">
                        <PIcon className="w-4 h-4 text-[#0D7A72]" />
                        <span className="text-xs font-bold text-[#0B1320] leading-tight">{pillar.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right 6 Cols: Full-Height Intermodal Freight Train Visual */}
            <div className="lg:col-span-6 relative min-h-[360px] sm:min-h-[460px] overflow-hidden bg-[#0B1320] border-t lg:border-t-0 lg:border-l-2 border-[#0B1320]">
              <img
                src={freightTrainImage}
                alt="Intermodal Rail Freight Double Stack Train"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/90 via-transparent to-black/25 pointer-events-none" />

              {/* Top Overlay Strip */}
              <div className="absolute top-5 left-5 right-5 flex flex-wrap items-center justify-between gap-2">
                <div className="bg-[#0B1320]/90 backdrop-blur-md px-4 py-2 border border-white/15 flex items-center gap-3 text-[11px] font-bold text-white">
                  <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5 text-[#2DD4BF]" /> VISIBILITY</span>
                  <span className="text-stone-500">|</span>
                  <span className="flex items-center gap-1"><Settings className="w-3.5 h-3.5 text-[#E5A93C]" /> FOIS &amp; RAKES</span>
                  <span className="text-stone-500">|</span>
                  <span className="flex items-center gap-1"><BarChart3 className="w-3.5 h-3.5 text-[#2DD4BF]" /> ANALYTICS</span>
                </div>

                <span className="bg-[#0D7A72] text-white font-mono text-xs font-bold px-3.5 py-1.5">
                  RAIL INTERMODAL LOGISTICS
                </span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-[#0B1320]/95 text-white text-xs sm:text-sm font-bold px-4 py-3 border border-white/15 flex items-center gap-3">
                  <Train className="w-4 h-4 text-[#E5A93C] shrink-0" />
                  <span>Supporting CTO, AFTO, NMG and Third-Party Rake Operations</span>
                </div>
              </div>
            </div>

          </div>

          {/* 8 Key Features — 4x2 Architectural Hairline Engineering Matrix */}
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#0D7A72] block">
                  KEY FEATURES
                </span>
                <p className="font-display text-lg sm:text-xl font-bold text-[#0B1320] mt-1">
                  Our platform is equipped with robust capabilities to simplify and optimize your rail logistics operations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#0B1320] bg-[#DDD6CC] gap-px">
              {[
                {
                  num: '01',
                  title: 'TRIP MANAGEMENT',
                  desc: 'Plan, execute, and monitor trips with ease.',
                  icon: <Route className="w-4 h-4" />
                },
                {
                  num: '02',
                  title: 'RAKE PLANNING',
                  desc: 'Efficiently allocate and manage rake utilization.',
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="6" width="18" height="9" rx="1" />
                      <path d="M2 15h20" />
                      <circle cx="7" cy="18" r="2" />
                      <circle cx="17" cy="18" r="2" />
                    </svg>
                  )
                },
                {
                  num: '03',
                  title: 'LOAD PLANNING',
                  desc: 'Optimise cargo distribution for maximum efficiency.',
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="8" y="4" width="8" height="7" rx="1" />
                      <rect x="3" y="13" width="8" height="7" rx="1" />
                      <rect x="13" y="13" width="8" height="7" rx="1" />
                    </svg>
                  )
                },
                {
                  num: '04',
                  title: 'FOIS INTEGRATION',
                  desc: 'Seamless integration with Indian Railways for RR generation.',
                  icon: <Train className="w-4 h-4" />
                },
                {
                  num: '05',
                  title: 'ASSET MANAGEMENT',
                  desc: 'Track and manage assets, including TXR operations.',
                  icon: <Settings className="w-4 h-4" />
                },
                {
                  num: '06',
                  title: 'TRACK & TRACE',
                  desc: 'Real-time visibility of shipments across the journey.',
                  icon: <MapPin className="w-4 h-4" />
                },
                {
                  num: '07',
                  title: 'BILLING & EXPENSE MANAGEMENT',
                  desc: 'Streamline invoicing and control operational costs.',
                  icon: <Receipt className="w-4 h-4" />
                },
                {
                  num: '08',
                  title: 'ANALYTICS & REPORTING',
                  desc: 'Actionable insights for operational and strategic decision making.',
                  icon: <BarChart3 className="w-4 h-4" />
                }
              ].map((feat) => (
                <div
                  key={feat.num}
                  className="bg-[#FAF8F5] hover:bg-white p-6 sm:p-7 flex flex-col justify-between transition-colors"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#C87D20]">{feat.num}</span>
                    <div className="w-9 h-9 bg-[#0B1320] text-[#2DD4BF] flex items-center justify-center">
                      {feat.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#0B1320] uppercase tracking-wide mb-2">
                      {feat.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Split: Confidence Callout + Business Outcomes */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 bg-[#0B1320] text-white p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#0D7A72] text-white flex items-center justify-center shrink-0">
                  <Train className="w-5 h-5" />
                </div>
                <p className="font-display text-base sm:text-lg font-bold text-white leading-snug">
                  Simplify operations, improve efficiency, and move your cargo with confidence—no matter how you ship.
                </p>
              </div>

              <div>
                <button
                  onClick={() => onRequestConsultation('Rail Logistics Solutions')}
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#E5A93C] hover:bg-[#d4962a] text-[#0B1320] text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>DISCUSS THIS SOLUTION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#DDD6CC] p-6 sm:p-8">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#0D7A72] block mb-4">
                BUSINESS OUTCOMES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {[
                  'Enhanced operational visibility',
                  'Improved asset utilization',
                  'Reduced manual intervention',
                  'Faster billing cycles',
                  'Better compliance management',
                  'Improved customer service',
                  'Scalable for future growth'
                ].map((outcome, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs font-semibold text-[#0B1320] bg-white px-3.5 py-2.5 border border-[#E5DFD5]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0D7A72] shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 7: ENTERPRISE INFRASTRUCTURE — FLEXIBLE DEPLOYMENT      */}
      {/* ============================================================== */}
      <section className="py-20 lg:py-28 bg-[#F3EFE8] border-b border-[#DDD6CC]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-8 border-b-2 border-[#0B1320]">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-bold tracking-[0.18em] text-[#0D7A72] uppercase block">
                ENTERPRISE INFRASTRUCTURE
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#0B1320] tracking-tight mt-2 uppercase">
                FLEXIBLE DEPLOYMENT. MAXIMUM CHOICE.
              </h2>
            </div>
            <p className="lg:col-span-5 text-stone-600 text-sm sm:text-base leading-relaxed">
              Our solution gives customers the flexibility to choose a best-of-breed ERP while seamlessly leveraging a world-class transport management system.
            </p>
          </div>

          {/* 3-Column Architectural Comparison Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-[#0B1320] divide-y md:divide-y-0 md:divide-x-2 divide-[#0B1320] bg-white">
            
            {/* Column 1: ERP Agnostic Model */}
            <div className="p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E5DFD5]">
                  <span className="font-mono text-xs font-bold text-[#C87D20]">MODEL 01</span>
                  <Network className="w-5 h-5 text-[#0D7A72]" />
                </div>

                <h3 className="font-display text-xl font-bold text-[#0B1320] tracking-tight mb-2 uppercase">
                  ERP AGNOSTIC MODEL
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6">
                  Works seamlessly alongside your preferred ERP system such as:
                </p>

                <div className="flex flex-wrap items-center gap-2.5 mb-5">
                  {/* Oracle */}
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-[#DDD6CC] bg-[#FAF8F5]">
                    <svg className="h-3.5 w-auto shrink-0" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M7.7 2C3.45 2 0 5.45 0 9.7C0 13.95 3.45 17.4 7.7 17.4H12.3C16.55 17.4 20 13.95 20 9.7C20 5.45 16.55 2 12.3 2H7.7ZM12 14.1H8C5.55 14.1 3.6 12.15 3.6 9.7C3.6 7.25 5.55 5.3 8 5.3H12C14.45 5.3 16.4 7.25 16.4 9.7C16.4 12.15 14.45 14.1 12 14.1Z"
                        fill="#C74634"
                      />
                    </svg>
                    <span className="text-[#C74634] font-black text-xs tracking-wider">
                      ORACLE
                    </span>
                  </div>

                  {/* Microsoft */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 border border-[#DDD6CC] bg-[#FAF8F5]">
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 21 21" fill="none">
                      <rect x="0.5" y="0.5" width="9" height="9" fill="#F25022" />
                      <rect x="11.5" y="0.5" width="9" height="9" fill="#7FBA00" />
                      <rect x="0.5" y="11.5" width="9" height="9" fill="#00A4EF" />
                      <rect x="11.5" y="11.5" width="9" height="9" fill="#FFB900" />
                    </svg>
                    <span className="font-semibold text-xs text-stone-800 tracking-tight">
                      Microsoft
                    </span>
                  </div>

                  {/* Zoho */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 border border-[#DDD6CC] bg-[#FAF8F5]">
                    <div className="flex items-center -space-x-0.5 shrink-0">
                      <span className="w-3.5 h-3.5 bg-[#E42528] text-white text-[8px] font-black flex items-center justify-center">Z</span>
                      <span className="w-3.5 h-3.5 bg-[#009640] text-white text-[8px] font-black flex items-center justify-center">O</span>
                      <span className="w-3.5 h-3.5 bg-[#0083CA] text-white text-[8px] font-black flex items-center justify-center">H</span>
                      <span className="w-3.5 h-3.5 bg-[#F58220] text-white text-[8px] font-black flex items-center justify-center">O</span>
                    </div>
                    <span className="font-black text-xs text-stone-900 tracking-tight">
                      ZOHO
                    </span>
                  </div>
                </div>

                <p className="text-xs text-stone-500 mb-6">
                  and your existing ERP landscape
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5DFD5] flex items-center gap-2 text-xs font-bold text-[#0D7A72]">
                <span className="w-2 h-2 bg-[#0D7A72]" />
                <span>Bi-directional Middleware</span>
              </div>
            </div>

            {/* Column 2: SAP Native Deployment */}
            <div className="p-7 sm:p-9 bg-[#0B1320] text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/15">
                  <span className="font-mono text-xs font-bold text-[#E5A93C]">02 · SAP NATIVE</span>
                  <Cpu className="w-5 h-5 text-[#2DD4BF]" />
                </div>

                <h3 className="font-display text-xl font-bold text-white tracking-tight mb-2 uppercase">
                  SAP NATIVE DEPLOYMENT
                </h3>

                <p className="text-xs sm:text-sm text-stone-300 mb-4">
                  Deploy fully on:
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-stone-100 mb-6">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                    <span>SAP S/4HANA Cloud ERP</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                    <span>SAP S/4HANA Cloud ERP Private</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                    <span>SAP Business Technology Platform</span>
                  </li>
                </ul>

                <div className="inline-block px-3.5 py-1.5 border border-[#2DD4BF]/40 bg-[#0D7A72]/20 text-[#2DD4BF] font-mono font-bold text-xs tracking-wider mb-6">
                  SAP® Ecosystem Ready
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 flex items-center gap-2 text-xs font-bold text-[#E5A93C]">
                <span className="w-2 h-2 bg-[#E5A93C]" />
                <span>SAP BTP Direct Cloud Connect</span>
              </div>
            </div>

            {/* Column 3: Single Platform Model */}
            <div className="p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E5DFD5]">
                  <span className="font-mono text-xs font-bold text-[#C87D20]">MODEL 03</span>
                  <Layers className="w-5 h-5 text-[#0D7A72]" />
                </div>

                <h3 className="font-display text-xl font-bold text-[#0B1320] tracking-tight mb-2 uppercase">
                  SINGLE PLATFORM MODEL
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-4">
                  Run ERP and operations in single open-source platforms such as:
                </p>

                <div className="inline-block px-4 py-2 border border-blue-300 bg-blue-50 text-[#0070f3] font-extrabold text-sm tracking-wider mb-4">
                  ERPNext®
                </div>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
                  Unified transport operations, inventory, payroll, and general ledger under one single system.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5DFD5] flex items-center gap-2 text-xs font-bold text-[#0D7A72]">
                <span className="w-2 h-2 bg-[#0D7A72]" />
                <span>Open Source Flexibility</span>
              </div>
            </div>

          </div>

          {/* Bottom Editorial Quote */}
          <div className="bg-white border-l-4 border-[#0D7A72] p-6 flex items-center gap-4 text-xs sm:text-sm font-semibold text-[#0B1320]">
            <CheckCircle2 className="w-5 h-5 text-[#0D7A72] shrink-0" />
            <span>
              "This flexibility ensures you get the best combination of enterprise resource planning and advanced logistics management—without compromise."
            </span>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 8: VALUE PROPOSITION & VERIFIED BUSINESS OUTCOMES       */}
      {/* ============================================================== */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#DDD6CC]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
          
          {/* Value Proposition Ledger */}
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b-2 border-[#0B1320]">
              <div>
                <span className="font-mono text-xs font-bold tracking-[0.18em] text-[#0D7A72] uppercase block">
                  ENTERPRISE ECONOMICS
                </span>
                <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#0B1320] tracking-tight mt-2 uppercase">
                  VALUE PROPOSITION &amp; BUSINESS OUTCOMES
                </h2>
              </div>
              <p className="text-stone-600 text-sm sm:text-base font-medium">
                A solution that grows with you—simple to start, powerful to scale.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#0B1320] divide-y sm:divide-y-0 sm:divide-x divide-[#DDD6CC] bg-white">
              {[
                {
                  num: '01',
                  icon: Layers,
                  title: 'PLATFORM INDEPENDENT',
                  desc: 'Seamlessly integrates with your existing systems—no restrictions, no limitations.'
                },
                {
                  num: '02',
                  icon: Zap,
                  title: 'PLUG & PLAY MODEL',
                  desc: 'Quick and easy deployment with minimal disruption to your current operations.'
                },
                {
                  num: '03',
                  icon: Sliders,
                  title: 'FLEXIBLE DEPLOYMENT OPTIONS',
                  desc: 'Choose how you implement—modular, fully integrated, or standalone.'
                },
                {
                  num: '04',
                  icon: Users,
                  title: 'BUILT FOR ALL SIZES',
                  desc: "Whether you're a small transporter or a large enterprise, Shipper, 3PL/4PL operator, our solution adapts to your scale and complexity."
                }
              ].map((vp) => {
                const VpIcon = vp.icon;
                return (
                  <div key={vp.num} className="p-7 flex flex-col justify-between gap-6">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-xs font-bold text-[#C87D20]">{vp.num}</span>
                        <div className="w-10 h-10 bg-[#0B1320] text-[#E5A93C] flex items-center justify-center">
                          <VpIcon className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="font-display text-base font-bold text-[#0B1320] uppercase tracking-wide mb-2.5">
                        {vp.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {vp.desc}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-[#E5DFD5] flex items-center gap-2 text-xs font-bold text-[#0D7A72]">
                      <Check className="w-4 h-4" />
                      <span>VERIFIED BENEFIT</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 16 Verified Business Outcomes — Architectural Impact Ledger */}
          <div className="bg-[#0B1320] text-white border-2 border-[#0B1320]">
            <div className="p-7 sm:p-10 border-b border-white/15 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-xs font-bold tracking-[0.18em] text-[#E5A93C] uppercase block">
                  DOCUMENTED IMPACT METRICS
                </span>
                <h3 className="font-display text-2xl sm:text-4xl font-bold text-white uppercase tracking-tight mt-1">
                  VERIFIED BUSINESS OUTCOMES
                </h3>
              </div>
              <span className="font-mono text-xs font-bold text-[#2DD4BF] px-3.5 py-1.5 border border-[#2DD4BF]/30 bg-[#0D7A72]/20">
                16 Documented Outcomes
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {[
                'Reduced Delays',
                'Fewer Manual Errors',
                'Faster Decision Making',
                'Better Cost Control',
                'Improved Profitability',
                'Stronger Customer Experience',
                'Complete Financial Visibility',
                'Future-Ready Freight Operations',
                'Enhanced Operational Visibility',
                'Improved Asset Utilization',
                'Improved Fleet Utilization',
                'Reduced Manual Intervention',
                'Faster Billing Cycles',
                'Better Compliance Management',
                'Infrastructure-Free Scalability',
                'Scalable for Future Growth'
              ].map((outcome, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 border-b border-white/10 flex items-center gap-3.5 hover:bg-white/[0.03] transition-colors"
                >
                  <span className="font-mono text-[11px] font-bold text-[#E5A93C] shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <Check className="w-3.5 h-3.5 text-[#2DD4BF] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-stone-100">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 9: CONTACT US — EXECUTIVE SPLIT CONSULTATION DESK      */}
      {/* ============================================================== */}
      <section id="contact-section" className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 border-2 border-[#0B1320]">
            
            {/* Left 6 Cols: Corporate Directory & QR */}
            <div className="lg:col-span-6 bg-[#0B1320] text-white p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div>
                <NrsLogo theme="dark" size="md" />
                <h3 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mt-6">
                  CONTACT US
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2">
                  Direct communication channels for enterprise logistics planning.
                </p>
              </div>

              <div className="divide-y divide-white/15 border-y border-white/15">
                {/* Executive Headquarters */}
                <div className="py-5 flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 border border-white/15 text-[#E5A93C] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-[#2DD4BF] uppercase tracking-wider block">
                      EXECUTIVE HEADQUARTERS
                    </span>
                    <p className="text-sm font-bold text-white mt-0.5">
                      NRS Consulting
                    </p>
                    <p className="text-xs text-stone-300 leading-relaxed mt-0.5">
                      AIHP Skyline, Ground Floor, Plot No. 97A, Sector 32, Gurugram-122022, Haryana, India
                    </p>
                  </div>
                </div>

                {/* Direct Contact Lines */}
                <div className="py-5 flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 border border-white/15 text-[#E5A93C] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-[#2DD4BF] uppercase tracking-wider block">
                      DIRECT CONTACT LINES
                    </span>
                    <p className="text-xs sm:text-sm font-mono tabular-nums text-white mt-1">
                      +91 124 438 7128 &nbsp;·&nbsp; +91 124 436 4294
                    </p>
                  </div>
                </div>

                {/* Official Inquiries & Corporate Portal */}
                <div className="py-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 bg-white/5 border border-white/15 text-[#E5A93C] flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] font-bold text-[#2DD4BF] uppercase tracking-wider block">
                        OFFICIAL INQUIRIES
                      </span>
                      <a href="mailto:reachus@nrsconsulting.in" className="text-xs text-stone-200 hover:text-[#E5A93C] underline mt-0.5 block truncate">
                        reachus@nrsconsulting.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 bg-white/5 border border-white/15 text-[#E5A93C] flex items-center justify-center shrink-0 mt-0.5">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] font-bold text-[#2DD4BF] uppercase tracking-wider block">
                        CORPORATE PORTAL
                      </span>
                      <a href="https://www.nrsconsulting.in" target="_blank" rel="noreferrer" className="text-xs text-stone-200 hover:text-[#E5A93C] underline mt-0.5 block truncate">
                        www.nrsconsulting.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Code Scan Box */}
              <div className="bg-[#FAF8F5] text-[#0B1320] p-4 inline-flex items-center gap-4 max-w-xs border border-white/20">
                <div className="w-14 h-14 bg-[#0B1320] p-1.5 shrink-0 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-white" fill="currentColor">
                    <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm-2 10h8v8H2v-8zm2 2v4h4v-4H4zm10-14h8v8h-8V2zm2 2v4h4V4h-4zm3 8h3v3h-3v-3zm-3 3h3v3h-3v-3zm3 3h3v3h-3v-3zm-3 3h3v3h-3v-3zM14 12h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" />
                  </svg>
                </div>
                <div>
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-[#0B1320] block leading-tight">
                    SCAN TO CONNECT WITH US
                  </span>
                  <span className="text-xs text-stone-600 font-mono block mt-0.5">
                    nrsconsulting.in
                  </span>
                </div>
              </div>
            </div>

            {/* Right 6 Cols: Consultation Form */}
            <div className="lg:col-span-6 bg-[#FAF8F5] p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-[#0D7A72] uppercase tracking-[0.18em] block">
                  DEPLOYMENT CONSULTATION
                </span>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-[#0B1320] uppercase tracking-tight mt-1 pb-6 border-b border-[#DDD6CC]">
                  CONNECT WITH SOLUTIONS ARCHITECTURE TEAM
                </h4>

                {formSubmitted ? (
                  <div className="py-14 text-center space-y-4">
                    <div className="w-16 h-16 bg-[#0D7A72]/15 text-[#0D7A72] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h5 className="font-display text-xl font-bold text-[#0B1320]">Inquiry Transmitted!</h5>
                    <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#0B1320]">{formData.fullName}</strong>. An NRS Consulting logistics solution architect will reach out to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-3 bg-[#0B1320] text-white text-xs font-bold uppercase tracking-wider mt-2 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 mt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[11px] font-bold text-[#0B1320] uppercase tracking-wider mb-1.5">
                          FULL NAME
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Jane Doe"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-3.5 py-3 text-xs border border-[#C8C0B4] bg-white focus:outline-none focus:border-[#0B1320]"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[11px] font-bold text-[#0B1320] uppercase tracking-wider mb-1.5">
                          CORPORATE EMAIL
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="jane@company.com"
                          value={formData.corporateEmail}
                          onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                          className="w-full px-3.5 py-3 text-xs border border-[#C8C0B4] bg-white focus:outline-none focus:border-[#0B1320]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[11px] font-bold text-[#0B1320] uppercase tracking-wider mb-1.5">
                          PHONE / MOBILE
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 / International"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-3 text-xs border border-[#C8C0B4] bg-white focus:outline-none focus:border-[#0B1320]"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[11px] font-bold text-[#0B1320] uppercase tracking-wider mb-1.5">
                          SOLUTION SUITE
                        </label>
                        <select
                          value={formData.solutionSuite}
                          onChange={(e) => setFormData({ ...formData, solutionSuite: e.target.value })}
                          className="w-full px-3.5 py-3 text-xs border border-[#C8C0B4] bg-white focus:outline-none focus:border-[#0B1320]"
                        >
                          <option value="Freight Forwarding Solution">Freight Forwarding Solution</option>
                          <option value="Multi-Modal Logistics Solutions">Multi-Modal Logistics Solutions</option>
                          <option value="Road Transportation Suite">Road Transportation Suite</option>
                          <option value="Rail Logistics Solutions">Rail Logistics Solutions</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] font-bold text-[#0B1320] uppercase tracking-wider mb-1.5">
                        DEPLOYMENT PREFERENCE
                      </label>
                      <select
                        value={formData.deploymentPreference}
                        onChange={(e) => setFormData({ ...formData, deploymentPreference: e.target.value })}
                        className="w-full px-3.5 py-3 text-xs border border-[#C8C0B4] bg-white focus:outline-none focus:border-[#0B1320]"
                      >
                        <option value="ERP Agnostic Model (Oracle, Microsoft, Zoho)">ERP Agnostic Model (Oracle, Microsoft, Zoho)</option>
                        <option value="SAP Native Deployment (S/4HANA & BTP)">SAP Native Deployment (S/4HANA &amp; BTP)</option>
                        <option value="Single Platform Model (ERPNext)">Single Platform Model (ERPNext)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] font-bold text-[#0B1320] uppercase tracking-wider mb-1.5">
                        OPERATIONAL REQUIREMENTS
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Provide details about your shipment volume, fleet size, or existing systems..."
                        value={formData.requirements}
                        onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                        className="w-full px-3.5 py-3 text-xs border border-[#C8C0B4] bg-white focus:outline-none focus:border-[#0B1320] resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 bg-[#0B1320] hover:bg-[#0D7A72] text-white font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer flex items-center justify-center gap-2.5"
                      >
                        <Send className="w-4 h-4 text-[#E5A93C]" />
                        <span>TRANSMIT INQUIRY TO NRS CONSULTING</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 10: FOOTER                                             */}
      {/* ============================================================== */}
      <footer className="bg-[#0B1320] text-stone-400 py-8 px-4 sm:px-6 lg:px-10 border-t border-white/15 text-xs">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <NrsLogo theme="dark" size="sm" />
            <span className="text-xs text-stone-400">
              © 2026 NRS Consulting™. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-stone-300">
            <button
              onClick={onOpenBrochure}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#E5A93C]" />
              <span>8-Page Corporate Catalog</span>
            </button>

            <a
              href="mailto:reachus@nrsconsulting.in"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-[#2DD4BF]" />
              <span>reachus@nrsconsulting.in</span>
            </a>

            <a
              href="tel:+911244387128"
              className="flex items-center gap-1.5 hover:text-white transition-colors font-mono tabular-nums"
            >
              <Phone className="w-4 h-4 text-[#E5A93C]" />
              <span>+91 124 438 7128</span>
            </a>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 bg-white/10 hover:bg-[#0D7A72] text-white flex items-center justify-center transition-colors cursor-pointer ml-2"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </footer>

    </div>
  );
};
