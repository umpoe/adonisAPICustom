'use strict'

const Country = use('App/Models/Country')

class CountryController {


  async index({ response }) {
    const country = await Country.all()

    response.status(200).json({
      message: 'Here are your countries.',
      data: country
    })
  }
  async show({ response }) {
    const country = await Country.all()

    response.status(200).json({
      message: 'Here are your countries.',
      data: country
    })
  }

  async show({ request, response }) {
    response.status(200).json({
      message: 'Here is your country.',
      data: request.post().country
    })
  }

  async store({ request, response }) {
    const { name, group, points } = request.post()

    // save and get instance back
    const country = await Country.create({ name, group, points })

    response.status(201).json({
      message: 'Successfully created a new country.',
      data: country
    })
  }

  async update({ request, response }) {
    const { name, group, points, country  } = request.post()


    country.name = name
    country.group = group
    country.points = points


    await country.save()

    response.status(200).json({
      message: 'Successfully updated this country.',
      data: country
    })
  }
  async delete({ request, response, params: { id } }) {
    const country = request.post().country

    await country.delete()

    response.status(200).json({
      message: 'Successfully deleted this customer.',
      id
    })
  }


}

module.exports = CountryController
