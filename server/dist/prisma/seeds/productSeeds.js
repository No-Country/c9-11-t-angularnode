"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_prisma_1 = require("../../src/utils/db.prisma");
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Promise.all(getCategories().map((category) => {
            return db_prisma_1.db.categories.create({
                data: {
                    name: category.name,
                    description: category.description,
                    section: category.section,
                }
            });
        }));
        let categories = {};
        const allCategories = yield db_prisma_1.db.categories.findMany({
            select: {
                id: true,
                name: true,
            }
        });
        allCategories.forEach((category) => {
            categories[category.name] = category.id;
        });
        yield Promise.all(getProducts().map((product) => {
            const { title, description, price, imageUrl, isActive, discount } = product;
            return db_prisma_1.db.products.create({
                data: {
                    title,
                    description,
                    price,
                    imageUrl,
                    isActive,
                    discount,
                    categoryId: categories[product.category],
                }
            });
        }));
    });
}
seed();
function getCategories() {
    return [
        {
            name: 'Aperitivos',
            description: 'Aperitivos',
            section: 'DRINKS',
        },
        {
            name: 'Cervezas',
            description: 'Cervezas',
            section: 'DRINKS',
        },
        {
            name: 'Cocktails',
            description: 'Cocktails',
            section: 'DRINKS',
        },
        {
            name: 'Vinos y espumantes',
            description: 'Vinos y espumantes',
            section: 'DRINKS',
        },
        {
            name: 'Aguas',
            description: 'Aguas',
            section: 'DRINKS',
        },
        {
            name: 'Gaseosas',
            description: 'Gaseosas',
            section: 'DRINKS',
        },
        {
            name: 'Jugos',
            description: 'Jugos',
            section: 'DRINKS',
        },
        {
            name: 'Aguas',
            description: 'Aguas',
            section: 'DRINKS',
        },
        {
            name: 'Hamburguesas',
            description: 'Hamburguesas',
            section: 'FOODS',
        },
        {
            name: 'Pollo frito',
            description: 'Pollo frito',
            section: 'FOODS',
        },
        {
            name: 'Pizzas',
            description: 'Pizzas',
            section: 'FOODS',
        },
        {
            name: 'Tacos',
            description: 'Tacos',
            section: 'FOODS',
        },
        {
            name: 'Sandwiches',
            description: 'Sandwiches',
            section: 'FOODS',
        },
        {
            name: 'Hot dogs',
            description: 'Hot dogs',
            section: 'FOODS',
        },
        {
            name: 'Postres',
            description: 'Postres',
            section: 'DESSERTS',
        },
        {
            name: 'Extras',
            description: 'Extras',
            section: 'EXTRAS',
        },
    ];
}
;
function getProducts() {
    return [
        //========= DRINKS ===========
        {
            title: 'Aperol spritz',
            description: 'Aperol, prosecco y soda',
            price: 1150,
            imageUrl: 'https://res.cloudinary.com/do1a9yqy6/image/upload/v1677482861/products/rifskthbpihe7y0urf5c.jpg',
            isActive: true,
            discount: 0,
            category: 'Aperitivos',
        },
        {
            title: 'Campari',
            description: 'Campari con jugo de naranja o tónica',
            price: 1100,
            imageUrl: 'https://res.cloudinary.com/do1a9yqy6/image/upload/v1677483061/products/x9pfzuhtwbmdp7xmum48.jpg',
            isActive: true,
            discount: 0,
            category: 'Aperitivos',
        },
        {
            title: 'Fernet Branca',
            description: 'Fernet Branca y coca cola',
            price: 1100,
            imageUrl: 'https://res.cloudinary.com/do1a9yqy6/image/upload/v1677483275/products/xnci25obploohdlpbxwu.jpg',
            isActive: true,
            discount: 0,
            category: 'Aperitivos',
        },
        {
            title: 'Cerveza Lager',
            description: 'Fresca y seca. Ligero aroma de lúpulo. ABV 2,8 - 4,2%',
            price: 560,
            imageUrl: 'https://res.cloudinary.com/do1a9yqy6/image/upload/v1677483474/products/wwpqkehsyugrxd6gsdbg.jpg',
            isActive: true,
            discount: 0,
            category: 'Cervezas',
        },
        {
            title: 'Negroni',
            description: 'Gin, Campari y Vermut rojo',
            price: 1170,
            imageUrl: 'https://res.cloudinary.com/do1a9yqy6/image/upload/v1677483394/products/i3mofwich670xett3wht.jpg',
            isActive: true,
            discount: 0,
            category: 'Cocktails',
        },
        //========= FOODS =========
        {
            title: 'Hamburguesa Tradicional con carne de res',
            description: 'Carne de res picada, pan de hamburguesa, lechuga, tomate, cebolla, queso, mostaza y ketchup',
            price: 1460,
            imageUrl: 'https://res.cloudinary.com/do1a9yqy6/image/upload/v1677484033/products/hv4pqcwl4bcs0c94refh.jpg',
            isActive: true,
            discount: 0,
            category: 'Hamburguesas',
        },
        {
            title: 'Hamburguesa de cerdo',
            description: 'Carne de cerdo picada, tomate, cebolla salteada, huevo y barbacoa ',
            price: 1250,
            imageUrl: 'https://res.cloudinary.com/do1a9yqy6/image/upload/v1677484144/products/t1zpnhjwoblkbhnrtcxh.jpg',
            isActive: true,
            discount: 0,
            category: 'Hamburguesas',
        },
        {
            title: 'Pollo frito en tiras',
            description: 'Pechuga de pollo, harina de trigo, huevos, pan rallado, sal y pimienta',
            price: 1390,
            imageUrl: 'https://res.cloudinary.com/do1a9yqy6/image/upload/v1677484371/products/wzfz2ovvn3bdjk5zopsi.jpg',
            isActive: true,
            discount: 0,
            category: 'Pollo frito',
        },
        {
            title: 'Taco de camarones',
            description: 'Camarones cocidos, tortillas de maíz, cebolla, cilantro, salsa y limón',
            price: 820,
            imageUrl: 'https://res.cloudinary.com/do1a9yqy6/image/upload/v1677485036/products/cyw0krszyq1w2ik2kgy8.jpg',
            isActive: true,
            discount: 0,
            category: 'Tacos',
        },
        {
            title: 'Pizza Vegetariana',
            description: 'Salsa de tomate, mozzarella, champiñones, pimiento, cebolla y aceitunas negras',
            price: 1480,
            imageUrl: 'https://res.cloudinary.com/do1a9yqy6/image/upload/v1677484931/products/kzp5agsbuz5ahghrkuj8.jpg',
            isActive: true,
            discount: 0,
            category: 'Pizzas',
        },
        //======== EXTRAS =======
        {
            title: 'Nachos clásicos',
            description: 'palta, parmesano y cheddar gratinados, tomate concassé y verdeo',
            price: 1649,
            imageUrl: 'https://res.cloudinary.com/do1a9yqy6/image/upload/v1677485386/products/sjljuufrcjon0zck3wul.jpg',
            isActive: true,
            discount: 0,
            category: 'Extras',
        },
        {
            title: 'Papas clásicas',
            description: 'Canasta de papas fritas',
            price: 990,
            imageUrl: 'https://res.cloudinary.com/do1a9yqy6/image/upload/v1677485864/products/gea2pkvmb5bjfkfqs6is.jpg',
            isActive: true,
            discount: 0,
            category: 'Extras',
        },
        //===== DESSERTS =======
        {
            title: 'Cheesecake de frutos rojos',
            description: 'Cheesecake con moras, arándanos y frutillas',
            price: 1649,
            imageUrl: 'https://res.cloudinary.com/do1a9yqy6/image/upload/v1677486207/products/rqxtbwtdnnjsg4w4vsxp.jpg',
            isActive: true,
            discount: 0,
            category: 'Postres',
        },
        {
            title: 'Porción de chocotorta',
            description: 'Porción de chocotorta',
            price: 1020,
            imageUrl: 'https://res.cloudinary.com/do1a9yqy6/image/upload/v1677486549/products/s1rkhkxpjgnqjxadmqha.jpg',
            isActive: true,
            discount: 0,
            category: 'Postres',
        },
    ];
}
;
//# sourceMappingURL=productSeeds.js.map