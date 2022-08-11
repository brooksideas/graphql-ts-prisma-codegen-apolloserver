import { Book } from '@prisma/client';
import prismaContext from '@src/lib/prisma/prismaContext';

export const getAllBooks = async (): Promise<Book[]> => {
  const books = await prismaContext.prisma.book.findMany();
  return books;
};

export const getBookById = async (bookId: string): Promise<Book | null> => {
  return prismaContext.prisma.book.findFirst({
    where: {
      bookId,
    },
  });
};

export const getBooksByAuthor = async (authorId: string): Promise<Book[]> => {
  return prismaContext.prisma.book.findMany({
    where: {
      authorId,
    },
  });
};

export const createBook = async (
  title: string,
  authorId: string,
  v?: any,
  createdAt?: any,
  updatedAt?: any
  
): Promise<Book> => {
  const book = await prismaContext.prisma.book.create({
    data: { title, authorId , v , createdAt , updatedAt},
  });
  return book;
};
