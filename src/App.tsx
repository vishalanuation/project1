import React, { useState, useEffect } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { FullExactLandingPage } from './components/FullExactLandingPage';
import { DemoRequestModal } from './components/DemoRequestModal';
import { BrochurePreviewModal } from './components/BrochurePreviewModal';

export default function App() {
  const [activeNav, setActiveNav] = useState('freight-forwarding');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoTopic, setDemoTopic] = useState('');
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  useEffect(() => {
    const sectionMap: { id: string; navId: string }[] = [
      { id: 'solution-freight', navId: 'freight-forwarding' },
      { id: 'solution-multimodal', navId: 'multi-modal' },
      { id: 'solution-road', navId: 'road-suite' },
      { id: 'solution-rail', navId: 'rail-logistics' },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 260;
      for (let i = sectionMap.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionMap[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveNav(sectionMap[i].navId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (navId: string) => {
    setActiveNav(navId);

    const targetIdMap: Record<string, string> = {
      'freight-forwarding': 'solution-freight',
      'multi-modal': 'solution-multimodal',
      'road-suite': 'solution-road',
      'rail-logistics': 'solution-rail',
      'contact': 'contact-section'
    };

    const targetEl = document.getElementById(targetIdMap[navId] || navId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDemo = (topic?: string) => {
    setDemoTopic(topic || '');
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f6f5f0] flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      {/* Top Header */}
      <HeaderNav
        activeNav={activeNav}
        onNavClick={handleNavClick}
        onRequestDemo={() => handleOpenDemo('General Inquiry')}
      />

      {/* Main Landing Page */}
      <main className="flex-1 w-full">
        <FullExactLandingPage
          onRequestConsultation={handleOpenDemo}
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />
      </main>

      {/* 8-Page Corporate Catalog Modal */}
      <BrochurePreviewModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      {/* Schedule Consultation Modal */}
      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        initialTopic={demoTopic}
      />
    </div>
  );
}

