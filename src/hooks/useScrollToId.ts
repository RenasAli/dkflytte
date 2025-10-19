'use client'

import { useRouter, usePathname } from 'next/navigation';

export const useScrollToId = () => {
    const router = useRouter()
    const pathname = usePathname()

    const scrollTo = (path: string, id: string) => {
        if (pathname === `${path}`) {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        } else {
            sessionStorage.setItem('scrollToId', id)
            router.push(`${path}`)
        }
    }

    return scrollTo;
}

export const useNextRouter = ()=>{
    const router = useRouter()
    const routTo = (path: string)=>{
        router.push(`${path}`)
    }

    return routTo;
}
