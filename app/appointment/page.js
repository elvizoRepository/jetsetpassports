"use client"
import Banner from '@/Components/Banner';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './appointment.css'; // Import the CSS file
import CustomButton from '@/Components/CustomButton';
import axios from 'axios';
import jsPDF from 'jspdf';

export default function Page() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleDateChange = event => {
    setSelectedDate(event.target.value);
  };

  const handlePhoneChange =event =>{
    setPhone(event.target.value);
  }
  const handleTimeChange = event => {
    setSelectedTime(event.target.value);
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const pdf = new jsPDF();
    const fontSize = 10;
    pdf.setFontSize(fontSize);

    pdf.text('Appointment Confirmation', 105, 10, { align: 'center' });
    pdf.text(`Appointment Data: ${name}`, 10, 60);
    pdf.text(`Appointment Time: ${selectedTime}`, 10, 70);
    pdf.text(`Name: ${name}`, 10, 80);
    pdf.text(`Email: ${email}`, 10, 90);
    pdf.text(`Phone: ${phone}`, 10, 100);

    const pdfDataUri = pdf.output('datauristring');
    pdf.save('appointment.pdf');

    try {
        await axios.post('/api/email', {
        to: 'jetsetpassports@gmail.com',
        subject: 'Appointment Confirmation',
        text: 'Appointment Schedule',
        attachment: pdfDataUri.split(',')[1],
      });
  
      await axios.post('/api/email', {
        to: email,
        subject: 'Appointment Confirmation',
        text: 'Appointment Schedule',
        attachment: pdfDataUri.split(',')[1],
      });
    } catch (error) {
      console.error('Error submitting application', error);
      setOpen(true);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Jetset Passports - Book Appointment</title>
      </Helmet>
      <Banner title="Book Appointment" />
      <section >
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <label className="label">Date:</label>
            <input type="date" value={selectedDate} onChange={handleDateChange} className="input" />
          </div>
          <div className="input-group">
            <label className="label">Time:</label>
            <select value={selectedTime} onChange={handleTimeChange} className="input">
              <option value="">Select Time</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="input-group">
            <label className="label">Enter Name:</label>
            <input type="text" value={name} onChange={handleNameChange} className="input" />
          </div>
          <div className="input-group">
            <label className="label">Enter Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} className="input" />
          </div>
          <div className="input-group">
            <label className="label">Enter Phone:</label>
            <input type="email" value={phone} onChange={handlePhoneChange} className="input" />
          </div>
          <CustomButton onclick={handleSubmit} type='submit' name='Book Appointment'/>
        </form>
      </section>
    </div>
  );
}


