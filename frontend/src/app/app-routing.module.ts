import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "./view/dashboard/pages/home.component";
import { DashboardComponent } from "./view/dashboard/dashboard.component";
import { AuthComponent } from "./view/auth/auth.component";
import { AuthGuardService } from "./view/auth/auth-guard.service";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [AuthGuardService],
                children: [
                    {
                        path: '',
                        component: HomeComponent,
                    },
                    {
                        path: 'projects/:projectId/name/:name',
                        loadChildren: './view/dashboard/pages/projects/projects.module#ProjectsModule'
                    },
                ]
            },
            {
                path: 'auth',
                component: AuthComponent
            }
        ], { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
