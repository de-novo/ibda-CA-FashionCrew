import express,{ Router } from "express";

import { Member as memberModel } from "../../models/member.js";


const route = Router();
export default (app)=>{
    app.use('/',route);
 
    route.get('/',(req,res)=>{
        
    })







}