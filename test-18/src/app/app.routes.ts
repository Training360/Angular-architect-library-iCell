import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'products',
        loadComponent: () => import('./page/product/product.component').then( m => m.ProductComponent)
    },
    {
        path: 'products/:id',
        loadComponent: () => import('./page/product-editor/product-editor.component').then( 
            m => m.ProductEditorComponent)
    },
    {
        path: '**',
        redirectTo: '',
    },
];
