import { Router } from "express"; // Importa Router correctamente
import { getAll } from "../Controllers/productos.controller"; // Verifica que "Controllers" tenga la C mayúscula

const router = Router();

router.get("/productos", getAll);

export default router;
