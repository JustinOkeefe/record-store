/*
 |--------------------------------------
 | Record Model
 |--------------------------------------
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  
  requestType:     { type: String },
  batchId:         { type: String },
  processOrder:    { type: String },
  molecule:        { type: String },
  batchRecordName: { type: String },
  recordAreaType:  { type: String },
  mbrDocNumber:    { type: String },
  lowShedPaper:     String,
  issuanceNumber:   String, 
  lot:              String,
  status:           String,
  location:         String,
  mfgOwner:         String,
  mfgFinalReviewBy: String,
  qaOwner:          String,
  qaReviewedBy:     String,
  requestComments:  String,
  mfgComments:      String,
  qaComments:       String,

  needByDate:         Date,
  issuanceDate:       Date,
  requestedDate:      Date,
  operationEndDate:   Date,
  mfgFinalReviewDate: Date,
  qaFinalReviewDate:  Date,

  firstPassCheck: Boolean,
  gdpCheck:       Boolean,
  sapCheck:       Boolean,
  alarmsCheck:    Boolean,
  syncadeCheck:   Boolean,

});

module.exports = mongoose.model('Record', recordSchema);