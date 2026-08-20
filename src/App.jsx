import { useState } from 'react'
import Dashboard from './components/Dashboard'
import DeployForm from './components/DeployForm'
import ResourcesList from './components/ResourcesList'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <span className="highlight">[ ]</span> DEVOPS_PORTAL
        </div>
        
        <ul className="nav-links">
          <li className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
            Dashboard
          </li>
          <li className={`nav-item ${activeTab === 'resources' ? 'active' : ''}`} onClick={() => setActiveTab('resources')}>
            Resources
          </li>
          <li className={`nav-item ${activeTab === 'deploy' ? 'active' : ''}`} onClick={() => setActiveTab('deploy')}>
            Deploy
          </li>
          <li className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
            Settings
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <div className="user-profile">
            <span>alex_dev</span>
            <div className="avatar">A</div>
          </div>
        </header>
        
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'deploy' && <DeployForm />}
        {activeTab === 'resources' && <ResourcesList />}
        {activeTab === 'settings' && (
          <div style={{ padding: '2rem' }}>
            <h2>Settings</h2>
            <p style={{ color: 'var(--text-muted)' }}>Configuration options will appear here.</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
