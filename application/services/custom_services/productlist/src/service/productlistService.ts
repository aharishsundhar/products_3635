import { Request, Response } from 'express';
import {productlistDao} from '../dao/productlistDao';
import { CustomLogger } from '../config/Logger'
let productlist = new productlistDao();

export class productlistService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productlistService.ts: GpDelete')
     const  productlistId = req.params.id;
     productlist.GpDelete(productlistId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productlistService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productlistService.ts: GpSearch')
     const  productlistData = req.query;
     productlist.GpSearch(productlistData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productlistService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productlistService.ts: GpSearchForUpdate')
     const  productlistData = req.body;
     productlist.GpSearchForUpdate(productlistData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productlistService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productlistService.ts: GpUpdate')
     const  productlistData = req.body;
     productlist.GpUpdate(productlistData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productlistService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productlistService.ts: GpGetAllValues')
     
     productlist.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from productlistService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productlistService.ts: GpCreate')
     const  productlistData = req.body;
     productlist.GpCreate(productlistData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productlistService.ts: GpCreate')
         callback(response);
         });
    }


}