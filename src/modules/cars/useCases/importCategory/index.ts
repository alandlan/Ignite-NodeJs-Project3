import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCategory = new ImportCategoryUseCase(
  categoriesRepository
);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCategory
);

export { importCategoryController };
