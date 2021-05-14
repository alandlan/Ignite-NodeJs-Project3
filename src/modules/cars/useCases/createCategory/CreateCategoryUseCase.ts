import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICategoriesRespository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepositories: ICategoriesRespository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepositories.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppError("Category Already Exists!");
    }

    this.categoriesRepositories.create({ name, description });
  }
}

export { CreateCategoryUseCase };
