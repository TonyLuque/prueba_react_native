import * as Yup from "yup";

export const ValidationLogin = Yup.object().shape({
  email: Yup.string()
    .required("Correo electronico requerido")
    .email("Debe de ser un correo valido")
    .label("email"),

  password: Yup.string()
    .required("Contraseña requerida")
    .min(6, "Minimo 6 caracteres")
    .max(63, "Debe de ser menor o igual a 63 caracteres")
    .label("password"),
});
