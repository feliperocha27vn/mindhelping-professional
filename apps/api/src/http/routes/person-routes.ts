import type { FastifyPluginAsync } from 'fastify'
import { registerProfessional } from '../controllers/person/register-professional'

export const personRoutes: FastifyPluginAsync = async app => {
  app.register(registerProfessional)
}
