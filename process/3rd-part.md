

<!-- first work sidebr -->

smal change 

app-sidebar.tsx e collapsible = "icon" add

root layout e className e add korechi.

NMTable e chnage kori

<!-- data add kore reload dewar por reload dile new data ase ta valo na so -->

Revalidation er kaj korbo .

src---services ---> category ---> index.ts.

delete get all kaj korchi.

src--->services-->brand-->index.ts e again kaj korbo.

WithDashboardLayout ---> user ---> shop -->products ---> addProducts

e form ache ekta.

<!-- eikahne mutliple image add kora jabe -->
41.2

dynamically input add hocche. add-product --> page.tsx e .


<!-- key-feature e implement korbo dynamic field. -->

components ----> modules ---> shop ---> products ---> addProductFrom.tsx.


at first hooks form e default add korbo

useFieldArray hook use korbo come from react-hook form.

 const { append: appendFeatures, fields: featureFields } = useFieldArray({
    control: form.control,
    name: "keyFeatures",
  });


  create this method 

  const addFeatures = () => {
    appendFeatures({ value: "" });
  };

  NOw button e add kore dibo or connect kore dibo

  <div>
            <div className="flex justify-between items-center border-t border-b py-3 my-5">
              <p className="text-primary font-bold text-xl">Key Features</p>
              <Button
                onClick={addFeatures}
                variant="outline"
                className="size-10"
                type="button"
              >
                <Plus className="text-primary" />
              </Button>
            </div>

            <div className="my-5">
              {featureFields.map((featureField, index) => (
                <div key={featureField.id}>
                  <FormField
                    control={form.control}
                    name={`keyFeatures.${index}.value`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Key Feature {index + 1}</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>
          </div>


        map er maddome show kore dibo


<!-- Dynamic double field add -->

const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: "",
      category: "",
      brand: "",
      stock: "",
      weight: "",
      availableColors: [{ value: "" }],
      keyFeatures: [{ value: "" }],
      specification: [{ key: "", value: "" }],
    },
  });

Specification


<div>
            <div className="flex justify-between items-center border-t border-b py-3 my-5">
              <p className="text-primary font-bold text-xl">Specification</p>
              <Button
                onClick={addSpec}
                variant="outline"
                className="size-10"
                type="button"
              >
                <Plus className="text-primary" />
              </Button>
            </div>

            {specFields.map((specField, index) => (
              <div
                key={specField.id}
                className="grid grid-cols-1 gap-4 md:grid-cols-2 my-5"
              >
                <FormField
                  control={form.control}
                  name={`specification.${index}.key`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Feature name {index + 1}</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`specification.${index}.value`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Feature Description {index + 1}</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>


  <!-- Refine Dynamic Input Field Values -->

  available color array of object but i need array of string

   const availableColors = data.availableColors.map(
      (color: { value: string }) => color.value
    );

    const keyFeatures = data.keyFeatures.map(
      (feature: { value: string }) => feature.value
    );

    const specification: { [key: string]: string } = {};
    data.specification.forEach(
      (item: { key: string; value: string }) =>
        (specification[item.key] = item.value)
    );


  Add selectField.

  Select option from shadcn ui.

  Form fielder select field configuration kora ache.

 eita use korbo
  
  useEffect(() => {
    const fetchData = async () => {
      const [categoriesData, brandsData] = await Promise.all([
        getAllCategories(),
        getAllBrands(),
      ]);

      setCategories(categoriesData?.data);
      setBrands(brandsData?.data);
    };

    fetchData();
  }, []);


  Modified Data and Add products.


  Multiple image ke loop caliye ek ek kore sent korbo.


   for (const file of imageFiles) {
      formData.append("images", file);
    }

  services er add product e json.stringify eita na dileo hobe.


  <!-- Update product -->

  withDashboardLayout ---> user ----> shop ---> product-->updateproduct.

  then go to 

  src---->components---->modules--->shop---->product---->UpdateProductForm"


  Add-product form e ja ache updateproduct form same jinis diye dibo.

  UpdateProductForm e specification e kaj korbo.


  <!-- Landing page design -->

  withCommonLayout ----> (home)

  components--->modules--->home--->HeroSection.


  components--->modules--->home--->FeaturedProducts.

 components--->modules--->home--->Category";

 HeroSection ---> background image external image link use kore use korte hobe.

componenets ---> modules ---> home --> Category.

CategoryCard  import from .

components---->ui--->core----->CategoryCard";


components ---> modules ---> home ---> category

  {Array(12)
          .fill(categories?.[0])
          .map((category: ICategory, idx: number) => (
            <CategoryCard key={idx} category={category} />
  ))}


components ---> modules ---> home --> category