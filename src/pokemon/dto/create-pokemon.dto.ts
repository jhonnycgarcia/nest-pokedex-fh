import { IsInt, IsPositive, IsString, IsNotEmpty, Min, MinLength } from "class-validator";

export class CreatePokemonDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;
}
