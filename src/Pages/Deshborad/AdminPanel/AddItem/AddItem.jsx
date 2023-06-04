import React from 'react';
import { useForm } from 'react-hook-form';
import Title from '../../../SharedComponentsTitle/Title';


const Img_Hosting = import.meta.env.VITE_image_upload_token
console.log(Img_Hosting);

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${Img_Hosting}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(data);
                if (imgResponse.success) {
                    const image = imgResponse.data.display_url
                    // console.log(image);
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: image }
                    console.log(newItem);
                    fetch('http://localhost:5000/menus', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization:`bearer ${localStorage.getItem('access-token')}`
                        },
                        body: JSON.stringify(newItem)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        reset();
                    })

                }
            })
    };





    return (
        <div className='w-full h-full bg-slate-50'>
            <Title subHeading={"------What's new?------"} heading={'ADD AN ITEM'}></Title>

            <form onSubmit={handleSubmit(onSubmit)} className='w-10/12 mx-auto bg-white p-5'>

                <div className='flex flex-col'>
                    <label htmlFor="name" className='font-semibold text-base mb-2'>Recipe name*</label>
                    <input className='p-2 border-2 rounded' type="text" {...register("name", { required: true })} placeholder='Recipe name' />
                </div>

                <div className='flex w-full gap-3 mt-4'>
                    <div className="form-control w-full">
                        <label className='font-semibold text-base mb-2'>
                            <span className="label-text">Category*</span>
                        </label>
                        <select className="select select-bordered" {...register("category", { required: true })}>
                            <option disabled defaultValue={'Pick one'}>Pick one</option>
                            <option>DESSERTS</option>
                            <option>PIZZA</option>
                            <option>SALADS</option>
                            <option>SOUPS</option>
                            <option>drinks</option>
                        </select>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="Recipe name" className='font-semibold text-base mb-2'>Price*</label>
                        <input className='p-3 border-2 rounded-lg' type="number" {...register("price", { required: true })} placeholder='Price' />
                    </div>
                </div>

                <div className='flex flex-col mt-5'>
                    <label htmlFor="Recipe Details" className='font-semibold text-base mb-2'>Recipe Details*</label>
                    <textarea className='p-2 border-2 rounded' {...register("recipe", { required: true })} cols="30" rows="5" placeholder='Recipe Details'></textarea>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-base mt-4">Pick a file</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full" {...register("image", { required: true })} />
                </div>
                <div className='text-center'>
                    <input className='btn btn-outline mt-10' type="submit" value="Update Recipe Details" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;