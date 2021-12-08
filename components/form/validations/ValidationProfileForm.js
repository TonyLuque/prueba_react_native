import * as Yup from "yup";

// Validation variables
const phoneRegExp = /^[1-9]\d{9}$/;

// Validation object
export const ValidationProfileForm = Yup.object().shape({
  firstName: Yup.string()
    .required("Primer nombre requerido.")
    .max(64, "Máximo 64 caracteres.")
    .label("firstName"),
  phone: Yup.string()
    .matches(phoneRegExp, "Número no valido")
    .required("El número es requerido."),
});
