
class BaseController {
    
    constructor(model) {
        this.model = model;
    }
  
    getAll=async (req, res) => {
      const { page,limit,filters,order,include} = req.query;
      let options={}
      try {
        if(page && limit){
          options={...options,offset: parseInt(page)*parseInt(limit),limit: parseInt(limit)}
        }
        if(filters){
          const filtersArray=JSON.parse(filters)
          if(filtersArray.length>0){
            const whereObj=fromFiltersToWhereObj(filtersArray)
            console.log(filtersArray);
            console.log(whereObj);
            options={...options,where : whereObj}
          }
          
        }
        if(order){
          const {fieldName,direction}=JSON.parse(order)
          options.order=[[fieldName,direction]]
        }
        if(include){
          options.include=JSON.parse(include)
        }
        const items = await this.model.findAndCountAll(options);
        return res.json(items);
      } catch (error) {
        console.log(error);
        return res.status(500).json({error});
      }
    }

    
  
    getById=async (req, res) => {
      const { id } = req.params;
      const {include} = req.query;
      let options={}
      if(include){
        options.include=JSON.parse(include)
      }
      console.log(options);
      try {
        const item = await this.model.findByPk(id,options);
        
        if (!item) {
          return res.status(404).json({message:'item not found'});
        }
        return res.json(item);
      } catch (error) {
        return res.status(500).json({error});
      }
    }
  
    create=async (req, res) => {
      const data = req.body
      try {
        const newItem = await this.model.create(data);
        return res.status(201).json(newItem);
      } catch (error) {
        return res.status(500).json({error});
      }
    }
  
    update=async (req, res) => {
      const { id } = req.params;
      const data = req.body;
      try {
        const item = await this.model.findByPk(id);
        if (!item) {
          return res.status(404).json({message:'item not found'});
        }
        
        item.set(data)
        await item.save()
        return res.json(item);
      } catch (error) {
        return res.status(500).json({error});
      }
    }
  
    delete=async (req, res) => {
      const { id } = req.params;
      try {
        const item = await this.model.findByPk(id);
        if (!item) {
          return res.status(404).json({message:'item not found'});
        }
        await item.destroy();
        return res.sendStatus(204);

      } catch (error) {
        console.log(3);
        return res.status(500).json({error});
      }
    }

    
  }
  
  
  module.exports = BaseController;
  