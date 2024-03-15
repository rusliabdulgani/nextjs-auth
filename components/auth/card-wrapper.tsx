'use client'

import { 
  Card, 
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { Header, Social } from "@/components/auth"

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonRef: string;
  showSocial?: boolean
}
export const CardWrapper = (
  {
    children, 
    headerLabel, 
    backButtonLabel, 
    backButtonRef, 
    showSocial
  } : CardWrapperProps) => {

    return (
      <Card className="w-[400px] shadow-md">
        <CardHeader>
          <Header label={headerLabel} />
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
        {
          showSocial ?
          <CardFooter>
            <Social />
          </CardFooter>
          : null
        }
      </Card>
    )
}