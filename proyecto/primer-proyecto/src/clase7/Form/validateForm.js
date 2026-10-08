export const validateForm = (data) => {
  const errors = {};

  if (!data.name) {
    errors.name = "debe ingresar un nombre";
  }

  if (!data.lastName) {
    errors.lastName = "debe ingresar un apellido";
  }

  if (!data.email) {
    errors.email = "debe ingresar un email";
  } else if (!data.email.includes("@")) {
    errors.email = "debe ingresar un email válido";
  }

  if (!data.message) {
    errors.message = "debe ingresar un mensaje";
  }

  return errors;
};
