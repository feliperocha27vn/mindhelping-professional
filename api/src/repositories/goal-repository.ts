import type { Goal, Prisma } from '@prisma/client'

export interface GoalRepository {
  create(data: Prisma.GoalUncheckedCreateInput): Promise<Goal>
  findById(goalId: string): Promise<Goal | null>
  updateInactivateOldGoal(goalId: string): void
  updateExecuteGoal(goalId: string): void
  update(
    goalId: string,
    personId: string,
    goal: Prisma.GoalUncheckedUpdateInput
  ): Promise<Goal | null>
}
