import { ProductsMiddleware } from './products.middleware';

describe('ProductsMiddleware', () => {
  it('should be defined', () => {
    expect(new ProductsMiddleware()).toBeDefined();
  });
});
