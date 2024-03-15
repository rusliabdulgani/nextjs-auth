import { CardWrapper } from "@/components/auth"

export const LoginForm = () => {
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