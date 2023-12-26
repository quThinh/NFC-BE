import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { encrypt } from '../../shared/Utils';
import { bool } from 'aws-sdk/clients/signer';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

    constructor(
        private jwtService: JwtService,
        private authService: AuthService
    ) {
        super();
    }

    async canActivate(context: ExecutionContext) {
        // await super.canActivate(context);

        return new Promise<bool>(async (resolve) => {
            const req = context.switchToHttp().getRequest();
            const headers = req.headers;
            const token = headers.authorization ? headers.authorization : '';
            if (!token) {
                return resolve(false);
            }

            console.log('token: ', token)
            console.log('token: ', token.split(' ')[1])

            const user = this.jwtService.decode(token.split(' ')[1]);
            if (!user || !user['userWallet']) return resolve(false);

            const userDB = await this.authService.getUserByWallet(user['userWallet']);
            if (!userDB) return resolve(false);

            req.user = userDB;
            const payload = await this.jwtService.verifyAsync(
                token.split(' ')[1]
            );

            return resolve(payload);
        });
    }
}
