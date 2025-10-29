// src/components/ContactForm.jsx
import React from 'react';

function ContactForm() {
  return (
    <div className="bg-base-200 p-12">
      <div className="container mx-auto max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-4">¡Queremos conocerte!</h2>
        <p className="text-center mb-8">
          Si sentiste el llamado a misionar y quieres ser parte de esta familia, déjanos tus datos y te contactaremos.
        </p>
        
        <form className="card bg-base-100 shadow-2xl p-8">
          <div className="form-control mb-4">
            <label className="label"><span className="label-text">Tu Nombre</span></label>
            <input type="text" placeholder="Juan Pérez" className="input input-bordered w-full" />
          </div>
          
          <div className="form-control mb-4">
            <label className="label"><span className="label-text">Tu Email</span></label>
            <input type="email" placeholder="juan.perez@correo.com" className="input input-bordered w-full" />
          </div>

          <div className="form-control mb-4">
            <label className="label"><span className="label-text">Tu Teléfono (WhatsApp)</span></label>
            <input type="tel" placeholder="+54 9 11 1234-5678" className="input input-bordered w-full" />
          </div>
          
          <div className="form-control mb-6">
            <label className="label"><span className="label-text">Cuéntanos un poco de ti</span></label>
            <textarea className="textarea textarea-bordered h-24" placeholder="¿Por qué te gustaría unirte?"></textarea>
          </div>

          <div className="form-control">
            <button className="btn btn-primary btn-lg">Enviar Invitación</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;