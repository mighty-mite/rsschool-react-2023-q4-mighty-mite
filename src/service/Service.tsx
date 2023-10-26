class Service {
  apiBase = 'https://dummyjson.com/products/';

  getAllProducts = async () => {
    try {
      const res = await fetch(this.apiBase);
      const json = await res.json();
      return json.products;
    } catch (e) {
      throw new Error('not workin');
    }
  };
}

export default Service;
