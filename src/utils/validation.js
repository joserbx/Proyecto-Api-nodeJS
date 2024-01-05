import zod from "zod";

export const clienteSchema = zod.object({
  nombre: zod.string({
    invalid_type_error: "",
    required_error: "",
  }),
  apellido: zod.string(),
  direccion: zod.string(),
  telefono: zod.string(),
  email: zod
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  nacimiento: zod.string(),
  preferencias: zod.string()
});

//   const {
//     nombre,
//     apellido,
//     direccion,
//     telefono,
//     email,
//     nacimiento,
//     preferencias,
//   } = req.body;
