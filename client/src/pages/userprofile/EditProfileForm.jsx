import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button/Button';
import { updateProfile } from '../../actions/users'

const EditProfileForm = ({ currentUser , setSwitch }) => {
    const [name, setName] = useState(currentUser?.result?.name)
    const [about, setAbout] = useState(currentUser?.result?.about)
    const [tags, setTags] = useState('');
    const dispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log({name, about, tags})
            if(tags.length === 0){
                dispatch(updateProfile(currentUser?.result?._id, {name, about, tags: currentUser?.result?.tags }))
            }else{
                dispatch(updateProfile(currentUser?.result?._id, { name, about, tags }))
            }
        setSwitch(false)
    }

  return (
    <>
                        <h1 className='edit-profile-title'>
                            Edit Your Profile
                        </h1>
                        <h2 className='edit-profile-title-2'>
                            Public information
                        </h2>
                        <form className='edit-profile-form' onSubmit={handleSubmit}>
                            <label htmlFor="name">
                                <h3>Display name</h3>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                            </label>
                            <label htmlFor="about">
                                <h3>About me</h3>
                                <textarea name="" id="about" value={about} cols="30" rows="10" onChange={(e) => setAbout(e.target.value)}></textarea>
                            </label>
                            <label htmlFor="tags">
                                <h3>Watched tags</h3>
                                <p>Add tags separated by 1 space</p>
                                <input type="text" id="tags" onChange={(e) => setTags(e.target.value.split(' '))}/>
                            </label><br />
                            {/* <input type="submit" value="Save profile"/> */}
                            {/* <button type="button" onClick={() => setSwitch(false)}>cancel</button> */}
                            <Button type='submit' px='14px' py='10px' color='white' backgroundColor='#0a95ff' hoverBg='#0074cc'>
                                Save profile
                            </Button>
                            <Button type='button' onClick={() => setSwitch(false)} px='14px' py='10px' color='#0a95ff' backgroundColor='transparent' hoverBg='transparent'>
                                Cancel
                            </Button>
                        </form>
                    </>
  )
}

export default EditProfileForm
