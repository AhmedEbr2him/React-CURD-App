import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch('http://localhost:4000/products?_sort=id&_order=desc');
    const data = await response.json();

    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='container my-4 flex-grow-1'>
      <h2 className='text-center mb-4'>Products</h2>

      <div className='row mb-3'>
        <div className='col'>
          <Link to='/admin/products/create' className='btn btn-primary me-1' role='button'>
            Add new product
          </Link>
          <button href='' className='btn btn-outline-primary' onClick={() => getProducts()}>
            Refresh
          </button>
        </div>
        <div className='col'></div>
      </div>

      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => {
            const { id, name, image, price, category, brand } = product;

            return (
              <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{brand}</td>
                <td>{category}</td>
                <td>$ {price}.00</td>
                <td>
                  <img
                    src={`http://localhost:4000/images/${image}`}
                    width='80'
                    height='80'
                    alt={name}
                    className='object-fit-contain'
                  />
                </td>
                <td></td>
                <td style={{ width: '10px', whiteSpace: 'nowrap' }}>
                  <Link
                    to={`/admin/products/edit/${id}`}
                    className='btn btn-primary btn-sm me-1'
                    role='button'
                  >
                    Edit
                  </Link>
                  <button type='button' className='btn btn-danger btn-sm'>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ProductsList;
