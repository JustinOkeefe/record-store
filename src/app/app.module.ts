import { BrowserModule, Title }              from '@angular/platform-browser';
import { NgModule }                          from '@angular/core';
import { AppRoutingModule }                  from './app-routing.module';
import { HttpClientModule }                  from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { DatePipe }                          from '@angular/common';

import { AppComponent }                 from './app.component';
import { HomeComponent }                from './pages/home/home.component';
import { HeaderComponent }              from './header/header.component';
import { FooterComponent }              from './footer/footer.component';
import { AuthService }                  from './auth/auth.service'
import { CallbackComponent }            from './pages/callback/callback.component';
import { ApiService }                   from './core/api.service';
import { LoadingComponent }             from './core/loading.component';
import { UtilsService }                 from './core/utils.service';
import { FilterSortService }            from './core/filter-sort.service';
import { AdminComponent }               from './pages/admin/admin.component';
import { RecordComponent }              from './pages/record/record.component';
import { RecordDetailMfgComponent }     from './pages/record/record-detail-mfg/record-detail-mfg.component';
import { RecordDetailQaComponent }      from './pages/record/record-detail-qa/record-detail-qa.component';
import { RequestDetailComponent }       from './pages/record/request-detail/request-detail.component';
import { CreateRecordComponent }        from './pages/admin/create-record/create-record.component';
import { SubmittingComponent }          from './core/forms/submitting.component';
import { UpdateRecordRequestComponent } from './pages/admin/update-record-request/update-record-request.component';
import { UpdateRecordMfgComponent }     from './pages/admin/update-record-mfg/update-record-mfg.component';
import { UpdateRecordQaComponent }      from './pages/admin/update-record-qa/update-record-qa.component';
import { RecordFormComponent }          from './pages/admin/record-form/record-form.component';
import { RecordFormService } from './pages/admin/record-form/record-form.service';
import { UpdateFormRequestService } from './pages/admin/update-forms/update-record-form-request/update-form-request.service';
import { UpdateFormMfgService } from './pages/admin/update-forms/update-record-form-mfg/update-form-mfg.service';
import { UpdateFormQaService } from './pages/admin/update-forms/update-record-form-qa/update-form-qa.service';
import { UpdateRecordFormMfgComponent } from './pages/admin/update-forms/update-record-form-mfg/update-record-form-mfg.component';
import { UpdateRecordFormQaComponent } from './pages/admin/update-forms/update-record-form-qa/update-record-form-qa.component';
import { UpdateRecordFormRequestComponent } from './pages/admin/update-forms/update-record-form-request/update-record-form-request.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { ManufacturingComponent } from './pages/manufacturing/manufacturing.component';
import { QualityComponent } from './pages/quality/quality.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {MatAutocompleteModule,
MatButtonModule,
MatButtonToggleModule,
MatCardModule,
MatCheckboxModule,
MatChipsModule,
MatDatepickerModule,
MatDialogModule,
MatExpansionModule,
MatGridListModule,
MatIconModule,
MatInputModule,
MatListModule,
MatMenuModule,
MatNativeDateModule,
MatPaginatorModule,
MatProgressBarModule,
MatProgressSpinnerModule,
MatRadioModule,
MatRippleModule,
MatSelectModule,
MatSidenavModule,
MatSliderModule,
MatSlideToggleModule,
MatSnackBarModule,
MatSortModule,
MatTableModule,
MatTabsModule,
MatToolbarModule,
MatTooltipModule,
MatStepperModule,
ErrorStateMatcher,
ShowOnDirtyErrorStateMatcher,
} from '@angular/material';
import { DeleteRecordComponent } from './pages/admin/delete-record/delete-record.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CallbackComponent,
    LoadingComponent,
    AdminComponent,
    RecordComponent,
    RecordDetailMfgComponent,
    RecordDetailQaComponent,
    RequestDetailComponent,
    CreateRecordComponent,
    SubmittingComponent,
    UpdateRecordRequestComponent,
    UpdateRecordMfgComponent,
    UpdateRecordQaComponent,
    RecordFormComponent,
    UpdateRecordFormRequestComponent,
    UpdateRecordFormMfgComponent,
    UpdateRecordFormQaComponent,
    RequestsComponent,
    ManufacturingComponent,
    QualityComponent,
    DeleteRecordComponent,
  ],
  imports: [
    CdkTableModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    
  ],
  providers: [
    Title,
    AuthService,
    ApiService,
    DatePipe,
    UtilsService,
    FilterSortService,
    RecordFormService,
    UpdateFormRequestService,
    UpdateFormMfgService,
    UpdateFormQaService,
    { 
      provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
