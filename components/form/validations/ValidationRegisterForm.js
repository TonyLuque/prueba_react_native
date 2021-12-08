import * as Yup from "yup";

// Validation variables
const phoneRegExp = /^[1-9]\d{9}$/;

// Validation object
export const ValidationRegisterForm = Yup.object().shape({
  firstName: Yup.string()
    .required("Primer nombre requerido.")
    .max(64, "Máximo 64 caracteres.")
    .label("firstName"),
  phone: Yup.string()
    .matches(phoneRegExp, "Número no valido")
    .required("El número es requerido."),
  email: Yup.string()
    .required("Correo electronico requerido.")
    .email("Debe de ser un correo valido.")
    .label("email"),
  confirmEmail: Yup.string()
    .required("Correo electronico requerido.")
    .oneOf(
      [Yup.ref("email"), null],
      "El correo electronico no coincide con el anterior."
    ),
  password: Yup.string()
    .required("Contraseña requerida.")
    .min(6, "Mínimo 6 caracteres.")
    .max(64, "Máximo 64 caracteres.")
    .label("password"),
  confirmPassword: Yup.string()
    .required("Contraseña es requerida.")
    .oneOf(
      [Yup.ref("password"), null],
      "La contraseña no coincide con la anterior."
    ),
});
