const CrudRepository = require("./crud-repository");
const { Type } = require("../models");

class TypeRepository extends CrudRepository {
  constructor() {
    super(Type);
  }

  async getTypeByName(name) {
    try {
      const response = await Type.findOne({ where: { name: name } });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TypeRepository;
