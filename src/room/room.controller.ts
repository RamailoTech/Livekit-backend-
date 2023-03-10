import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { HandRaiseDto } from './dto/HandRaise.dto';
import { canPublishPremissionDto } from './dto/Canpublish.dto';

@ApiTags('Room')
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  @ApiBody({
    description: 'Return Token',
    type: CreateRoomDto,
  })
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.create(createRoomDto);
  }

  @Post('/update-permission')
  @ApiBody({
    description: 'Update user Can publish permission',
    type: canPublishPremissionDto,
  })
  updatePremission(@Body() updatePremissionDto: canPublishPremissionDto) {
    return this.roomService.canPublishPremission(updatePremissionDto);
  }
}
