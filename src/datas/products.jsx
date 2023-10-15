


const products = {
    AllProducts: [
        { id: "شلوار-اسلش", title: "شلوار اسلش", img: "/images/products/f1-300x300.jpg", price: 250000, discount: 7 },
        { id: "تیشرت-1", title: "تیشرت 1", img: "/images/products/f2-300x300.jpg", price: 175000 },
        { id: "کیف-کوهنوردی", title: "کیف کوهنوردی", img: "/images/products/f4-300x300.jpg", price: 765000, discount: 10 },
        { id: "کفش-جردن", title: "کفش جردن", img: "/images/products/f11-300x300.jpg", price: 3400000, discount: 9 },
        { id: "کفش-پوتین-زنانه", title: "کفش پوتین زنانه", img: "/images/products/f12-300x300.jpg", price: 545000 },
        { id: "کفش-تابستانی-زنانه", title: "کفش تابستانی زنانه", img: "/images/products/f15-300x300.jpg", price: 332000 },
        { id: "کیف-چرم-زنانه", title: "کیف چرم زنانه", img: "/images/products/f16-300x300.jpg", price: 786000 },
        { id: "کیف-اسپرت-زنانه", title: "کیف اسپرت زنانه", img: "/images/products/f2-300x300.jpg", price: 175000, discount: 4 },
        { id: "کاپشن-مردانه-1", title: "کاپشن مردانه 1", img: "/images/products/1_Blazers.jpg", price: 990000, discount: 8 },
        { id: "مبل-راحتی-1", title: "مبل راحتی 1", img: "/images/products/1_Sofa_Chair.jpg", price: 3200000, discount: 15 },
        { id: "دکور-خانگی-1", title: "دکور خانگی 1", img: "/images/products/2_Home_Decor.jpg", price: 50000, discount: 15 },
        { id: "گیاه-خانگی-1", title: "گیاه خانگی 1", img: "/images/products/3_Home_Garden.jpg", price: 157000, discount: 3 },
        { id: "کفش-نایک-لایت", title: "کفش نایک لایت", img: "/images/products/3_Sneakers.jpg", price: 3200000, discount: 20 },
        { id: "لباس-راحتی-زنانه", title: "لباس راحتی زنانه", img: "/images/products/4_Jumpsuits.jpg", price: 3200000, discount: 6 },
        { id: "بطری-آب-دوقلو", title: "بطری آب دوقلو", img: "/images/products/4_Kitchens.jpg", price: 174000 },
        { id: "لامپ-خانگی", title: "لامپ خانگی", img: "/images/products/4_Kitchens.jpg", price: 99000 },
        { id: "ساعت-مچی-مردانه-1", title: "ساعت مچی مردانه 1", img: "/images/products/5_Watches.jpg", price: 625000 },
        { id: "کوزه-شیشه-ایی", title: "کوزه شیشه ایی", img: "/images/products/6_Furniture.jpg", price: 255000 },
        { id: "کیف-مسافرتی", title: "کیف مسافرتی", img: "/images/products/6_Handbags.jpg", price: 368000 },
    ],
    bestSellingProducts: [
        { id: "شلوار-اسلش", title: "شلوار اسلش", img: "/images/products/f1-300x300.jpg", price: 250000, discount: 7 },
        { id: "تیشرت-1", title: "تیشرت 1", img: "/images/products/f2-300x300.jpg", price: 175000 },
        { id: "کیف-کوهنوردی", title: "کیف کوهنوردی", img: "/images/products/f4-300x300.jpg", price: 765000, discount: 10 },
        { id: "کفش-جردن", title: "کفش جردن", img: "/images/products/f11-300x300.jpg", price: 3400000, discount: 9 },
        { id: "کفش-پوتین-زنانه", title: "کفش پوتین زنانه", img: "/images/products/f12-300x300.jpg", price: 545000 },
        { id: "کفش-تابستانی-زنانه", title: "کفش تابستانی زنانه", img: "/images/products/f15-300x300.jpg", price: 332000 },
        { id: "کیف-چرم-زنانه", title: "کیف چرم زنانه", img: "/images/products/f16-300x300.jpg", price: 786000 },
        { id: "کیف-اسپرت-زنانه", title: "کیف اسپرت زنانه", img: "/images/products/f2-300x300.jpg", price: 175000, discount: 4 }
    ],
    suggestedProducts: [
        { id: "کیف-اسپرت-زنانه", title: "کیف اسپرت زنانه", img: "/images/products/f2-300x300.jpg", price: 175000, discount: 4 },
        { id: "کاپشن-مردانه-1", title: "کاپشن مردانه 1", img: "/images/products/1_Blazers.jpg", price: 990000, discount: 8 },
        { id: "مبل-راحتی-1", title: "مبل راحتی 1", img: "/images/products/1_Sofa_Chair.jpg", price: 3200000, discount: 15 },
        { id: "دکور-خانگی-1", title: "دکور خانگی 1", img: "/images/products/2_Home_Decor.jpg", price: 50000, discount: 15 },
        { id: "گیاه-خانگی-1", title: "گیاه خانگی 1", img: "/images/products/3_Home_Garden.jpg", price: 157000, discount: 3 },
        { id: "کفش-نایک-لایت", title: "کفش نایک لایت", img: "/images/products/3_Sneakers.jpg", price: 3200000, discount: 20 },
        { id: "لباس-راحتی-زنانه", title: "لباس راحتی زنانه", img: "/images/products/4_Jumpsuits.jpg", price: 3200000, discount: 6 },
        { id: "بطری-آب-دوقلو", title: "بطری آب دوقلو", img: "/images/products/4_Kitchens.jpg", price: 174000 },
        { id: "لامپ-خانگی", title: "لامپ خانگی", img: "/images/products/4_Kitchens.jpg", price: 99000 },
        { id: "ساعت-مچی-مردانه-1", title: "ساعت مچی مردانه 1", img: "/images/products/5_Watches.jpg", price: 625000 },
        { id: "کوزه-شیشه-ایی", title: "کوزه شیشه ایی", img: "/images/products/6_Furniture.jpg", price: 255000 },
        { id: "کیف-مسافرتی", title: "کیف مسافرتی", img: "/images/products/6_Handbags.jpg", price: 368000 },
    ]

}

export default products