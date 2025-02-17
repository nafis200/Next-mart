
<!-- error solve first part-->

<!-- 2nd time -->
  Navbar e again kaj korchi
<!--  -->

first go to auth services and option chain give

and now work at navbar.

We add dropdown and work avatar.

Add avatar at navbar

repace button with avatar at navbar.

<!-- implement logout function -->


AuthServices-->index.ts e logout make kori.

We make a function at navbar

destructure user and setIsLoading from useUser()


work conditional rendering at navbar.


# withCommonLayout -----> create-shop

createShopform

Createshop ---> make from 

components--->modules-->shop--->create-shop.

<!-- Create shop form e onek function acche -->

postman theke createShop sent korte hobe.

object hisabe value get korte hobe.


create image upload component

we use reusable components

ui -----> core --> NMImageUpload

index.tsx work 

<!-- import imageUploader -->

<Input> image er kaj korchi


<!-- shown preview we create a state. -->

components--> ui ---> core ---> NMImageUploader ---> ImagePreviwer.tsx

<!--  -->


Work as fileReader

ei method er kaj holo se file ke read kore dataupload korar por link e convert korbe.

so data url e convert korte hobe..

const reader = new FileReader();	ফাইল পড়ার জন্য FileReader API তৈরি করা হচ্ছে
3️⃣	reader.readAsDataURL(file);	ফাইলটিকে Base64 Data URL এ কনভার্ট করার প্রসেস শুরু
4️⃣	reader.onloadend = () => { ... }

<!-- reusable components. -->

CreateShopForm e kaj kori. and declared components

Now sent components into index.ts or NMImageUploader.

if we apply class then we create cn.

40-5 cn work.

cn style merge kore.

imagePreview.tsx.

eijagay lak korchi.

createFormshop.ts e postman er moton data sent korbo.

new form json hisabe sent korte hobe

<!-- form and image kivabe sent korte hobe ta dekhano hoyeche -->


services ---> shop ---> index.ts e kaj korbo.

createShopform e call kori.

<!-- where he sent token from header -->

<!-- Secure Routes With Middleware -->

# important features

One route theke another route e hit korle middleware.

src----> middleware 

<!--  -->
 
 config matcher er route e gele middleware trigger hobe.

 stop kore dile pathName ta catch korbo then login korle sent kore dibo

<!--  -->

and function name must be middleware

advanced topic 

if(!userinfo){
    redirrect login
}


login Successfull hole redirrect kore patiye daw.

LOgin page e kaj ache.

  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  const router = useRouter();

  <!-- ........... -->
<!-- Add dashboard Layout -->

<!--  -->

use client er jonno path name ek ar server er jonno arek

<!--  -->

before issue solve

src---> constant after logout ridrrect login page

constants ----> index.ts

middleware er protected route gulo ke paste kore dibo.

Navbar.tsx e logout function e check korbo private route ta er under e ache kina


# dashboard layout

shadcn blocks e click korbo.

then click sidebar.

collapse to icons.

now work as shadcn instruction.


modules ---> dashboard ---> sidebar 

e kaj kori.

first app-sidebar.tsx create kori.

nav-main.tsx

nav-user.tsx.

dashboard er layout e kaj kori.


nav-user logout functionallity add kori.


Product create korar age category create korte hobe.

app ---> withDashboardLayout ---> shop ---> category

componets --> modules ---> shop --> category  ---> index.ts


dashboard er shop---> category -->page.tsx e kaj kori.


Add Reusable Data.

NOw create Api

components ---> Category ---> index.ts

ManageCategory te props akare data pass korte pass korte hobe.


type declared kori.

ui --> core --> NMTable add kori.

reusable table hoye geche just ekhon data patate hobe.

components --> modules ---> shop --> category ---> index.ts e kaj korte hobe.






