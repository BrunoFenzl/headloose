# Headloose

Headloose is a static HTML / JSON generator with the GUI written in Angular.

This is my playground where I can develop and test new ideas. This is NOWHERE ready for primetime but it already sports a few nice features:

- JSON content schema for manipulating and generating content
- Dynamic component factories based on content schema
- Async state management with @ngrx/effects
- State is bound to the router with @ngrx/router
- Dynamic route loading
- Module lazy loading

## Building and developing

This project was scaffolded with angular-cli, so all `ng` commands apply. To run a local development server just type `npm start` as usual.

## Roadmap

The roadmap is very loose and depends heavily on how much time I have to spare.

- Finish basic component set
- Add JSON importer
- Add JSON exporter
- Add HTML generator
- Export as .zip file
- Create component factories factory to speed up custom component creation
- Add component drag and drop in editor
- Add media management
- Add basic settings configuration for exported content
- Build with electron
