import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// first part is the import module section where we import external modules, components and directives that are used in our application.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';


/*
The @ngModule decorator identifies the AppModule as an mgModule class.
It has metadata that tells Angular how to run the application
*/

/*
Declaration Array
Angular knows what apps belong to the AppModule by finding them in the declaration array. We also place custom directives and pipes that we create in the declarations array.
The Angular CLI’s generate command adds the generated pipes, components and directives to the declaration array automatically for us.
*/

/*
import array

In Angular, we group features into specific units called modules. We add a module to the imports array when the application wants to use its features.
For example, since our application runs on the browser, we use features provided in the BrowserModule.
We have also used some features like two-way data binding which are provided by the formsModule in our application
*/ 


@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
