import Link from 'next/link'
import Image from 'next/image'
import CustomeButton from './CustomeButton'

const Navbar = () => {
  return (
    <header className='w-full absolute 1'>
        <nav className='max-w-[1440px] mx-auto flex justify-between 
        items-center sm:px-16 px-6 py-4'>
            <Link href='/' className='flex justify-center items-center'>
                <Image src='/public/logo.svg' alt='logo' 
                width={118}
                 height={18} 
                 className='object-contain'
                 />
            </Link>
            <CustomeButton 
            title="Sign In"
            btnType="button"
            containerStyles="text-primary-blue rounded-full
             bg-white min-w-[130px]"
            />
        </nav>
    </header>
  )
}

export default Navbar