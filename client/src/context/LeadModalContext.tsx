import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';

interface LeadModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const LeadModalContext = createContext<LeadModalContextType | undefined>(undefined);

export const LeadModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useCallback prevents the function from changing memory addresses, which stops infinite loops
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <LeadModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </LeadModalContext.Provider>
  );
};

export const useLeadModal = () => {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error('useLeadModal must be used within a LeadModalProvider');
  }
  return context;
};