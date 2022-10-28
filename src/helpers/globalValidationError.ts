import {
  BadRequestException,
  ValidationError,
  ValidationPipeOptions,
} from '@nestjs/common';

export const globalValidation: ValidationPipeOptions = {
  exceptionFactory(errors: ValidationError[]) {
    const errorMessage = {};

    errors.forEach((error: ValidationError) => {
      errorMessage[error.property] = Object.values(error.constraints)[0];
    });

    throw new BadRequestException(errorMessage);
  },
};
