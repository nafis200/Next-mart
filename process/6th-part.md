1. install redux-persist.

2. store.ts

3. persist it

4. store er kaj korbo storeProvider e import persist

serializable object

dirrect text e convert e korbo ebong information e loss hobe na.

44-1 e ekta error 6.40 min e redux non-serializable.

5. for conflict we solve this.

6. again go to store we config the file.

7. root layout e providers e change korbo.

8. redux ---> storage.ts name ekta file create kori

9. store.ts --> store import kori

<!--.............. 44.2................... -->

ui ---> loading name ekta components add kori and and spinner.css app er root e hobe.

use it storeProvider persistGate

10. coupon make using postman.

11. cuopon add mir vai behind the site.
12. components --> modules --> cart.

13. CartSlice e giye type gulo correct kori.
14. Services --> cart e api add kori

<!-- All work at cartSLice -->

first work shop Selector.

<!-- optional skipppeddddd -->

<!-- create Async Thunk -->

<!-- optional eeeeeee -->

# generate New Access Token from RefreshToken

1. first solve issue

components ---> modules ---> auth ---> login --> LoginForm useUSer.

setLoading

same register form.

Next js e cookie automatic set hoy na for server function er karone.

accessToken and refreshToken both are store into cookie te.

services ---> AuthServices --> index.ts

refreshtoken.

2. retrive accessToken from refreshToken.

now make a function AuthServices ---> index.ts

3. src --> lib ---> VerifyToken.ts e kaj kori.

4. we use it for brand

src--->services-->Brand-->index.ts.

<!-- filtering option sidebar which is create by ai -->

src --> components --> module --> products --> filtersidebar --> index.ts.

    <Slider
          max={500000}
          step={1}
          onValueChange={(value) => {
            setPrice(value);
            handleSearchQuery("price", value[0]);
          }}
          className="w-full"
        />
        <p className="text-sm mt-2">Selected Price: ${price[0]}</p>
      </div>


      eita set korte hobe.

       const router = useRouter();

const pathname = usePathname();
const searchParams = useSearchParams();

const handleSearchQuery = (query: string, value: string | number) => {
const params = new URLSearchParams(searchParams.toString());

    params.set(query, value.toString());

    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });

};

  <!-- first it is do -->

const router = useRouter();

const handleSearchQuerys = (query: string, value: string | number) => {

    router.push(`${query}?${value.toString()}`, {
      scroll: false,
    });

};

<!-- remove query when we click clear button -->

 {searchParams.toString().length > 0 && (
          <Button
            onClick={() => {
              router.push(`${pathname}`, {
                scroll: false,
              });
            }}
            size="sm"
            className="bg-black hover:bg-gray-700 ml-5"
          >
            Clear Filters
          </Button>
        )}


components ---> app ---> withCommonLayout --> products --> page.tsx

src ---> services --> product ---> index.ts



backend e getAllprodudct e jeivabe diyeche sei vabe sent korte hobe.