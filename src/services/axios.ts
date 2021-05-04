const request = async (url: string, method = 'GET', body: null | string) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });
    const data = await response.json();

    if (!response.ok) {
      throw data.errors || new Error('Something went wrong');
    }

    return data;
  } catch (e) {
    console.error(e.message || 'Something went wrong');
    throw e;
  }
};

export default request;
