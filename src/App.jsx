import React from 'react'
import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 bg-red-50 text-red-900 min-h-screen">
          <h1 className="text-2xl font-bold mb-4">שגיאה ביצירת העמוד</h1>
          <pre>{this.state.error?.message || 'Unknown error'}</pre>
          <p>אנא בדוק קונסול לאחר מכן נסה לפרוס מחדש.</p>
        </div>
      )
    }
    return this.props.children
  }
}

function App() {
  return (
    <>
      <Pages />
      <Toaster />
    </>
  )
}

export default function RootApp() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  )
} 