import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { ReactComponent as IconSeeMore } from '../../../assets/icons/seeMore.svg';
import { ReactComponent as IconShare } from '../../../assets/icons/share.svg';
import { ReactComponent as IconRightArrow } from '../../../assets/icons/rightArrow.svg';
import { ReactComponent as IconEdit } from '../../../assets/icons/editModeboard.svg';
import { ReactComponent as IconDollar } from '../../../assets/icons/dolar.svg';
import SelectComponent from '../../common/SelectComponent';
import GreetingSlider from './GreetingSlider';
import Http from '../../services/Http';
import { authUserInfo } from '../../services/Util';
import FirstSharedCollection from './FirstSharedCollection';
import ImageViewCollections from './ImageViewCollections';
import CardForCollection from '../../common/CardForCollection';
import LoaderComponent from '../../common/LoaderComponent';
import OurOffer from './OurOffer';
import SliderWrapper from '../../common/SliderWrapper';
import { ReactComponent as Favourite } from '../../../assets/images/favourite.svg';
import slide1 from '../../../assets/images/home/slide1.png';
import slide from '../../../assets/images/home/slide.png';

const fabricOptions = [
    { label: 'Premium Fabric Base', value: 'PREMIUM' },
    { label: 'Seasonal Fabric Base', value: 'SEASONAL' },
    { label: 'Core Fabric Base', value: 'CORE' }
]

