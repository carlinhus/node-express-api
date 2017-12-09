const Person = require('../models/Person');

module.exports = {
  listPeople: async (req, res, next) => {
    const people = await Person.find({});
    res.status(200).json(people);
  },

  newPerson: async (req, res, next) => {
    const newPerson = new Person(req.body);
    const savedPerson = await newPerson.save()
    res.status(200).json(savedPerson);
  },

  deletePerson: async (req, res, next) =>{
    const { personId } = req.params;
    await Person.findByIdAndRemove(personId);
    res.status(200).json({deleted:true});
  }


}
