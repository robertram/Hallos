'use client'

import React from 'react'
import CustomForm from '@/components/forms/CustomForm';
import { OrderFormFields } from '@/constants/formInputs';

const PaymentsPage = () => {
  return (
    <>
    <CustomForm
    title="Order information"
    fields={OrderFormFields}
    onSubmit={(formValues) => {
      console.log(formValues);
    }}
  />
    <CustomForm
    title="Ticket holder details 1"
    fields={OrderFormFields}
    onSubmit={(formValues) => {
      console.log(formValues);
    }}
  />
    </>
  )
}

export default PaymentsPage;
