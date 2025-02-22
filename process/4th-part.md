# Navbar sticky

NMcontainer.tsx

components --> ui ---> core ---> NMcontainer

where i use

whole heroSection ke wrap korechi NMcontainer diye

components ---> modules ---> home ----> herosection--> index.ts.

What is Flash deals.

postman check Flash sale

Create flash sale.

shadcn data table checkbox.

components ---> modules --> shop --> product --> index.ts e checkbox add.

selectedId use korbo id store korar jonno.

cell er row te ami data pabo check click korle. give true false.

build in row te onek property ache ja use korte hobe.

42-2

Create Discount MOdel for Flash Sale.

components---> module --> shop ----> product --> DiscountModal.tsx.

copy modal from addProductForm.tsx.

select korle model enabled hobe or not

discount model er button e condition apply korbo.

Data combined kore modified kore backend sent korbo.

src---> services --> FlashSale --> index.ts.

flashSale e revalidate tag add kore dei.

ManageProduct --> index.ts theke id sent kore patabo Discount Model e.

Now home page e show korabo.

Home --> FlashSale add korbo.

Featuredproducts er all copy kore flashSale e paste kore dibo.

src ---> app --> WithCommonLayout (home)--> page.tsx ---> index.ts e HomePage e add kore dibo.

Add flashSale countdount.

components ---> modules --> home --> FlashSale ---> CountDown.tsx name ekta file create kori

index.ts e use korbo.

Featured Product e change korlam. map e .

Top brands e kaj korbo ekhon. ja home --> TopBrands---> index.ts e ache.

explain countDown.

Set Interval er kaj korbo.

setInterval er kaj korbo.

# Create second page.

WithCommonLAyout e products banabo.

ProductBanner use korbo.

components --> modules --> products --> banner e kaj kori.

AllProdcutPage theke title and id sent kori.

AllProductsPage e data anbo

then AllProducts e data sent korbo

src ---> components --> modules ---> products --> Allproducts kaj kori.

<!--  -->

Ai Tools utilise korbo

windows snippets screenshort

<!-- ---------------- 42.6 ---------- -->

AI use kora hoyehe.

components --> modules --> products --> filterSidebar e kaj kori.

Now create dynamic route productId

src-->app-->withCommonLayout --> product-->productid

services ---> Product ---> index.ts e kaj korbo.

ProductDetails --->components-->modules--->products--->productDetails";

shadcn tabs er kaj korbo.

Create Product Cart page.

withCommonLayout --> cart ---> page.tsx

CardProducts er kaj korbo.

components--->modules--->cart--->CartProducts.

Now use Coupon.

when we fetch data from backend if the data is 1mb more then give error

next.config.js ekta file dite hobe.

Create Table Pagination.

shadcn Pagination.

but vai use mannul pagination.

ui ---> core ---> NMTable ---> TablePagination.tsx.

src---components-->modules --> shop --> product --> index.ts

ManageProducts o pagination add kori.

TablePagiantion e {[...Array(totalPage)].map((\_, index) ei kaj korbo

shadCn variant use kora jay.

url query parameter hisabe set korte hobe.

setCurrentPage(index + 1);
router.push(`${pathname}?page=${index + 1}`);

ei kaj ta hobe.




postman e get All Product e giye meta pacchi.

Now dynamically pagination add and limit add and sent data backend.

Now we change limit.

getAllProducts 

src---> services ---> Product ---> index.ts ---> getAllproducts

page and limit dynamically change.

ManageProduct

src ---> app ---> withDashboardLayout -->user --> shop --> products --> page.tsx e pagination and filtering er kaj korbo
