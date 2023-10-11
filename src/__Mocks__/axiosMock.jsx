const axiosMock = {
    get: jest.fn(),
    post: jest.fn(),
    create: () => axiosMock,
  };
  