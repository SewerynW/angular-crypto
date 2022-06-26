import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { CoinDetailsComponent } from "./coin-details.component";

export const routes = [
    {
        path: '',
        component: CoinDetailsComponent
    }
]

@NgModule({
    declarations: [CoinDetailsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: []
})

export class CoinDetailsModule { }