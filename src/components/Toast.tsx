'use client';

import {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Toast {
  id: number;
  message: string;
  type: 'info' | 'success';
}

interface ToastContextValue {
  showToast: (message: string, type?: 'info' | 'success') => void;
}

const ToastContext = createContext<ToastContextValue>({ showToast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

let toastId = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    (message: string, type: 'info' | 'success' = 'info') => {
      const id = ++toastId;
      setToasts(prev => [...prev, { id, message, type }]);
    },
    [],
  );

  const removeToast = useCallback((id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast container */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
        <AnimatePresence>
          {toasts.map(toast => (
            <ToastItem
              key={toast.id}
              toast={toast}
              onDone={() => removeToast(toast.id)}
            />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ toast, onDone }: { toast: Toast; onDone: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 3500);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-auto flex items-center gap-3 rounded-xl border border-border/60 bg-white px-5 py-3.5 shadow-xl"
    >
      {/* Icon */}
      {toast.type === 'info' ? (
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 shrink-0">
          <svg
            className="w-4 h-4 text-accent animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </div>
      ) : (
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-app-green/10 shrink-0">
          <svg
            className="w-4 h-4 text-app-green"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      )}

      <span className="text-sm font-medium text-foreground">
        {toast.message}
      </span>
    </motion.div>
  );
}
