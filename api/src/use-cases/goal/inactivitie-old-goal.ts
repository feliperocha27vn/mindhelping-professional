import { ResourceNotFoundError } from '@/errors/resource-not-found-error'
import type { GoalRepository } from '@/repositories/goal-repository'
import type { Goal } from '@prisma/client'
import { differenceInDays } from 'date-fns'

interface InactivateOldGoalUseCaseRequest {
  goalId: string
}

interface InactivateOldGoalUseCaseResponse {
  goal: Goal
}

export class InactivateOldGoalUseCase {
  constructor(private goalRepository: GoalRepository) {}

  async execute({
    goalId,
  }: InactivateOldGoalUseCaseRequest): Promise<InactivateOldGoalUseCaseResponse> {
    const goal = await this.goalRepository.findById(goalId)

    if (!goal) {
      throw new ResourceNotFoundError()
    }

    const daysPassed = differenceInDays(new Date(), goal.createdAt)

    if (daysPassed > 30) {
      await this.goalRepository.updateInactivateOldGoal(goalId)
    }

    return {
      goal,
    }
  }
}
