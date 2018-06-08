import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LookupComponent } from './lookup/lookup.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'new-entry', component: NewEntryComponent },
    { path: 'entry-lookup', component: LookupComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    static components = [LoginComponent, NewEntryComponent, LookupComponent ];
}

