import { tags } from '../data/tasks.js'
import { ArrowRight } from 'lucide-react'

export default function TagsCard() {
  return (
    <div className="bg-[#f3f6f8] py-10 shadow-md ">
      <div className="grid grid-cols-3 gap-4">
        {tags.map((tag, index) => (
          <div 
            key={index}
            className="border border-gray-300 bg-white text-center text-sm text-gray-800 px-4 py-7 hover:bg-gray-100 cursor-pointer transition flex items-center justify-between"
          >
            {tag}
            <ArrowRight className="w-4 h-4 ml-4 text-gray-400" />
          </div>
          
        ))}
      </div>
    </div>
  );
}
