# EnvDemo

### Build the project locally

`ng serve`

### Build the project locally with a different environment

`ng serve -c test`

This will then use the `environment.test.ts` file which will allow you to use `test` configurations. One use case for this is when you wanted to test a stage locally.

### Build the project for a specific stage

`ng run env-test:build:test`

This will build the project using the `test` stage configuration.
