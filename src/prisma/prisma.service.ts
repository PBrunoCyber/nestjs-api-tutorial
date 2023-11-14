import { Injectable } from '@nestjs/common';
import {PrismaClient} from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient{
    constructor(){
        super({
            datasources:{
                db:{
                    url: "postgresql://postgres:pb2588@localhost:5433/nest_api_tutorial?schema=public"
                }
            }
        });
    }
}
