import React from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const vendorSchema = Yup.object().shape({
  businessName: Yup.string().required('Business name is required'),
  contactName: Yup.string().required('Contact name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  productType: Yup.string().required('Product type is required'),
  boothSize: Yup.string().required('Booth size is required'),
});

const VendorRegistration = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await addDoc(collection(db, 'vendors'), values);
      alert('Thank you for registering as a vendor! We will contact you soon.');
      resetForm();
    } catch (error) {
      console.error('Error submitting vendor registration:', error);
      alert('An error occurred. Please try again.');
    }
    setSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow container mx-auto px-4 py-8"
    >
      <h1 className="text-h1 font-bold mb-8 font-montserrat text-deep-brown text-center">
        Vendor Registration
      </h1>
      <p className="text-xl mb-8 text-center text-deep-brown">
        Register your business to be a part of the BLE Reggae Festival!
      </p>
      <Formik
        initialValues={{ businessName: '', contactName: '', email: '', phone: '', productType: '', boothSize: '' }}
        validationSchema={vendorSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
            <div className="mb-4">
              <label htmlFor="businessName" className="block text-deep-brown mb-2">Business Name</label>
              <Field type="text" name="businessName" className="w-full p-2 border rounded" />
              <ErrorMessage name="businessName" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="contactName" className="block text-deep-brown mb-2">Contact Name</label>
              <Field type="text" name="contactName" className="w-full p-2 border rounded" />
              <ErrorMessage name="contactName" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-deep-brown mb-2">Email</label>
              <Field type="email" name="email" className="w-full p-2 border rounded" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-deep-brown mb-2">Phone</label>
              <Field type="tel" name="phone" className="w-full p-2 border rounded" />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="productType" className="block text-deep-brown mb-2">Product Type</label>
              <Field type="text" name="productType" className="w-full p-2 border rounded" />
              <ErrorMessage name="productType" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="boothSize" className="block text-deep-brown mb-2">Booth Size</label>
              <Field as="select" name="boothSize" className="w-full p-2 border rounded">
                <option value="">Select booth size</option>
                <option value="small">Small (10x10)</option>
                <option value="medium">Medium (10x20)</option>
                <option value="large">Large (20x20)</option>
              </Field>
              <ErrorMessage name="boothSize" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default VendorRegistration;
