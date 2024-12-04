function mockTransfer(formData): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('FormData', formData);
        const id = 1;
        resolve(id);
      }, 1000);
    });
  }