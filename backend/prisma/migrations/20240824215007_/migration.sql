-- CreateTable
CREATE TABLE "RefreshTokens" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "RefreshTokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RefreshTokens_token_key" ON "RefreshTokens"("token");
