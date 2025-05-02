import React, { use, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

    const [image1,setImage1] = useState(false)
    const [image2,setImage2] = useState(false)
    const [image3,setImage3] = useState(false)
    const [image4,setImage4] = useState(false)

    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("Persian");
    const [subCategory,setSubCategory] = useState("Plush");
    const [bestseller,setBestseller] = useState(false);
    const [sizes,setSizes] = useState([]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            
            const formData = new FormData()

            formData.append("name",name)
            formData.append("description",description)
            formData.append("price",price)
            formData.append("category",category)
            formData.append("subCategory",subCategory)
            formData.append("bestseller",bestseller)
            formData.append("sizes",JSON.stringify(sizes))

            image1 && formData.append("image1",image1)
            image2 && formData.append("image2",image2)
            image3 && formData.append("image3",image3)
            image4 && formData.append("image4",image4)

            const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})

            if (response.data.success) {
                toast.success(response.data.message)
                setName('')
                setDescription('')
                setImage1(false)
                setImage2(false)
                setImage3(false)
                setImage4(false)
                setPrice('')
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Upload Image</p>
        
        <div className='flex gap-2'>
            <label htmlFor="image1">
                <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
                <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden/>
            </label>
            <label htmlFor="image2">
                <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
                <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden/>
            </label>
            <label htmlFor="image3">
                <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
                <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden/>
            </label>
            <label htmlFor="image4">
                <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
                <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden/>
            </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type Here' required />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write Content Here' required />
      </div>

      <div className='flex flex-col sm: flex-row gap-2 w-full sm:gap-8'>

        <div>
            <p className='mb-2'>Design</p>
            <select onChange={(e)=>setCategory(e.target.value)} className='w-full px-3 py-2'>
                <option value="Persian">Persian</option>
                <option value="Geometric">Geometric</option>
                <option value="Solid">Solid</option>
            </select>
        </div>

        <div>
            <p className='mb-2'>Texture</p>
            <select onChange={(e)=>setSubCategory(e.target.value)} className='w-full px-3 py-2'>
                <option value="Plush">Plush</option>
                <option value="Velvet">Velvet</option>
                <option value="Shaggy">Shaggy</option>
            </select>
        </div>

        <div>
            <p className='mb-2'>Product Price</p>
            <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='$100.00' />
        </div>

      </div>

      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
            <div onClick={()=>setSizes(prev => prev.includes("2x3") ? prev.filter( item => item !== "2x3") : [...prev,"2x3"])} >
                <p className={`${sizes.includes("2x3") ? "bg-orange-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>2x3</p>
            </div>

            <div onClick={()=>setSizes(prev => prev.includes("4x6") ? prev.filter( item => item !== "4x6") : [...prev,"4x6"])}>
                <p className={`${sizes.includes("4x6") ? "bg-orange-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>4x6</p>
            </div>

            <div onClick={()=>setSizes(prev => prev.includes("8x12") ? prev.filter( item => item !== "8x12") : [...prev,"8x12"])}>
                <p className={`${sizes.includes("8x12") ? "bg-orange-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>8x12</p>
            </div>
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={()=>setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id="bestseller" />
        <label className='cursor-pointer' htmlFor="bestseller">Add to Bestsellers</label>
      </div>

      <button type="submit" className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>

    </form>
  )
}

export default Add