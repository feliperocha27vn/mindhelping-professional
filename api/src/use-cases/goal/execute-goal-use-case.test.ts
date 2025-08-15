import { InMemoryGoalRepository } from '@/in-memory-repository/in-memory-goal-repository'
import { InMemoryPersonRepository } from '@/in-memory-repository/in-memory-person-repository'
import { hash } from 'bcryptjs'
import { beforeEach, describe, expect, it } from 'vitest'
import { ExecuteGoalUseCase } from './execute-goal-use-case'

let goalRepository: InMemoryGoalRepository
let sut: ExecuteGoalUseCase

describe('Execute old goal', () => {
  beforeEach(() => {
    goalRepository = new InMemoryGoalRepository()
    sut = new ExecuteGoalUseCase(goalRepository)
  })

  it('should be able to execute an old goal', async () => {
    const personRepository = new InMemoryPersonRepository()

    const person = await personRepository.create({
      name: 'Maria Silva Santos',
      birth_date: '1985-03-15',
      cpf: '123.456.789-00',
      address: 'Rua das Flores',
      neighborhood: 'Centro',
      number: 1232,
      complement: 'Sala 201',
      cep: '01234-567',
      city: 'São Paulo',
      uf: 'SP',
      phone: '(11) 99999-8888',
      email: 'maria.santos@email.com',
      password_hash: await hash('senha123', 6),
    })

    const createdGoal = await goalRepository.create({
      userPersonId: person.id,
      description: 'New Goal',
      numberDays: 30,
    })

    const { goal } = await sut.execute({
      goalId: createdGoal.id,
    })

    expect(goal).toEqual(
      expect.objectContaining({
        isExecuted: true,
      })
    )
  })
})
