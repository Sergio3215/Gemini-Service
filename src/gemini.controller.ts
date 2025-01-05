/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty } from '@nestjs/swagger'
import {Consulting} from '../gemini'


class PromptBody {
    @ApiProperty()
    prompt: string;
}

class ResponseGemini {
    statusCode: number;
    message: string;
    data: any;
}

@Controller()
export class GeminiController {
    @Post()
    @ApiOperation({ summary: "Send message on Gemini" })
    @ApiResponse({ status: 200, description: "Ok" })
    @ApiResponse({ status: 201, description: "Respuesta de Gemini" })
    @ApiResponse({ status: 206, description: "El prompt tiene inconsistencias" })
    @ApiResponse({ status: 404, description: "No encontrado" })
    async createTextGemini(@Body() body: PromptBody): Promise<ResponseGemini> {
        // return "response on gemini "+prompt.prompt;
        // console.log(body);
        let text =  await Consulting(body.prompt);
        return {
            statusCode: 200,
            message: 'Operación exitosa',
            data: { text: text },
        };
    }

}

