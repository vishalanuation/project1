import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { NrsLogo } from './NrsLogo';

interface HeaderNavProps {
  activeNav?: string;
  onNavClick: (navId: string) => void;
  onRequestDemo: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeNav = 'freight-forwarding',
  onNavClick,
  onRequestDemo
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'freight-forwarding', num: '01', label: 'Freight Forwarding Solution' },
    { id: 'multi-modal', num: '02', label: 'Multi-Modal Logistics Solutions' },
    { id: 'road-suite', num: '03', label: 'Road Transportation Suite' },
    { id: 'rail-logistics', num: '04', label: 'Rail Logistics Solutions' },
  ];

  const handleItemClick = (id: string) => {
    onNavClick(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-xl border-b border-[#DDD6CC] shadow-sm'
          : 'bg-[#FAF8F5] border-b border-[#E5DFD5]'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Lockup */}
        <div className="shrink-0">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center focus:outline-none group"
          >
            <NrsLogo theme="light" size="md" />
          </a>
        </div>

        {/* Editorial Indexed Navigation Links */}
        <nav className="hidden xl:flex items-center h-full">
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`relative h-full px-4 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 border-b-2 ${
                  isActive
                    ? 'text-[#0B1320] border-[#0D7A72] bg-[#0D7A72]/[0.05] font-bold'
                    : 'text-stone-600 border-transparent hover:text-[#0B1320] hover:bg-stone-200/40'
                }`}
              >
                <span className={`font-mono text-[10px] font-bold ${isActive ? 'text-[#C87D20]' : 'text-stone-400'}`}>
                  {item.num}
                </span>
                <span className="tracking-tight">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Button + Mobile Menu Button */}
        <div className="shrink-0 flex items-center gap-3">
          <button
            onClick={onRequestDemo}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#0B1320] hover:bg-[#0D7A72] text-white text-xs sm:text-sm font-bold tracking-wide transition-colors cursor-pointer whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>Connect with us</span>
            <ArrowUpRight className="w-4 h-4 text-[#E5A93C] hidden sm:inline" />
          </button>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="xl:hidden p-2.5 border border-[#D8D2C7] text-[#0B1320] hover:bg-stone-200/50 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF8F5] border-t border-[#E5DFD5]">
          <div className="px-4 py-3 divide-y divide-[#E5DFD5]">
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full text-left px-3 py-3 text-xs font-bold transition-colors flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'text-[#0D7A72] bg-[#0D7A72]/5'
                      : 'text-stone-700 hover:text-[#0B1320]'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="font-mono text-[10px] text-[#C87D20]">{item.num}</span>
                    <span>{item.label}</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};



