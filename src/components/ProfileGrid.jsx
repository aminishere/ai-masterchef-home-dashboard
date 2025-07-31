import { profiles } from '../data/tasks.js'
export default function ProfileGrid() {
   
  
    return (
      <div className="bg-[#f3f6f8] p-4  shadow-md ">
        <h2 className="text-lg font-semibold mb-4 text-left">Intern profiles</h2>
        <div className="grid grid-cols-2 gap-4">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 p-4  shadow-sm hover:shadow-md transition"
            >
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-16 h-16 rounded-full mb-2"
              />
              <p className="font-medium">{profile.name}</p>
              <p className="text-sm text-gray-500">{profile.role}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  