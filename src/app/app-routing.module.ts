import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { RulesComponent } from './rules/rules.component';
import { GameComponent } from './game/game.component';

export const appRoutes: Routes = [
    { path: 'rules', component: RulesComponent },
    { path: 'game', component: GameComponent },
    { path: '**', redirectTo: 'rules'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}