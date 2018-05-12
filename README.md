# Week II

## Objective: Build a fully-functioning CRUD API for 2 models, Students and Tests. Test specs are provided to guide development.

### Details

	- Necessary Models:
		- Student
		- Test

	- Necessary routes:

		- Get all students

		- Get one student

		- Create new student

		- Delete a student

		- Get all tests

		- Get one test

		- Create a test, belonging to a student

		- Delete a test



### Getting Started
1) fork and `git clone`

2) `npm install`

3) run `npm test`

4) work through the models in db/models/students.js and db/models/tests.js *before* routes/students.js and routes/test.js


#### Tips
- Make sure to look over `app.js` and have an understanding of existing middleware given and what else might be needed
- Change the `xit` to `it` in the test specs and work through them one by one
- Isolate `describe` blocks or `it` blocks of tests by changing it to `describe.only` or `it.only`

#### Note for Instructors
- Cycle branches begin with w2-cycle-2. You may start from there, or use the first cycle to install dependencies/restructure the file structure from study saturday 1

