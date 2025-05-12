import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ClothDonationType } from '../../lib/Types';

const defaultData: Omit<ClothDonationType, 'setFormContent'> = {
  action: '',
  firstname: '',
  lastname: '',
  email: '',
  address: '',
  city: '',
  zip: '',
  artOfCloth: '',
  crisisArea: '',
};

interface HandoverContextType {
  data: ClothDonationType;
  updateData: (d: Partial<Omit<ClothDonationType, 'setFormContent'>>) => void;
}

const HandoverContext = createContext<HandoverContextType | undefined>(undefined);

export const HandoverProvider = ({ children }: { children: ReactNode }) => {
  const [dataState, setDataState] = useState(defaultData);

  const setFormContent = (key: string) => {
    setDataState(prev => ({ ...prev, action: key })); // Beispiel: setFormContent ändert "action"
  };

  const data: ClothDonationType = {
    ...dataState,
    setFormContent,
  };

  const updateData = (newData: Partial<Omit<ClothDonationType, 'setFormContent'>>) => {
    setDataState(prev => ({ ...prev, ...newData }));
  };

  return (
    <HandoverContext.Provider value={{ data, updateData }}>
      {children}
    </HandoverContext.Provider>
  );
};

export const useHandover = (): HandoverContextType => {
  const context = useContext(HandoverContext);
  if (!context) {
    throw new Error('useHandover must be used within a HandoverProvider');
  }
  return context;
};
