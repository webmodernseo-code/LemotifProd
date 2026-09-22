'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StatsBar } from '@/components/StatsBar';
import { PortfolioGallery } from '@/components/PortfolioGallery';
import { ServicesSection } from '@/components/ServicesSection';
import { PricingCalculator } from '@/components/PricingCalculator';
import { ProcessSection } from '@/components/ProcessSection';
import { EquipmentSection } from '@/components/EquipmentSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';
import { BookingModal } from '@/components/BookingModal';

export default function HomePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<{
    serviceId?: string;
    serviceName?: string;
    totalPrice?: number;
    options?: string[];
  } | null>(null);

  const handleOpenBooking = (serviceId?: string) => {
    setBookingPrefill(serviceId ? { serviceId } : null);
    setBookingModalOpen(true);
  };

  const handleSelectService = (serviceId: string) => {
    setBookingPrefill({ serviceId });
    setBookingModalOpen(true);
  };

  const handleCalculatorBooking = (details: {
    serviceName: string;
    totalPrice: number;
    options: string[];
  }) => {
    setBookingPrefill(details);
    setBookingModalOpen(true);
  };

  const handleExplorePortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#08090d] text-zinc-100 selection:bg-amber-400 selection:text-zinc-950">
      {/* Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
      <Hero
        onOpenBooking={() => handleOpenBooking()}
        onExplorePortfolio={handleExplorePortfolio}
      />

      {/* Stats Counter Bar */}
      <StatsBar />

      {/* Interactive Portfolio Gallery */}
      <PortfolioGallery onOpenBooking={handleOpenBooking} />

      {/* Services & Packages Section */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* Interactive Live Price Estimator */}
      <PricingCalculator onOpenBookingWithDetails={handleCalculatorBooking} />

      {/* Step by Step Workflow */}
      <ProcessSection />

      {/* Studio Equipment & Optical Excellence */}
      <EquipmentSection />

      {/* Client Testimonials */}
      <TestimonialsSection />

      {/* Direct Contact & Quote Form */}
      <ContactSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Booking / Estimate Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => {
          setBookingModalOpen(false);
          setBookingPrefill(null);
        }}
        prefill={bookingPrefill}
      />
    </main>
  );
}
