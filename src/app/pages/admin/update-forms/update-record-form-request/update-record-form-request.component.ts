import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from './../../../../core/api.service';
import { DatePipe } from '@angular/common';
import { dateValidator } from './../../../../core/forms/date.validator';
import { DATE_REGEX, TIME_REGEX, stringsToDate } from './../../../../core/forms/formUtils.factory';
import { UpdateFormRequestService } from './update-form-request.service';
import { RecordModel, FormRecordModel }       from './../../../../core/models/record.model';

@Component({
  selector: 'app-update-record-form-request',
  templateUrl: './update-record-form-request.component.html',
  styleUrls: ['./update-record-form-request.component.scss']
})
export class UpdateRecordFormRequestComponent implements OnInit {
  @Input() record: RecordModel;
  isEdit: boolean;
  // FormBuilder form
  recordForm: FormGroup;
  datesGroup: AbstractControl;
  // Model storing initial form values
  formRecord: FormRecordModel;
  // Form validation and disabled logic
  formErrors: any;
  formChangeSub: Subscription;
  // Form submission
  submitRecordObj: RecordModel;
  submitRecordSub: Subscription;
  error: boolean;
  submitting: boolean;
  submitBtnText: string;

  requests = [
    { type: 'New MBR Request' },
    { type: 'Additional Pages Request' },
    { type: 'Reprint Existing MBR' }
  ];


  molecules = [
    { type: 'Molecule 1' },
    { type: 'Molecule 2' },
    { type: 'Molecule 3' },
    { type: 'Molecule 4' },
    { type: 'Molecule 5' },
    { type: 'Molecule 6' },
  ];

  record_names = [
    { type: 'Preparation of Test Solution 1'},
    { type: 'Preparation of Test Solution 2'},
    { type: 'Preparation of Test Solution 3'},
    { type: 'Preparation of Test Solution 4'},
    { type: 'Preparation of Test Solution 5'},
    { type: 'Main Processing of Step 1'},
    { type: 'Main Processing of Step 2'},
    { type: 'Main Processing of Step 3'},
    { type: 'Main Processing of Step 4'},
    { type: 'Main Processing of Step 5'},
  ];
  
  record_types = [
    { type: 'Upstream, Media' },
    { type: 'Upstream, Process' },
    { type: 'Downstream, Buffer' },
    { type: 'Downstream, Process' },
  ];
  
  status = [
    { type: 'Requested' },
    { type: 'Issued' },
    { type: 'Executed' }
  ];

