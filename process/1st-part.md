
# create next js project

# setup shadcn

npx shadcn@latest init

Default
Neutral
Css varibales css

Use__legacy-peer-deps

NOw add button components just only check


root app.ts e kaj korbo.

Add theme into body beacuse of see figma file 

# so add it global.css

# shadcn e themes giye customise e color set kore copy kore global.css bosate hobe


@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 224 71.4% 4.1%;
    --card: 0 0% 100%;
    --card-foreground: 224 71.4% 4.1%;
    --popover: 0 0% 100%;
    --popover-foreground: 224 71.4% 4.1%;
    --primary: 262.1 83.3% 57.8%;
    --primary-foreground: 210 20% 98%;
    --secondary: 220 14.3% 95.9%;
    --secondary-foreground: 220.9 39.3% 11%;
    --muted: 220 14.3% 95.9%;
    --muted-foreground: 220 8.9% 46.1%;
    --accent: 220 14.3% 95.9%;
    --accent-foreground: 220.9 39.3% 11%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 20% 98%;
    --border: 220 13% 91%;
    --input: 220 13% 91%;
    --ring: 262.1 83.3% 57.8%;
    --radius: 0.5rem;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
  }

  .dark {
    --background: 224 71.4% 4.1%;
    --foreground: 210 20% 98%;
    --card: 224 71.4% 4.1%;
    --card-foreground: 210 20% 98%;
    --popover: 224 71.4% 4.1%;
    --popover-foreground: 210 20% 98%;
    --primary: 263.4 70% 50.4%;
    --primary-foreground: 210 20% 98%;
    --secondary: 215 27.9% 16.9%;
    --secondary-foreground: 210 20% 98%;
    --muted: 215 27.9% 16.9%;
    --muted-foreground: 217.9 10.6% 64.9%;
    --accent: 215 27.9% 16.9%;
    --accent-foreground: 210 20% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 20% 98%;
    --border: 215 27.9% 16.9%;
    --input: 215 27.9% 16.9%;
    --ring: 263.4 70% 50.4%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}


# Customise css add by tanmoy vai.

Layout e er kaj korbo and route group create korbo

# Navbar and footer er jonno common layout withCommonLayout

# Dashboard Layout commonGroup

Root page delete and go to WithCommon Layout.

Here HomePages 

Components----> shared --> Navbar and Footer

# commonLayout e Navbar and footer wrap kori

app ---> assets ---> svg--->Logo.tsx

navbar and footer e e import logo instead of next mart.

# WithDashboardLayout e admin and user name e duita folder create kori.

# withCommon Layout e about ,card, products create kori

# app directory te register and login.

# create src-->types

src--->services-->AuthServices e

components --> modules

src--->providers

src---Context e

env file create kore kaj kori.

NEXT_PUBLIC use korte hobe env file for next js.

#  Authentication er kaj korbo.
Register er kaj korbo

RegisterForm create.

# first docs porbo


"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

form message lagbe for shown error message


shadcn form by default react hook form use kore

components -->modules --> auth --> register --> registerForm.tsx

install form components

shadcn e form er anatomy niye asi.

Form import from componets not react-hooks form.

Form components er sathe react hook form er connection korte hobe.

form components power dite controller e split korte hobe form.controll.

Input e kichu add korte hobe "" or input value na hole error dibe

# zod Validations

registerValidation.ts  behid the seen it install allthings.

useForm({
  resolver:zodValidations
})

<formMessage> eita dite hobe.

# password and confirmPassword same kina check it


formWatch er method automatic peye jabo.

jeita get korte chai ta automatic peye jabo


Server action er kaj kori.

src ---> services e ekta server create kori.


services e register er kaj kori.


Add sonner 

rootlayout file sonner toaster add kori.

isSubmitting e loading state thakbe.

<!-- rules add kore dibo -->

eslint.config.mjs e add kore dibo.


# login er kaj 

Recapcha use into login form.


brower er cookie te set korbo accesstoken work it login services e.


<!-- very very important -->

# cookies e server e use korte parbo not client website e 


getCurrentUser must be call from server components



# context api create

src---> context ---> userContext

<!-- 2nd time  write -->

 
const UserContext = createContext(undefined);

import this

create wrapper components

 <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>

pass the value along to object

wrap provider userProvider not useContext

not wrap provider root

now create useUser()

useUser er all information peye jabo


now add it home



<!--  -->

Create Context and Provider

UserContext slowly kaj korte hobe.

types e defined korbo.

Providers e kaj korbo then wrap kore dibo.


# UserContext e useUser use kori



<!-- ............Recapcha............ -->

recapcha docs v3 version

visit recapcha website

label e name dibo

and challenge (v2) set kore dibo 

add domain and only set localhost

Now recaptcha ut login form

need a site key

npm recapchta te dewa ache.

Go to setting where you set recaptcha 

and Security preference

work at verification.

<!-- google recaptha for verification -->

https://www.google.com/recaptcha/api/siteverify eikahne ekta post request sent kori.

services--> AuthService---> index e ekta api create kori



