import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodayComponent } from './components/today/today.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OverdueComponent } from './components/overdue/overdue.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';


const routes: Routes = [
  {
    pathMatch: "full",
    path: "",
    redirectTo: "/today"
  },
  {
    path: "today",
    component: TodayComponent
  },
  {
    path: "overdue",
    component: OverdueComponent
  },
  {
    path: "upcoming",
    component: UpcomingComponent
  },
  {
    path: "404",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "/404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
