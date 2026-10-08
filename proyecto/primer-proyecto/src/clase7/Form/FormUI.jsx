export const FormUI = ({ onChange, onSubmit, errors, formData }) => {
  return (
    <>
    <form onSubmit={onSubmit}>
        <h2>Form</h2>
        <div>
            <label htmlFor="name">Nombre:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={onChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
            <label htmlFor="lastName">Apellido:</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={onChange}
            />
            {errors.lastName && <span>{errors.lastName}</span>}
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={onChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
            <label htmlFor="message">Mensaje:</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={onChange}
            />
            {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Enviar</button>
    </form>
    </>
  );
};
