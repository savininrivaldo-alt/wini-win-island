import React, { useState } from 'react';
import { X, FolderCheck, UploadCloud, Info, Copy, Check, Eye } from 'lucide-react';
import { gallery } from '../../data/gallery';

interface PhotoManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdatePhoto?: (id: string, customSrc: string) => void;
}

export const PhotoManagerModal: React.FC<PhotoManagerModalProps> = ({
  isOpen,
  onClose,
  onUpdatePhoto,
}) => {
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  const handleFileUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpdatePhoto) {
      const url = URL.createObjectURL(file);
      onUpdatePhoto(id, url);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#12372A]/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl bg-[#FAF9F6] border border-[#C7A76C]/40 shadow-2xl z-10 my-8 overflow-hidden text-[#151515]">
        {/* Header */}
        <div className="p-6 bg-[#12372A] text-[#FAF9F6] flex items-center justify-between border-b border-[#C7A76C]/30">
          <div>
            <div className="flex items-center gap-2">
              <FolderCheck className="w-4 h-4 text-[#C7A76C]" />
              <span className="text-[10px] uppercase tracking-widest text-[#C7A76C] font-semibold">
                Architecture Photographique Officielle
              </span>
            </div>
            <h3 className="font-serif text-2xl font-medium mt-0.5">
              Les 10 Photos Officielles de WINI WINI ISLAND
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#FAF9F6] hover:text-[#C7A76C] transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Architecture notification */}
          <div className="p-4 bg-[#F6F1E8] border-l-4 border-[#12372A] text-xs text-[#151515]/80 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-[#12372A] text-sm">
              <Info className="w-4 h-4 text-[#C7A76C]" />
              <span>10 photos officielles synchronisées et actives</span>
            </div>
            <p className="leading-relaxed">
              Toutes les 10 photographies transmises sont intégrées dans le site à l'aide de l'architecture centralisée{' '}
              <code className="bg-[#E8DCC8] px-1.5 py-0.5 font-mono text-[#12372A] font-semibold">
                /data/gallery.ts
              </code>{' '}
              et servies directement depuis{' '}
              <code className="bg-[#E8DCC8] px-1.5 py-0.5 font-mono text-[#12372A] font-semibold">
                /public/images/gallery/
              </code>
              .
            </p>
          </div>

          {/* List of 10 Official Slots */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#12372A] mb-2">
              Correspondance des 10 photographies
            </h4>

            {gallery.map((item, index) => (
              <div
                key={item.id}
                className="p-4 bg-white border border-[#E8DCC8] hover:border-[#12372A]/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  {/* Thumbnail */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-[#12372A] overflow-hidden border border-[#C7A76C]/30 relative">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 bg-[#12372A]/90 text-[#C7A76C] text-[9px] font-mono px-1 py-0.5">
                      #{index + 1}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h5 className="font-serif text-base font-semibold text-[#12372A]">
                        {item.title}
                      </h5>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-[#F6F1E8] text-[#1B4332] border border-[#E8DCC8]">
                        {item.category}
                      </span>
                    </div>

                    <p className="text-xs text-[#151515]/70 mt-0.5 font-light max-w-md">
                      {item.description}
                    </p>

                    <div className="mt-2 flex items-center gap-3 flex-wrap">
                      <span className="text-[11px] font-mono text-[#1B4332] bg-[#E8DCC8]/60 px-2 py-0.5 border border-[#E8DCC8]">
                        Fichier : {item.originalFileName}
                      </span>
                      <code className="text-[11px] font-mono text-[#12372A] bg-[#F6F1E8] px-2 py-0.5">
                        {item.src}
                      </code>
                      <button
                        onClick={() => handleCopy(item.src)}
                        className="text-[10px] text-[#C7A76C] hover:text-[#12372A] inline-flex items-center gap-1 cursor-pointer"
                        title="Copier le chemin"
                      >
                        {copiedPath === item.src ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600">Copié !</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copier</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Instant in-browser upload preview tester */}
                <div className="shrink-0 w-full sm:w-auto">
                  <label className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-[#12372A] bg-[#F6F1E8] hover:bg-[#E8DCC8] border border-[#E8DCC8] cursor-pointer w-full transition-colors">
                    <UploadCloud className="w-3.5 h-3.5 text-[#C7A76C]" />
                    <span>Remplacer</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(item.id, e)}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F6F1E8] border-t border-[#E8DCC8] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#FAF9F6] bg-[#12372A] hover:bg-[#1B4332] transition-colors cursor-pointer"
          >
            Fermer le guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoManagerModal;
