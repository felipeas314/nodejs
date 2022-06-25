import { Request, Response } from 'express'

export default class CreateuserController {
  constructor() { }

  async handle(request: Request, response: Response): Promise<Response> {
    return response.status(200).json('ok')
  }
}
