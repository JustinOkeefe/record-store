import { NgModule }              from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { HomeComponent }                 from './pages/home/home.component';
import { CallbackComponent }             from './pages/callback/callback.component';
import { AuthGuard }                     from './auth/auth.guard';
import { AdminGuard }                    from './auth/admin.guard';
import { AdminComponent }                from './pages/admin/admin.component';
import { RecordComponent }               from './pages/record/record.component';
import { CreateRecordComponent }         from './pages/admin/create-record/create-record.component';
import { UpdateRecordRequestComponent }  from './pages/admin/update-record-request/update-record-request.component';
import { UpdateRecordMfgComponent }      from './pages/admin/update-record-mfg/update-record-mfg.component';
import { UpdateRecordQaComponent }       from './pages/admin/update-record-qa/update-record-qa.component';
import { RequestsComponent }             from './pages/requests/requests.component';
import { ManufacturingComponent }        from './pages/manufacturing/manufacturing.component';
import { QualityComponent }               from './pages/quality/quality.component';
import { DeleteRecordComponent } from './pages/admin/delete-record/delete-record.component';




const routes: Routes = [  
    {
    path: '',
    component: HomeComponent
    },
    {
      path: 'callback',
      component: CallbackComponent
    },
    {
      path: 'record/:id',
      component: RecordComponent,
      canActivate: [
        AuthGuard
      ]
    },
    {
      path: 'admin',
      canActivate: [
        AuthGuard,
        AdminGuard
      ],
      children: [
        {
          path: '',
          component: AdminComponent
        },
        {
          path: 'record/new',
          component: CreateRecordComponent
        },
        {
          path: 'requests',
          component: RequestsComponent
        },
        {
          path: 'manufacturing',
          component: ManufacturingComponent
        },
        {
          path: 'quality',
          component: QualityComponent
        },
        {
          path: 'record/request/update/:id',
          component: UpdateRecordRequestComponent
        },
        {
          path: 'record/manufacturing/update/:id',
          component: UpdateRecordMfgComponent
        },
        {
          path: 'record/quality/update/:id',
          component: UpdateRecordQaComponent
        },
        {
          path: 'delete-record/:id',
          component: DeleteRecordComponent
        }
        

      ]
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    AdminGuard
  ],
})
export class AppRoutingModule { }
