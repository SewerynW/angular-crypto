import { NgModule } from "@angular/core";
import { PortfolioComponent } from "./portfolio.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

export const routes = [
    {
        path: '',
        component: PortfolioComponent,


    }
]
@NgModule({
    declarations: [PortfolioComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [],
    providers: []
})
export class PortfolioModule { }