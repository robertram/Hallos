'use client'

import React from 'react';
import Input from '../input/Input';
import PhoneInput from '../input/PhoneInput';

export interface FormField {
  id: string;
  isRequired: boolean;
  name: string;
  type: 'string' | 'email' | 'phoneNumber' | 'identification';
  gridColumn?: 'full' | 'half';
}

interface CustomFormProps {
  title: string;
  fields: FormField[];
  onSubmit?: (values: Record<string, string>) => void;
  isMainTitle?: boolean;
}

const CustomForm: React.FC<CustomFormProps> = ({ title, fields, onSubmit, isMainTitle = true }) => {
  const [formValues, setFormValues] = React.useState<Record<string, string>>({});

  const handleChange = (id: string, value: string) => {
    setFormValues(prev => ({
      ...prev,
      [id]: value
    }));
    onSubmit?.({...formValues, [id]: value});
  };

  const groupFieldsInRows = (fields: FormField[]) => {
    const rows: FormField[][] = [];
    let currentRow: FormField[] = [];

    fields.forEach(field => {
      const isFullWidth = field.gridColumn === 'full';
      
      if (isFullWidth && currentRow.length > 0) {
        rows.push(currentRow);
        currentRow = [field];
        rows.push(currentRow);
        currentRow = [];
      } else if (currentRow.length === 2) {
        rows.push(currentRow);
        currentRow = [field];
      } else {
        currentRow.push(field);
      }
    });

    if (currentRow.length > 0) {
      rows.push(currentRow);
    }

    return rows;
  };

  const renderField = (field: FormField) => {
    const commonProps = {
      key: field.id,
      label: field.name,
      placeholder: "Type here...",
      required: field.isRequired,
      value: formValues[field.id] || '',
    };

    switch (field.type) {
      case 'phoneNumber':
        return (
          <PhoneInput
            {...commonProps}
            onChangePhone={(value) => handleChange(field.id, value)}
          />
        );
      case 'email':
        return (
          <Input
            {...commonProps}
            type="email"
            onChange={(e) => handleChange(field.id, e.target.value)}
          />
        );
      default:
        return (
          <Input
            {...commonProps}
            type="text"
            onChange={(e) => handleChange(field.id, e.target.value)}
          />
        );
    }
  };

  const rows = groupFieldsInRows(fields);

  return (
    <div className="w-full max-w-2xl my-4 mx-auto">
      <h2 className={`${isMainTitle ? 'text-h3' : 'text-h4'} font-semibold mb-6 text-white`}>{title}</h2>
      <div className="space-y-6">
        {rows.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className={`grid grid-cols-1 ${
              row.length > 1 ? 'md:grid-cols-2' : ''
            } gap-4`}
          >
            {row.map(field => renderField(field))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomForm;