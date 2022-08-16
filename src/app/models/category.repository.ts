import { Category } from "./category";

export class CategoryRepository {

    private categories: Category[];


    constructor() {
        this.categories = [
        ];
    }
    getCategories(): Category[] {
        return this.categories;
    }
    getCategoryById(id: number): Category {
        return this.categories.find(i => i.id == id);
    }
}