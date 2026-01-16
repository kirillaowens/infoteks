export const loginRequest = (login: string, password: string) => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (login === 'admin' && password === 'admin') {
        resolve('fake-token');
      } else {
        reject(new Error('Неверный логин или пароль'));
      }
    }, 2000);
  });
};
