import React, { useState } from "react";
import styles from "./dynamicmodal.module.scss"; // For styling

interface Field {
  name: string;
  label: string;
  type: "text" | "email" | "number" | "password"; // Extendable
  required?: boolean;
  placeholder?: string;
}

interface ModalProps {
  title: string;
  fields: Field[];
  onClose: () => void;
  onSubmit: (data: Record<string, any>) => void;
}

const DynamicModal: React.FC<ModalProps> = ({ title, fields, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<Record<string, string | number>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{title}</h2>
        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field.name} className={styles.formGroup}>
              <label htmlFor={field.name}>{field.label}</label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder || ""}
                required={field.required || false}
                onChange={(e)=>handleChange(e)}
                value={field?.name}
              />
            </div>
          ))}
          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
            <button type="button" className={styles.closeButton} onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DynamicModal;
