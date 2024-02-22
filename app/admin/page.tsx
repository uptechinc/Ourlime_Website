import '@/styles/components/admin/styles.css'
import logo from '@/public/images/logo-long.png'
import Image from 'next/image'
export default function AdminPage() {
  return (
      <div>
        <header>
          <div className="logo-wrapper">
            <Image 
              src = {logo}
              alt="logo"
              priority
              />
          </div>
        </header>
      </div>
  )
}