  locations = [
    { type: "Pending Issuance"},
    { type: "Issued to Manufacturing"},
    { type: "Returned to QA"}
  ];

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private datePipe: DatePipe,
    public ef: UpdateFormRequestService,
    private router: Router) { }

    ngOnInit() {
      this.formErrors = this.ef.formErrors;
      this.isEdit = !!this.record;
      this.submitBtnText = this.isEdit ? 'Update Record' : 'Create Record';
      // Set initial form data
      this.formRecord = this._setFormRecord();
      // Use FormBuilder to construct the form
      this._buildForm();
    }
  
    private _setFormRecord() {
      if (!this.isEdit) {
        // If creating a new record, create new
        // FormRecordModel with default null data
        return new FormRecordModel(
          null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
          null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
      } else {
        // If editing existing record, create new
        // FormRecordModel from existing data
        // Transform datetimes:
        // https://angular.io/api/common/DatePipe
        // _shortDate: 1/7/2017
        // 'shortTime': 12:05 PM
        const _shortDate = 'm/d/yyyy';
        return new FormRecordModel(
          this.record.requestType,
          this.record.batchId,
          this.record.processOrder,
          this.record.molecule,
          this.record.batchRecordName,
          this.record.recordAreaType,
          this.record.mbrDocNumber,
  
          this.record.issuanceNumber,
          this.record.lot,
          this.record._id,
          this.record.status,
          this.record.lowShedPaper,
          this.record.location,
          this.record.mfgOwner,
          this.record.mfgFinalReviewBy,
          this.record.qaOwner,
          this.record.qaReviewedBy,
          this.record.requestComments,
          this.record.mfgComments,
          this.record.qaComments,
          this.record.needByDate,
          this.record.issuanceDate,
          this.record.requestedDate,
          //this.datePipe.transform(this.record.needByDate, _shortDate),
          //this.datePipe.transform(this.record.requestedDate, _shortDate),
          //this.datePipe.transform(this.record.issuanceDate, _shortDate),
          this.record.operationEndDate,
          this.record.mfgFinalReviewDate,
          this.record.qaFinalReviewDate,
          this.record.firstPassCheck,
          this.record.gdpCheck,
          this.record.sapCheck,
          this.record.alarmsCheck,
          this.record.syncadeCheck,
  
        );
      }
    }
  
    private _buildForm() {
      this.recordForm = this.fb.group({
        requestType: [this.formRecord.requestType, [
          Validators.required
          ,
        ]],
        batchId: [this.formRecord.batchId, [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(7),
          Validators.pattern('[a-zA-Z]{3}\\d{4}')
        ]],
        issuanceNumber: [this.formRecord.issuanceNumber, [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
          Validators.pattern('\\d{4}\\-\\d{6}')
        ]],
        processOrder: [this.formRecord.processOrder, [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(9),
          Validators.pattern('\\d{9}')
        ]],
        molecule: [this.formRecord.molecule, [
          //Validators.required,
          //Validators.minLength(this.ef.textMin),
          //Validators.maxLength(this.ef.moleculeMax)
        ]],
        batchRecordName: [this.formRecord.batchRecordName, [
          //Validators.required,
          //Validators.minLength(this.ef.textMin),
          //Validators.maxLength(this.ef.batchRecordNameMax)
        ]],
        recordAreaType: [this.formRecord.recordAreaType, [
          //Validators.required,
          //Validators.minLength(this.ef.textMin),
          //Validators.maxLength(this.ef.recordAreaTypeMax)
        ]],
        mbrDocNumber: [this.formRecord.mbrDocNumber, [
          Validators.required,
          //Validators.minLength(12),
          //Validators.maxLength(12),
          Validators.pattern('[Dd][Vv][Nn]\\-[Mm][Bb][Rr]\\-\\d{4}')
        ]],
        lot: [this.formRecord.lot, [
        ]],
        _id: [this.formRecord._id, [
        ]],
        status: [this.formRecord.status, [
        ]],
        lowShedPaper: [this.formRecord.lowShedPaper, [
        ]],
        location: [this.formRecord.location, [
        ]],
        mfgOwner: [this.formRecord.mfgOwner, [
        ]],
        mfgFinalReviewBy: [this.formRecord.mfgFinalReviewBy, [
        ]],
        qaOwner: [this.formRecord.qaOwner, [
        ]],
        qaReviewedBy: [this.formRecord.qaReviewedBy, [
        ]],
        requestComments: [this.formRecord.requestComments, [
        ]],
        mfgComments: [this.formRecord.mfgComments, [
        ]],
        qaComments: [this.formRecord.qaComments, [
        ]],
        needByDate: [this.formRecord.needByDate, [
        ]],
        issuanceDate: [this.formRecord.issuanceDate, [
          //Validators.required,
          //Validators.maxLength(this.ef.dateMax),
          //Validators.pattern(DATE_REGEX),
          //dateValidator()
        ]],
        requestedDate: [this.formRecord.requestedDate, [
        ]],
        datesGroup: this.fb.group({
        }),
        operationEndDate: [this.formRecord.operationEndDate, [
        ]],
        mfgFinalReviewDate: [this.formRecord.mfgFinalReviewDate, [
        ]],
        qaFinalReviewDate: [this.formRecord.qaFinalReviewDate, [
        ]],
        firstPassCheck: [this.formRecord.firstPassCheck, [
        ]],
        gdpCheck: [this.formRecord.gdpCheck, [
        ]],
        sapCheck: [this.formRecord.sapCheck, [
        ]],
        alarmsCheck: [this.formRecord.alarmsCheck, [
        ]],
        syncadeCheck: [this.formRecord.syncadeCheck, [
        ]],
        
  
      });
      // Set local property to recordForm datesGroup control
      this.datesGroup = this.recordForm.get('datesGroup');
  
      // Subscribe to form value changes
      this.formChangeSub = this.recordForm
        .valueChanges
        .subscribe(data => this._onValueChanged());
  
      // If edit: mark fields dirty to trigger immediate
      // validation in case editing an record that is no
      // longer valid (for example, an record in the past)
      if (this.isEdit) {
        const _markDirty = group => {
          for (const i in group.controls) {
            if (group.controls.hasOwnProperty(i)) {
              group.controls[i].markAsDirty();
            }
          }
        };
        _markDirty(this.recordForm);
        //_markDirty(this.datesGroup);
      }
  
      this._onValueChanged();
    }
  
    private _onValueChanged() {
      if (!this.recordForm) { return; }
      const _setErrMsgs = (control: AbstractControl, errorsObj: any, field: string) => {
        if (control && control.dirty && control.invalid) {
          const messages = this.ef.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              errorsObj[field] += messages[key] + '<br>';
            }
          }
        }
      };
  
      // Check validation and set errors
      for (const field in this.formErrors) {
        if (this.formErrors.hasOwnProperty(field)) {
          if (field !== 'datesGroup') {
            // Set errors for fields not inside datesGroup
            // Clear previous error message (if any)
            this.formErrors[field] = '';
            _setErrMsgs(this.recordForm.get(field), this.formErrors, field);
          } else {
            // Set errors for fields inside datesGroup
            const datesGroupErrors = this.formErrors['datesGroup'];
            for (const dateField in datesGroupErrors) {
              if (datesGroupErrors.hasOwnProperty(dateField)) {
                // Clear previous error message (if any)
                datesGroupErrors[dateField] = '';
                _setErrMsgs(this.datesGroup.get(dateField), datesGroupErrors, dateField);
              }
            }
          }
        }
      }
    }
  
    private _getSubmitObj() {
      //const needByDate = this.datesGroup.get('needByDate').value;
      //const requestedDate = this.datesGroup.get('requestedDate').value;
      //const issuanceDate = this.datesGroup.get('issuanceDate').value;
      //const operationEndDate = this.datesGroup.get('operationEndDate').value;
      //const mfgFinalReviewDate = this.datesGroup.get('mfgFinalReviewDate').value;
      //const qaFinalReviewDate = this.datesGroup.get('qaFinalReviewDate').value;
      // Convert form startDate/startTime and endDate/endTime
      // to JS dates and populate a new RecordModel for submission
      return new RecordModel(
        this.recordForm.get('requestType').value,
        this.recordForm.get('batchId').value,
        this.recordForm.get('processOrder').value,
        this.recordForm.get('molecule').value,
        this.recordForm.get('batchRecordName').value,
        this.recordForm.get('recordAreaType').value,
        this.recordForm.get('mbrDocNumber').value,
        this.recordForm.get('issuanceNumber').value,
        this.recordForm.get('lot').value,
        this.record ? this.record._id : null,
        this.recordForm.get('status').value,
        this.recordForm.get('lowShedPaper').value,
        this.recordForm.get('location').value,
        this.recordForm.get('mfgOwner').value,
        this.recordForm.get('mfgFinalReviewBy').value,
        this.recordForm.get('qaOwner').value,
        this.recordForm.get('qaReviewedBy').value,
        this.recordForm.get('requestComments').value,
        this.recordForm.get('mfgComments').value,
        this.recordForm.get('qaComments').value,
        this.recordForm.get('needByDate').value,
        this.recordForm.get('issuanceDate').value,
        this.recordForm.get('requestedDate').value,
        //stringsToDate(needByDate),
        //stringsToDate(requestedDate),
        //stringsToDate(issuanceDate),
        this.recordForm.get('operationEndDate').value,
        this.recordForm.get('mfgFinalReviewDate').value,
        this.recordForm.get('qaFinalReviewDate').value,
        this.recordForm.get('firstPassCheck').value,
        this.recordForm.get('gdpCheck').value,
        this.recordForm.get('sapCheck').value,
        this.recordForm.get('alarmsCheck').value,
        this.recordForm.get('syncadeCheck').value,
        
      );
    }
  
    onSubmit() {
      this.submitting = true;
      this.submitRecordObj = this._getSubmitObj();
  
      if (!this.isEdit) {
        this.submitRecordSub = this.api
          .postRecord$(this.submitRecordObj)
          .subscribe(
            data => this._handleSubmitSuccess(data),
            err => this._handleSubmitError(err)
          );
      } else {
        this.submitRecordSub = this.api
          .editRecord$(this.record._id, this.submitRecordObj)
          .subscribe(
            data => this._handleSubmitSuccess(data),
            err => this._handleSubmitError(err)
          );
      }
    }
  
    private _handleSubmitSuccess(res) {
      this.error = false;
      this.submitting = false;
      // Redirect to record detail
      this.router.navigate(['/record', res._id]);
    }
  
    private _handleSubmitError(err) {
      console.error(err);
      this.submitting = false;
      this.error = true;
    }
  
    resetForm() {
      this.recordForm.reset();
    }
  
    ngOnDestroy() {
      if (this.submitRecordSub) {
        this.submitRecordSub.unsubscribe();
      }
      this.formChangeSub.unsubscribe();
    }
  }
  