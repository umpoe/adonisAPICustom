'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')
Route.post('country', 'CountryController.store')
Route.get('country', 'CountryController.index')
Route.patch('country/:id', 'CountryController.update').middleware(['findCountry'])
// Route.patch('country/:id', 'CountryController.update').middleware(['findCountry'])
Route.get('country/:id', 'CountryController.show').middleware(['findCountry'])
Route.delete('country/:id', 'CountryController.delete').middleware(['findCountry'])
