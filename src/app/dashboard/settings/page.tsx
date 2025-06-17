import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Save, User, Bell, Shield, Database, Palette } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your site configuration and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <Card className="p-4">
            <nav className="space-y-2">
              {[
                { name: 'Profile', icon: User, active: true },
                { name: 'Notifications', icon: Bell, active: false },
                { name: 'Security', icon: Shield, active: false },
                { name: 'Data', icon: Database, active: false },
                { name: 'Appearance', icon: Palette, active: false },
              ].map((item) => (
                <button
                  key={item.name}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    item.active
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.name}
                </button>
              ))}
            </nav>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="Drew" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Developer" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="drew@example.com" />
              </div>
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
                  Bio
                </label>
                <textarea
                  id="bio"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="Tell us about yourself..."
                />
              </div>
            </form>
          </Card>

          {/* Site Settings */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Site Configuration</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="siteTitle" className="block text-sm font-medium text-gray-700 mb-2">
                  Site Title
                </label>
                <Input id="siteTitle" placeholder="Drew Hub - Personal Blog & Portfolio" />
              </div>
              <div>
                <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700 mb-2">
                  Site Description
                </label>
                <Input id="siteDescription" placeholder="A modern blog and portfolio showcasing web development projects and insights" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="siteUrl" className="block text-sm font-medium text-gray-700 mb-2">
                    Site URL
                  </label>
                  <Input id="siteUrl" placeholder="https://drewhub.com" />
                </div>
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Email
                  </label>
                  <Input id="contactEmail" type="email" placeholder="contact@drewhub.com" />
                </div>
              </div>
            </form>
          </Card>

          {/* Social Links */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Links</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="github" className="block text-sm font-medium text-gray-700 mb-2">
                    GitHub
                  </label>
                  <Input id="github" placeholder="https://github.com/username" />
                </div>
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn
                  </label>
                  <Input id="linkedin" placeholder="https://linkedin.com/in/username" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 mb-2">
                    Twitter
                  </label>
                  <Input id="twitter" placeholder="https://twitter.com/username" />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                    Website
                  </label>
                  <Input id="website" placeholder="https://yourwebsite.com" />
                </div>
              </div>
            </form>
          </Card>

          {/* Newsletter Settings */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter Configuration</h3>
            <form className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="enableNewsletter" className="text-sm font-medium text-gray-900">Enable Newsletter</label>
                  <p className="text-sm text-gray-500">Allow users to subscribe to your newsletter</p>
                </div>
                <input 
                  type="checkbox" 
                  id="enableNewsletter"
                  defaultChecked
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="welcomeSubject" className="block text-sm font-medium text-gray-700 mb-2">
                  Welcome Email Subject
                </label>
                <Input id="welcomeSubject" placeholder="Welcome to Drew Hub Newsletter!" />
              </div>
              <div>
                <label htmlFor="senderName" className="block text-sm font-medium text-gray-700 mb-2">
                  Sender Name
                </label>
                <Input id="senderName" placeholder="Drew" />
              </div>
            </form>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
