// src/ShoppingCart.js
import React, { useState } from 'react';
import StarRating from './starrating'; 
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ShoppingCart = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('name'); // Default sort option
  const [selectedCategory, setSelectedCategory] = useState('all'); // Default category filter
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Miss Cloth', price: 499, image: 'd1.webp', quantity: 1, rating: 0, category: 'dress' },
    { id: 2, name: 'Nikahat', price: 599, image: 'd2.webp', quantity: 1, rating: 0, category: 'dress' },
    { id: 3, name: 'Murli', price: 459, image: 'd3.webp', quantity: 1, rating: 0, category: 'dress'  },
    { id: 4, name: 'Misscloth ', price: 479, image: 'd4.webp', quantity: 1, rating: 0, category: 'dress'  },
    { id: 5, name: 'Sefi', price: 389, image: 'd5.webp', quantity: 1, rating: 0, category: 'dress'  },
    { id: 6, name: 'Femy', price: 359, image: 'd6.webp', quantity: 1, rating: 0, category: 'dress'  },
    { id: 7, name: 'Meldi', price: 490, image: 'd7.webp', quantity: 1, rating: 0, category: 'dress'  },
    { id: 8, name: 'Maanaka', price: 495, image: 'd8.webp', quantity: 1, rating: 0, category: 'dress'  },
    { id: 9, name: 'Kuber', price: 501, image: 'd9.webp', quantity: 1, rating: 0, category: 'dress'  },
    { id: 10, name: 'Fashioanl', price: 559, image: 'd10.webp', quantity: 1, rating: 0, category: 'dress'  },
    { id: 11, name: 'Jiyansh', price: '2,040', image: 'd11.webp', quantity: 1, rating: 0, category: 'dress'  },
    { id: 12, name: 'Vikatab', price:'1,040', image: 'd12.webp', quantity: 1, rating: 0, category: 'dress'  }, 

    { id: 13, name: 'Flipzon', price: '1,049', image: 'f1.webp', quantity: 1, rating: 0, category: 'furniture' },
    { id: 14, name: 'Attache PP', price: 359, image: 'f2.webp', quantity: 1, rating: 0, category: 'furniture' },
    { id: 15, name: 'Attache Carbon', price: '2,879', image: 'f3.webp', quantity: 1, rating: 0, category: 'furniture' },
    { id: 16, name: 'Hemoviya', price: 849, image: 'f4.webp', quantity: 1, rating: 0, category: 'furniture' },
    { id: 17, name: 'Dewberries', price: 469, image: 'f5.webp', quantity: 1, rating: 0, category: 'furniture' },
    { id: 18, name: 'Carbon Steel', price: 347, image: 'f6.webp', quantity: 1, rating: 0, category: 'furniture' },
    { id: 19, name: 'Wood 2 Door', price: '7,699', image: 'f7.webp', quantity: 1, rating: 0, category: 'furniture' },
    { id: 20, name: 'Owme PC', price: '2,502', image: 'f8.webp', quantity: 1, rating: 0, category: 'furniture' },

    { id: 21, name: 'BrucharmZ ', price: '1,002', image: 'z1.webp', quantity: 1, rating: 0, category: 'Shoes' },
    { id: 22, name: 'Lejano Hight', price: 598, image: 'z2.webp', quantity: 1, rating: 0, category: 'Shoes' },
    { id: 23, name: 'Creer casuals', price: 578, image: 'z3.webp', quantity: 1, rating: 0, category: 'Shoes' },
    { id: 24, name: 'Brucharm', price: 839, image: 'z4.webp', quantity: 1, rating: 0, category: 'Shoes' },
    { id: 25, name: 'Bakooney', price: 678, image: 'z5.webp', quantity: 1, rating: 0, category: 'Shoes' },
    { id: 26, name: 'Zsyto Sneaker', price: 699, image: 'z6.webp', quantity: 1, rating: 0, category: 'Shoes' },
    { id: 27, name: 'Creer canvas', price: '2,789', image: 'z7.webp', quantity: 1, rating: 0, category: 'Shoes' },
    { id: 28, name: 'NEW High', price: 487, image: 'z8.webp', quantity: 1, rating: 0, category: 'Shoes' },
  // Other items
  ]);

  // Filter items based on search term and selected category
  const filteredItems = cartItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || item.category === selectedCategory)
  );

  // Sort items based on selected sort option
  const sortedItems = filteredItems.sort((a, b) => {
    switch (sortOption) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating-asc':
        return a.rating - b.rating;
      case 'rating-desc':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  // Handle rating change
  const handleRatingChange = (id, newRating) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, rating: newRating } : item
      )
    );
  };

  // Handle quantity change
  const handleQuantityChange = (id, delta) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Get unique categories for dropdown
  const categories = Array.from(new Set(cartItems.map(item => item.category)));
  categories.unshift('all'); // Add 'all' option

  const notify = () => toast("Cart Add!");
  return (
    <>
      <div className="home">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="filter-select"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="sort-select"
        >
          <option value="name">Sort by Name</option>
          <option value="price-asc">Sort by Price (Low to High)</option>
          <option value="price-desc">Sort by Price (High to Low)</option>
          {/* <option value="rating-asc">Sort by Rating (Low to High)</option>
          <option value="rating-desc">Sort by Rating (High to Low)</option> */}
        </select>
      </div>
      <div className="shopping-cart home">
        {sortedItems.map(item => (
          <div key={item.id} className="item">
            <img src={require(`../assets/${item.image}`)} alt={item.name} className="item-image" />
            <h3 className="item-name">{item.name}</h3>
            <p className="item-price">Price: ₹{item.price}</p>
            <StarRating rating={item.rating} onRate={(newRating) => handleRatingChange(item.id, newRating)} />
            <div className="quantity-control">
              <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
            </div>
            <div className='b1'>
              <button onClick={notify}>Add to cart</button>
              <ToastContainer />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShoppingCart;
