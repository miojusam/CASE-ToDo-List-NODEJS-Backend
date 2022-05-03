const { geoSearch } = require("../model/Model");
const Todo = require("../model/Model");

class Controller {
  async store(req, res) {
    const data = await Todo.create(req.body);
    return res.json(data);
  }

  async index(req, res) {
    const { search } = req.query;
    
    
    if(search !== undefined){
      const data = await Todo.find({description: {$regex: search, $options: 'i'}});
      return res.json(data);
    } else {
      const data = await Todo.find({hide: false});
      
      return res.json(data);
      
    }
  }

  async update(req, res) {
    const { id } = req.params;
    await Todo.findByIdAndUpdate(id, req.body);
    const data = await Todo.findById(id)
    return res.json(data);
   
  }

  async remove(req, res){
    const{ id } = req.params;
    const data = await Todo.findByIdAndDelete(id);

    return res.json(data);
  }
  

}

  

module.exports = new Controller();



// if(description !==  description){
  //   const data = await Todo.findByIdAndUpdate({description});
  //   return res.jason(data);
  // } else {

























