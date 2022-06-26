import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";

export const routes = [{ path: "", component: DashboardComponent }];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [DashboardComponent]
})

export class DashboardModule { }
