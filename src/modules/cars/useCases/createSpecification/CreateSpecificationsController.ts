import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecificationsUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationsController {
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const createSpecificationsUseCase = container.resolve(
      CreateSpecificationsUseCase
    );

    createSpecificationsUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationsController };
