import { ProductCategory } from "./ProductCategory";

export class Product {
    constructor(
        public id: number | null,
        public name: string,
        public description: string,
        public price: number | null,
        public slug: string,
        public id_category: number,
        public product_category: ProductCategory
    ) {

    }
}