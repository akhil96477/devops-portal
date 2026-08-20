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
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="brand">
            <span className="highlight">■</span> DevOpsPortal
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
        </div>
        
        {/* Sidebar Footer */}
        <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Documentation</span>
          <a href="#" style={{ fontSize: '0.85rem', color: 'var(--text-main)', textDecoration: 'none' }}>API Reference</a>
          <a href="#" style={{ fontSize: '0.85rem', color: 'var(--text-main)', textDecoration: 'none' }}>Terraform Modules</a>
          <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>
            v2.4.1 — Stable Build
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header" style={{ justifyContent: 'space-between' }}>
          {/* Top Header Typographic Element */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'JetBrains Mono, monospace' }}>
            <span>/</span>
            <span style={{ color: 'var(--primary-color)', fontWeight: '500' }}>aws-free-tier</span>
            <span>/</span>
            <span>us-east-1</span>
            <span style={{ padding: '0.2rem 0.5rem', background: '#f1f5f9', borderRadius: '4px', border: '1px solid var(--border-color)', fontSize: '0.75rem' }}>PRODUCTION</span>
          </div>

          <div className="user-profile">
            <span>alex.dev</span>
            <div className="avatar">AD</div>
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
