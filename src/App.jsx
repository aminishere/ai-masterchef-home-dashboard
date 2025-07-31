
import './App.css'
import  React from 'react'
import PendingTasks from './components/PendingTasks'
import RecentUpdates from './components/RecentUpdates'
import TagsCard from './components/TagsCard'
import ProfileGrid from './components/ProfileGrid'
import InternList from './components/InternList'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import MyCalendar from './components/Calendar'

function App() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1  p-4">
          <Topbar />
          <div className="grid grid-cols-[1fr_2fr] gap-4">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              <div className="flex-1">
                <MyCalendar />
              </div>
              <div className="flex-1">
                <InternList />
              </div>
            </div>
            {/* Right Column */}
            <div className="flex flex-col gap-4">
              <div className="flex-1">
                <PendingTasks />
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4">
                  {/* Column 2 */}
                  <div className="flex flex-col gap-4">
                    <div className="flex-2">
                      <RecentUpdates />
                    </div>
                    <div className="flex-1">
                      <TagsCard />
                    </div>
                  </div>
                  {/* Column 3 */}
                  <div className="flex flex-col gap-4">
                    <ProfileGrid />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default App
