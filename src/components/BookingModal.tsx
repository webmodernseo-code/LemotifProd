'use client';

import React, { useState, useEffect } from 'react';
import { X, Check, Sparkles, Send, ShieldCheck, CheckCircle, Calendar } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefill?: {
    serviceId?: string;
    serviceName?: string;
    totalPrice?: number;
    options?: string[];
  } | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefill,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('portrait');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefill?.serviceId) {
      setService(prefill.serviceId);
    }
  }, [prefill]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0e1017] border border-white/15 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#141724] to-[#0e1017] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif text-white">
                Réservation & Demande de Séance
              </h3>
              <p className="text-xs text-zinc-400 font-light">
                Le Motif Prod • Studio & Production Visuelle
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold font-serif text-white">
                Demande de réservation confirmée !
              </h4>
              <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                Merci <strong className="text-white">{name}</strong>. Votre demande pour la prestation{' '}
                <strong className="text-amber-400">{prefill?.serviceName || service}</strong> a bien été enregistrée. Nous vous contacterons sous 24h pour finaliser le planning.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-8 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs tracking-wider uppercase transition-colors"
              >
                Fermer
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Optional Estimate Card from Calculator */}
              {prefill?.totalPrice && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 mb-4 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-amber-300 font-semibold block">
                      Formule sélectionnée : {prefill.serviceName}
                    </span>
                    {prefill.options && prefill.options.length > 0 && (
                      <span className="text-xs text-zinc-400">
                        {prefill.options.length} option(s) incluse(s)
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold font-serif text-amber-400 font-mono">
                      {prefill.totalPrice} €
                    </span>
                    <span className="text-[10px] text-zinc-400 block">estimatif</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Camille Martin"
                    className="w-full h-10 px-3.5 rounded-xl bg-black/40 border border-white/15 focus:border-amber-400 focus:outline-none text-white text-sm placeholder-zinc-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Email de contact *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="camille@exemple.fr"
                    className="w-full h-10 px-3.5 rounded-xl bg-black/40 border border-white/15 focus:border-amber-400 focus:outline-none text-white text-sm placeholder-zinc-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+33 6 00 00 00 00"
                    className="w-full h-10 px-3.5 rounded-xl bg-black/40 border border-white/15 focus:border-amber-400 focus:outline-none text-white text-sm placeholder-zinc-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Formule souhaitée
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full h-10 px-3.5 rounded-xl bg-black/40 border border-white/15 focus:border-amber-400 focus:outline-none text-white text-sm"
                  >
                    <option value="portrait" className="bg-[#0e1017]">Portrait & Book Pro (dès 380€)</option>
                    <option value="corporate" className="bg-[#0e1017]">Corporate & Marque (dès 790€)</option>
                    <option value="mariage" className="bg-[#0e1017]">Mariage & Événement (dès 1490€)</option>
                    <option value="video" className="bg-[#0e1017]">Vidéo & Drone 4K (dès 950€)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Date ou période estimée
                </label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Ex: Dans 2 semaines, Samedi 24 Mai..."
                  className="w-full h-10 px-3.5 rounded-xl bg-black/40 border border-white/15 focus:border-amber-400 focus:outline-none text-white text-sm placeholder-zinc-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Détails du projet & attentes
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Précisez vos inspirations, lieu souhaité, nombre de personnes..."
                  className="w-full p-3 rounded-xl bg-black/40 border border-white/15 focus:border-amber-400 focus:outline-none text-white text-sm placeholder-zinc-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 cursor-pointer mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Valider la demande de séance</span>
              </button>

              <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-zinc-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Sans acompte préalable à cette étape • Échange préparatoire offert</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
