# Angular-architect-library
Creating own libraries for Angular with Nx

## What is monorepos?
- [monorepo.tools](https://monorepo.tools/)
- [monorepo explanation](https://monorepo.tools/#what-is-a-monorepo)
- [monorepo magyarul](https://thecodingadventure.com/miert-monorepo/)

## Create a monorepo
- `npx create-nx-workspace@latest library-app --preset angular-monorepo`

## Create a new Library
- [Library generator](https://nx.dev/nx-api/angular/generators/library)
- [Library schema](https://github.com/nrwl/nx/blob/master/packages/angular/src/generators/library/schema.json)
- Important switches:
  - --name: name of the library
  - --directory: directory of the library
  - --style: style of the library
  - --skipTsConfig: skip tsconfig
  - --skipFormat: skip prettier
  - --unitTestRunner: unit test runner
  - --linter: linter
  - --publishable: possibility to publish on npm
  - --buildable: incremental build
  - --importPath: import path
- Generate your library:
- `npx nx g @nx/angular:library ngc-form-controls --publishable --buildable --import-path=@cherryapp/form-controls`

## Adding dependencies to the Library
- `cd ngc-form-controls`
- Add packages to the package.json's peerDependencies (it needs for production):
```json
"peerDependencies": {
  "bootstrap": "^5.2.0",
  "font-awesome": "^4.7.0"
},
```
- Also add packages to the devDependencies of the parent project (only for development):
```json
"devDependencies": {
  "bootstrap": "^5.2.0",
  "font-awesome": "^4.7.0"
},
```
- Import Bootstrap into the css:

## Run the project
- `npx nx run library-app:serve`
- Save it into the start script in the package.json file!

## Use the library in the app in development
- The path of the library from the tsconfig.base.json:
- `@cherryapp/form-controls`
- Import the component from the path:
```typescript
import { NgcFormControlsComponent } from '@cherryapp/form-controls';
// ...
imports: [
  // ...
  NgcFormControlsComponent,
],
```
- Place the component in the template:
```html
<div>
  <lib-ngc-form-controls></lib-ngc-form-controls>
</div>
```

## Developing a new form control component
- `cd .\ngc-form-controls`
- `npx nx g @nx/angular:component rating`
- Choose the right path.
- Import the new compnent into the appcomponent and display it.

## BUILD the Library
- Publish assets into the package, in the ng-package.json file:
```json
{
  
  "assets": [
    {
      "input": "src/assets",
      "glob": "**/*",
      "output": "assets"
    }
  ]
}
```

- ONLY FOR DEVELOPMENT, place the following settings the parent's project.json:
```json
"assets": [
  "apps/library-app/src/favicon.ico",
  "apps/library-app/src/assets",
  {
    "glob": "**/*",
    "input": "ngc-form-controls/src/assets",
    "output": "assets"
  }
],
```

- `npx nx run ngc-form-controls:build --prod`
- When we build the entire application, the library also will be built:
- `npx nx run library-app:build --prod`

## PUBLISH the Library
- [Article](https://itnext.io/leverage-nx-to-publish-your-angular-library-on-npm-15a9e77b6602)
- `npm login`
- `npm adduser`
- `npx nx run ngc-form-controls:build --prod`
- `cd dist/ngc-form-controls`
- `npm publish --access=public`

## Using the Library in production
- Create a new Angular application
- `npm i ngc-form-controls`
- Import the desired component:
- `import { CountrySelectorComponent } from 'ngc-form-controls';`
- Include it into the template:
```html
<div class="form-group">
  <label for="name">Country</label>
  <ngc-country-selector formControlName="country"></ngc-country-selector>
</div>
```
- [Sample application](./library-test/)

## Testing
- Unit testing of the library:
- `npx nx run icell-form-controls:test`
- E2E testing of the parent application:
- `npx nx run library-app-e2e:e2e`
