import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: () => import('./region/region.module').then(m => m.JhipsterTestRegionModule)
      },
      {
        path: 'country',
        loadChildren: () => import('./country/country.module').then(m => m.JhipsterTestCountryModule)
      },
      {
        path: 'location',
        loadChildren: () => import('./location/location.module').then(m => m.JhipsterTestLocationModule)
      },
      {
        path: 'department',
        loadChildren: () => import('./department/department.module').then(m => m.JhipsterTestDepartmentModule)
      },
      {
        path: 'task',
        loadChildren: () => import('./task/task.module').then(m => m.JhipsterTestTaskModule)
      },
      {
        path: 'employee',
        loadChildren: () => import('./employee/employee.module').then(m => m.JhipsterTestEmployeeModule)
      },
      {
        path: 'job',
        loadChildren: () => import('./job/job.module').then(m => m.JhipsterTestJobModule)
      },
      {
        path: 'job-history',
        loadChildren: () => import('./job-history/job-history.module').then(m => m.JhipsterTestJobHistoryModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class JhipsterTestEntityModule {}
