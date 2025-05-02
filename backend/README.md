Setup/Deployment Instructions
--- 
* Download the [ecommerce-project](https://github.com/Jack-Folsom/ecommerce-project) code from my GitHub
* Follow the instructions in the [tutorial](https://www.youtube.com/watch?v=7E6um7NGmeE&ab_channel=GreatStack) to setup MongoDB and Cloudinary
* Navigate to the `.env` file in the backend folder and replace all the "example" filler text with the strings obtained from the MongoDB and Cloudinary setup process
* Open a terminal in the `frontend` folder and run `npm run dev`
* Open a terminal in the `backend` folder and run `npm run server`
* Open a terminal in the `admin` folder and run `npm run dev`

API Documentation
--- 
* `/api/product/add` adds a product to the database
* `/api/product/remove` removes a product from the database
* `/api/product/single` returns a single product's data from the database
* `/api/product/list` returns a list of all products and their data from the database
* `/api/user/register` registers a new user into the database
* `/api/user/login` checks if a user exists in the database and logs them in
* `/api/user/admin` checks if a user has admin credentials and allows them special privilages
* `/api/cart/get` returns the contents of a user's cart
* `/api/cart/add` adds a new item to a user's cart
* `/api/cart/update` updates a user's cart

Features Implemented
---
* Admin Panel to add new products and view a list of all products
* Integrated new user registration and logging in with the front end
* Integrated the frontend cart with the backend database handling

Third-Party Services/APIs Used
--- 
* `react-toastify` for pop-up notifications
* `react-router-dom` for traversing pages
* `tailwindcss` for writting css within the .jsx `<div>`'s
* `vite` for frontend support
* `Outfit` font family
* `bcrypt`, `cloudinary`, `cors`, `dotenv`, `express`, `jsonwebtoken`, `mongoose`, `multer`, & `validator` for various backend functions