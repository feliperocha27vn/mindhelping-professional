import type { Person, Prisma } from '@prisma/client'

export interface PersonRepository {
  create(data: Prisma.PersonUncheckedCreateInput): Promise<Person>
  findById(personId: string): Promise<Person | null>
}
