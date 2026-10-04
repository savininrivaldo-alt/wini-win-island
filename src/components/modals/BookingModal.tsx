import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { practicalInfo } from '../../data/practicalInfo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [experienceType, setExperienceType] = useState('dejeuner-pilotis');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('12:30');
  const [guestsAdults, setGuestsAdults] = useState('2');
  const [guestsChildren, setGuestsChildren] = useState('0');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const experiences = [
    { id: 'dejeuner-pilotis', label: 'Déjeuner sur Pilotis', time: '11h30 – 16h00' },
    { id: 'diner-sunset', label: 'Dîner Sunset & Nuit', time: '17h00 – 23h00' },
    { id: 'journee-piscine', label: 'Journée Piscine & Transat', time: 'Dès 11h00' },
    { id: 'lounge-bar', label: 'Table Bar & Mixologie', time: 'Sunset & Soirée' },
    { id: 'privatisation', label: 'Événement Privé / Anniversaire', time: 'Sur mesure' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getSelectedExperienceLabel = () => {
    return experiences.find(e => e.id === experienceType)?.label || experienceType;
  };

  const generateWhatsAppMessage = () => {
    const text = `*RÉSERVATION — WINI WINI ISLAND*
---------------------------------------
• Nom : ${name || 'Client Wini Wini'}
• Téléphone : ${phone || 'Non renseigné'}
• Expérience : ${getSelectedExperienceLabel()}
• Date : ${date || 'À convenir'}
• Heure souhaitée : ${time}
• Nombre de convives : ${guestsAdults} adulte(s) ${guestsChildren !== '0' ? `+ ${guestsChildren} enfant(s)` : ''}
• Demande spéciale : ${specialRequests || 'Aucune'}
---------------------------------------
Merci de me confirmer la disponibilité et l'embarquement en pirogue à Hio Houta.`;

    return encodeURIComponent(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#12372A]/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#FAF9F6] border border-[#C7A76C]/40 shadow-2xl z-10 my-8 overflow-hidden text-[#151515]">
        {/* Header Bar */}
        <div className="p-6 bg-[#12372A] text-[#FAF9F6] flex items-center justify-between border-b border-[#C7A76C]/30">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#C7A76C] font-semibold block">
              Conciergerie Insulaire · Hio Houta
            </span>
            <h3 className="font-serif text-2xl font-medium">
              Réserver votre parenthèse
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#FAF9F6] hover:text-[#C7A76C] transition-colors cursor-pointer"
            aria-label="Fermer la fenêtre de réservation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Experience selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#12372A] mb-2">
                  1. Choisissez votre expérience
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {experiences.map((exp) => (
                    <button
                      key={exp.id}
                      type="button"
                      onClick={() => setExperienceType(exp.id)}
                      className={`p-3 text-left border transition-all cursor-pointer ${
                        experienceType === exp.id
                          ? 'border-[#12372A] bg-[#12372A] text-[#FAF9F6]'
                          : 'border-[#E8DCC8] bg-white text-[#151515] hover:border-[#12372A]/40'
                      }`}
                    >
                      <div className="text-xs font-semibold">{exp.label}</div>
                      <div className={`text-[11px] mt-0.5 ${experienceType === exp.id ? 'text-[#C7A76C]' : 'text-[#151515]/60'}`}>
                        {exp.time}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#12372A] mb-1.5">
                    2. Date de visite
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E8DCC8] text-sm text-[#12372A] focus:outline-none focus:border-[#12372A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#12372A] mb-1.5">
                    Heure souhaitée
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E8DCC8] text-sm text-[#12372A] focus:outline-none focus:border-[#12372A]"
                  >
                    <option value="11:30">11h30 (Premier service déjeuner)</option>
                    <option value="12:30">12h30 (Déjeuner lagunaire)</option>
                    <option value="13:30">13h30 (Déjeuner tardif)</option>
                    <option value="15:00">15h00 (Piscine & Détente après-midi)</option>
                    <option value="17:00">17h00 (Sunset Session & Cocktails)</option>
                    <option value="18:30">18h30 (Apéritif crépusculaire)</option>
                    <option value="19:30">19h30 (Dîner sur pilotis)</option>
                    <option value="20:30">20h30 (Dîner & Soirée nocturne)</option>
                  </select>
                </div>
              </div>

              {/* Guests */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#12372A] mb-1.5">
                    Adultes
                  </label>
                  <select
                    value={guestsAdults}
                    onChange={(e) => setGuestsAdults(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E8DCC8] text-sm text-[#12372A] focus:outline-none focus:border-[#12372A]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, '15+'].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'personne' : 'personnes'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#12372A] mb-1.5">
                    Enfants (-12 ans)
                  </label>
                  <select
                    value={guestsChildren}
                    onChange={(e) => setGuestsChildren(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E8DCC8] text-sm text-[#12372A] focus:outline-none focus:border-[#12372A]"
                  >
                    {[0, 1, 2, 3, 4, 5, '6+'].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'enfant' : 'enfants'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guest details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#12372A] mb-1.5">
                    Votre Nom Complet
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ex. Koffi Dossou"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E8DCC8] text-sm text-[#12372A] focus:outline-none focus:border-[#12372A]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#12372A] mb-1.5">
                    Numéro de Téléphone (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="01 99 11 67 67"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E8DCC8] text-sm text-[#12372A] focus:outline-none focus:border-[#12372A]"
                  />
                </div>
              </div>

              {/* Special requests */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#12372A] mb-1.5">
                  Demande Particulière (Optionnel)
                </label>
                <textarea
                  rows={2}
                  placeholder="Anniversaire, table en bord d'eau, régime alimentaire, demande en mariage..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-3.5 py-2 bg-white border border-[#E8DCC8] text-sm text-[#12372A] focus:outline-none focus:border-[#12372A]"
                />
              </div>

              {/* Safety & Pirogue reminder */}
              <div className="p-3.5 bg-[#F6F1E8] border-l-2 border-[#12372A] text-xs text-[#151515]/75 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                <span>
                  <strong>Traversée en pirogue :</strong> 2 000 FCFA A/R par personne avec gilets certifiés fournis depuis l'embarcadère de Hio Houta.
                </span>
              </div>

              {/* Submit Button - Dark Green #12372A text-white */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 text-xs font-semibold uppercase tracking-widest text-[#FAF9F6] bg-[#12372A] hover:bg-[#1B4332] transition-colors shadow-md cursor-pointer"
                >
                  Confirmer et pré-réserver ma place
                </button>
              </div>
            </form>
          ) : (
            /* Confirmation State */
            <div className="py-6 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#12372A] text-[#C7A76C] flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#1B4332] font-semibold block mb-1">
                  Demande Enregistrée
                </span>
                <h4 className="font-serif text-3xl text-[#12372A] font-medium">
                  Merci {name || 'cher client'} !
                </h4>
                <p className="text-sm text-[#151515]/75 max-w-md mx-auto mt-2 font-light">
                  Votre demande de réservation pour le <strong className="text-[#12372A]">{date || "jour choisi"}</strong> à <strong className="text-[#12372A]">{time}</strong> pour <strong className="text-[#12372A]">{guestsAdults} adulte(s)</strong> a bien été préparée.
                </p>
              </div>

              {/* Summary recap box */}
              <div className="p-5 bg-[#F6F1E8] border border-[#E8DCC8] text-left text-xs max-w-md mx-auto space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#151515]/60">Expérience :</span>
                  <span className="font-semibold text-[#12372A]">{getSelectedExperienceLabel()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#151515]/60">Lieu d'embarquement :</span>
                  <span className="font-semibold text-[#12372A]">Embarcadère Hio Houta, Togbin</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#151515]/60">Téléphone client :</span>
                  <span className="font-mono text-[#12372A]">{phone}</span>
                </div>
              </div>

              {/* Direct WhatsApp Action for instant confirmation in Benin */}
              <div className="space-y-3 max-w-md mx-auto">
                <a
                  href={`https://wa.me/${practicalInfo.contacts.whatsapp}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Envoyer ma réservation par WhatsApp (+229)</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full py-2.5 text-xs text-[#12372A] hover:underline uppercase tracking-wider font-medium"
                >
                  Fermer cette fenêtre
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
