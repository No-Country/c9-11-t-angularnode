import _ from 'lodash';
import BaseRepository from './baseRepository';
import { AnyRecord, ModelStructure, ModelTypes, ModelScalarFields, MODELS_NAME  } from './prisma-repo';

// This type will be used if you want to extends the functions in Products Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.PRODUCTS]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.PRODUCTS]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.PRODUCTS]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.PRODUCTS]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.PRODUCTS]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.PRODUCTS]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.PRODUCTS]['Order'];
type Delegate = ModelTypes[typeof MODELS_NAME.PRODUCTS]['Delegate'];
type GroupBy = ModelStructure[typeof MODELS_NAME.PRODUCTS]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.PRODUCTS>;
type Model = ModelStructure[typeof MODELS_NAME.PRODUCTS];
/*  eslint-enable @typescript-eslint/no-unused-vars */


class Products extends BaseRepository(MODELS_NAME.PRODUCTS) {
}

export default Products
