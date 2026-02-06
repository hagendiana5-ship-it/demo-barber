import React, { useState } from 'react';
import Button from './Button';
import { useLanguage } from '../context/LanguageContext';

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ open, onClose }) => {
  const { t } = useLanguage();
  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  if (!open) return null;

  const handleConfirm = () => {
    setStep(2);
  };

  const handleClose = () => {
    setStep(1);
    setName('');
    setDate('');
    setTime('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative z-10 w-full max-w-md bg-stone-900 border border-stone-700 rounded-sm shadow-2xl">
        <div className="p-6">
          <h3 className="font-serif text-2xl font-bold text-gold-400 mb-4">
            {t.booking?.title ?? 'Booking'}
          </h3>

          {step === 1 ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-gold-400 mb-1">
                  {t.booking?.name ?? 'Name'}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700 rounded-sm p-3 text-white focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-gold-400 mb-1">
                  {t.booking?.date ?? 'Date'}
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700 rounded-sm p-3 text-white focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-gold-400 mb-1">
                  {t.booking?.time ?? 'Time'}
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700 rounded-sm p-3 text-white focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <Button className="metallic-btn" onClick={handleClose}>
                  {t.booking?.cancel ?? 'Cancel'}
                </Button>
                <Button className="metallic-btn" onClick={handleConfirm}>
                  {t.booking?.confirm ?? 'Confirm'}
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <p className="text-gold-400 font-serif text-xl">
                {t.booking?.reserved ?? 'Appointment reserved!'}
              </p>
              <div className="text-stone-300">
                <div>{name}</div>
                <div>{date} {time}</div>
              </div>
              <div className="flex justify-center">
                <Button className="metallic-btn" onClick={handleClose}>
                  {t.booking?.close ?? 'Close'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
