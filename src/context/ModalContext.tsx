import React, { createContext, useContext, useState } from 'react';

interface ModalContextType {
  isQuoteOpen: boolean;
  setIsQuoteOpen: (isOpen: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isQuoteOpen, setIsQuoteOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
