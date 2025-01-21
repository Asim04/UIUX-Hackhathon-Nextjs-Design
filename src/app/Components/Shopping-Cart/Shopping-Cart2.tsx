'use client'

import { useState } from 'react'
import { Minus, Plus, Star, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  rating: number
  price: number
  image: string
}

const initialProducts: Product[] = [
  { id: 1, name: 'Burger', rating: 3, price: 55.00, image: '/placeholder.svg?height=64&width=64' },
  { id: 2, name: 'Fresh Lime', rating: 3, price: 25.95, image: '/placeholder.svg?height=64&width=64' },
  { id: 3, name: 'Pizza', rating: 4, price: 15.95, image: '/placeholder.svg?height=64&width=64' },
  { id: 4, name: 'Chocolate Muffin', rating: 4, price: 45.95, image: '/placeholder.svg?height=64&width=64' },
  { id: 5, name: 'Cheese Butter', rating: 3, price: 15.95, image: '/placeholder.svg?height=64&width=64' }
]

export default function ShoppingCart2() {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    Object.fromEntries(initialProducts.map(p => [p.id, 1]))
  )
  const [couponCode, setCouponCode] = useState('')

  const updateQuantity = (id: number, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }))
  }

  const removeProduct = (id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id))
    setQuantities(prev => {
      const { [id]: _, ...rest } = prev
      return rest
    })
  }

  const subtotal = products.reduce((sum, product) => 
    sum + product.price * (quantities[product.id] || 1), 0
  )
  const shippingCharge = 50.00
  const total = subtotal + shippingCharge

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 px-4 font-medium">Product</th>
              <th className="text-left py-4 px-4 font-medium">Price</th>
              <th className="text-left py-4 px-4 font-medium">Quantity</th>
              <th className="text-left py-4 px-4 font-medium">Total</th>
              <th className="text-left py-4 px-4 font-medium">Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="border-b">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{product.name}</h3>
                      <div className="flex gap-0.5 mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < product.rating
                                ? 'fill-primary text-primary'
                                : 'fill-muted text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  ${product.price.toFixed(2)}
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(product.id, -1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">
                      {quantities[product.id] || 1}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(product.id, 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
                <td className="py-4 px-4">
                  ${(product.price * (quantities[product.id] || 1)).toFixed(2)}
                </td>
                <td className="py-4 px-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeProduct(product.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-medium mb-4">Coupon Code</h3>
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget pellentesque liberavi nunc
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Enter here code"
                value={couponCode}
                onChange={e => setCouponCode(e.target.value)}
              />
              <Button variant="default" className="bg-orange-500 hover:bg-orange-600">
                Apply
              </Button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Total Bill</h3>
          <div className="bg-muted/50 p-4 rounded-lg">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cart Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping Charge</span>
                <span>${shippingCharge.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-medium">
                  <span>Total Amount</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

