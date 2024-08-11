import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {TopBar, ProfileCard, FriendsCard,Profile, Loading, PostCard} from '../components';


const EditProfile = () => {

    const {id} = useParams();
    const { user } = useSelector((state) => state.user);
    //const { posts } = useSelector((state) => state.posts);
    const  dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState(user);
    const [ loading, setloading] = useState(false);
    
    const handleDelete = () => {};
    const handleLikePost = () => {};

  return (
  <>
   <div className='home w-full px-0 lg:px-10 pb-20 2x1:px-40 bg-bg-Color
    lg:rounded-lg h-screen overflow-hidden'>
    <TopBar />
        
    <div className='w-full flex gap-2 lg:gap-4 pt-5 pb-10 h-full'>
        {/* LEFT */}
    <div className='hidden w-1/3 lg:w-1/4 h-full md:flex-col gap-6
      overflow-y-auto'>
        <ProfileCard user={userInfo} />

       <div className='block lg:hidden'>
         <FriendsCard friend={userInfo?.friend}/>
        </div>
      </div>

      {/* CENTER */}
      <div className='flex-1 h-full px-4 flex flex-col gap-6
      overflow-y-auto rounded-lg'>
        {loading? ( <Loading />
        ): posts?.length > 0 ? ( 
            posts?.map((post) => (
            <PostCard
            post={post}
            key={post?._id}
            user={user}
            deletePost={handleDelete} 
            likePost={handleLikePost}
            />
            ))
         ): (    
     <div className='flex w-full h-full items-center justify-center'> 
    <p className='text-lg text-ascent-2'>No Post Available</p>
</div>
 )}
</div>


      {/* RIGHT */}
      <div className="hidden w-1/4 h-full lg:flex flex-col gap-8
      overflow-y-auto">
          <FriendsCard friend={userInfo?.friend}/>
      </div>
      </div>
   </div>
  </>
  )
};

export default EditProfile;