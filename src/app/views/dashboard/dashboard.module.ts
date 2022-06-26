import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";
import { TableComponent } from './components/table/table.component';

export const routes = [{ path: "", component: DashboardComponent }];

@NgModule({
    declarations: [DashboardComponent, TableComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class DashboardModule { }