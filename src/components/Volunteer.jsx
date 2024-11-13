import React from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const volunteerSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  availability: Yup.string().required('Availability is required'),
  interests: Yup.string().required('Areas of interest are required'),
});

const Volunteer = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await addDoc(collection(db, 'volunteers'), values);
      alert('Thank you for volunteering! We will contact you soon.');
      resetForm();
    } catch (error) {
      console.error('Error submitting volunteer form:', error);
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
        Volunteer Registration
      </h1>
      <p className="text-xl mb-8 text-center text-deep-brown">
        Join our team and help make the BLE Reggae Festival a success!
      </p>
      <Formik
        initialValues={{ name: '', email: '', phone: '', availability: '', interests: '' }}
        validationSchema={volunteerSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-deep-brown mb-2">Name</label>
              <Field type="text" name="name" className="w-full p-2 border rounded" />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
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
              <label htmlFor="availability" className="block text-deep-brown mb-2">Availability</label>
              <Field as="select" name="availability" className="w-full p-2 border rounded">
                <option value="">Select availability</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="weekends">Weekends only</option>
              </Field>
              <ErrorMessage name="availability" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="interests" className="block text-deep-brown mb-2">Areas of Interest</label>
              <Field as="textarea" name="interests" className="w-full p-2 border rounded" />
              <ErrorMessage name="interests" component="div" className="text-red-500 text-sm mt-1" />
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

export default Volunteer;
