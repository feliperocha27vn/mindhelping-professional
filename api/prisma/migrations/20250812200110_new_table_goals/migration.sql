-- CreateTable
CREATE TABLE "goal" (
    "id" TEXT NOT NULL,
    "user_person_id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "numberDays" INTEGER NOT NULL,
    "counter" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "goal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "goal" ADD CONSTRAINT "goal_user_person_id_fkey" FOREIGN KEY ("user_person_id") REFERENCES "user"("person_id") ON DELETE RESTRICT ON UPDATE CASCADE;
