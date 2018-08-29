/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const Record = require('./models/record');
//TODO: Make request schema
//const Request = require('./models/request')

/*
 |--------------------------------------
 | Authentication Middleware
 |--------------------------------------
 */

module.exports = function(app, config) {
  // Authentication middleware
  const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: config.AUTH0_API_AUDIENCE,
    issuer: `https://${config.AUTH0_DOMAIN}/`,
    algorithm: 'RS256'
  });
  
  const adminCheck = (req, res, next) => {
    const roles = req.user[config.NAMESPACE] || [];
    if (roles.indexOf('admin') > -1) {
      next();
    } else {
      res.status(401).send({message: 'Not authorized for admin access'});
    }
  }

/*
 |--------------------------------------
 | API Routes
 |--------------------------------------
 */

  // GET API root
  //const _recordListProjection = 'issuanceNumber batchId molecule issuanceDate';

  app.get('/api/records', jwtCheck, adminCheck, (req, res) => {
    Record.find({}, (err, records) => {
      let recordsArr = [];
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      if (records) {
        records.forEach(record => {
          recordsArr.push(record);
        });
      }
      res.send(recordsArr);
    });
  });

  //Get record by ID
  app.get('/api/record/:id', jwtCheck, (req, res) => {
    Record.findById(req.params.id, (err, record) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      if (!record) {
        return res.status(400).send({ message: "Record not found" });
      }
      res.send(record);
    });
  });

  // POST a new record
  app.post('/api/record/new', jwtCheck, adminCheck, (req, res) => {
    Record.findOne({
      issuanceNumber: req.body.issuanceNumber,
      batchId:        req.body.location,
      issuanceDate:   req.body.issuanceDate}, (err, existingRecord) => {
      if (err) {
        return res.status(500).send({message: err.message});
      }
      if (existingRecord) {
        return res.status(409).send({message: 'You have already created a record with this issuance number, batch, and issuance date.'});
      }
      const record = new Record({

        requestType:        req.body.requestType,
        batchId:            req.body.batchId,
        processOrder:       req.body.processOrder,
        molecule:           req.body.molecule,
        batchRecordName:    req.body.batchRecordName,
        recordAreaType:     req.body.recordAreaType,
        mbrDocNumber:       req.body.mbrDocNumber,
        lowShedPaper:       req.body.lowShedPaper,
      
        issuanceNumber:     req.body.issuanceNumber,
        lot:                req.body.lot,
        status:             req.body.status,
        location:           req.body.location,
        mfgOwner:           req.body.mfgOwner,
        mfgFinalReviewBy:   req.body.mfgFinalReviewBy,
        qaOwner:            req.body.qaOwner,
        qaReviewedBy:       req.body.qaReviewedBy,
        requestComments:    req.body.requestComments,
        mfgComments:        req.body.mfgComments,
        qaComments:         req.body.qaComments,
      
        needByDate:         req.body.needByDate,
        issuanceDate:       req.body.issuanceDate,
        requestedDate:      req.body.requestedDate,
        operationEndDate:   req.body.operationEndDate,
        mfgFinalReviewDate: req.body.mfgFinalReviewDate,
        qaFinalReviewDate:  req.body.qaFinalReviewDate,
      
        firstPassCheck:     req.body.firstPassCheck,
        gdpCheck:           req.body.gdpCheck,
        sapCheck:           req.body.sapCheck,
        alarmsCheck:        req.body.alarmsCheck,
        syncadeCheck:       req.body.syncadeCheck

      });
      record.save((err) => {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        res.send(record);
      });
    });
  });

    // PUT (edit) an existing record
  app.put('/api/record/:id', jwtCheck, adminCheck, (req, res) => {
    Record.findById(req.params.id, (err, record) => {
      if (err) {
        return res.status(500).send({message: err.message});
      }
      if (!record) {
        return res.status(400).send({message: 'Record not found.'});
      }

      record.requestType        = req.body.requestType,
      record.batchId            = req.body.batchId;
      record.processOrder       = req.body.processOrder;
      record.molecule           = req.body.molecule;
      record.batchRecordName    = req.body.batchRecordName;
      record.recordAreaType     = req.body.recordAreaType;
      record.mbrDocNumber       = req.body.mbrDocNumber;
      record.lowShedPaper       = req.body.lowShedPaper;
      
      record.issuanceNumber     = req.body.issuanceNumber
      record.lot                = req.body.lot;
      record.status             = req.body.status;
      record.location           = req.body.location;
      record.mfgOwner           = req.body.mfgOwner
      record.mfgFinalReviewBy   = req.body.mfgFinalReviewBy;
      record.qaOwner            = req.body.qaOwner;
      record.qaReviewedBy       = req.body.qaReviewedBy;
      record.requestComments    = req.body.requestComments;
      record.mfgComments        = req.body.mfgComments;
      record.qaComments         = req.body.qaComments;

      record.needByDate         = req.body.needByDate;
      record.issuanceDate       = req.body.issuanceDate;
      record.requestedDate      = req.body.requestedDate;
      record.operationEndDate   = req.body.operationEndDate;
      record.mfgFinalReviewDate = req.body.mfgFinalReviewDate;
      record.qaFinalReviewDate  = req.body.qaFinalReviewDate;
    
      record.firstPassCheck     = req.body.firstPassCheck;
      record.gdpCheck           = req.body.gdpCheck;
      record.sapCheck           = req.body.sapCheck;
      record.alarmsCheck        = req.body.alarmsCheck;
      record.syncadeCheck       = req.body.syncadeCheck;

      record.save(err => {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        res.send(record);
      });
    });
  });

    // DELETE a record
  app.delete('/api/record/:id', jwtCheck, adminCheck, (req, res) => {
    Record.findById(req.params.id, (err, record) => {
      if (err) {
        return res.status(500).send({message: err.message});
      }
      if (!record) {
        return res.status(400).send({message: 'Record not found.'});
      }
        record.remove(err => {
          if (err) {
            return res.status(500).send({message: err.message});
          }
          res.status(200).send({message: 'Record successfully deleted.'});
      });
    });
  });

  //Get requests
  app.get('/api/requests', jwtCheck, (req, res) => {
    Record.find({status: 'Requested'}, (err, records) => {
      let recordsArr = [];
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      if (records) {
        records.forEach(record => {
          recordsArr.push(record);
        });
      }
      res.send(recordsArr);
    });
  });

  //Get mfg records
  app.get('/api/manufacturing', jwtCheck, (req, res) => {
    Record.find({status: 'Issued'}, (err, records) => {
      let recordsArr = [];
      if (err) {
         return res.status(500).send({ message: err.message });
    }
      if (records) {
        records.forEach(record => {
          recordsArr.push(record);
        });
      }
      res.send(recordsArr);
    });
  });

  //Get qa records
  app.get('/api/quality', jwtCheck, (req, res) => {
    Record.find({status: 'Executed'}, (err, records) => {
      let recordsArr = [];
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      if (records) {
        records.forEach(record => {
          recordsArr.push(record);
        });
      }
      res.send(recordsArr);
    });
  });

};