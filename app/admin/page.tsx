import '@/styles/components/admin/styles.css'
import Header from '@/components/admin/Header' 
import Navbar from '@/components/admin/Navbar' 
import Dashboard from '@/components/admin/Dashboard'
export default function AdminPage() {
  return (
      <div>
        <Header />

        <main>
          <Navbar />
          <Dashboard />
        </main>
      </div>
  )
}
