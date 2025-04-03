"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer"
import Navbar from "@/components/navbar"
import Menu from "./main"

export default function ProfilePage() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      alert("Iltimos, avval tizimga kiring!")
      router.push("/")
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    alert("Tizimdan chiqdingiz.")
    router.push("/")
    window.location.reload()
  }

  const handleDelete = () => {
    const confirmDelete = confirm("Aka, profilni o‘chirishga aminmisiz?")
    if (confirmDelete) {
      localStorage.removeItem("user")
      alert("Profilingiz o‘chirildi.")
      router.push("/")
      window.location.reload()
    }
  }

  if (!user) return null

  return (

    <>
      <Navbar />

      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Surname:</strong> {user.surname}</p>
        <p><strong>Email:</strong> {user.email}</p>

        <div className="mt-6 flex gap-4">
          <Button onClick={handleLogout}>Logout</Button>
          <Button variant="destructive" onClick={handleDelete}>Delete Account</Button>
        </div>
      </div>

      <Menu />




      <Footer />

    </>
  )
}

