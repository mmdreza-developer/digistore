import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineLeft, AiOutlineDown, AiOutlineClose } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"
import { BiCategoryAlt } from "react-icons/bi"
import { Link } from 'react-router-dom'
export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false)
  const CloseMenu = () => setIsOpen(false)
  const OpenMenu = () => setIsOpen(true)
  return (
    <>
      <div className={`fixed w-full h-[100%] bg-dark-bg transition-all duration-200 ${isOpen ? "z-20 opacity-100" : "-z-10 opacity-0"}`} onClick={CloseMenu}></div>
      <div x-data="{isShowMenu:true}" className={`${isOpen ? "w-[300px]" : " w-[0]"} z-30 left-0 transition-all duration-500 flex flex-col gap-4 fixed overflow-y-scroll h-full bg-white shadow-black shadow-lg `}>
        <div className='flex justify-center mt-2'>
          <img src="/images/logo.png" alt="" />
        </div>
        <div className='cursor-pointer absolute z-50 right-0 top-2 bg-orange p-2 text-white' onClick={CloseMenu} >
          <AiOutlineClose />
        </div>
        <div className='relative p-2'>
          <input type="text" className='border-2 border-orange outline-none rounded p-2 w-full' placeholder='جستوجوی محصول ...' />
          <button className='absolute left-2 rounded top-2 p-3 text-lg hover:text-orange'><BsSearch /></button>
        </div>
        <div className='flex items-center text-gray-500 border rounded'>
          <Link className='flex gap-1 items-center text-sm hover:text-orange flex-1 border-y border-l border-gray-text p-2' x-on:click="isShowMenu = false"><BiCategoryAlt/> دسته بندی </Link>
          <Link className='flex gap-1 items-center text-sm hover:text-orange flex-1 border-y border-r border-gray-text p-2' x-on:click="isShowMenu = true"><AiOutlineMenu/> منو </Link>
        </div>
        <ul x-show="isShowMenu" className='flex flex-col gap-2'>
          <li x-data="{ isHome: false }">
            <Link x-on:click="isHome = !isHome" className='flex justify-between p-2 border-b border-gray-text'> خانه <AiOutlineLeft x-bind:class="isHome ? '-rotate-90':''" /></Link>
            <ul x-show="isHome" className='flex flex-col gap-2 p-2 text-sm text-gray-500'>
              <li>
                <Link className='p-2 border-b border-gray-text block'>صفحه اصلی 1</Link>
              </li>
              <li>
                <Link className='p-2 border-b border-gray-text block'>صفحه اصلی 2</Link>
              </li>
              <li>
                <Link className='p-2 border-b border-gray-text block'>صفحه اصلی 3</Link>
              </li>
              <li>
                <Link className='p-2 border-b border-gray-text block'>صفحه اصلی 4</Link>
              </li>
              <li>
                <Link className='p-2 border-b border-gray-text block'>صفحه اصلی 5</Link>
              </li>
            </ul>
          </li>
          <li x-data="{isStore:false}">
            <Link x-on:click="isStore = !isStore" className='flex justify-between p-2 border-b border-gray-text'>فروشگاه <AiOutlineLeft x-bind:class="isStore ? '-rotate-90': ''" /></Link>
            <ul x-show="isStore" className='flex flex-col gap-2 p-2 text-sm text-gray-500'>
              <li x-data="{ subStore1:false }">
                <Link x-on:click="subStore1 = !subStore1" className='p-2 border-b border-gray-text flex justify-between items-center'>چیدمان فروشگاه <AiOutlineLeft x-bind:class="subStore1 ? '-rotate-90':''" /></Link>
                <ul x-show="subStore1" className='p-2 flex flex-col gap-2 text-gray-500'>
                  <li>
                    <Link className='p-2 border-b border-gray-text block'>نوار کناری چپ</Link>
                  </li>
                  <li>
                    <Link className='p-2 border-b border-gray-text block'>نوار کناری راست</Link>
                  </li>
                  <li>
                    <Link className='p-2 border-b border-gray-text block'>تمام صفحه</Link>
                  </li>
                  <li>
                    <Link className='p-2 border-b border-gray-text block'>ستون 1</Link>
                  </li>
                  <li>
                    <Link className='p-2 border-b border-gray-text block'>ستون 2</Link>
                  </li>
                </ul>
              </li>
              <li x-data="{ subStore2:false }">
              <Link x-on:click="subStore2 = !subStore2" className='p-2 border-b border-gray-text flex justify-between items-center'>صفحه فروشگاه <AiOutlineLeft x-bind:class="subStore2 ? '-rotate-90':''" /></Link>
              <ul x-show="subStore2" className='p-2 flex flex-col gap-2 text-gray-500'>
                  <li>
                    <Link className='p-2 border-b border-gray-text block'>فروشگاه</Link>
                  </li>
                  <li>
                  <Link className='p-2 border-b border-gray-text block'>سبد خرید</Link>
                  </li>
                  <li>
                  <Link className='p-2 border-b border-gray-text block'> علاقه مندی ها</Link>
                  </li>
                  <li>
                  <Link className='p-2 border-b border-gray-text block'>پرداخت</Link>
                  </li>
                  <li>
                  <Link className='p-2 border-b border-gray-text block'>حساب من</Link>
                  </li>
                </ul>
              </li>
              <li x-data="{ subStore3:false }">
              <Link x-on:click="subStore3 = !subStore3" className='p-2 border-b border-gray-text flex justify-between items-center'>انواع محصول <AiOutlineLeft x-bind:class="subStore3 ? '-rotate-90':''" /></Link>
              <ul x-show="subStore3" className='p-2 flex flex-col gap-2 text-gray-500'>
                  <li>
                    <Link className='p-2 border-b border-gray-text block'>محصول ساده</Link>
                  </li>
                  <li>
                  <Link className='p-2 border-b border-gray-text block'>محصول گروهی</Link>
                  </li>
                  <li>
                  <Link className='p-2 border-b border-gray-text block'>محصول متغییر</Link>
                  </li>
                  <li>
                  <Link className='p-2 border-b border-gray-text block'>محصول خارجی و وابسته</Link>
                  </li>
                  <li>
                  <Link className='p-2 border-b border-gray-text block'>ویدیویی ویژه</Link>
                  </li>
                  <li>
                  <Link className='p-2 border-b border-gray-text block'>محصول بسته</Link>
                  </li>
                </ul>
              </li>
              <li x-data="{ subStore4:false }">
              <Link x-on:click="subStore4 = !subStore4" className='p-2 border-b border-gray-text flex justify-between items-center'>صفحه محصول <AiOutlineLeft  x-bind:class="subStore4 ? '-rotate-90':''" /></Link>
              <ul x-show="subStore4" className='p-2 flex flex-col gap-2 text-gray-500'>
                  <li>
                    <Link className='p-2 border-b border-gray-text block'>تمام صفحه</Link>
                  </li>
                  <li>
                  <Link className='p-2 border-b border-gray-text block'>نوار کناری چپ</Link>
                  </li>
                  <li>
                  <Link className='p-2 border-b border-gray-text block'>نوار کناری راست</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li >
          <li x-data="{isBlog:false}">
            <Link x-on:click="isBlog = !isBlog" className='flex justify-between p-2 border-b border-gray-text'>وبلاگ <AiOutlineLeft x-bind:class="isBlog ? '-rotate-90': ''" /></Link>
            <ul x-show="isBlog" className='p-2 flex flex-col gap-2 text-gray-500'>
                  <li x-data="{subBlog1:false}">
                    <Link x-on:click="subBlog1 = !subBlog1" className='p-2 border-b border-gray-text flex justify-between'>طرح بندی وبلاگ 1 <AiOutlineLeft x-bind:class="subBlog1 ? '-rotate-90': ''" /></Link>
                    <ul x-show="subBlog1" className='flex flex-col gap-2 p-2 text-sm text-gray-500'>
              <li>
                <Link className='p-2 border-b border-gray-text flex justify-between'>نوار کناری چپ پیش فرض</Link>
              </li>
              <li>
                <Link className='p-2 border-b border-gray-text flex justify-between'>نوار کناری چپ لیست</Link>
              </li>
              <li>
               <Link className='p-2 border-b border-gray-text flex justify-between'>نوار کناری راست لیست</Link>
              </li>
            </ul>
                  </li>
                  <li x-data="{subBlog2:false}">
                    <Link x-on:click="subBlog2 = !subBlog2" className='p-2 border-b border-gray-text flex justify-between'>طرح بندی وبلاگ 2 <AiOutlineLeft x-bind:class="subBlog2 ? '-rotate-90': ''" /></Link>
                    <ul x-show="subBlog2" className='flex flex-col gap-2 p-2 text-sm text-gray-500'>
              <li>
                <Link className='p-2 border-b border-gray-text block'>نوار کناری چپ پیش فرض</Link>
              </li>
              <li>
                <Link className='p-2 border-b border-gray-text block'>نوار کناری چپ لیست</Link>
              </li>
              <li>
               <Link className='p-2 border-b border-gray-text block'>نوار کناری راست لیست</Link>
              </li>
            </ul>
                  </li>
                  <li x-data="{subBlog3:false}">
                    <Link x-on:click="subBlog3 = !subBlog3" className='p-2 border-b border-gray-text flex justify-between'>طرح بندی وبلاگ 3 <AiOutlineLeft x-bind:class="subBlog3 ? '-rotate-90': ''" /></Link>
                    <ul x-show="subBlog3" className='flex flex-col gap-2 p-2 text-sm text-gray-500'>
              <li>
                <Link className='p-2 border-b border-gray-text block'>نوار کناری چپ پیش فرض</Link>
              </li>
              <li>
                <Link className='p-2 border-b border-gray-text block'>نوار کناری چپ لیست</Link>
              </li>
              <li>
               <Link className='p-2 border-b border-gray-text block'>نوار کناری راست لیست</Link>
              </li>
            </ul>
                  </li>
                  <li x-data="{subBlog4:false}">
                    <Link x-on:click="subBlog4 = !subBlog4" className='p-2 border-b border-gray-text flex justify-between'>فرمت های پست<AiOutlineLeft x-bind:class="subBlog4 ? '-rotate-90': ''" /></Link>
                    <ul x-show="subBlog4" className='flex flex-col gap-2 p-2 text-sm text-gray-500'>
              <li>
                <Link className='p-2 border-b border-gray-text block'>روش پرداخت اینترنتی</Link>
              </li>
              <li>
                <Link className='p-2 border-b border-gray-text block'>راه سفارشی اینترنتی</Link>
              </li>
              <li>
               <Link className='p-2 border-b border-gray-text block'>اعتماد به فروشندگان</Link>
              </li>
              <li>
               <Link className='p-2 border-b border-gray-text block'>هزینه پست محصول</Link>
              </li>
            </ul>
                  </li>
                </ul>
          </li>
          <li x-data="{isPages:false}">
            <Link x-on:click="isPages = !isPages" className='flex justify-between p-2 border-b border-gray-text'>صفحات <AiOutlineLeft x-bind:class="isPages ? '-rotate-90': ''" /></Link>
            <ul x-show="isPages" className='p-2 flex flex-col gap-2 text-gray-500'>
                  <li x-data="{page1:false}">
                    <Link x-on:click="page1 = !page1" className='p-2 border-b border-gray-text flex justify-between'>اطلاعات صفحه<AiOutlineLeft x-bind:class="page1 ? '-rotate-90': ''" /></Link>
                    <ul x-show="page1" className='flex flex-col gap-2 p-2 text-sm text-gray-500'>
              <li>
                <Link className='p-2 border-b border-gray-text flex justify-between'>درباره ما</Link>
              </li>
              <li>
              <Link className='p-2 border-b border-gray-text flex justify-between'>تماس با ما</Link>
              </li>
              <li>
              <Link className='p-2 border-b border-gray-text flex justify-between'>صفحه 404</Link>
              </li>
            </ul>
                  </li>
                  <li x-data="{page2:false}">
                    <Link x-on:click="page2 = !page2" className='p-2 border-b border-gray-text flex justify-between'>نمونه کارها<AiOutlineLeft x-bind:class="page2 ? '-rotate-90': ''" /></Link>
                    <ul x-show="page2" className='flex flex-col gap-2 p-2 text-sm text-gray-500'>
              <li>
                <Link className='p-2 border-b border-gray-text block'>نمونه کار 1</Link>
              </li>
              <li>
              <Link className='p-2 border-b border-gray-text block'>نمونه کار 2</Link>
              </li>
              <li>
              <Link className='p-2 border-b border-gray-text block'>نمونه کار 3</Link>
              </li>
            </ul>
                  </li>
                </ul>
          </li>
        </ul>
        <ul x-show="!isShowMenu" className="flex flex-col gap-2">
      <li x-data="{ isGolden: false }">
            <Link x-on:click="isGolden = !isGolden" className='flex justify-between p-2 border-b border-gray-text'>مد و جواهرات <AiOutlineLeft x-bind:class="isGolden ? '-rotate-90': ''" /></Link>
            <ul x-show="isGolden" className='p-2 flex flex-col gap-2 text-gray-500'>
                  <li x-data="{golden1:false}">
                    <Link x-on:click="golden1 = !golden1" className='p-2 border-b border-gray-text flex justify-between'>اکسسوری<AiOutlineLeft x-bind:class="golden1 ? '-rotate-90': ''" /></Link>
                    <ul x-show="golden1" className='flex flex-col gap-2 p-2 text-sm text-gray-500'>
              <li>
                <Link className='p-2 border-b border-gray-text flex justify-between'>لباس</Link>
              </li>
              <li>
                <Link className='p-2 border-b border-gray-text flex justify-between'>لباس</Link>
              </li>
              <li>
                <Link className='p-2 border-b border-gray-text flex justify-between'>شلوار جین</Link>
              </li>
              <li>
                <Link className='p-2 border-b border-gray-text flex justify-between'>تاپ بافتنی</Link>
              </li>
              <li>
                <Link className='p-2 border-b border-gray-text flex justify-between'>لباس بیرونی</Link>
              </li>
              <li>
                <Link className='p-2 border-b border-gray-text flex justify-between'>شلوار بیرو</Link>
              </li>
            </ul>
                  </li>
                  <li x-data="{golden2:false}">
                    <Link x-on:click="golden2 = !golden2" className='p-2 border-b border-gray-text flex justify-between'>کالکشن زنانه<AiOutlineLeft x-bind:class="golden2 ? '-rotate-90': ''" /></Link>
                    <ul x-show="golden2" className='flex flex-col gap-2 p-2 text-sm text-gray-500'>
              <li>
                <Link className='p-2 border-b border-gray-text block'>لباس مهمانی</Link>
              </li>
              <li>
              <Link className='p-2 border-b border-gray-text block'>لباس</Link>
              </li>
              <li>
              <Link className='p-2 border-b border-gray-text block'>شلوار جین</Link>
              </li>
              <li>
              <Link className='p-2 border-b border-gray-text block'>تاپ بافتنی</Link>
              </li>
              <li>
              <Link className='p-2 border-b border-gray-text block'>لباس بیرونی</Link>
              </li>
              <li>
              <Link className='p-2 border-b border-gray-text block'>شلوار</Link>
              </li>
            </ul>
                  </li>
                  <li x-data="{page3:false}">
                    <Link x-on:click="page3 = !page3" className='p-2 border-b border-gray-text flex justify-between'>کالکشن مردانه<AiOutlineLeft x-bind:class="page3 ? '-rotate-90': ''" /></Link>
                    <ul x-show="page3" className='flex flex-col gap-2 p-2 text-sm text-gray-500'>
              <li>
                <Link className='p-2 border-b border-gray-text block'>لباس مهمانی</Link>
              </li>
              <li>
              <Link className='p-2 border-b border-gray-text block'>لباس</Link>
              </li>
              <li>
              <Link className='p-2 border-b border-gray-text block'>شلوار جین</Link>
              </li>
              <li>
              <Link className='p-2 border-b border-gray-text block'>تاپ بافتنی</Link>
              </li>
              <li>
              <Link className='p-2 border-b border-gray-text block'>لباس بیرونی</Link>
              </li>
              <li>
              <Link className='p-2 border-b border-gray-text block'>شلوار</Link>
              </li>
            </ul>
                  </li>
                </ul>
      </li>
      <li>
        <Link className='flex justify-between p-2 border-b border-gray-text'> گوشی های هوشمند </Link>
      </li>
      <li>
        <Link className='flex justify-between p-2 border-b border-gray-text'>دوربین و عکس</Link>
      </li>
      <li x-data="{ isElectronic: false }">
            <Link x-on:click="isElectronic = !isElectronic" className='flex justify-between p-2 border-b border-gray-text'> خانه و الکترونیک <AiOutlineLeft x-bind:class="isElectronic ? '-rotate-90':''" /></Link>
            <ul x-show="isElectronic" className='flex flex-col gap-2 p-2 text-sm text-gray-500'>
              <li>
                <Link className='p-2 border-b border-gray-text block'>بلندگوی صدا</Link>
              </li>
              <li>
              <Link className='p-2 border-b border-gray-text block'>الکترونیک</Link>
              </li>
              <li>
              <Link className='p-2 border-b border-gray-text block'>هدفون</Link>
              </li>
              <li>
              <Link className='p-2 border-b border-gray-text block'>گوشی های هدشمند</Link>
              </li>
            </ul>
          </li>
      </ul>
      </div>
      <div className='bg-blue mt-3 z-10'>
        <div className=' text-white flex justify-between items-center container relative'>
          <div>
            <div className='relative extra-menu-parent'>
              <div className='flex items-center gap-2 hover:lg:bg-orange lg:bg-slate-600 p-2 cursor-pointer'>
                <div className='lg:border hidden lg:block rounded p-1 lg:border-none'>
                  <AiOutlineMenu className='text-2xl ' />
                </div>
                <div className='hover:text-orange block lg:hidden border-2 rounded hover:border-orange p-1' onClick={OpenMenu}>
                  <AiOutlineMenu className='text-2xl ' />
                </div>
                <div className='hidden lg:block'>خرید بر اساس دسته بندی ها</div>
              </div>
              <ul className='absolute bg-white p-2 hidden flex-col gap-2 shadow-lg w-full extra-submenu'>
                <li className='border-b border-gray-text cursor-pointer text-gray-500 w-full p-2 flex justify-between items-center extra-menu group'>
                  <Link className='group-hover:text-orange' to="">مد و جواهرات</Link>
                  <AiOutlineLeft />
                  <ul className=' hidden absolute w-[450px] top-0  right-[225px] justify-between gap-2 bg-white shadow-lg p-3 group-hover:flex'>
                    <li>
                      <Link to="" className='text-black border-b border-gray-bg pb-2'>اکسسوری</Link>
                      <ul>
                        <li>
                          <Link className='block w-full p-1 hover:text-orange text-gray-500 text-sm'>لباس</Link>
                        </li>
                        <li>
                          <Link className='block w-full p-1 hover:text-orange text-gray-500 text-sm'>شلوار جین</Link>
                        </li>
                        <li>
                          <Link className='block w-full p-1 hover:text-orange text-gray-500 text-sm'>لباس بافتنی</Link>
                        </li>
                        <li>
                          <Link className='block w-full p-1 hover:text-orange text-gray-500 text-sm'>لباس بیرونی</Link>
                        </li>
                        <li>
                          <Link className='block w-full p-1 hover:text-orange text-gray-500 text-sm'>شلوار</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="" className='text-black border-b border-gray-bg pb-2'>کالکشن زنانه</Link>
                      <ul>
                        <li>
                          <Link className='block w-full p-1 hover:text-orange text-gray-500 text-sm'>لباس مهمانی</Link>
                        </li>
                        <li>
                          <Link className='block w-full p-1 hover:text-orange text-gray-500 text-sm'>لباس</Link>
                        </li>
                        <li>
                          <Link className='block w-full p-1 hover:text-orange text-gray-500 text-sm'>شلوار جین</Link>
                        </li>
                        <li>
                          <Link className='block w-full p-1 hover:text-orange text-gray-500 text-sm'>لباس بیرونی</Link>
                        </li>
                        <li>
                          <Link className='block w-full p-1 hover:text-orange text-gray-500 text-sm'>لباس راحتی</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="" className='text-black border-b border-gray-bg pb-2'>کالشن مردانه</Link>
                      <ul>
                        <li>
                          <Link className='block w-full p-1 hover:text-orange text-gray-500 text-sm'>لباس مهمانی</Link>
                        </li>
                        <li>
                          <Link className='block w-full p-1 hover:text-orange text-gray-500 text-sm'>لباس</Link>
                        </li>
                        <li>
                          <Link className='block w-full p-1 hover:text-orange text-gray-500 text-sm'>شلوار جین</Link>
                        </li>
                        <li>
                          <Link className='block w-full p-1 hover:text-orange text-gray-500 text-sm'>لباس بیرونی</Link>
                        </li>
                        <li>
                          <Link className='block w-full p-1 hover:text-orange text-gray-500 text-sm'>لباس راحتی</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='border-b border-gray-text cursor-pointer text-gray-500 p-2 hover:text-orange w-full'>
                  <Link className='' to="">گوشی های هوشمند</Link>
                </li>
                <li className='border-b border-gray-text cursor-pointer text-gray-500 p-2 hover:text-orange w-full'>
                  <Link className='' to="">دوربین و عکس</Link>
                </li>
                <li className='border-b border-gray-text cursor-pointer text-gray-500 p-2 w-full flex justify-between items-center group'>
                  <Link className='group-hover:text-orange' to="">خانه و الکترونیک</Link>
                  <AiOutlineLeft />
                  <ul className='absolute bg-white right-[225px] hidden group-hover:flex flex-col gap-2 w-[150px] shadow-md text-center text-sm'>
                    <li>
                      <Link to="" className='hover:text-orange'>بلندگوی صدا</Link>
                    </li>
                    <li>
                      <Link to="" className='hover:text-orange'>الکترونیک</Link>
                    </li>
                    <li>
                      <Link to="" className='hover:text-orange'>هدفون</Link>
                    </li>
                    <li>
                      <Link to="" className='hover:text-orange'>گوشی های هوشمند</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ul className='hidden lg:flex items-center gap-4 w-full flex-1'>
              <li className='group'>
                <Link to="" className='flex items-center gap-x-1 text-sm'>خانه <AiOutlineDown /></Link>
                <ul className='hidden flex-col gap-4 group-hover:flex absolute bg-white text-gray-500 p-2 rounded text-sm shadow-md text-md'>
                  <li>
                    <Link to="" className='py-1 px-3'>صفحه اصلی 1</Link>
                  </li>
                  <li>
                    <Link to="" className='py-1 px-3'>صفحه اصلی 2</Link>
                  </li>
                  <li>
                    <Link to="" className='py-1 px-3'>صفحه اصلی 3</Link>
                  </li>
                  <li>
                    <Link to="" className='py-1 px-3'>صفحه اصلی 4</Link>
                  </li>
                  <li>
                    <Link to="" className='py-1 px-3'>صفحه اصلی 5</Link>
                  </li>
                </ul>
              </li>
              <li className='group'>
                <Link to="" className='flex items-center gap-x-1 text-sm'>فروشگاه <AiOutlineDown /></Link>
                <ul className='hidden gap-2 group-hover:flex justify-around absolute left-[20%] w-[60%] bg-white text-gray-500 p-2 rounded shadow-md text-sm'>
                  <li className=''>
                    <Link to="" className='py-1 px-3 text-lg font-bold text-black'>چیدمان فروشگاه</Link>
                    <ul className='flex flex-col items-center gap-3'>
                      <li>
                        <Link>نوار کناری چپ</Link>
                      </li>
                      <li>
                        <Link>نوار کناری راست</Link>
                      </li>
                      <li>
                        <Link>تمام صفحه</Link>
                      </li>
                      <li>
                        <Link>ستون 1</Link>
                      </li>
                      <li>
                        <Link>ستون 2</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="" className='py-1 px-3 text-lg font-bold text-black'>صفحه فروشگاه</Link>
                    <ul className='flex flex-col items-center gap-3'>
                      <li>
                        <Link>فروشگاه</Link>
                      </li>
                      <li>
                        <Link>سبد خرید</Link>
                      </li>
                      <li>
                        <Link>لیست علاقه مندی ها</Link>
                      </li>
                      <li>
                        <Link>پرداخت</Link>
                      </li>
                      <li>
                        <Link>حساب من</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="" className='py-1 px-3 text-lg font-bold text-black'>انواع محصول</Link>
                    <ul className='flex flex-col items-center gap-3'>
                      <li>
                        <Link>محصول ساده</Link>
                      </li>
                      <li>
                        <Link>محصول گروهی</Link>
                      </li>
                      <li>
                        <Link>محصول متغییر</Link>
                      </li>
                      <li>
                        <Link>محصول خارجی و وابسته</Link>
                      </li>
                      <li>
                        <Link>ویدیویی ویژه</Link>
                      </li>
                      <li>
                        <Link>محصول بسته</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="" className='py-1 px-3 text-lg font-bold text-black'>صفحات محصول</Link>
                    <ul className='flex flex-col items-center gap-3'>
                      <li>
                        <Link>تمام صفحه</Link>
                      </li>
                      <li>
                        <Link>نوار کناری چپ</Link>
                      </li>
                      <li>
                        <Link>نوار کناری راست</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className='group'>
                <Link to="" className='flex items-center gap-x-1 text-sm'>وبلاگ <AiOutlineDown /></Link>
                <ul className='hidden flex-col gap-2  absolute left-[20%] w-[60%] bg-white text-gray-500 p-2 rounded shadow-md text-md group-hover:grid grid-cols-5'>
                  <li className='col-span-3 grid grid-cols-2 gap-4'>
                    <div>
                      <ul className='flex flex-col gap-2 items-center text-sm text-gray-500'>
                        <div className='text-orange text-lg font-bold'>طرح بندی وبلاگ 1</div>
                        <li>
                          <Link>نوار کناری چپ پیش فرض</Link>
                        </li>
                        <li>
                          <Link>نوار کناری چپ لیست</Link>
                        </li>
                        <li>
                          <Link>نوار کناری راست لیست</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className='flex flex-col gap-2 items-center text-sm text-gray-500'>
                        <div className='text-orange text-lg font-bold'>طرح بندی وبلاگ 2</div>
                        <li>
                          <Link>نوار کناری چپ پیش فرض</Link>
                        </li>
                        <li>
                          <Link>نوار کناری چپ لیست</Link>
                        </li>
                        <li>
                          <Link>نوار کناری راست لیست</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className='flex flex-col gap-2 items-center text-sm text-gray-500'>
                        <div className='text-orange text-lg font-bold'>طرح بندی وبلاگ 3</div>
                        <li>
                          <Link>نوار کناری چپ پیش فرض</Link>
                        </li>
                        <li>
                          <Link>نوار کناری چپ لیست</Link>
                        </li>
                        <li>
                          <Link>نوار کناری راست لیست</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className='flex flex-col gap-2 items-center text-sm text-gray-500'>
                        <div className='text-orange text-lg font-bold'>طرح بندی وبلاگ 4</div>
                        <li>
                          <Link>نوار کناری چپ پیش فرض</Link>
                        </li>
                        <li>
                          <Link>نوار کناری چپ لیست</Link>
                        </li>
                        <li>
                          <Link>نوار کناری راست لیست</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <ul className='col-span-2 flex flex-col gap-2'>
                    <div className='text-lg font-bold'>فرمت های پست</div>
                    <li>
                      <Link className='flex gap-2 items-start'>
                        <div className='w-[80px] h-[80px] overflow-hidden rounded'>
                          <img src="/images/m1.jpg" className='transition duration-300 hover:scale-125 hover:blur-[.5px]' width={80} height={80} alt="" />
                        </div>
                        <Link className='mt-1'>روش پرداخت اینترنتی</Link>
                      </Link>
                    </li>
                    <li>
                      <Link className='flex gap-2 items-start'>
                        <div className='w-[80px] h-[80px] overflow-hidden rounded'>
                          <img src="/images/m2.jpg" className='transition duration-300 hover:scale-125 hover:blur-[.5px]' width={80} height={80} alt="" />
                        </div>
                        <Link className='mt-1'>راه سفارش اینترنتی</Link>
                      </Link>
                    </li>
                    <li>
                      <Link className='flex gap-2 items-start'>
                        <div className='w-[80px] h-[80px] overflow-hidden rounded'>
                          <img src="/images/m3.jpg" className='transition duration-300 hover:scale-125 hover:blur-[.5px]' width={80} height={80} alt="" />
                        </div>
                        <Link className='mt-1'>اعتماد به فروشندگان</Link>
                      </Link>
                    </li>
                    <li>
                      <Link className='flex gap-2 items-start'>
                        <div className='w-[80px] h-[80px] overflow-hidden rounded'>
                          <img src="/images/m4.jpg" className='transition duration-300 hover:scale-125 hover:blur-[.5px]' width={80} height={80} alt="" />
                        </div>
                        <Link className='mt-1'>هزینه پست محصول</Link>
                      </Link>
                    </li>
                  </ul>
                </ul>
              </li>
              <li className='group'>
                <Link to="" className='flex items-center gap-x-1 text-sm'>صفحهات <AiOutlineDown /></Link>
                <ul className='hidden flex-col gap-4 group-hover:grid grid-cols-2 bg-white shadow-md rounded absolute p-2'>
                  <li className='group'>
                    <Link to="" className='py-1 px-3 text-black group-hover:text-orange'>اطلاعات صفحه</Link>
                    <ul className='flex flex-col gap-3 text-sm text-gray-500 text-center mt-2'>
                      <li>
                        <Link>درباره ما</Link>
                      </li>
                      <li>
                        <Link>تماس با ما</Link>
                      </li>
                      <li>
                        <Link>صفحه 404</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='group'>
                    <Link to="" className='py-1 px-3 text-black group-hover:text-orange'>نمونه کارها</Link>
                    <ul className='flex flex-col gap-3 text-sm text-gray-500 text-center mt-2'>
                      <li>
                        <Link>نمونه کار 1</Link>
                      </li>
                      <li>
                        <Link>نمونه کار 2</Link>
                      </li>
                      <li>
                        <Link>نمونه کار 3</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='d-bolck'>
            مدت زمان محدود پیشنهاد!
          </div>
        </div>
      </div>
    </>
  )
}
