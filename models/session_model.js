datedebut, datefin, id_matiere, 
'use strict';

class Session {

  constructor(id, startDate, endDate, professorID, nbMax, subjectID) {
    this.id = id;
    this.startDate = startDate;
    this.endDate = endDate;
    this.professorID = professorID;
    this.nbMax = nbMax;
    this.subjectID = subjectID;
  }
}

module.exports = Session;