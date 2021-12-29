import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
    getUsers(): Promise<any> {
        return getRepository(User).find();
    }
}
