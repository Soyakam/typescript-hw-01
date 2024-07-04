type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Виключаємо поле 'errors' з типу Form, щоб створити тип Params
type Params = Omit<Form, 'errors'>;

// Приклад використання
const paramsExample: Params = {
  email: 'example@mail.com',
  firstName: 'John',
  lastName: 'Doe',
  phone: '123-456-7890'
};
