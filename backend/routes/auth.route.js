import { Router } from "express";
import { authController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import fs from "fs"; // Importa el módulo 'fs' para manejar el sistema de archivos
import path from "path"; // Importa 'path' para gestionar las rutas de archivos

const router = Router();

router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/me", authMiddleware, authController.me);

// Ruta para obtener todas las pizzas desde pizzas.json en la carpeta db
router.get("/", (req, res) => {
    const filePath = path.join(process.cwd(), "db", "pizzas.json"); // Ruta actualizada para la carpeta 'db'
    
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        return res.status(500).json({ error: "No se pudo leer el archivo pizzas.json" });
      }
      const pizzas = JSON.parse(data);
      res.json(pizzas);
    });
});

export default router;

