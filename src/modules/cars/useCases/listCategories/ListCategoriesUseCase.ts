import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";
import { ICategoriesRespository } from "../../repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRespository: ICategoriesRespository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRespository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
