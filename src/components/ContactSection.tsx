'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ShieldCheck, CheckCircle, Calendar, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'portrait',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep submitted true for user feedback
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0c0e14] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Studio Location */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Prendre Contact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight mb-4">
                Parlons de votre prochain projet visuel
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                Vous avez une idée de shooting, une campagne de marque à concrétiser ou un mariage à immortaliser ? Écrivez-nous ou réservez un échange téléphonique.
              </p>
            </div>

            {/* Coordinates Cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-4 hover:border-amber-400/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 block font-light">Email direct</span>
                  <a href="mailto:contact@lemotifprod.fr" className="text-base font-medium text-white hover:text-amber-400 transition-colors">
                    contact@lemotifprod.fr
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-4 hover:border-amber-400/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 block font-light">Téléphone & WhatsApp</span>
                  <a href="tel:+33189472010" className="text-base font-medium text-white hover:text-amber-400 transition-colors">
                    +33 (0)1 89 47 20 10
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-4 hover:border-amber-400/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 block font-light">Studio & Ateliers</span>
                  <span className="text-sm font-medium text-white">
                    Paris 11e • Déplacements France & International
                  </span>
                </div>
              </div>
            </div>

            {/* Reassurance Banner */}
            <div className="p-4 rounded-xl bg-amber-400/5 border border-amber-400/15 flex items-center gap-3 text-xs text-zinc-300">
              <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Réponse sous 24h ouvrées • Devis détaillé gratuit et sans engagement</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-[#0e1017] border border-white/10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-white">
                    Demande transmise avec succès
                  </h3>
                  <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
                    Merci pour votre message ! Notre équipe étudie attentivement vos besoins et vous recontactera d’ici 24h avec une proposition sur-mesure.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'portrait',
                        date: '',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <span>Envoyer un autre message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold font-serif text-white mb-2">
                    Formulaire de Contact & Devis
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Nom complet ou Société *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jean Dupont / Studio Mode"
                        className="w-full h-11 px-3.5 rounded-xl bg-black/50 border border-white/15 focus:border-amber-400 focus:outline-none text-white text-sm placeholder-zinc-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Adresse Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jean@domaine.fr"
                        className="w-full h-11 px-3.5 rounded-xl bg-black/50 border border-white/15 focus:border-amber-400 focus:outline-none text-white text-sm placeholder-zinc-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Numéro de téléphone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+33 6 12 34 56 78"
                        className="w-full h-11 px-3.5 rounded-xl bg-black/50 border border-white/15 focus:border-amber-400 focus:outline-none text-white text-sm placeholder-zinc-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Type de prestation *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl bg-black/50 border border-white/15 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors"
                      >
                        <option value="portrait" className="bg-[#0e1017]">Portrait & Book Pro</option>
                        <option value="corporate" className="bg-[#0e1017]">Campagne de Marque & Corporate</option>
                        <option value="mariage" className="bg-[#0e1017]">Reportage Mariage & Événement</option>
                        <option value="video" className="bg-[#0e1017]">Production Vidéo & Drone 4K</option>
                        <option value="autre" className="bg-[#0e1017]">Autre demande sur-mesure</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Date ou période souhaitée
                    </label>
                    <input
                      type="text"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      placeholder="Ex: Printemps 2025 ou Samedi 14 Juin"
                      className="w-full h-11 px-3.5 rounded-xl bg-black/50 border border-white/15 focus:border-amber-400 focus:outline-none text-white text-sm placeholder-zinc-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Décrivez votre vision & vos attentes *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Lieu envisagé, nombre de participants, style recherché, objectifs particuliers..."
                      className="w-full p-3.5 rounded-xl bg-black/50 border border-white/15 focus:border-amber-400 focus:outline-none text-white text-sm placeholder-zinc-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 transition-all duration-200 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmettre ma demande de devis</span>
                  </button>

                  <div className="pt-3 flex items-center justify-center gap-2 text-[11px] text-zinc-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Vos données sont strictement confidentielles et ne seront jamais partagées.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
