import { useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { X } from 'lucide-react';

interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export default function BottomSheet({ open, onClose, title, children }: BottomSheetProps) {
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={reduce ? { duration: 0.15 } : { duration: 0.2 }}
            onClick={onClose}
          />
          <motion.div
            className="relative w-full sm:max-w-lg max-h-[85vh] overflow-y-auto bg-surface border-t border-border sm:border sm:rounded-2xl rounded-t-3xl shadow-2xl safe-bottom"
            initial={reduce ? { opacity: 0 } : { y: '100%', opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { y: '100%', opacity: 0 }}
            transition={reduce
              ? { duration: 0.15 }
              : { type: 'spring', stiffness: 260, damping: 30, mass: 0.7 }}
          >
            <div className="sticky top-0 bg-surface border-b border-border px-5 py-4 flex items-center justify-between z-10">
              <h3 className="text-lg font-bold text-text">{title}</h3>
              <motion.button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-surface2 flex items-center justify-center text-textMuted hover:text-text transition-colors"
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="p-5">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useBottomSheet() {
  const [open, setOpen] = useState(false);
  return { open, setOpen };
}
