import { Injectable } from "@nestjs/common";

let products = [
    { id: 1, title: 'Mleko', price: 3.5 },
    { id: 2, title: 'Mąka', price: 2.9 },
]

@Injectable()
export class ProductsService {
    getAll() {
        return products;
    }

    getById(id: number) {
        return products.find(x => x.id === id)
    }

    add(title: string, price: number) {
        const id = Math.round(Math.random() * 1000)
        const newProduct = { id, title, price, }
        products.push(newProduct);

        return newProduct
    }

    remove(id: number) {
        products = products.filter(x => x.id !== id)
    }

    edit(id: number, price: number) {
        const product = products.find(x => x.id)
        product.price = price
        return product
    }
}