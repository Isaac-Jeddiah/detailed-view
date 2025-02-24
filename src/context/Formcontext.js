import React, { createContext, useState, useContext, useEffect } from 'react';

// Initial form values with sample data
const initialFormState = {
  name: "John Doe",
  email: "xyz@abcmail.com",
  phone: "987654321",
  state: "Alabama",
  zipcode: "534768",
  bio: "I am an employee of abc company and i am a full time employee. I am good at ...",
  cardNumber: "4123 **** **** ****",
  cardHolder: "John Doe",
  expiry: "06/28",
  cvc: "5252",
};

// Create context
const FormContext = createContext();

// Create provider component
export const FormProvider = ({ children }) => {
  const [formState, setFormState] = useState(initialFormState);

  // Try to load saved form state from localStorage on mount
  useEffect(() => {
    try {
      const savedState = localStorage.getItem('formState');
      if (savedState) {
        setFormState(JSON.parse(savedState));
      }
    } catch (error) {
      console.error('Error loading saved form state:', error);
    }
  }, []);

  // Update a single field
  const updateField = (fieldName, value) => {
    setFormState(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
  };

  // Update multiple fields at once
  const updateMultipleFields = (fields) => {
    setFormState(prevState => ({
      ...prevState,
      ...fields
    }));
  };

  // Reset form to initial state
  const resetForm = () => {
    setFormState(initialFormState);
    // Also clear localStorage when resetting
    localStorage.removeItem('formState');
  };

  return (
    <FormContext.Provider value={{ 
      formState, 
      updateField, 
      updateMultipleFields, 
      resetForm 
    }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook for accessing form context
export const useFormState = () => {
  const context = useContext(FormContext);
  
  if (!context) {
    throw new Error('useFormState must be used within a FormProvider');
  }
  
  return context;
};