const productList = [
    {
        id: "1",
        title: "HERE&NOW : Men Black Printed Round Neck T-shirt",
        price: 749,
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4318138/2018/5/4/11525433792765-HERENOW-Men-Black-Printed-Round-Neck-T-shirt-2881525433792598-1.jpg",
        rating: 4,
        amount: 1
    },
    {
        id: "2",
        title: "HERE&NOW : Women Teal & Green Printed A-Line Kurta",
        price: 1199,
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2499809/2018/3/16/11521194156814-HERENOW-Women-Teal--Green-Printed-A-Line-Kurta-6741521194156739-1.jpg",
        rating: 5,
        amount: 1
    },
    {
        id: "3",
        title: "Cherry Crumble : Girls Red Checked Fit and Flare Dress",
        price: 899,
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9818067/2019/5/27/d9b95ff9-3f44-48f9-a9be-f336a0f558121558947092013-Cherry-Crumble-Ethiopian-Dress-4461558947091103-1.jpg",
        rating: 5,
        amount: 1
    },
    {
        id: "4",
        title: "Puma : Unisex Black Printed HH Hoody Sweatshirt",
        price: 2599,
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10616474/2019/10/1/150f76d9-5eab-4f0d-b20a-ab7498ae86111569920358365-Puma-Unisex-Sweatshirts-1501569920357160-3.jpg",
        rating: 4,
        amount: 1
    },
    {
        id: "5",
        title: "20Dresses : Women Teal Green & Off-White Floral Print Wrap Dress",
        price: 1525,
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11844012/2020/7/14/79647e83-c176-41fe-930b-94737f92abbe1594697674282-20Dresses-Women-Teal-Green--Off-White-Floral-Print-Wrap-Dres-2.jpg",
        rating: 3,
        amount: 1
    },
    {
        id: "6",
        title: "United Colors of Benetton : Men Navy Blue Printed Round Neck T-shirt",
        price: 999,
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11319426/2020/2/3/37ae21a5-ed55-4536-9576-4a0f1ebd09891580715779746-United-Colors-of-Benetton-Men-Navy-Blue-Solid-Round-Neck-T-s-1.jpg",
        rating: 5,
        amount: 1
    },
    {
        id: "7",
        title: "MABISH by Sonal Jain : Women Pink Blouson Dress",
        price: 1899,
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/8/26/62d89579-0510-4d0d-8fe4-0a27f438c39f1566812670563-1.jpg",
        rating: 3,
        amount: 1
    },
    {
        id: "8",
        title: "United Colors of Benetton : Women White & Blue Printed Round Neck T-shirt",
        price: 779,
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11516430/2020/2/26/1daba057-63c2-4c1e-83dc-263e2ae1a1cc1582702104001-United-Colors-of-Benetton-Women-White-Printed-Round-Neck-T-s-1.jpg",
        rating: 4,
        amount: 1
    },
    {
        id: "9",
        title: "Nike : Boys White Soccer Ball Print Round Neck T-shirt",
        price: 1295,
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12376220/2020/9/8/00cca2b0-c1eb-40dc-9c73-e71a47816eab1599555690013NikeJerseyLogoT-Shirt1.jpg",
        rating: 3,
        amount: 1
    },
    {
        id: "10",
        title: "Global Republic : Women White Self Design Waterfall Shrug",
        price: 1599,
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/9/4/e44f5a4f-f222-4da3-8b1e-8d7253bccf9e1599173647003-1.jpg",
        rating: 4,
        amount: 1
    },
    {
        id: "11",
        title: "House of Pataudi : Men Grey Embroidered Straight Kurta with Sequinned Detail",
        price: 859,
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11406852/2020/8/26/3aecce03-a2dd-4e6c-aae0-0fc4fd368a0f1598429272064-House-of-Pataudi-Men-Grey-Embroidered-Straight-Kurta-with-Se-1.jpg",
        rating: 4,
        amount: 1
    },
    {
        id: "12",
        title: "DressBerry : Women Blue Skinny Fit Mid-Rise Clean Look Stretchable Ankle Length Jeans",
        price: 1699,
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10158723/2019/11/13/3ae1d796-efb2-45bd-afd1-4959f2973a5d1573622052012-DressBerry-Women-Jeans-6751573622047302-2.jpg",
        rating: 5,
        amount: 1
    },
    {
        id: "13",
        title: "WROGN : Men Blue Slim Fit Mid-Rise Clean Look Stretchable Jeans",
        price: 2059,
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11359238/2020/9/7/8a4d4a40-b7af-4bff-8ccf-731918729f311599455039532-WROGN-Men-Blue-Regular-Fit-Mid-Rise-Clean-Look-Jeans-8871599-1.jpg",
        rating: 3,
        amount: 1
    },
    {
        id: "14",
        title: "Bitiya by Bhama : Black & Gold-Coloured Block Printed Ready to Wear Lehenga with Blouse",
        price: 855,
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/12/10/3e25a8ca-d799-46db-9e9f-4a0f779bc3c01575927724208-1.jpg",
        rating: 4,
        amount: 1
    },
    {
        id: "15",
        title: "SASSAFRAS : Navy Blue Maxi Skirt with Suspenders",
        price: 1645,
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5649853/2018/5/10/f3093a87-87ad-4c9e-8088-d156ddb2d7da1525955017843-SASSAFRAS-Navy-Dungaree-Maxi-Skirt-6191525955017680-1.jpg",
        rating: 4,
        amount: 1
    },
    {
        id: "16",
        title: "House of Pataudi : Men Navy Blue Embroidered Nehru Jacket",
        price: 1245,
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11407152/2020/7/28/ea9673f3-150e-43f7-ad26-7b795d27bad51595915596969-House-of-Pataudi-Men-Navy-Blue-Embroidered-Nehru-Jacket-3631-1.jpg",
        rating: 3,
        amount: 1
    },
    {
        id: "17",
        title: "Belle Fille : Women Multicoloured Printed Shorts",
        price: 589,
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/images/style/properties/Belle-Fille-Women-Multicoloured-Printed-Shorts_d66a4457fbca09465317ab53601fb137_images.jpg",
        rating: 3,
        amount: 1
    },
    {
        id: "18",
        title:"ONN : Men Pack of 2 Navy Printed Boxers ONN_ITALIA_NP969_PR2_PR5",
        price:499,
        image:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1813968/2017/3/20/11489999177676-ONN-Men-Boxers-6291489999177477-2.jpg",
        rating: 2,
        amount: 1
    },
    {
        id: "19",
        title: "Saree mall : Yellow Embellished Saree",
        price: 1559,
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7999519/2018/12/7/4d48bfc3-c2b5-4050-9916-82049c841dd81544184411266-Saree-mall-Women-Sarees-2141544184409744-1.jpg",
        rating: 4,
        amount: 1
    }
]

export default productList