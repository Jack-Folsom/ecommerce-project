Setup Instructions
--- 
* Download the [ecommerce-project](https://github.com/Jack-Folsom/ecommerce-project) code from my GitHub, navigate to the installation folder, and run `npm run dev`
* Or, go to the [website](https://jack-folsom.github.io/ecommerce-project/#/) directly

Description of Implemented Features
--- 
* Pages

    * Home: The homepage with sections for new products, best selling products, and all products. The all products section can be filtered, sorted, and searched. Products can be viewed in more detail when clicked on.
    * Product: Displays all product pictures, the item's name, price, description, rating, and sizes. And has an "Add to Cart" button that only works if a size has been selected.
    * Login: Allows user registration and logging in. Doesn't proceed unless all input boxes have been used. The forget password button gives a pop-up notification that and reset email has been sent.
    * UserProfile: Displays the user's login information and previous orders (although this functionality doesn't work properly yet).
    * Cart: Displays all the items the customer has added to their cart, including size and quantity. It also allows the user to change the quantity of items or remove them completely. The proceed to checkout button only works if the cart is not empty and gives an error notification otherwise. If the user is not logged in, then they are sent to the login page if they try to checkout.
    * Checkout: Has input forms for shipping address, payment method, and payment information. Doesn't allow an order to be placed if any of the input boxes are empty. Brings the user to their profile upon completion and gives an order successful notification.
* Components

    * AllProducts
    * BestSeller
    * CartTotal
    * Footer
    * Hero
    * LatestCollection
    * Navbar
    * Orders
    * OrderSummary
    * ProductItem
    * SearchBar
    * Title

Any Third-Party Libraries Used and Why
--- 
* `react-toastify` for pop-up notifications
* `react-router-dom` for traversing pages
* `tailwindcss` for writting css within the .jsx `<div>`'s
* `vite` for frontend support
* `Prata` and `Outfit` font families