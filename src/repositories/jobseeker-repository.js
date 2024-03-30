const CrudRepository = require("./crud-repository");
const { JobSeeker } = require("../models");

class JobSeekerRepository extends CrudRepository {
  constructor() {
    super(JobSeeker);
  }
}

module.exports = JobSeekerRepository;
