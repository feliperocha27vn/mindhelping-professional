import { ResourceNotFoundError } from '@/errors/resource-not-found-error'
import type { GoalRepository } from '@/repositories/goal-repository'
import type { Goal } from '@prisma/client'

interface ExecuteGoalUseCaseRequest {
  goalId: string
}

interface ExecuteGoalUseCaseResponse {
  goal: Goal
}

export class ExecuteGoalUseCase {
  constructor(private goalRepository: GoalRepository) {}

  async execute({
    goalId,
  }: ExecuteGoalUseCaseRequest): Promise<ExecuteGoalUseCaseResponse> {
    const goal = await this.goalRepository.findById(goalId)

    if (!goal) {
      throw new ResourceNotFoundError()
    }

    await this.goalRepository.updateExecuteGoal(goal.id)

    return {
      goal,
    }
  }
}
