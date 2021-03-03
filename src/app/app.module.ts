import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbTooltipModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { TodayComponent } from './components/today/today.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OverdueComponent } from './components/overdue/overdue.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TasksFilterPipe } from './pipes/tasks-filter.pipe';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NewTaskComponent } from './components/new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    TodayComponent,
    NotFoundComponent,
    OverdueComponent,
    UpcomingComponent,
    TaskItemComponent,
    TasksFilterPipe,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbTooltipModule,
    NgbDatepickerModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
