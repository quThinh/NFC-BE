import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength, Matches, IsNumber } from "class-validator";

export class RegisterWallet {
    @ApiProperty({
        type: String,
        example: 'JSON.stringify(message)'
    })
    @IsNotEmpty()
    @IsString()
    message: string;

    @ApiProperty({
        type: String,
        example: "signature",
    })
    @IsNotEmpty()
    @IsString()
    signature : string;

}