'use strict'

const Country = use('App/Models/Country')

class FindCountry {
  async handle({ request, response, params: { id } }, next) {
    // call next to advance the request
    const country = await Country.find(id)

    if (!country) {
      return response.status(404).json({
        message: 'Country not found.',
        id
      })
    }

    request.body.country = country

    await next()
  }
}

module.exports = FindCountry
