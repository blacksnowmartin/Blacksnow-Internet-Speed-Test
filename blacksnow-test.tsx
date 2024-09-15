'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Download, Upload, Gauge } from "lucide-react"

export default function Component() {
  const [isRunning, setIsRunning] = useState(false)
  const [progress, setProgress] = useState(0)
  const [downloadSpeed, setDownloadSpeed] = useState(0)
  const [uploadSpeed, setUploadSpeed] = useState(0)
  const [ping, setPing] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            setIsRunning(false)
            clearInterval(interval)
            return 100
          }
          return prevProgress + 1
        })
        setDownloadSpeed(Math.random() * 100)
        setUploadSpeed(Math.random() * 50)
        setPing(Math.random() * 100)
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const handleStartTest = () => {
    setIsRunning(true)
    setProgress(0)
    setDownloadSpeed(0)
    setUploadSpeed(0)
    setPing(0)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Blacksnow Test</h1>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex flex-col items-center justify-center space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Internet Speed Test</h2>
                <p className="text-gray-600 dark:text-gray-400">Click the button below to start the test</p>
              </div>
              <Button 
                onClick={handleStartTest} 
                disabled={isRunning}
                className="w-40"
              >
                {isRunning ? 'Testing...' : 'Start Test'}
              </Button>
              <Progress value={progress} className="w-64" />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <Download className="mx-auto h-8 w-8 text-blue-500" />
                  <p className="mt-1 font-semibold">{downloadSpeed.toFixed(2)} Mbps</p>
                  <p className="text-sm text-gray-500">Download</p>
                </div>
                <div>
                  <Upload className="mx-auto h-8 w-8 text-green-500" />
                  <p className="mt-1 font-semibold">{uploadSpeed.toFixed(2)} Mbps</p>
                  <p className="text-sm text-gray-500">Upload</p>
                </div>
                <div>
                  <Gauge className="mx-auto h-8 w-8 text-red-500" />
                  <p className="mt-1 font-semibold">{ping.toFixed(0)} ms</p>
                  <p className="text-sm text-gray-500">Ping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Acrossnow &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
