import { useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { LoginSchema } from "@/schemas"
import { CardWrapper } from "@/components/auth"

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>()


  return (
    <CardWrapper 
      headerLabel="Wellcome back!"
      backButtonLabel="Don't have an account?"
      backButtonRef="/auth/register"
      showSocial 
    >
      Login form!
    </CardWrapper>
  )
}