const CrudRepository = require("./crud-repository");
const { Country } = require("../models");

class CountryRepository extends CrudRepository {
  constructor() {
    super(Country);
  }
}

module.exports = CountryRepository;
