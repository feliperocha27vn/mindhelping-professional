import type { GoalRepository } from '@/repositories/goal-repository'
import type { Goal, Prisma } from '@prisma/client'

export class InMemoryGoalRepository implements GoalRepository {
  private goals: Goal[] = []

  async create(data: Prisma.GoalUncheckedCreateInput) {
    const goal = {
      id: data.id ?? crypto.randomUUID(),
      userPersonId: data.userPersonId,
      description: data.description,
      numberDays: data.numberDays,
      isExecuted: data.isExecuted ?? false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.goals.push(goal)

    return goal
  }
}
