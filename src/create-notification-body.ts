import { IsNotEmpty, IsString, IsUUID, Length } from "class-validator";

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5,240)
  content: string;

  @IsString()
  @IsNotEmpty()
  category:string;
}