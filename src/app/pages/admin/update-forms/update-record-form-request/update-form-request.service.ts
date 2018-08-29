import { Injectable } from '@angular/core';

@Injectable()
export class UpdateFormRequestService {
  validationMessages: any;
  // Set up errors object
  formErrors = {
    issuanceNumber: '',
    batchId: '',
    processOrder: '',
    molecule: '',
    batchRecordName: '',
    recordAreaType: '',
    mbrDocNumber: '',

    lot: '',
    status: '',
    location: '',
    mfgOwner: '',
    mfgFinalReviewBy: '',
    qaOwner: '',
    qaReviewedBy: '',
    mfgComments: '',
    qaComments: '',
    firstPassCheck: '',
    gdpCheck: '',
    sapCheck: '',
    alarmsCheck: '',
    syncadeCheck: '',

    datesGroup: {
      issuanceDate: '',
      operationEndDate: '',
      mfgFinalReviewDate: '',
      qaFinalReviewDate: '',
    }
  };
  // Min/maxlength validation
  textMin = 1;
  textMax = 50;
  issuanceNumMax = 11;
  batchIdMin = 6
  batchIdMax = 6;
  processOrderMin = 8;
  processOrderMax = 8;
  moleculeMax = 10;
  batchRecordNameMax = 100;
  recordAreaTypeMax = 20;
  mbrDocNumMax = 20;
  lotMax = 1;
  commentMax = 2000;
  dateMax = 10;
  timeMax = 8;
  // Formats
  dateFormat = 'm/d/yyyy';

  constructor() {
    this.validationMessages = {
      issuanceNumber: {
        required: `Issuance Number is <strong>required</strong>.`,
        minlength: `Issuance Number must be ${this.textMin} characters or more.`,
        maxlength: `Issuance Number must be ${this.issuanceNumMax} characters or less.`
      },
      batchId: {
        required: `Batch is <strong>required</strong>.`,
        minlength: `Batch must be ${this.batchIdMin} characters or more.`,
        maxlength: `Batch must be ${this.batchIdMax} characters or less.`
      },
      processOrder: {
        required: `Process Order is <strong>required</strong>.`,
        minlength: `Process Order must be ${this.processOrderMin} characters or more.`,
        maxlength: `Process Order must be ${this.processOrderMax} characters or less.`
      },
      molecule: {
        required: `Molecule is <strong>required</strong>.`,
        minlength: `Molecule must be ${this.textMin} characters or more.`,
        maxlength: `Molecule must be ${this.moleculeMax} characters or less.`
      },
      batchRecordName: {
        required: `Batch Record Name is <strong>required</strong>.`,
        minlength: `Batch Record Name must be ${this.textMin} characters or more.`,
        maxlength: `Batch Record Name must be ${this.recordAreaTypeMax} characters or less.`
      },
      recordAreaType: {
        required: `Record Area Type is <strong>required</strong>.`,
        minlength: `Batch Record Name must be ${this.textMin} characters or more.`,
        maxlength: `Batch Record Name must be ${this.batchRecordNameMax} characters or less.`
      },
      mbrDocNumber: {
        required: `Document Number is <strong>required</strong>.`,
        minlength: `Document Number must be ${this.textMin} characters or more.`,
        maxlength: `Document Number must be ${this.mbrDocNumMax} characters or less.`
      },
      issuanceDate: {
        required: `Issuence date is <strong>required</strong>.`,
        maxlength: `Start date cannot be longer than ${this.dateMax} characters.`,
        pattern: `Start date must be in the format <strong>${this.dateFormat}</strong>.`,
        date: `Start date must be a <strong>valid date</strong>.`
      }
    }
  };
}