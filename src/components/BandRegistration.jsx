import React from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const bandSchema = Yup.object().shape({
  bandName: Yup.string().required('Band name is required'),
  contactName: Yup.string().required('Contact name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  genre: Yup.string().required('Genre is required'),
  members: Yup.number().required('Number of members is required').positive().integer(),
  experience: Yup.string().required('Experience level is required'),
});

const BandRegistration = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await addDoc(collection(db, 'bands'), values);
      alert('Thank you for registering your band! We will contact you soon.');
      resetForm();
    } catch (error) {
      console.error('Error submitting band registration:', error);
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
        Band Registration
      </h1>
      <p className="text-xl mb-8 text-center text-deep-brown">
        Register your band to perform at the BLE Reggae Festival!
      </p>
      <Formik
        initialValues={{ bandName: '', contactName: '', email: '', phone: '', genre: '', members: '', experience: '' }}
        validationSchema={bandSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
            <div className="mb-4">
              <label htmlFor="bandName" className="block text-deep-brown mb-2">Band Name</label>
              <Field type="text" name="bandName" className="w-full p-2 border rounded" />
              <ErrorMessage name="bandName" component="div" className="text-red-500 text-sm mt-1" />
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
              <label htmlFor="genre" className="block text-deep-brown mb-2">Genre</label>
              <Field type="text" name="genre" className="w-full p-2 border rounded" />
              <ErrorMessage name="genre" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="members" className="block text-deep-brown mb-2">Number of Members</label>
              <Field type="number" name="members" className="w-full p-2 border rounded" />
              <ErrorMessage name="members" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="experience" className="block text-deep-brown mb-2">Experience Level</label>
              <Field as="select" name="experience" className="w-full p-2 border rounded">
                <option value="">Select experience level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="professional">Professional</option>
              </Field>
              <ErrorMessage name="experience" component="div" className="text-red-500 text-sm mt-1" />
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

export default BandRegistration;
