import React from 'react'
import { Button } from "@/components/ui/button";

export default function HomePage() {
  
  return (
  <div className="flex flex-col items-center justify-center h-screen px-2">
    <Button className="bg-yellow-500 text-black hover:bg-yellow-300 cursor-pointer">
      {/* {`${t('Welcome')}, ${t('This is a multilingual app.')}`} */} Welcome
    </Button>
  </div>
  );
}
