import { Injectable } from '@nestjs/common';
import { UnauthorizedError } from 'src/errors/UnauthorizedError';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateUserDto) {
    return this.prisma.user.create({
      data,
    });
  }

  findAll() {
    throw new UnauthorizedError('Custom message forbiden');

    return this.prisma.user.findMany();
  }
}
