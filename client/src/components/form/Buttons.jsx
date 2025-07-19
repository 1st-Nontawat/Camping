import React from 'react'
import { Button } from "@/components/ui/button";
import { RotateCw } from 'lucide-react';

const Buttons = ({ text, isPending, type }) => {
  return (
    <Button type={type} className="capitalize bg-black text-white hover:bg-gray-800"  disabled={isPending} >
      {
        isPending 
            ? <RotateCw className="animate-spin" />
            : <p>{text}</p>
      }
    </Button>
  )
}

export default Buttons