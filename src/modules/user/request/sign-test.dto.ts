import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength, MaxLength, IsNumber } from "class-validator";

export class SignTest {
    @ApiProperty({
        type: String,
        example: 'signature'
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(500)
    address: string;

    @ApiProperty({
        type: Number,
        example: Date.now(),
    })
    @IsNotEmpty()
    @IsNumber()
    signTime: number;

    @ApiProperty({
        type: Number,
        example: 37,
    })
    @IsNotEmpty()
    @IsNumber()
    chainId: number;

    @ApiProperty({
        type: String,
        example: 'private key',
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(100)
    privateKey: string;
}