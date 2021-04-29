import { Request, Response } from 'express';
import { productlistService } from '../service/productlistService';
import { CustomLogger } from '../config/Logger'
let productlist = new productlistService();

export class productlistController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
productlist.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productlistController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productlistController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
productlist.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productlistController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productlistController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
productlist.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productlistController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productlistController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
productlist.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productlistController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productlistController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
productlist.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productlistController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productlistController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
productlist.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productlistController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productlistController.ts: GpCreate');
    })}


}