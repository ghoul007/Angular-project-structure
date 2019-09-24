# Angular Project Structure

###
Folder structure options and naming conventions for software projects



## A directory layout

```bash
├── app-initialization.module.ts
├── app-routing.module.ts
├── app.component.html
├── app.component.scss
├── app.component.spec.ts
├── app.component.ts
├── app.config.ts
├── app.constant.ts
├── app.module.ts
├── core
├── features
├── layout
├── shared
├── styles
└── views
```

### CORE MODULE
Core module is dedicated to singleton providers
These services contain business logic used by other core services or app’s features.

### FEATURE MODULE
Contain different feature modules

### LAYOUT MODULE
These components are usually rendered in the UI at all times and are often included directly into root AppComponent

### SHARED MODULE
SharedModule is a place to store all the reusable  components, directives, pipes, helpers and types


### VIEW MODULE
Views module is another module that usually turns out to be quite simple. It holds the views that are not a part of any feature and whose routing paths are defined in AppRoutingModule. An example of such a view is a 404 page (PageNotFoundView)


## Project Structure


```bash
├── app
|  ├── app-initialization.module.ts
|  ├── app-routing.module.ts
|  ├── app.component.html
|  ├── app.component.scss
|  ├── app.component.spec.ts
|  ├── app.component.ts
|  ├── app.config.ts
|  ├── app.constant.ts
|  ├── app.module.ts
|  ├── core
|  |  ├── auth
|  |  |  ├── auth.module.ts
|  |  |  ├── guards
|  |  |  ├── helpers
|  |  |  |  ├── auth-interceptor.ts
|  |  |  |  ├── error-interceptor.ts
|  |  |  |  ├── fake-backend.ts
|  |  |  |  └── jwt-interceptor.ts
|  |  |  ├── services
|  |  |  └── types
|  |  └── core.module.ts
|  ├── features
|  |  └── feature-example
|  |     ├── components
|  |     |  └── component-example
|  |     |     └── README.md
|  |     ├── containers
|  |     |  └── container-example
|  |     |     └── README.md
|  |     ├── feature-example-routing.module.ts
|  |     ├── feature-example.config.ts
|  |     ├── feature-example.constants.ts
|  |     ├── feature-example.module.ts
|  |     ├── helpers
|  |     |  └── example.helpers.ts
|  |     ├── services
|  |     |  └── example.service.ts
|  |     ├── store
|  |     |  ├── feature-example.actions.ts
|  |     |  ├── feature-example.effects.ts
|  |     |  ├── feature-example.reducers.ts
|  |     |  ├── feature-example.selectors.ts
|  |     |  └── index.ts
|  |     ├── types
|  |     |  └── example.ts
|  |     └── views
|  |        └── view-example
|  |           └── README.md
|  ├── layout
|  |  ├── footer
|  |  ├── header
|  |  |  ├── header.component.html
|  |  |  ├── header.component.scss
|  |  |  └── header.component.ts
|  |  ├── layout.module.ts
|  |  └── nav
|  |     ├── nav.component.html
|  |     ├── nav.component.scss
|  |     └── nav.component.ts
|  ├── shared
|  |  ├── components
|  |  |  ├── complex-component-example
|  |  |  |  ├── complex.component.html
|  |  |  |  ├── complex.component.scss
|  |  |  |  ├── complex.component.ts
|  |  |  |  ├── complex.module.ts
|  |  |  |  ├── components
|  |  |  |  |  ├── example-type.ts
|  |  |  |  |  ├── sub.component.html
|  |  |  |  |  ├── sub.component.scss
|  |  |  |  |  └── sub.component.ts
|  |  |  |  └── types
|  |  |  |     └── type-example.ts
|  |  |  └── simple-component-example
|  |  |     ├── example-type.ts
|  |  |     ├── simple.component.html
|  |  |     ├── simple.component.scss
|  |  |     └── simple.component.ts
|  |  ├── directives
|  |  |  └── directive-example.directive.ts
|  |  ├── helpers
|  |  |  └── helpers-example.helpers.ts
|  |  ├── pipes
|  |  |  └── pipe-example.pipe.ts
|  |  ├── shared.module.ts
|  |  └── types
|  |     └── type-example.ts
|  ├── styles
|  |  ├── base.scss
|  |  ├── reset.scss
|  |  └── variables.scss
|  └── views
|     ├── page-not-found
|     |  ├── page-not-found.view.html
|     |  ├── page-not-found.view.scss
|     |  └── page-not-found.view.ts
|     └── views.module.ts
├── assets
├── environments
|  ├── environment.prod.ts
|  └── environment.ts
├── favicon.ico
├── index.html
├── main.ts
├── polyfills.ts
├── styles.scss
└── test.ts
```



