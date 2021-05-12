import { Category } from "../../entities/Category";
import { ICategoriesRespository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRespository: ICategoriesRespository) {}

  execute(): Category[] {
    const categories = this.categoriesRespository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
