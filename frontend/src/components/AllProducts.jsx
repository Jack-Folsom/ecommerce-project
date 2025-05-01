import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import { assets } from '../assets/assets';

const AllProducts = () => {

    const { products, search, showSearch } = useContext(ShopContext);
    const [filterProducts,setFilterProducts] = useState([]);
    const [showFilter,setShowFilter] = useState(false);
    const [category,setCategory] = useState([]);
    const [subCategory,setSubCategory] = useState([]);
    const [sortType,setSortType] = useState('relevance');

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else {
            setCategory(prev => [...prev,e.target.value])
        }
    }

    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else {
            setSubCategory(prev => [...prev,e.target.value])
        }
    }

    const applyFilter = () => {
        let productsCopy = products.slice();
        
        if (showSearch && search) {
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }
        
        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }
        
        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
        }

        setFilterProducts(productsCopy)
    }

    const sortProduct = () => {
        let fpCopy = filterProducts.slice()

        switch (sortType) {
            case 'low-high':
                setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
                break;
            
            case 'high-low':
                setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
                break;
            
            default:
                applyFilter();
                break;
        }
    }

    useEffect(()=>{
        applyFilter();
    },[category,subCategory,search,showSearch])

    useEffect(()=>{
        sortProduct();
    },[sortType])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'ALL'} text2={'RUGS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Browse our entire catalog of rug designs with all the patterns, colors, and textures you can imagine.
            </p>
        </div>

        {/* filter options */}
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

            <div className='min-w-60'>
                <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
                    <img className={`h-3 sm:hidden ${showFilter ? '' : 'rotate-270'}`} src={assets.dropdown_icon} alt="" />
                </p>
                {/* catagory filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>DESIGN</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Persian'} onChange={toggleCategory} /> Persian
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Geometric'} onChange={toggleCategory} /> Geometric
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Solid'} onChange={toggleCategory} /> Solid
                        </p>
                    </div>
                </div>
                {/* subcatagory filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>TEXTURE</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Plush'} onChange={toggleSubCategory} /> Plush
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Velvet'} onChange={toggleSubCategory} /> Velvet
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Shaggy'} onChange={toggleSubCategory} /> Shaggy
                        </p>
                    </div>
                </div>
            </div>

            {/* rendering products */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    {/* product sort */}
                    <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                        <option value="relevance">Sort By: Relevance</option>
                        <option value="low-high">Sort By: Low to High</option>
                        <option value="high-low">Sort By: High to Low</option>
                    </select>
                </div>
                {/* map products */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    filterProducts.map((item,index)=>(
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllProducts
