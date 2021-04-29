import * as mongoose from 'mongoose';
import productlistModel from '../models/productlist';
import { CustomLogger } from '../config/Logger'


export class productlistDao {
    private productlist = productlistModel;
    constructor() { }
public GpDelete(productlistId, callback){
new CustomLogger().showLogger('info', 'Enter into productlistDao.ts: GpDelete')

this.productlist.findByIdAndRemove(productlistId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from productlistDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(productlistData, callback){
new CustomLogger().showLogger('info', 'Enter into productlistDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(productlistData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.productlist.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from productlistDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(productlistData, callback){
new CustomLogger().showLogger('info', 'Enter into productlistDao.ts: GpSearchForUpdate')

this.productlist.findOneAndUpdate({ _id: productlistData._id }, productlistData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from productlistDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(productlistData, callback){
new CustomLogger().showLogger('info', 'Enter into productlistDao.ts: GpUpdate')

this.productlist.findOneAndUpdate({ _id: productlistData._id }, productlistData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from productlistDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into productlistDao.ts: GpGetAllValues')

this.productlist.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from productlistDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(productlistData, callback){
new CustomLogger().showLogger('info', 'Enter into productlistDao.ts: GpCreate')
let temp = new productlistModel(productlistData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from productlistDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}