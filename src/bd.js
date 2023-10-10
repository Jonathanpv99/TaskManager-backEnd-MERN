
 import mongoose from "mongoose";

 export const conetDB = async () =>{
    
    try{
        await mongoose.connect('mongodb://localhost/merndb');
        console.log('bd conectada >>>>>>>>>>>')
    }catch ( error ){
        console.log( error );
    }
  
 }
