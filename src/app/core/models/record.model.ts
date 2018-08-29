class RecordModel {
    constructor(
        public requestType?:     string,
        public batchId?:         string,
        public processOrder?:    string,
        public molecule?:        string,
        public batchRecordName?: string,
        public recordAreaType?:  string,
        public mbrDocNumber?:    string,
  
        public issuanceNumber? :  string,
        public lot?:              string,      
        public _id?:              string,
        public status?:           string,
        public lowShedPaper?:     string,
        public location?:         string,
        public mfgOwner?:         string,
        public mfgFinalReviewBy?: string,
        public qaOwner?:          string,
        public qaReviewedBy?:     string,
        public requestComments?:  string,
        public mfgComments?:      string,
        public qaComments?:       string,

        public needByDate?:         Date,
        public issuanceDate?:       Date,
        public requestedDate?:      Date,
        public operationEndDate?:   Date,
        public mfgFinalReviewDate?: Date,
        public qaFinalReviewDate?:  Date,
  
        public firstPassCheck?: string,
        public gdpCheck?:       string,
        public sapCheck?:       string,
        public alarmsCheck?:    string,
        public syncadeCheck?:   string,
    ) {}
}

class FormRecordModel {
    constructor(
        public requestType?:     string,
        public batchId?:         string,
        public processOrder?:    string,
        public molecule?:        string,
        public batchRecordName?: string,
        public recordAreaType?:  string,
        public mbrDocNumber?:    string,
  
        public issuanceNumber? :  string,
        public lot?:              string,      
        public _id?:              string,
        public status?:           string,
        public lowShedPaper?:     string,
        public location?:         string,
        public mfgOwner?:         string,
        public mfgFinalReviewBy?: string,
        public qaOwner?:          string,
        public qaReviewedBy?:     string,
        public requestComments?:  string,
        public mfgComments?:      string,
        public qaComments?:       string,

        public needByDate?:         Date,
        public issuanceDate?:       Date,
        public requestedDate?:      Date,
        public operationEndDate?:   Date,
        public mfgFinalReviewDate?: Date,
        public qaFinalReviewDate?:  Date,
  
        public firstPassCheck?: string,
        public gdpCheck?:       string,
        public sapCheck?:       string,
        public alarmsCheck?:    string,
        public syncadeCheck?:   string,
    ) {}
}
      
export { RecordModel, FormRecordModel };