import express from "express";
// También podría importarse así en CommonJS:
// const express = require("express");

// Creamos la aplicación de Express
const app = express();

// Puerto en el que correrá el servidor
const port = 3000;

// Definimos una ruta GET para la raíz "/"
app.get("/", (req, res) => {
  // Ejemplo de lógica para validar si existe un token
  const hasToken = false;

  // Si no hay token, respondemos con error 401 (Unauthorized)
  if (!hasToken) {
    return res.status(401).json({
      ok: false,
      msg: "No hay token en la petición",
    });
  }

  // Si todo sale bien, respondemos con un JSON exitoso
  res.json({
    ok: true,
    msg: "Todo salió bien",
  });
});

// Iniciamos el servidor y escuchamos en el puerto definido
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
