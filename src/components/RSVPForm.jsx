import { useState } from 'react';
import { FormInput } from './FormInput';

const initialFormState = {
  name: '',
  email: '',
  attend: 'yes',
  guests: '1',
  message: '',
};

export function RSVPForm() {
  const [form, setForm] = useState(initialFormState);
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.name.trim() && form.email.trim()) setSent(true);
  };

  if (sent) {
    return (
      <div className="rsvp-thanks" role="status">
        <p className="script-text">Thank you, {form.name}!</p>
        <p>We can&apos;t wait to celebrate with you. 🌸</p>
      </div>
    );
  }

  return (
    <form className="rsvp-card" onSubmit={handleSubmit}>
      <FormInput label="Full Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
      <FormInput label="Email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" type="email" />

      <div className="field-group">
        <label className="field-label" htmlFor="attend">Will you attend?</label>
        <select id="attend" name="attend" value={form.attend} onChange={handleChange} className="form-control">
          <option value="yes">Joyfully accept ✓</option>
          <option value="no">Regretfully decline</option>
        </select>
      </div>

      <div className="field-group">
        <label className="field-label" htmlFor="guests">Number of Guests</label>
        <select id="guests" name="guests" value={form.guests} onChange={handleChange} className="form-control">
          {['1', '2', '3', '4'].map((number) => (
            <option key={number} value={number}>{number}</option>
          ))}
        </select>
      </div>

      <div className="field-group">
        <label className="field-label" htmlFor="message">A message for the couple</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Share your wishes…"
          className="form-control form-control--textarea"
          rows="3"
        />
      </div>

      <button type="submit" className="button button--primary">Send RSVP 💌</button>
    </form>
  );
}
