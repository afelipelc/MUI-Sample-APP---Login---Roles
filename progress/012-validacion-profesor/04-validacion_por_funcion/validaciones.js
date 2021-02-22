// implementar funciones que nos ayuden a validar datos

export const campoRequerido = (value) => {
  if (!value.toString().trim().length) { // si no tiene longitud
    return "El campo es obligatorio";
  }

  return null;
};

export const esEmail = (value) => {
  if (!value.match(/(.+)@(.+){2,}\.(.+){2,}/)) {
    return "No es un email válido";
  }

  return null;
};

export const letrasNumeros = (value) => {
  if (!value.match(/^[0-9a-zA-Z\s]+$/)) {
    return "Solo debe contener letras y números";
  }

  return null;
};

export const esTelefono = (value) => {
  if (!value.match(/^[0-9]{2}[0-9]{8}$/)) {
    return "No es número telefónico válido";
  }

  return "";
};