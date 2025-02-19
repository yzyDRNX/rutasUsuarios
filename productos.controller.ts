import { Request, Response } from "express";

export const getAll = (req: Request, res: Response): void => {
    console.log("Se llamó a getAll"); 
    const data = [
        { Id: "1", 
            nombre:"Daniel", 
            email:"danie@daniel",
        },

        { Id: "2", 
            nombre:"Eduardo", 
            email:"eduardo@daniel",
        },
        
        { Id: "3", 
            nombre:"Rivera", 
            email:"rivera@daniel",
        }
    ]
    res.status(200).json(data
        
    );
    
};


