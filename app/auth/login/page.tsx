"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import logo from '@/assets/image/pin.png'
import Image from "next/image"

const formSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long' })
        .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
        .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
        .regex(/[0-9]/, { message: 'Password must contain at least one number' })
        .regex(/[@$!%*?&#]/, { message: 'Password must contain at least one special character' }),
    confirmPassword: z.string()
})

export default function Login () {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className="w-full h-full p-4">
            <div className="w-full h-[110px] mb-5">
                <div className="h-full w-full flex justify-center items-center">
                    <div className="h-[90px] w-[90px] rounded-full bg-white overflow-hidden">
                        <Image src={logo} alt="LoanLink" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-muted-foreground">Email</FormLabel>
                                <FormControl>
                                    <Input className="bg-transparent border-slate-500/40 text-muted-foreground" placeholder="example@loanlink.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-muted-foreground">Password</FormLabel>
                                <FormControl>
                                    <Input className="bg-transparent border-slate-500/40 text-muted-foreground" placeholder="***********" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="mt-5 py-4 flex flex-col gap-3">
                        <Button size='lg' className="bg-orange-600 hover:bg-orange-700" type="submit">Login</Button>
                        <Link href='/auth/register' className="text-muted-foreground text-[10px]">{"Don't Have An Account ? "} <span className="text-orange-500 hover:placeholder-opacity-75">Sign Up Instead</span></Link>
                    </div>
                </form>
            </Form>
        </div>
    )
}