const Dashboard = () => {
    const [loader, setLoader] = useState(true)
    const [collections, setCollections] = useState([])
    const [materials, setMaterials] = useState([])
    const [selectedFabric, setSelectedFabric] = useState({ label: 'Premium Fabric Base', value: 'PREMIUM' })

    useEffect(() => {
        setLoader(true)
        Http.GET_WITH_ID_PARAM('fetchProductByFabric', '?sort=id,desc&size=100', selectedFabric.value).then(({ data }) => {
            setMaterials(data.data)
            setLoader(false)
        }).catch((error) => {
            setLoader(false)
            toast.error(error.response.data.message)
        })
    }, [selectedFabric])

    useEffect(() => {
        Http.GET_WITH_ID_PARAM('searchCollectionByUser', '?memberType=SHARED&size=6&sort=id,desc', authUserInfo().id).then(({ data }) => {
            setLoader(false)
            setCollections(data.data)
        }).catch(({ response }) => {
            toast.error(response.data.message)
            setLoader(false)
        })
    }, [])

    const renderFirstCollection = () => {
        if (collections.length > 0) {
            return (
                <FirstSharedCollection collection={collections[0]}/>
            )
        } else {
            return (
                <div className='xl:w-[70%] 4xl:w-4/5'>
                    <div className='flex items-center justify-center h-full py-10'>
                        <div className='max-w-[582px] text-center relative'>
                            <img src='/images/leef-new.png'
                                 className='absolute left-0 sm:left-[-74px] top-0 z-10 hidden sm:block' alt=''/>
                            <h1 className='text-4xl sm:text-5xl text-primaryColor font-bold  mb-4'>We are
                                designing <br/> for you</h1>
                            <p className='max-w-[398px] text-base text-primaryColor m-0'>We are designing something
                                interisting for you. We will revolutionize together.</p>
                            <img src='/images/leef-new-reflect.png'
                                 className='absolute right-0 sm:right-[-74px] top-0 z-10 hidden sm:block' alt=''/>
                        </div>
                    </div>
                </div>
            )
        }
    }

    const handleFabricChange = (option) => {
        setSelectedFabric(option)
    }

    const renderSliderContent = () => {
        if (materials.length > 0) {
            return materials.map(item => {
                return (
                    <div key={`materials_${item.id}`}>
                        <div className='bg-white p-3 m-3 relative'>
                            <div className='flex flex-wrap gap-5'>
                                <div className='favourite'>
                                        <span className='mt-2'>
                                            <Favourite />
                                        </span>
                                </div>
                            </div>
                            <img src={slide} alt=''/>
                            <div className='flex items-center py-4 pb-3 uppercase'>
                                <span>Knit</span>
                                <span className='dot'></span>
                                <span>Organic</span>
                                <span className='dot'></span>
                                <span>16-2121</span>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <LoaderComponent loading={loader}>
            <div className='banner-section flex flex-col xl:flex-row gap-4'>
                <GreetingSlider/>
                {renderFirstCollection()}
            </div>
            <ImageViewCollections collections={collections.slice(1, 3)}/>
            <CardForCollection collections={collections.slice(3)}/>

            <div className='flex items-center justify-center pt-5 sm:pt-10 pb-12 sm:pb-20'>
                <button className='flex items-center text-xl text-primaryColor'>
                    <span className='mr-4'>See More</span>
                    <span>
                         <IconSeeMore/>
                    </span>
                </button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 mb-12 sm:mb-20'>
                <div data-bs-toggle='modal' data-bs-target='#BriefCollection'
                     className='flex items-center p-6 lg:p-10 py-12 bg-pink overflow-hidden cursor-pointer'>
                    <div className='flex items-center justify-between w-full relative circle-bg circle-bg2'>
                        <div>
                            <h4 className='text-px28 text-white-shade-100 uppercase mb-4 leading-8'>Brief
                                a <strong>Collection</strong></h4>
                            <span className='flex items-center text-xl font-light text-white-shade-100 cursor-pointer'>
                                <span className='lg:mr-4'>By sharing your Inspirations</span>
                                    <span>
                                        <IconRightArrow/>
                                    </span>
                            </span>
                        </div>
                        <div className='share cursor-pointer z-10'>
                            <IconShare/>
                        </div>
                    </div>
                </div>
                <div className='flex items-center p-6 lg:p-10 py-12 bg-blue overflow-hidden'>
                    <div className='flex items-center justify-between w-full relative circle-bg circle-bg2'>
                        <div>
                            <h4 className='text-px28 text-white-shade-100 uppercase mb-4 leading-8'>Share <strong>Moodboard</strong>
                            </h4>
                            <span className='flex items-center text-xl font-light text-white-shade-100 cursor-pointer'>
                                <span className='lg:mr-4'>& collaborate with our designers</span>
                                <span>
                                    <IconRightArrow/>
                                </span>
                            </span>
                        </div>
                        <div className='share cursor-pointer z-10'>
                            <IconEdit/>
                        </div>
                    </div>
                </div>
                <div className='flex items-center p-6 lg:p-10 py-12 bg-primaryColor overflow-hidden'>
                    <div className='flex items-center justify-between w-full relative circle-bg circle-bg2'>
                        <div>
                            <h4 className='text-px28 text-white-shade-100 uppercase mb-4 leading-8'>Get <strong>Quotation</strong>
                            </h4>
                            <span className='flex items-center text-xl font-light text-white-shade-100 cursor-pointer'>
                                <span className='lg:mr-4'>by uploading Techpacks</span>
                                    <span>
                                        <IconRightArrow/>
                                    </span>
                            </span>
                        </div>
                        <div className='share cursor-pointer z-10'>
                            <IconDollar/>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='max-w-[434px] mb-8'>
                    <div className='input-group'>
                        <SelectComponent
                            options={fabricOptions}
                            onChange={handleFabricChange}
                            selectedItem={selectedFabric}
                        />
                    </div>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row justify-between mb-12 gap-6'>
                <p className='text-base text-primaryColor sm:max-w-[50%]'>Specially designed for you that introduces a
                    unique combination of <strong>luxury</strong> and <strong>tredition</strong>. The feel and the
                    experience of the collections are top-notch.</p>
                <div className='sm:max-w-[40%]'>
                    <div className='flex flex-wrap justify-end gap-3'>
                        <span
                            className='text-base uppercase text-primaryColor px-4 rounded-full border border-primaryColor inline-block'>Aesthetic</span>
                        <span
                            className='text-base uppercase text-primaryColor px-4 rounded-full border border-primaryColor inline-block'>Summer</span>
                        <span
                            className='text-base uppercase text-primaryColor px-4 rounded-full border border-primaryColor inline-block'>Vintage</span>
                        <span
                            className='text-base uppercase text-primaryColor px-4 rounded-full border border-primaryColor inline-block'>SS 2022</span>
                        <span
                            className='text-base uppercase text-primaryColor px-4 rounded-full border border-primaryColor inline-block'>Aesthetic</span>
                        <span
                            className='text-base uppercase text-primaryColor px-4 rounded-full border border-primaryColor inline-block'>Summer</span>
                        <span
                            className='text-base uppercase text-primaryColor px-4 rounded-full border border-primaryColor inline-block'>Vintage</span>
                        <span
                            className='text-base uppercase text-primaryColor px-4 rounded-full border border-primaryColor inline-block'>SS 2022</span>
                    </div>
                </div>
            </div>

            <div className='kint-carasoul overflow-hidden mb-6'>
                <SliderWrapper>
                    {renderSliderContent()}
                </SliderWrapper>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 tab:grid-cols-3 xl:!grid-cols-4 gap-5'>
                <div className='collection-box'>
                    <div className='overflow-hidden relative h-[300px] sm:h-[330px] 5xl:h-[456px] p-4 bg-white'>
                        <div className='h-full'>
                            <img className='w-full h-full object-cover' src='/images/products/3.jpg'/>
                        </div>
                        <div
                            className='w-[40px] h-[40px] bg-white border border-white-shade-100 flex justify-center items-center absolute right-[20px] top-[20px] cursor-pointer'>
                                    <span className='mt-2'>
                                        <svg width='38' height='36' viewBox='0 0 38 36' fill='none'
                                             xmlns='http://www.w3.org/2000/svg'>
                                            <g filter='url(#filter0_d_944_19802)'>
                                            <path
                                                d='M18.4415 22.7608L10.5723 14.5663C8.35573 12.2582 8.49531 8.4736 10.8753 6.34929C13.2364 4.24181 16.8165 4.65105 18.6824 7.24171L18.9961 7.67724L19.3098 7.24171C21.1757 4.65105 24.7557 4.24181 27.1169 6.34929C29.4969 8.4736 29.6365 12.2582 27.4199 14.5663L19.5507 22.7608C19.2444 23.0797 18.7478 23.0797 18.4415 22.7608Z'
                                                fill='#DA336F'/>
                                            <path
                                                d='M18.4415 22.7608L10.5723 14.5663C8.35573 12.2582 8.49531 8.4736 10.8753 6.34929C13.2364 4.24181 16.8165 4.65105 18.6824 7.24171L18.9961 7.67724L19.3098 7.24171C21.1757 4.65105 24.7557 4.24181 27.1169 6.34929C29.4969 8.4736 29.6365 12.2582 27.4199 14.5663L19.5507 22.7608C19.2444 23.0797 18.7478 23.0797 18.4415 22.7608Z'
                                                stroke='#F5F5F5' strokeLinecap='round' strokeLinejoin='round'/>
                                            </g>
                                            <defs>
                                            <filter id='filter0_d_944_19802' x='0.496094' y='0.5' width='37' height='35'
                                                    filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                                            <feFlood floodOpacity='0' result='BackgroundImageFix'/>
                                            <feColorMatrix in='SourceAlpha' type='matrix'
                                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                                           result='hardAlpha'/>
                                            <feOffset dy='4'/>
                                            <feGaussianBlur stdDeviation='4'/>
                                            <feComposite in2='hardAlpha' operator='out'/>
                                            <feColorMatrix type='matrix'
                                                           values='0 0 0 0 0.854167 0 0 0 0 0.199306 0 0 0 0 0.435056 0 0 0 0.2 0'/>
                                            <feBlend mode='normal' in2='BackgroundImageFix'
                                                     result='effect1_dropShadow_944_19802'/>
                                            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_944_19802'
                                                     result='shape'/>
                                            </filter>
                                            </defs>
                                        </svg>
                                    </span>
                        </div>
                    </div>
                    <div className='py-4'>
                        <h4 className='text-xl font-bold text-primaryColor mb-3'>Cotton elastane boat neck</h4>
                        <div className='flex  items-center gap-6 text-base text-primaryColor-shade-100 cursor-pointer'>
                            <span>View Collection</span>
                            <span>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M21 12L14 19M3 12H21H3ZM21 12L14 5L21 12Z' stroke='#646464'
                                          strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
                                    </svg>
                                </span>
                        </div>
                    </div>
                </div>
                <div className='collection-box'>
                    <div className='overflow-hidden relative h-[300px] sm:h-[330px] 5xl:h-[456px] p-4 bg-white'>
                        <div className='h-full'>
                            <img className='w-full h-full object-cover' src='/images/products/pant.png'/>
                        </div>
                        <div
                            className='w-[40px] h-[40px] bg-white border border-white-shade-100 flex justify-center items-center absolute right-[20px] top-[20px] cursor-pointer'>
                                    <span className='mt-2'>
                                        <svg width='38' height='36' viewBox='0 0 38 36' fill='none'
                                             xmlns='http://www.w3.org/2000/svg'>
                                            <g filter='url(#filter0_d_944_19802)'>
                                            <path
                                                d='M18.4415 22.7608L10.5723 14.5663C8.35573 12.2582 8.49531 8.4736 10.8753 6.34929C13.2364 4.24181 16.8165 4.65105 18.6824 7.24171L18.9961 7.67724L19.3098 7.24171C21.1757 4.65105 24.7557 4.24181 27.1169 6.34929C29.4969 8.4736 29.6365 12.2582 27.4199 14.5663L19.5507 22.7608C19.2444 23.0797 18.7478 23.0797 18.4415 22.7608Z'
                                                fill='#DA336F'/>
                                            <path
                                                d='M18.4415 22.7608L10.5723 14.5663C8.35573 12.2582 8.49531 8.4736 10.8753 6.34929C13.2364 4.24181 16.8165 4.65105 18.6824 7.24171L18.9961 7.67724L19.3098 7.24171C21.1757 4.65105 24.7557 4.24181 27.1169 6.34929C29.4969 8.4736 29.6365 12.2582 27.4199 14.5663L19.5507 22.7608C19.2444 23.0797 18.7478 23.0797 18.4415 22.7608Z'
                                                stroke='#F5F5F5' strokeLinecap='round' strokeLinejoin='round'/>
                                            </g>
                                            <defs>
                                            <filter id='filter0_d_944_19802' x='0.496094' y='0.5' width='37' height='35'
                                                    filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                                            <feFlood floodOpacity='0' result='BackgroundImageFix'/>
                                            <feColorMatrix in='SourceAlpha' type='matrix'
                                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                                           result='hardAlpha'/>
                                            <feOffset dy='4'/>
                                            <feGaussianBlur stdDeviation='4'/>
                                            <feComposite in2='hardAlpha' operator='out'/>
                                            <feColorMatrix type='matrix'
                                                           values='0 0 0 0 0.854167 0 0 0 0 0.199306 0 0 0 0 0.435056 0 0 0 0.2 0'/>
                                            <feBlend mode='normal' in2='BackgroundImageFix'
                                                     result='effect1_dropShadow_944_19802'/>
                                            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_944_19802'
                                                     result='shape'/>
                                            </filter>
                                            </defs>
                                        </svg>
                                    </span>
                        </div>
                    </div>
                    <div className='py-4'>
                        <h4 className='text-xl font-bold text-primaryColor mb-3'>Cotton elastane boat neck</h4>
                        <div className='flex  items-center gap-6 text-base text-primaryColor-shade-100 cursor-pointer'>
                            <span>View Collection</span>
                            <span>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M21 12L14 19M3 12H21H3ZM21 12L14 5L21 12Z' stroke='#646464'
                                          strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
                                    </svg>
                                </span>
                        </div>
                    </div>
                </div>
                <div className='collection-box'>
                    <div className='overflow-hidden relative h-[300px] sm:h-[330px] 5xl:h-[456px] p-4 bg-white'>
                        <div className='h-full'>
                            <img className='w-full h-full object-cover' src='/images/products/pant2.png'/>
                        </div>
                        <div
                            className='w-[40px] h-[40px] bg-white border border-white-shade-100 flex justify-center items-center absolute right-[20px] top-[20px] cursor-pointer'>
                                    <span className='mt-2'>
                                        <svg width='38' height='36' viewBox='0 0 38 36' fill='none'
                                             xmlns='http://www.w3.org/2000/svg'>
                                            <g filter='url(#filter0_d_944_19802)'>
                                            <path
                                                d='M18.4415 22.7608L10.5723 14.5663C8.35573 12.2582 8.49531 8.4736 10.8753 6.34929C13.2364 4.24181 16.8165 4.65105 18.6824 7.24171L18.9961 7.67724L19.3098 7.24171C21.1757 4.65105 24.7557 4.24181 27.1169 6.34929C29.4969 8.4736 29.6365 12.2582 27.4199 14.5663L19.5507 22.7608C19.2444 23.0797 18.7478 23.0797 18.4415 22.7608Z'
                                                fill='#DA336F'/>
                                            <path
                                                d='M18.4415 22.7608L10.5723 14.5663C8.35573 12.2582 8.49531 8.4736 10.8753 6.34929C13.2364 4.24181 16.8165 4.65105 18.6824 7.24171L18.9961 7.67724L19.3098 7.24171C21.1757 4.65105 24.7557 4.24181 27.1169 6.34929C29.4969 8.4736 29.6365 12.2582 27.4199 14.5663L19.5507 22.7608C19.2444 23.0797 18.7478 23.0797 18.4415 22.7608Z'
                                                stroke='#F5F5F5' strokeLinecap='round' strokeLinejoin='round'/>
                                            </g>
                                            <defs>
                                            <filter id='filter0_d_944_19802' x='0.496094' y='0.5' width='37' height='35'
                                                    filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                                            <feFlood floodOpacity='0' result='BackgroundImageFix'/>
                                            <feColorMatrix in='SourceAlpha' type='matrix'
                                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                                           result='hardAlpha'/>
                                            <feOffset dy='4'/>
                                            <feGaussianBlur stdDeviation='4'/>
                                            <feComposite in2='hardAlpha' operator='out'/>
                                            <feColorMatrix type='matrix'
                                                           values='0 0 0 0 0.854167 0 0 0 0 0.199306 0 0 0 0 0.435056 0 0 0 0.2 0'/>
                                            <feBlend mode='normal' in2='BackgroundImageFix'
                                                     result='effect1_dropShadow_944_19802'/>
                                            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_944_19802'
                                                     result='shape'/>
                                            </filter>
                                            </defs>
                                        </svg>
                                    </span>
                        </div>
                    </div>
                    <div className='py-4'>
                        <h4 className='text-xl font-bold text-primaryColor mb-3'>Cotton elastane boat neck</h4>
                        <div className='flex  items-center gap-6 text-base text-primaryColor-shade-100 cursor-pointer'>
                            <span>View Collection</span>
                            <span>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M21 12L14 19M3 12H21H3ZM21 12L14 5L21 12Z' stroke='#646464'
                                          strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
                                    </svg>
                                </span>
                        </div>
                    </div>
                </div>
                <div className='collection-box'>
                    <div className='overflow-hidden relative h-[300px] sm:h-[330px] 5xl:h-[456px] p-4 bg-white'>
                        <div className='h-full'>
                            <img className='w-full h-full object-cover' src='/images/products/3.jpg'/>
                        </div>
                        <div
                            className='w-[40px] h-[40px] bg-white border border-white-shade-100 flex justify-center items-center absolute right-[20px] top-[20px] cursor-pointer'>
                                    <span className='mt-2'>
                                        <svg width='38' height='36' viewBox='0 0 38 36' fill='none'
                                             xmlns='http://www.w3.org/2000/svg'>
                                            <g filter='url(#filter0_d_944_19802)'>
                                            <path
                                                d='M18.4415 22.7608L10.5723 14.5663C8.35573 12.2582 8.49531 8.4736 10.8753 6.34929C13.2364 4.24181 16.8165 4.65105 18.6824 7.24171L18.9961 7.67724L19.3098 7.24171C21.1757 4.65105 24.7557 4.24181 27.1169 6.34929C29.4969 8.4736 29.6365 12.2582 27.4199 14.5663L19.5507 22.7608C19.2444 23.0797 18.7478 23.0797 18.4415 22.7608Z'
                                                fill='#DA336F'/>
                                            <path
                                                d='M18.4415 22.7608L10.5723 14.5663C8.35573 12.2582 8.49531 8.4736 10.8753 6.34929C13.2364 4.24181 16.8165 4.65105 18.6824 7.24171L18.9961 7.67724L19.3098 7.24171C21.1757 4.65105 24.7557 4.24181 27.1169 6.34929C29.4969 8.4736 29.6365 12.2582 27.4199 14.5663L19.5507 22.7608C19.2444 23.0797 18.7478 23.0797 18.4415 22.7608Z'
                                                stroke='#F5F5F5' strokeLinecap='round' strokeLinejoin='round'/>
                                            </g>
                                            <defs>
                                            <filter id='filter0_d_944_19802' x='0.496094' y='0.5' width='37' height='35'
                                                    filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                                            <feFlood floodOpacity='0' result='BackgroundImageFix'/>
                                            <feColorMatrix in='SourceAlpha' type='matrix'
                                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                                           result='hardAlpha'/>
                                            <feOffset dy='4'/>
                                            <feGaussianBlur stdDeviation='4'/>
                                            <feComposite in2='hardAlpha' operator='out'/>
                                            <feColorMatrix type='matrix'
                                                           values='0 0 0 0 0.854167 0 0 0 0 0.199306 0 0 0 0 0.435056 0 0 0 0.2 0'/>
                                            <feBlend mode='normal' in2='BackgroundImageFix'
                                                     result='effect1_dropShadow_944_19802'/>
                                            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_944_19802'
                                                     result='shape'/>
                                            </filter>
                                            </defs>
                                        </svg>
                                    </span>
                        </div>
                    </div>
                    <div className='py-4'>
                        <h4 className='text-xl font-bold text-primaryColor mb-3'>Cotton elastane boat neck</h4>
                        <div className='flex  items-center gap-6 text-base text-primaryColor-shade-100 cursor-pointer'>
                            <span>View Collection</span>
                            <span>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M21 12L14 19M3 12H21H3ZM21 12L14 5L21 12Z' stroke='#646464'
                                          strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
                                    </svg>
                                </span>
                        </div>
                    </div>
                </div>
                <div className='collection-box'>
                    <div className='overflow-hidden relative h-[300px] sm:h-[330px] 5xl:h-[456px] p-4 bg-white'>
                        <div className='h-full'>
                            <img className='w-full h-full object-cover' src='/images/products/pant.png'/>
                        </div>
                        <div
                            className='w-[40px] h-[40px] bg-white border border-white-shade-100 flex justify-center items-center absolute right-[20px] top-[20px] cursor-pointer'>
                                    <span className='mt-2'>
                                        <svg width='38' height='36' viewBox='0 0 38 36' fill='none'
                                             xmlns='http://www.w3.org/2000/svg'>
                                            <g filter='url(#filter0_d_944_19802)'>
                                            <path
                                                d='M18.4415 22.7608L10.5723 14.5663C8.35573 12.2582 8.49531 8.4736 10.8753 6.34929C13.2364 4.24181 16.8165 4.65105 18.6824 7.24171L18.9961 7.67724L19.3098 7.24171C21.1757 4.65105 24.7557 4.24181 27.1169 6.34929C29.4969 8.4736 29.6365 12.2582 27.4199 14.5663L19.5507 22.7608C19.2444 23.0797 18.7478 23.0797 18.4415 22.7608Z'
                                                fill='#DA336F'/>
                                            <path
                                                d='M18.4415 22.7608L10.5723 14.5663C8.35573 12.2582 8.49531 8.4736 10.8753 6.34929C13.2364 4.24181 16.8165 4.65105 18.6824 7.24171L18.9961 7.67724L19.3098 7.24171C21.1757 4.65105 24.7557 4.24181 27.1169 6.34929C29.4969 8.4736 29.6365 12.2582 27.4199 14.5663L19.5507 22.7608C19.2444 23.0797 18.7478 23.0797 18.4415 22.7608Z'
                                                stroke='#F5F5F5' strokeLinecap='round' strokeLinejoin='round'/>
                                            </g>
                                            <defs>
                                            <filter id='filter0_d_944_19802' x='0.496094' y='0.5' width='37' height='35'
                                                    filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                                            <feFlood floodOpacity='0' result='BackgroundImageFix'/>
                                            <feColorMatrix in='SourceAlpha' type='matrix'
                                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                                           result='hardAlpha'/>
                                            <feOffset dy='4'/>
                                            <feGaussianBlur stdDeviation='4'/>
                                            <feComposite in2='hardAlpha' operator='out'/>
                                            <feColorMatrix type='matrix'
                                                           values='0 0 0 0 0.854167 0 0 0 0 0.199306 0 0 0 0 0.435056 0 0 0 0.2 0'/>
                                            <feBlend mode='normal' in2='BackgroundImageFix'
                                                     result='effect1_dropShadow_944_19802'/>
                                            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_944_19802'
                                                     result='shape'/>
                                            </filter>
                                            </defs>
                                        </svg>
                                    </span>
                        </div>
                    </div>
                    <div className='py-4'>
                        <h4 className='text-xl font-bold text-primaryColor mb-3'>Cotton elastane boat neck</h4>
                        <div className='flex  items-center gap-6 text-base text-primaryColor-shade-100 cursor-pointer'>
                            <span>View Collection</span>
                            <span>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M21 12L14 19M3 12H21H3ZM21 12L14 5L21 12Z' stroke='#646464'
                                          strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
                                    </svg>
                                </span>
                        </div>
                    </div>
                </div>
                <div className='collection-box'>
                    <div className='overflow-hidden relative h-[300px] sm:h-[330px] 5xl:h-[456px] p-4 bg-white'>
                        <div className='h-full'>
                            <img className='w-full h-full object-cover' src='/images/products/pant2.png'/>
                        </div>
                        <div
                            className='w-[40px] h-[40px] bg-white border border-white-shade-100 flex justify-center items-center absolute right-[20px] top-[20px] cursor-pointer'>
                                    <span className='mt-2'>
                                        <svg width='38' height='36' viewBox='0 0 38 36' fill='none'
                                             xmlns='http://www.w3.org/2000/svg'>
                                            <g filter='url(#filter0_d_944_19802)'>
                                            <path
                                                d='M18.4415 22.7608L10.5723 14.5663C8.35573 12.2582 8.49531 8.4736 10.8753 6.34929C13.2364 4.24181 16.8165 4.65105 18.6824 7.24171L18.9961 7.67724L19.3098 7.24171C21.1757 4.65105 24.7557 4.24181 27.1169 6.34929C29.4969 8.4736 29.6365 12.2582 27.4199 14.5663L19.5507 22.7608C19.2444 23.0797 18.7478 23.0797 18.4415 22.7608Z'
                                                fill='#DA336F'/>
                                            <path
                                                d='M18.4415 22.7608L10.5723 14.5663C8.35573 12.2582 8.49531 8.4736 10.8753 6.34929C13.2364 4.24181 16.8165 4.65105 18.6824 7.24171L18.9961 7.67724L19.3098 7.24171C21.1757 4.65105 24.7557 4.24181 27.1169 6.34929C29.4969 8.4736 29.6365 12.2582 27.4199 14.5663L19.5507 22.7608C19.2444 23.0797 18.7478 23.0797 18.4415 22.7608Z'
                                                stroke='#F5F5F5' strokeLinecap='round' strokeLinejoin='round'/>
                                            </g>
                                            <defs>
                                            <filter id='filter0_d_944_19802' x='0.496094' y='0.5' width='37' height='35'
                                                    filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                                            <feFlood floodOpacity='0' result='BackgroundImageFix'/>
                                            <feColorMatrix in='SourceAlpha' type='matrix'
                                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                                           result='hardAlpha'/>
                                            <feOffset dy='4'/>
                                            <feGaussianBlur stdDeviation='4'/>
                                            <feComposite in2='hardAlpha' operator='out'/>
                                            <feColorMatrix type='matrix'
                                                           values='0 0 0 0 0.854167 0 0 0 0 0.199306 0 0 0 0 0.435056 0 0 0 0.2 0'/>
                                            <feBlend mode='normal' in2='BackgroundImageFix'
                                                     result='effect1_dropShadow_944_19802'/>
                                            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_944_19802'
                                                     result='shape'/>
                                            </filter>
                                            </defs>
                                        </svg>
                                    </span>
                        </div>
                    </div>
                    <div className='py-4'>
                        <h4 className='text-xl font-bold text-primaryColor mb-3'>Cotton elastane boat neck</h4>
                        <div className='flex items-center gap-6 text-base text-primaryColor-shade-100 cursor-pointer'>
                            <span>View Collection</span>
                            <span>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M21 12L14 19M3 12H21H3ZM21 12L14 5L21 12Z' stroke='#646464'
                                          strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
                                    </svg>
                                </span>
                        </div>
                    </div>
                </div>
                <div
                    className='see-all flex items-center justify-center bg-primaryColor hover:bg-black h-[300px] sm:h-[330px] 5xl:h-[456px] cursor-pointer'>
                    <div className='text-white-shade-100 text-[40px] text-center flex flex-col items-center'>
                        <div>See All</div>
                        <IconRightArrow/>
                    </div>
                </div>
            </div>

            <OurOffer/>

            <div className='belong-here relative flex items-center justify-center lg:pt-10 xl:pt-52 pb-36'>
                <div className='w-full md:w-[730px] h-[250px] md:h-[450px] lg:w-[930px]  lg:h-[550px] relative z-10'>
                    <div
                        className='transparency-text  text-7xl sm:text-[150px] md:xl:text-[200px] font-bold xl:absolute xl:top-[-115px] left-[-112px] 3xl:left-[-212px]'>Belong
                    </div>
                    <iframe width='100%' height='100%' src='https://www.youtube.com/embed/QjisC1Aj-rA'
                            title='FLYING OVER NEW ZEALAND (4K UHD) - Calming Music With Spectacular Natural Landscape For Relaxation'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen>
                    </iframe>
                    <div
                        className='transparency-text text-right text-7xl sm:text-[150px] xl:text-[200px] font-bold xl:absolute xl:bottom-[-176px] right-[-112px] 3xl:right-[-212px] pb-20'>Here
                    </div>
                </div>
            </div>

            {/*Sticky option*/}
            <div
                className='bg-primaryColor cursor-pointer px-7 py-4 w-[165px]  fixed top-[30%] right-[-38px] text-white-shade-100 text-center text-base rotate-[-90deg] z-[999]'>My
                Requests
            </div>
            <div
                className='bg-primaryColor cursor-pointer flex items-center gap-3 p-1 pr-4 w-[200px] h-[60px] rounded-full fixed bottom-0 right-[20px] text-white-shade-100 z-[999] text-base'>
                <div
                    className='w-[52px] h-[52px] rounded-full bg-primaryColor-shade-300 relative border border-white-shade-100 flex items-center justify-center cursor-pointer overflow-hidden'>
                    <img src='./images/user.jpg' className='object-cover object-top w-full h-full' alt=''/>
                </div>
                <span>Connect</span>
                <span className='ml-auto'>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                         <path d='M8 20L16 12L8 4' stroke='#F5F5F5' strokeWidth='1.5' strokeLinecap='round'
                               strokeLinejoin='round'/>
                    </svg>
                </span>
            </div>


            {/*Activated Soon Modal*/}
            <div
                className='modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto'
                id='ConfirmationAction' tabIndex='-1' aria-labelledby='exampleModalCenterTitle' aria-modal='true'
                role='dialog'>
                <div
                    className='modal-dialog max-w-[680px] overflow-hidden modal-dialog-centered relative w-auto pointer-events-none'>
                    <div
                        className='modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding outline-none text-current'>
                        <div className='modal-header flex flex-shrink-0 items-center justify-between p-8 pb-0'>
                            <button type='button'
                                    className='btn-close box-content w-4 h-4 p-1 text-black border-none  opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline'
                                    data-bs-dismiss='modal' aria-label='Close'>
                            </button>
                        </div>
                        <div className='modal-body relative p-4'>
                            <div className='px-6 pb-6'>
                                <h2 className='text-4xl sm:text-[44px] text-primaryColor uppercase font-bold mb-8'>Thanks!</h2>
                                <div className='space-y-4'>
                                    <p className='text-xl'>Your <strong>Brief</strong> has been received. We will share
                                        a collection with you within <strong>24 hours</strong>.</p>
                                </div>
                            </div>
                        </div>
                        <div className='modal-footer p-10 flex gap-6'>
                            <button type='button'
                                    className='btn w-[150px] bg-transparent font-normal border border-primaryColor text-primaryColor'
                                    data-bs-toggle='modal' data-bs-target='#exampleModalCenter'>
                                Close
                            </button>
                            <button type='button' className='btn w-full' data-bs-toggle='modal'
                                    data-bs-target='#exampleModalCenter'>
                                Go to <strong className='!font-bold'>Collection</strong>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/*Brief a Collection Modal*/}
            <div
                className='modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto'
                id='BriefCollection' tabIndex='-1' aria-labelledby='exampleModalCenterTitle' aria-modal='true'
                role='dialog'>
                <div className='modal-dialog max-w-[680px] modal-dialog-centered relative w-auto pointer-events-none'>
                    <div
                        className='modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding outline-none text-current'>
                        <div
                            className='modal-header flex flex-shrink-0 items-center justify-between bg-primaryColor-shade-300 p-4'>
                            <h5 className='text-xl font-bold leading-normal text-primaryColor uppercase'
                                id='exampleModalScrollableLabel'>
                                Brief a Collection
                            </h5>
                            <button type='button'
                                    className='btn-close box-content w-4 h-4 p-1 !mr-0.5 text-black border-none  opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline'
                                    data-bs-dismiss='modal' aria-label='Close'>
                            </button>
                        </div>
                        <div className='modal-body relative p-4'>
                            <div className='space-y-4'>
                                <div className='input-group flex items-center'>
                                    <label htmlFor='text' className='label w-[30%]'>Email address *</label>
                                    <input type='text'
                                           className='form-field bg-primaryColor-shade-300 w-[70%]'
                                           id='text'
                                           placeholder='Write Here ...'
                                           name='text'/>
                                </div>
                                <div className='input-group flex items-center'>
                                    <label htmlFor='text' className='label w-[30%]'>Description</label>
                                    <textarea name='' id='' cols='30' rows='4'
                                              className='form-field h-auto bg-primaryColor-shade-300 w-[70%]'
                                              placeholder='Write Here ...'></textarea>

                                </div>
                                <div className='input-group flex items-center'>
                                    <label htmlFor='text' className='label w-[30%]'>Attach</label>
                                    <div className='file w-[70%]'>
                                        <input id='input-file' type='file'/>
                                        <label htmlFor='input-file' className='w-full justify-between'>
                                            <span className='mr-4'>Browse Files</span>
                                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none'
                                                 xmlns='http://www.w3.org/2000/svg'>
                                                <path
                                                    d='M3 14V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V14'
                                                    stroke='#282828' strokeWidth='1.5' strokeLinecap='round'
                                                    strokeLinejoin='round'/>
                                                <path d='M12 3L17 8.44444M12 17V3V17ZM12 3L7 8.44446L12 3Z'
                                                      stroke='#282828' strokeWidth='1.5' strokeLinecap='round'
                                                      strokeLinejoin='round'/>
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-14'>
                                <div className='flex justify-between items-center mb-5'>
                                    <h5 className='text-xl font-bold leading-normal text-primaryColor'>
                                        Brief a Collection
                                    </h5>
                                    <span className='text-base'>4 files</span>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                                        <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
                                            <div className='overflow-hidden'>
                                                <table className='min-w-full'>
                                                    <thead className='bg-white'>
                                                    <tr>
                                                        <th scope='col'
                                                            className='w-[100px] text-xl font-normal bg-white-shade-100 px-6 py-4 text-left first:border-r border-primaryColor-shade-200'>

                                                        </th>
                                                        <th scope='col'
                                                            className='text-xl font-normal bg-white-shade-100 px-6 py-4 text-left first:border-r border-primaryColor-shade-200'>
                                                            File
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr className='even:bg-white-shade-100'>
                                                        <td className='text-base font-normal px-6 py-6 whitespace-nowrap first:border-r border-primaryColor-shade-200'>
                                                                <span className='cursor-pointer'>
                                                                    <svg width='24' height='24' viewBox='0 0 24 24'
                                                                         fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                                    <path
                                                                        d='M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6M3 6H21H3ZM5 6V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V6H5Z'
                                                                        stroke='#282828' strokeWidth='1.5'
                                                                        strokeLinecap='round' strokeLinejoin='round'/>
                                                                    <path d='M14 11V17' stroke='#282828'
                                                                          strokeWidth='1.5' strokeLinecap='round'
                                                                          strokeLinejoin='round'/>
                                                                    <path d='M10 11V17' stroke='#282828'
                                                                          strokeWidth='1.5' strokeLinecap='round'
                                                                          strokeLinejoin='round'/>
                                                                    </svg>
                                                                </span>
                                                        </td>
                                                        <td className='text-base font-normal px-6 py-6 whitespace-nowrap'>
                                                            <div className='flex items-center'>
                                                                    <span>
                                                                        <img src='./images/pdf.png' alt=''/>
                                                                    </span>
                                                                <span className='text-base ml-4'>Untiltled.pdf </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='even:bg-white-shade-100'>
                                                        <td className='text-base font-normal px-6 py-6 whitespace-nowrap first:border-r border-primaryColor-shade-200'>
                                                                <span className='cursor-pointer'>
                                                                    <svg width='24' height='24' viewBox='0 0 24 24'
                                                                         fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                                    <path
                                                                        d='M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6M3 6H21H3ZM5 6V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V6H5Z'
                                                                        stroke='#282828' strokeWidth='1.5'
                                                                        strokeLinecap='round' strokeLinejoin='round'/>
                                                                    <path d='M14 11V17' stroke='#282828'
                                                                          strokeWidth='1.5' strokeLinecap='round'
                                                                          strokeLinejoin='round'/>
                                                                    <path d='M10 11V17' stroke='#282828'
                                                                          strokeWidth='1.5' strokeLinecap='round'
                                                                          strokeLinejoin='round'/>
                                                                    </svg>
                                                                </span>
                                                        </td>
                                                        <td className='text-base font-normal px-6 py-6 whitespace-nowrap'>
                                                            <div className='flex items-center'>
                                                                    <span>
                                                                        <img src='./images/pdf.png' alt=''/>
                                                                    </span>
                                                                <span className='text-base ml-4'>Untiltled.pdf </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='even:bg-white-shade-100'>
                                                        <td className='text-base font-normal px-6 py-6 whitespace-nowrap first:border-r border-primaryColor-shade-200'>
                                                                <span className='cursor-pointer'>
                                                                    <svg width='24' height='24' viewBox='0 0 24 24'
                                                                         fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                                    <path
                                                                        d='M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6M3 6H21H3ZM5 6V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V6H5Z'
                                                                        stroke='#282828' strokeWidth='1.5'
                                                                        strokeLinecap='round' strokeLinejoin='round'/>
                                                                    <path d='M14 11V17' stroke='#282828'
                                                                          strokeWidth='1.5' strokeLinecap='round'
                                                                          strokeLinejoin='round'/>
                                                                    <path d='M10 11V17' stroke='#282828'
                                                                          strokeWidth='1.5' strokeLinecap='round'
                                                                          strokeLinejoin='round'/>
                                                                    </svg>
                                                                </span>
                                                        </td>
                                                        <td className='text-base font-normal px-6 py-6 whitespace-nowrap'>
                                                            <div className='flex items-center'>
                                                                    <span>
                                                                        <img src='./images/pdf.png' alt=''/>
                                                                    </span>
                                                                <span className='text-base ml-4'>Untiltled.pdf </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='even:bg-white-shade-100'>
                                                        <td className='text-base font-normal px-6 py-6 whitespace-nowrap first:border-r border-primaryColor-shade-200'>
                                                                <span className='cursor-pointer'>
                                                                    <svg width='24' height='24' viewBox='0 0 24 24'
                                                                         fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                                    <path
                                                                        d='M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6M3 6H21H3ZM5 6V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V6H5Z'
                                                                        stroke='#282828' strokeWidth='1.5'
                                                                        strokeLinecap='round' strokeLinejoin='round'/>
                                                                    <path d='M14 11V17' stroke='#282828'
                                                                          strokeWidth='1.5' strokeLinecap='round'
                                                                          strokeLinejoin='round'/>
                                                                    <path d='M10 11V17' stroke='#282828'
                                                                          strokeWidth='1.5' strokeLinecap='round'
                                                                          strokeLinejoin='round'/>
                                                                    </svg>
                                                                </span>
                                                        </td>
                                                        <td className='text-base font-normal px-6 py-6 whitespace-nowrap'>
                                                            <div className='flex items-center'>
                                                                    <span>
                                                                        <img src='./images/pdf.png' alt=''/>
                                                                    </span>
                                                                <span className='text-base ml-4'>Untiltled.pdf </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='modal-footer p-4'>
                            <button type='button' className='btn flex justify-between items-center max-w-[445px] w-full'
                                    data-bs-toggle='modal' data-bs-target='#ConfirmationAction'>
                                <span>Ask <strong className='font-bold'>Collection</strong></span>
                                <span className='ml-2'>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M21 12L14 19M3 12H21H3ZM21 12L14 5L21 12Z' stroke='#F5F5F5'
                                              strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </LoaderComponent>
    )
}

export default Dashboard
