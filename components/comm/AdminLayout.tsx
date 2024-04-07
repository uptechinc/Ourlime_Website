import '@/styles/components/admin/styles.css'
import Header from '@/components/admin/Header'
import Navbar from '@/components/admin/Navbar'
import Dashboard from '@/components/admin/Dashboard'
import TopNav from './TopNav'
import { ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />

      <main>
        <Navbar />
          <div className="layout">
            <TopNav />
            {children}
          </div> 
      </main>
    </div>
  )
}
