export const categoryList = (req, res) => {
    fetch("https://json-server-c67opnddza-el.a.run.app/categories")
      .then((response) => response.json())
      .then((products) => res.send(products))
      .catch((err) => {
        console.log("Error fetching products: ", err);
        res.status(500).send("An error occurred while fetching products.");
      });
  };
  
  export const companyList = (req, res) => {
    fetch("https://json-server-c67opnddza-el.a.run.app/companies")
      .then((response) => response.json())
      .then((products) => res.send(products))
      .catch((err) => {
        console.log("Error fetching products: ", err);
        res.status(500).send("An error occurred while fetching products.");
      });
  };
  
  export const products = (req, res) => {
    const { top, minPrice, maxPrice, availability } = req.query;
    fetch(`https://json-server-c67opnddza-el.a.run.app/products`)
      .then((response) => response.json())
      .then((products) => {
        if (availability) {
          products = products.filter(
            (product) => product.availability === availability
          );
        }
        if (minPrice) {
          products = products.filter((product) => product.price >= minPrice);
        }
        if (maxPrice) {
          products = products.filter((product) => product.price <= maxPrice);
        }
        if (top) {
          products = products.filter((_, index) => index < top);
        }
        return products;
      })
      .then((products) => res.send(products))
      .catch((error) => {
        console.error("Error fetching products:", error);
        res.status(500).send("An error occurred while fetching products.");
      });
  };
  
  export const companyAndCategory = (req, res) => {
    const { companyName, categoryName } = req.params;
    const { top, minPrice, maxPrice, availability } = req.query;
  
    let url = `https://json-server.bytexl.app/companies/${companyName}/categories/${categoryName}/products`;
  
    if (top) {
      url += `?top=${top}`;
    }
  
    if (availability) {
      url += (url.includes("?") ? `&` : `?`) + `availability=${availability}`;
    }
  
    if (minPrice) {
      url += (url.includes("?") ? `&` : `?`) + `minPrice=${minPrice}`;
    }
  
    if (maxPrice) {
      url += (url.includes("?") ? `&` : `?`) + `maxPrice=${maxPrice}`;
    }
  
    fetch(url)
      .then((response) => response.json())
      .then((products) => res.send(products))
      .catch((err) => {
        console.error("Error fetching products:", err);
        res.status(500).send("An error occurred while fetching products.");
      });
  };
  
  export const company = (req, res) => {
    const { companyName } = req.params;
    const { top, minPrice, maxPrice, availability } = req.query;
  
    let url = `https://json-server.bytexl.app/companies/${companyName}/products`;
  
    if (top) {
      url += `?top=${top}`;
    }
  
    if (availability) {
      url += (url.includes("?") ? `&` : `?`) + `availability=${availability}`;
    }
  
    if (minPrice) {
      url += (url.includes("?") ? `&` : `?`) + `minPrice=${minPrice}`;
    }
  
    if (maxPrice) {
      url += (url.includes("?") ? `&` : `?`) + `maxPrice=${maxPrice}`;
    }
  
    fetch(url)
      .then((response) => response.json())
      .then((products) => res.send(products))
      .catch((err) => {
        console.error("Error fetching products:", err);
        res.status(500).send("An error occurred while fetching products.");
      });
  };
  
  export const category = (req, res) => {
    const { categoryName } = req.params;
    const { top, minPrice, maxPrice, availability } = req.query;
  
    let url = `https://json-server.bytexl.app/categories/${categoryName}/products`;
    console.log(top);
    if (top) {
      url += `?top=${top}`;
    }
  
    if (availability) {
      url += (url.includes("?") ? `&` : `?`) + `availability=${availability}`;
    }
  
    if (minPrice) {
      url += (url.includes("?") ? `&` : `?`) + `minPrice=${minPrice}`;
    }
  
    if (maxPrice) {
      url += (url.includes("?") ? `&` : `?`) + `maxPrice=${maxPrice}`;
    }
  
    fetch(url)
      .then((response) => response.json())
      .then((products) => res.send(products))
      .catch((err) => {
        console.error("Error fetching products:", err);
        res.status(500).send("An error occurred while fetching products.");
      });
  };
  