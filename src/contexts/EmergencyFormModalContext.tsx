import { createContext, useContext, useState, ReactNode } from 'react';

interface EmergencyFormModalContextType {
  isOpen: boolean;
  formTitle: string;
  openModal: (formTitle?: string) => void;
  closeModal: () => void;
}

const EmergencyFormModalContext = createContext<EmergencyFormModalContextType | undefined>(undefined);

export function EmergencyFormModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formTitle, setFormTitle] = useState('Emergency Travel Assistance');

  const openModal = (title: string = 'Emergency Travel Assistance') => {
    setFormTitle(title);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <EmergencyFormModalContext.Provider value={{ isOpen, formTitle, openModal, closeModal }}>
      {children}
    </EmergencyFormModalContext.Provider>
  );
}

export function useEmergencyFormModal() {
  const context = useContext(EmergencyFormModalContext);
  if (context === undefined) {
    throw new Error('useEmergencyFormModal must be used within an EmergencyFormModalProvider');
  }
  return context;
}
