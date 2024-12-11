import { ErrorRepository } from "../app";

describe("ErrorRepository", () => {
  let error;

  beforeEach(() => {
    error = new ErrorRepository();
  });

  it ('add', () => {
    error.add(1, 'test');
    expect(() => error.add(1, 'test')).toThrow('Такая ошибка уже есть');
  })

  it ('translate', () => {
    error.add(1, 'test');
    expect(error.translate(1)).toBe('test');
  })

});

