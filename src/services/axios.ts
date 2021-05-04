const request = async (url: string, method = 'GET', body: null | string) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    if (!response.ok) {
      throw new Error(response.statusText || 'Something went wrong');
    }
    const data = await response.json();

    return data;
  } catch (e) {
    console.error(e.message || 'Something went wrong');
    throw e;
  }
};

export default request;
