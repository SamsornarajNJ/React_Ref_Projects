import { useEffect, useState } from "react";

const ProductDetails = () => {
  type productDetails = {
    id: number;
    title: string;
    price: number;
    stock: number;
    category: string;
    rating: number;
    thumbnail: string;
  };

  const [product, setProducts] = useState<productDetails[]>([]);
  const [uniq, setUniq] = useState<productDetails | null>(null);

  const fetchproduct = async (ProductId?: number) => {
    const res = await window.fetch("https://fakestoreapi.com/products"); // ✅ fix: disambiguate `fetch`
    const resdata: productDetails[] = await res.json();
    setProducts(resdata);

    if (ProductId) {
      const resuniq = await window.fetch(
        `https://fakestoreapi.com/products/${ProductId}`
      );
      const resuniqData: productDetails = await resuniq.json();
      setUniq(resuniqData);
    }
  };

  useEffect(() => {
    fetchproduct(); // ✅ fixed: uncommented so it loads once
    console.log(uniq);
  }, [uniq]);

  return (
    <>
      {product.length > 0 &&
        product.map((item) => (
          <div key={item.id}>
            <p
              style={{ cursor: "pointer" }}
              onClick={() => fetchproduct(item.id)}
            >
              {item.id} {item.category}
            </p>
          </div>
        ))}

      {uniq && (
        <div>
          <p>ID: {uniq.id}</p>
          <p>Title: {uniq.title}</p>
          <p>Price: ${uniq.price}</p>
          <p>Category: {uniq.category}</p>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
