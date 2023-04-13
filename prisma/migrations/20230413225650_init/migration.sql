-- CreateTable
CREATE TABLE "Enrolment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "token" TEXT NOT NULL,
    "requested" BOOLEAN NOT NULL DEFAULT false
);
