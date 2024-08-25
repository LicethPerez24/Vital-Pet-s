import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const createUser = async (userData, accountData) => {
  try {
    await prisma.user.create({
      data: {
        ...userData,
        accounts: {
          create: accountData,
        },
      },
      include: {
        accounts: true,
      },
    });
  } catch (e) {
    return e;
  }
};

export const getUser = async (email) => {
  const user = await prisma.user.findUnique({ where: { email } });
  return user;
};

export const addRefreshToken = async (email, token) => {
  await prisma.account.update({
    where: { email },
    data: { refresh_token: token },
  });
};

export const getRefreshToken = async (email) => {
  return await prisma.account.findUnique({ where: { email } });
};

export const addGeneralRefreshToken = async (token) => {
  try {
    await prisma.refreshTokens.create({ token });
  } catch (error) {
    throw new Error(error);
  }
};
