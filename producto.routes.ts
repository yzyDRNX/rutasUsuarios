import { Router } from "express";
import {getAll} from "../Controllers/productos.controller.js";

    const router = Router();
    
    //endpoint de tipo Get/productos/all //
    router.get("/usuarios", getAll); // Asignamos correctamente el controlador a la ruta

    
export default router;