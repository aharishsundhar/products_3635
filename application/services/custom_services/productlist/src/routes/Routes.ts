import { Request, Response, NextFunction } from "express";
import { productlistController } from '../controller/productlistController';


export class Routes {
    private productlist: productlistController = new productlistController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/productlist/:id').delete(this.productlist.GpDelete);
app.route('/productlist/get/search').get(this.productlist.GpSearch);
app.route('/productlist/get/update').put(this.productlist.GpSearchForUpdate);
app.route('/productlist').put(this.productlist.GpUpdate);
app.route('/productlist').get(this.productlist.GpGetAllValues);
app.route('/productlist').post(this.productlist.GpCreate);
     }

}