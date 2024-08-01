import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){


return (
    <section className='App'>   
     <TwitterFollowCard isFollowing userName="midudev">
      Federico Sanchez  
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing userName="pepe">
      Jose  
      </TwitterFollowCard>

     <TwitterFollowCard isFollowing={false} userName="elon">
      Angel Sanchez  
      </TwitterFollowCard>
    </section>
)
}