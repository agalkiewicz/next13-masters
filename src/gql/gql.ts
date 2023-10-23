/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddItem($cartId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, order: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}": types.CartAddItemDocument,
    "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    id\n    orderItems {\n      id\n      quantity\n      product {\n        id\n        name\n        price\n        images {\n          url\n        }\n      }\n    }\n    total\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    id\n    orderItems {\n      id\n      quantity\n      product {\n        id\n        name\n        price\n        images {\n          url\n        }\n      }\n    }\n    total\n  }\n}": types.CartGetByIdDocument,
    "query Categories {\n  categories {\n    id\n    name\n    slug\n  }\n}": types.CategoriesDocument,
    "query Category($where: CategoryWhereUniqueInput!, $skip: Int, $first: Int) {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n  category(where: $where) {\n    name\n    products(skip: $skip, first: $first) {\n      id\n      slug\n      name\n      description\n      categories(first: 1) {\n        name\n      }\n      images(first: 1) {\n        url\n      }\n      price\n    }\n  }\n}": types.CategoryDocument,
    "query Collection($where: CollectionWhereUniqueInput!, $skip: Int, $first: Int) {\n  collection(where: $where) {\n    name\n    products(skip: $skip, first: $first) {\n      id\n      name\n      description\n      categories(first: 1) {\n        name\n      }\n      images(first: 1) {\n        url\n      }\n      price\n    }\n  }\n}": types.CollectionDocument,
    "query Collections {\n  collections {\n    id\n    name\n    slug\n  }\n}": types.CollectionsDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetList($skip: Int, $first: Int) {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n  products(skip: $skip, first: $first) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}": types.ProductsGetListDocument,
    "query Products($where: ProductWhereInput) {\n  products(where: $where) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}": types.ProductsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($cartId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, order: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    id\n    orderItems {\n      id\n      quantity\n      product {\n        id\n        name\n        price\n        images {\n          url\n        }\n      }\n    }\n    total\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    id\n    orderItems {\n      id\n      quantity\n      product {\n        id\n        name\n        price\n        images {\n          url\n        }\n      }\n    }\n    total\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Categories {\n  categories {\n    id\n    name\n    slug\n  }\n}"): typeof import('./graphql').CategoriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Category($where: CategoryWhereUniqueInput!, $skip: Int, $first: Int) {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n  category(where: $where) {\n    name\n    products(skip: $skip, first: $first) {\n      id\n      slug\n      name\n      description\n      categories(first: 1) {\n        name\n      }\n      images(first: 1) {\n        url\n      }\n      price\n    }\n  }\n}"): typeof import('./graphql').CategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Collection($where: CollectionWhereUniqueInput!, $skip: Int, $first: Int) {\n  collection(where: $where) {\n    name\n    products(skip: $skip, first: $first) {\n      id\n      name\n      description\n      categories(first: 1) {\n        name\n      }\n      images(first: 1) {\n        url\n      }\n      price\n    }\n  }\n}"): typeof import('./graphql').CollectionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Collections {\n  collections {\n    id\n    name\n    slug\n  }\n}"): typeof import('./graphql').CollectionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($skip: Int, $first: Int) {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n  products(skip: $skip, first: $first) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Products($where: ProductWhereInput) {\n  products(where: $where) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}"): typeof import('./graphql').ProductsDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
