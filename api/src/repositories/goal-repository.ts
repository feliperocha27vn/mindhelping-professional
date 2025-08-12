import type { Goal, Prisma } from '@prisma/client'

export interface GoalRepository {
  create(data: Prisma.GoalUncheckedCreateInput): Promise<Goal>
}
